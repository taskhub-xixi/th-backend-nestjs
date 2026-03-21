import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import type { Repository } from "typeorm";
import { Logger } from "winston";
import {
  GetUserResponse,
  ListQueryRequest,
  UpdateUserRequest,
  UpdateUserResponse,
  UserResponse,
} from "../model/user.model";
import { UserEntity } from "./user.entity";
import { IUserService } from "./interfaces/user.service.interface";

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @Inject(WINSTON_MODULE_PROVIDER)
    private logger: Logger,
  ) {}

  async changeUsername(
    request: UpdateUserRequest,
  ): Promise<UpdateUserResponse> {
    this.logger.debug(`UserService.changeUsername(${JSON.stringify(request)})`);

    const isExist = await this.userRepository.findOne({
      where: { email: request.email },
    });

    if (!isExist) {
      throw new HttpException("User not found", 404);
    }

    await this.userRepository.query(
      "UPDATE users SET username = ? WHERE id = ? ",
      [request.username, isExist.id],
    );

    return {
      data: {
        id: isExist.id,
        username: isExist.username,
        email: isExist.email,
      },
    };
  }

  async changeEmail(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    this.logger.debug(`UserService.changeEmail(${JSON.stringify(request)})`);
    const isExist = await this.userRepository.findOne({
      where: { email: request.email },
    });

    if (!isExist) {
      throw new HttpException("User not found", 404);
    }

    await this.userRepository.query(
      "UPDATE users SET email = ? WHERE id = ? ",
      [request.email, isExist.id],
    );

    return {
      data: {
        id: isExist.id,
        username: isExist.username,
        email: isExist.email,
      },
    };
  }

  async getUserById(id: number): Promise<GetUserResponse> {
    this.logger.debug(`UserService.getUserById(${JSON.stringify(id)})`);
    const isExist = await this.userRepository.findOne({ where: { id: id } });
    if (!isExist) {
      throw new HttpException("Data not found", 404);
    }
    await this.userRepository.query(
      "SELECT email, username FROM users where id = ?",
      [id],
    );
    return {
      data: {
        id: isExist.id,
        username: isExist.username,
        email: isExist.email,
      },
    };
  }

  async getAllUser(req: ListQueryRequest) {
    this.logger.debug(`UserService.getAllUser ${JSON.stringify(req)})`);
    const result = await this.userRepository.find({
      select: {
        id: true,
        email: true,
        username: true,
        role: true,
        createdAt: true,
      },
      order: { email: req.order === "DESC" ? "DESC" : "ASC" },
      skip: req.page,
      take: req.limit,
    });
    const limit = req.limit;
    const total = await this.userRepository.count();
    const pages = total % limit;

    return {
      data: result,
      pagination: {
        page: Number(req.page),
        limit: Number(req.limit),
        total: total,
        totalPages: pages,
      },
      statusCode: HttpStatus.OK,
    };
  }

  async me(email: string): Promise<UserResponse> {
    const data = await this.userRepository.findOne({
      where: { email: email },
    });

    return {
      data: {
        id: data.id,
        username: data.username,
        email: data.email,
        role: data.role,
        createdAt: data.createdAt,
      },
      statusCode: HttpStatus.OK,
    };
  }
}
