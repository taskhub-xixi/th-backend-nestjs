import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
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
import { IUserService } from "./interfaces/user.service.interface";
import { PrismaService } from "../common/prisma.service";

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER)
    private logger: Logger,
    private prismaService: PrismaService,
  ) {}

  async updateUser(
    me: string,
    request: UpdateUserRequest,
  ): Promise<UpdateUserResponse> {
    this.logger.debug(`UserService.changeEmail(${JSON.stringify(request)})`);

    const isExist = await this.prismaService.users.findUnique({
      where: { email: request.email },
    });

    if (!isExist) {
      throw new HttpException("User not found", 404);
    }

    await this.prismaService
      .$executeRaw`UPDATE users SET email = ${request.email} WHERE id = ${isExist.id}`;

    return {
      data: {
        id: isExist.id,
        email: isExist.email,
        firstname: isExist.first_name,
        lastname: isExist.last_name,
      },
    };
  }

  async getUserById(id: string): Promise<GetUserResponse> {
    this.logger.debug(`UserService.getUserById(${JSON.stringify(id)})`);
    const isExist = await this.prismaService.users.findUnique({
      where: { id: id },
    });
    if (!isExist) {
      throw new HttpException("Data not found", 404);
    }
    await this.prismaService
      .$queryRaw`SELECT email, first_name, last_name FROM users where id = ${id}`;

    return {
      data: {
        id: isExist.id,
        email: isExist.email,
        firstname: isExist.first_name,
        lastname: isExist.last_name,
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
    const total = await this.prismaService.users.count();
    const pages = Math.ceil(total / limit);
    // validate
    if (page > pages) {
      throw new HttpException(`Page not found, Latest page is ${pages}`, 403);
    }
    const skipPage = page * 10;
    const result = await this.prismaService.users.findMany({
      select: {
        id: true,
        email: true,
        first_name: true,
        last_name: true,
        role: true,
      },
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
    };
  }

  async me(email: string): Promise<UserResponse> {
    const result = await this.prismaService.users.findUnique({
      where: { email: email },
    });

    if (!result) {
      throw new HttpException("User not found", 404);
    }
    this.logger.info(result);

    return {
      data: {
        id: result.id,
        firstname: result.first_name,
        lastname: result.last_name,
        email: result.email,
        role: result.role,
      },
    };
  }
}
