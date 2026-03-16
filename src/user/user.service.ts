import {
  BadRequestException,
  HttpException,
  Inject,
  Injectable,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import type { Repository } from "typeorm";
import { Logger } from "winston";
import { UpdateUserRequest } from "../model/user.model";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @Inject(WINSTON_MODULE_PROVIDER)
    private logger: Logger,
  ) {}

  // change username
  async changeUsername(request: UpdateUserRequest): Promise<UserEntity> {
    try {
      this.logger.debug(`UserService.update(${JSON.stringify(request)})`);
      if (
        !(await this.userRepository.findOne({
          where: { email: request.email },
        }))
      ) {
        throw new HttpException("this email did not exits", 404);
      }
      return await this.userRepository.query(
        "UPDATE users SET username = ? WHERE email = ? ",
        [request.username, request.email],
      );
    } catch (err) {
      throw new BadRequestException(err.message || "unknown error");
    }
  }

  // change email
  async changeEmail(email: string, changeEmail: string): Promise<UserEntity> {
    try {
      if (!(await this.userRepository.findOne({ where: { email } }))) {
        throw new BadRequestException("this email did not exist");
      }
      return await this.userRepository.query(
        "UPDATE users SET email = ? WHERE email = ? ",
        [changeEmail, email],
      );
    } catch (er: unknown) {
      throw new BadRequestException((er as Error).message || "unknown message");
    }
  }

  async get(user: UserEntity) {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
    };
  }

  // SQL
  async getUserById(id: number): Promise<UserEntity> {
    try {
      return await this.userRepository.query(
        "SELECT email, username FROM users where id = ?",
        [id],
      );
    } catch (err: unknown) {
      throw new BadRequestException((err as Error).message);
    }
  }

  // find all user (safely)
  async getAllUser(): Promise<UserEntity[]> {
    try {
      const data = await this.userRepository.find({
        select: ["email", "username"],
        order: { id: "ASC" },
      });

      if (!data) {
        throw new BadRequestException("data didnt exist");
      }

      return data;
    } catch (err: unknown) {
      throw new BadRequestException((err as Error).message || "unknown error");
    }
  }
}
