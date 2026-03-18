import { HttpException, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import type { Repository } from "typeorm";
import { Logger } from "winston";
import {
  GetUserResponse,
  UpdateUserRequest,
  UpdateUserResponse,
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

  async getAllUser() {
    this.logger.debug(`UserService.getAllUser)`);
    const data = await this.userRepository.find({
      select: ["email", "username"],
      order: { id: "ASC" },
    });

    if (data.length <= 0) {
      throw new HttpException("Data not found", 404);
    }

    return { data };
  }
}
