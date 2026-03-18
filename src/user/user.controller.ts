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
import {
  GetUserById,
  GetUserResponse,
  UpdateUserRequest,
  UpdateUserResponse,
} from "../model/user.model";
import { UserService } from "./user.service";
import { IUserRepository } from "./interfaces/user.interface";

@Controller("/api/users")
export class UserController implements IUserRepository {
  constructor(private readonly userService: UserService) {}

  @HttpCode(HttpStatus.OK)
  async changeEmail(
    @Body() request: UpdateUserRequest,
  ): Promise<UpdateUserResponse> {
    const result = await this.userService.changeEmail(request);
    return result;
  }
  @Patch("/update/username")
  @HttpCode(HttpStatus.OK)
  async changeUsername(
    @Body() request: UpdateUserRequest,
  ): Promise<UpdateUserResponse> {
    const result = await this.userService.changeUsername(request);
    return result;
  }

  @Get("/all")
  @HttpCode(HttpStatus.OK)
  async getAllUser() {
    const result = await this.userService.getAllUser();
    return result;
  }

  @Get("/:id")
  @HttpCode(HttpStatus.OK)
  async getUserById(@Req() request: GetUserById): Promise<GetUserResponse> {
    const result = await this.userService.getUserById(request.id as number);
    return result;
  }
}
