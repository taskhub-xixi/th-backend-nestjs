import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "../common/guards";
import {
  GetUserById,
  GetUserResponse,
  ListQuery,
  UpdateUserRequest,
  UpdateUserResponse,
  User,
} from "../model/user.model";
import { IUserRepository } from "./interfaces/user.interface";
import { UserService } from "./user.service";

@Controller("/api/users")
export class UserController implements IUserRepository {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get("me")
  async me(@Req() req: User) {
    const data = await this.userService.me(req.user.email);
    return data;
  }

  @HttpCode(HttpStatus.OK)
  async changeEmail(
    @Body() request: UpdateUserRequest,
  ): Promise<UpdateUserResponse> {
    const result = await this.userService.changeEmail(request);
    return result;
  }

  @HttpCode(HttpStatus.OK)
  @Patch("/update/username")
  async changeUsername(
    @Body() request: UpdateUserRequest,
  ): Promise<UpdateUserResponse> {
    const result = await this.userService.changeUsername(request);
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get("/all")
  async getAllUser(@Query() query: ListQuery, @Req() req) {
    console.log(req.query);
    const result = await this.userService.getAllUser(req.query);
    return result;
  }

  @Get("/:id")
  @HttpCode(HttpStatus.OK)
  async getUserById(@Req() request: GetUserById): Promise<GetUserResponse> {
    const result = await this.userService.getUserById(request.id as number);
    return result;
  }
}
