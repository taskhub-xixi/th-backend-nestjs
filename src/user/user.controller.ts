import {
  Body,
  Controller,
  Get,
  HttpCode,
  Patch,
  Req,
  UseGuards,
} from "@nestjs/common";
import { Auth } from "src/common/auth.decorator";
import { GetUserById, UpdateUserRequest } from "../model/user.model";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";
import { LocalStrategy } from "src/auth/strategies/local.strategy";

@Controller("/api/users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Patch("/update/email")
  @HttpCode(200)
  async changeEmail(
    @Auth() user: UserEntity,
    @Body() request: UpdateUserRequest,
  ) {
    const result = await this.userService.changeEmail(
      request.email as string,
      request.emailUpdate as string,
    );
    return {
      data: result,
    };
  }

  @UseGuards(LocalStrategy)
  @Patch("/update/username")
  @HttpCode(200)
  async changeUsername(@Body() request: UpdateUserRequest) {
    const result = await this.userService.changeUsername(request);
    return { data: result };
  }

  @Get("/all")
  @HttpCode(200)
  async all() {
    const result = await this.userService.getAllUser();
    return {
      data: result,
    };
  }

  @Get()
  @HttpCode(200)
  async get(@Auth() user: UserEntity) {
    const result = await this.userService.get(user);
    return {
      data: result,
    };
  }

  @Get("/:id")
  @HttpCode(200)
  async getUser(@Req() request: GetUserById) {
    const result = await this.userService.getUserById(request.id as number);
    return {
      data: result,
    };
  }
}
