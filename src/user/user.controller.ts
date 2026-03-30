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
import { Admin, Public } from "../common/decorator";
import { AdminGuard, JwtAuthGuard } from "../common/guards";
import { PublicGuard } from "../common/guards/public.guards";
import {
  GetUserById,
  GetUserResponse,
  UpdateUserRequest,
  UpdateUserResponse,
  RequestQuery,
  User,
  GetAllUserResponse,
  ListQueryRequest,
} from "../model/user.model";
import { IUserRepository } from "./interfaces/user.interface";
import { UserService } from "./user.service";
import { UserResponse } from "../model/auth.model";
import { JwtPayload } from "../auth/dto/payload-interface";

@Controller("/api/users")
export class UserController implements IUserRepository {
  constructor(private readonly userService: UserService) {}

  @Admin()
  @Public()
  @UseGuards(AdminGuard)
  @UseGuards(PublicGuard)
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get("me")
  async me(@Req() req: User) {
    const data = await this.userService.me(req.user.email);
    return data;
  }

  @Admin()
  @Public()
  @UseGuards(AdminGuard)
  @UseGuards(PublicGuard)
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Patch("me")
  async updateUser(
    @Body() request: UpdateUserRequest,
  ): Promise<UpdateUserResponse> {
    const result = await this.userService.updateUser(request);
    return result;
  }

  @Admin()
  @Public()
  @UseGuards(AdminGuard)
  @UseGuards(PublicGuard)
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get("/all")
  async getAllUser(
    @Query() query: ListQueryRequest,
  ): Promise<GetAllUserResponse<UserResponse>> {
    const result = await this.userService.getAllUser(query);
    return result;
  }

  @Admin()
  @Public()
  @UseGuards(AdminGuard)
  @UseGuards(PublicGuard)
  @UseGuards(JwtAuthGuard)
  @Get("/:id")
  @HttpCode(HttpStatus.OK)
  async getUserById(@Req() request: GetUserById): Promise<GetUserResponse> {
    const result = await this.userService.getUserById(request.id);
    return result;
  }
}
