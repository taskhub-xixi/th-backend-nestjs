import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Patch,
  Post,
  Req,
  Res,
  UseGuards,
} from "@nestjs/common";
import { Request, Response } from "express";
import { CheckUserGuard } from "../common/guards/check-user.guard";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard";
import { RTGuard } from "../common/guards/rt-token.guard";
import {
  CookiePayload,
  LoginDTO,
  LoginResponse,
  LogoutDTO,
  RefreshTokenResponse,
  RegisterDTO,
  RegisterResponse,
  UpdateDTO,
} from "../model/auth.model";
import { WebResponse } from "../model/web.mode";
import { AuthService } from "./auth.service";

@Controller("/api/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() registerDTO: RegisterDTO): Promise<RegisterResponse> {
    const result = await this.authService.create(registerDTO);
    return result;
  }

  @Post("login")
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() loginDTO: LoginDTO,
    @Res({ passthrough: true }) res: Response,
  ): Promise<LoginResponse> {
    const result = await this.authService.login(loginDTO, res);

    return result;
  }

  @UseGuards(RTGuard)
  @Post("refresh")
  @HttpCode(HttpStatus.OK)
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ): Promise<WebResponse<RefreshTokenResponse>> {
    const refreshToken = (req.cookies as CookiePayload)["refresh_token"];

    if (!refreshToken) {
      throw new HttpException(`AUTH_CONTROLLER.refresh: ${refreshToken}`, 401);
    }

    const tokens = await this.authService.refresh(refreshToken, res);

    return {
      data: {
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token,
      },
    };
  }

  @UseGuards(CheckUserGuard)
  @UseGuards(JwtAuthGuard)
  @Patch("reset")
  @HttpCode(HttpStatus.OK)
  async resetPassword(@Body() resetDTO: UpdateDTO): Promise<void> {
    if (!resetDTO.email) throw new HttpException("Something Wrong", 404);
    if (!resetDTO.password) throw new HttpException("Something Wrong", 404);
    await this.authService.resetPassword(resetDTO);
  }
  //
  // @UseGuards(CheckUserGuard)
  // @UseGuards(JwtAuthGuard)
  // @Put("delete")
  // @HttpCode(HttpStatus.OK)
  // async delete(
  //   @Body() deleteDTO: DeleteDTO,
  //   @Res({ passthrough: true }) response: Response,
  // ): Promise<void> {
  //   await this.authService.deleteSQL(deleteDTO.email, response);
  // }

  @UseGuards(CheckUserGuard)
  @UseGuards(JwtAuthGuard)
  @Get("verify")
  @HttpCode(HttpStatus.OK)
  async verify(@Req() request: Request) {
    // take cookie from browser
    const cookie = (request.cookies as CookiePayload).accessToken;
    console.log(cookie);
    return await this.authService.verify(cookie);
  }

  @UseGuards(CheckUserGuard)
  @UseGuards(JwtAuthGuard)
  @Patch("logout")
  @HttpCode(HttpStatus.OK)
  async logout(
    @Body() deleteDTO: LogoutDTO,
    @Res({ passthrough: true }) res: Response,
  ): Promise<{ message: string }> {
    await this.authService.logout(deleteDTO, res);
    return {
      message: "clear Cookie",
    };
  }
}
