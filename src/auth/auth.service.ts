import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from "bcrypt";
import { Response } from "express";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Repository } from "typeorm";
import { Logger } from "winston";
import {
  LoginDTO,
  LoginResponse,
  LogoutDTO,
  LogoutResponse,
  RefreshTokenResponse,
  RegisterDTO,
  RegisterResponse,
  UpdateDTO,
} from "../model/auth.model";
import { UserEntity } from "../user/user.entity";
import { IAuthService } from "./interface/auth.service.interface";
import { AuthRepositorySQL } from "./repository_query/auth.repository";
import { TokenService } from "./services/token.service";

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly authRepository: Repository<UserEntity>,
    private readonly repositoryQuery: AuthRepositorySQL,
    @Inject(WINSTON_MODULE_PROVIDER)
    private logger: Logger,
    private readonly jwtService: JwtService,
    private readonly tokenService: TokenService,
  ) {}

  async create(request: RegisterDTO): Promise<RegisterResponse> {
    this.logger.info(`AUTH_SERVICE.create: ${JSON.stringify(request)}`);

    const userRegistered = await this.authRepository.findOne({
      where: { email: request.email },
    });

    if (userRegistered) {
      throw new HttpException("email or password is invalid", 400);
    }

    const hashPassword = await this.tokenService.hash(request.password);
    const createdAt = new Date();
    await this.authRepository.query(this.repositoryQuery.insertUser(), [
      request.email,
      request.username,
      hashPassword,
      createdAt,
    ]);
    const data = await this.authRepository.findOne({
      where: { email: request.email },
    });

    return {
      data: {
        username: data.username,
        email: data.email,
        role: data.role,
        createdAt: data.createdAt,
      },
      statusCode: HttpStatus.CREATED,
    };
  }

  async login(request: LoginDTO, res: Response): Promise<LoginResponse> {
    this.logger.info(`AUTH_SERVICE.login: ${JSON.stringify(request)}`);
    const data = await this.authRepository.findOne({
      where: { email: request.email },
    });
    if (!data) {
      throw new HttpException("Email or password is invalid", 400);
    }

    const match = await bcrypt.compare(request.password, data.password);
    if (!match) {
      throw new UnauthorizedException("wrong password");
    }

    const payload = { sub: data.id, email: data.email };
    const token = await this.tokenService.UpdateToken(payload, res);
    if (!token.refresh_token) {
      throw new HttpException("Token Is not generated", 400);
    }
    await this.tokenService.updateRtHashDatabase(
      payload.sub,
      token.refresh_token,
      token.exp,
    );

    return {
      data: {
        refresh_token: token.refresh_token,
        access_token: token.access_token,
        expiresIn: token.exp,
      },
      statusCode: HttpStatus.OK,
    };
  }

  async refresh(token: string, res: Response): Promise<RefreshTokenResponse> {
    const newToken = await this.tokenService.refresh(token, res);
    return newToken;
  }

  async verify(cookie: string): Promise<{ id: number }> {
    try {
      const data = await this.jwtService.verifyAsync<{ id: number }>(cookie);
      if (!data) {
        throw new HttpException("Unauthorized User", 401);
      }
      return data;
    } catch (err: unknown) {
      throw new UnauthorizedException(
        (err as Error).message || "unknown message",
      );
    }
  }

  async resetPassword(req: UpdateDTO): Promise<void> {
    const data = await this.authRepository.findOne({
      where: { email: req.email },
    });
    if (!data) {
      throw new HttpException("Account is missing", 404);
    }
    const hashPassword = await this.tokenService.hash(req.password);
    await this.authRepository.query(
      "UPDATE users SET password = ? WHERE email = ?",
      [hashPassword, req.email],
    );
  }

  // logout
  async logout(logoutDTO: LogoutDTO, res: Response): Promise<LogoutResponse> {
    const data = await this.authRepository.findOne({
      where: { email: logoutDTO.email },
    });
    if (!data) {
      throw new HttpException("Account is missing", 404);
    }
    const token = "";
    await this.authRepository.query(
      "UPDATE users SET hashedRefreshToken = ? WHERE email = ?",
      [token, logoutDTO.email],
    );
    this.tokenService.deleteCookieToken(res);
    return {
      data: {
        message: "Logout Suuccesfully",
      },
      statusCode: HttpStatus.OK,
    };
  }

  // validate Guard --> logic function
  async validateUser(email: string, pass: string) {
    const user = await this.authRepository.findOne({ where: { email } });
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    throw new HttpException(
      "AUTH_SERVICE.validateUser: Unauthorized Exception",
      400,
    );
  }

  async getUserByEmail(email: string) {
    const user = await this.authRepository.findOne({
      where: { email },
    });

    return user;
  }

  async checkRole(email: string) {
    const data = await this.authRepository.findOne({ where: { email } });
    if (data.role !== "admin") {
      throw new HttpException("Forbidden resources, Role must be Admin", 403);
    }
    return data;
  }
  // =============== VALIDATE FUNCTION =====================
}
