import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Req,
  UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/guards/index";
import { Auth } from "src/common/decorator";
import { GetUserById, UpdateUserRequest } from "../model/user.model";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";

@Controller("/api/users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Patch("/update/email")
  @HttpCode(HttpStatus.OK)
  async changeEmail(@Body() request: UpdateUserRequest) {
    const result = await this.userService.changeEmail(
      request.email as string,
      request.emailUpdate as string,
    );
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Patch("/update/username")
  @HttpCode(HttpStatus.OK)
  async changeUsername(@Body() request: UpdateUserRequest) {
    const result = await this.userService.changeUsername(request);
    return { data: result };
  }

  @UseGuards(JwtAuthGuard)
  @Get("/all")
  @HttpCode(HttpStatus.OK)
  async all() {
    const result = await this.userService.getAllUser();
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get("user")
  @HttpCode(HttpStatus.OK)
  async get(@Auth() user: UserEntity) {
    const result = await this.userService.get(user);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get("/:id")
  @HttpCode(200)
  async getUser(@Req() request: GetUserById) {
    const result = await this.userService.getUserById(request.id as number);
    return {
      data: result,
    };
  }
}
