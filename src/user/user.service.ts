import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import type { Repository } from "typeorm";
import { Logger } from "winston";
import {
  GetAllUserResponse,
  GetUserResponse,
  ListQueryRequest,
  UpdateUserRequest,
  UpdateUserResponse,
  UserResponse,
  UserResponseAll,
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

  async updateUser(
    me,
    request: UpdateUserRequest,
  ): Promise<UpdateUserResponse> {
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

  async getAllUser(
    req: ListQueryRequest,
  ): Promise<GetAllUserResponse<UserResponseAll>> {
    this.logger.debug(`UserService.getAllUser ${JSON.stringify(req)})`);
    // conversion
    const limit = Number(req.limit);
    const page = Number(req.page);
    const total = await this.userRepository.count();
    const pages = Math.ceil(total / limit);
    // validate
    if (page > pages) {
      throw new HttpException(`Page not found, Latest page is ${pages}`, 403);
    }
    const skipPage = page * 10;
    const result = await this.userRepository.find({
      select: {
        id: true,
        email: true,
        username: true,
        role: true,
        createdAt: true,
      },
      order: { id: req.order === "DESC" ? "DESC" : "ASC" },
      take: limit <= 0 ? 1 : limit,
      skip: skipPage === 10 ? 0 : skipPage,
    });

    return {
      data: { user: result },
      pagination: {
        page: page === 0 ? 1 : page && page >= pages ? pages : page,
        limit: Number(req.limit),
        total: total,
        totalPages: pages,
      },
      statusCode: HttpStatus.OK,
    };
  }

  async me(email: string): Promise<UserResponse> {
    const result = await this.userRepository.findOne({
      where: { email: email },
    });
    this.logger.info(result);

    return {
      data: {
        id: result.id,
        username: result.username,
        email: result.email,
        role: result.role,
        createdAt: result.createdAt,
      },
      statusCode: HttpStatus.OK,
    };
  }
}
