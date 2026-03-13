import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  Post,
  Put,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
} from "@nestjs/common";
import { Request, Response } from "express";
import { WebResponse } from "src/model/web.mode";
import {
  CookiePayload,
  LoginDTO,
  RegisterDTO,
  UpdateDTO,
  UserResponse,
} from "../model/auth.model";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./local-auth.guard";
import { GetCurrentUserId } from "src/common/decorator/get-current-user-id.decorator";

@Controller("/api/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  @HttpCode(200)
  async register(
    @Body() registerDTO: RegisterDTO,
    @Res({ passthrough: true }) response: Response,
  ): Promise<WebResponse<UserResponse>> {
    // validate
    if (!registerDTO.username || registerDTO.username.trim() === "") {
      throw new HttpException("username cannot be empty", 401);
    }

    if (!registerDTO.email || registerDTO.email.trim() === "") {
      throw new HttpException("email cannot be empty", 401);
    }

    if (!registerDTO.password || registerDTO.password.trim() === "") {
      throw new HttpException("password cannot be empty", 401);
    }

    if (registerDTO.password.length < 8) {
      throw new HttpException("password must be atleast 8 charachter", 401);
    }

    if (registerDTO.username.length < 2) {
      throw new HttpException("username must be atleast 2 charachter", 401);
    }

    if (registerDTO.email.length < 8) {
      throw new HttpException("email must be atleast 8 charachter", 401);
    }

    const result = await this.authService.create(registerDTO);

    response.cookie("refresh_token", result.refresh_token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });
    response.cookie("access_token", result.access_token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });

    return { data: result };
  }

  @UseGuards(LocalAuthGuard)
  @Post("login")
  @HttpCode(200)
  async login(
    @Body() loginDTO: LoginDTO,
    @Res({ passthrough: true }) response: Response,
  ): Promise<WebResponse<UserResponse>> {
    // validate
    if (!loginDTO.email || loginDTO.email.trim() === "") {
      throw new BadRequestException("email cannot be empty");
    }
    if (!loginDTO.password || loginDTO.password.trim() === "") {
      throw new BadRequestException("password cannot be empty");
    }
    if (loginDTO.password.length < 8) {
      throw new BadRequestException("password minimum is 8 charachter");
    }
    if (loginDTO.email.length < 8) {
      throw new BadRequestException("email minimum is 8 charachter");
    }

    // validate user
    const result = await this.authService.login(loginDTO);

    response.cookie("refresh_token", result.refresh_token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });
    response.cookie("access_token", result.access_token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });

    return {
      data: result,
    };
  }

  @Post("refresh")
  @HttpCode(200)
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ): Promise<void> {
    const refreshToken = (req.cookies as CookiePayload)["refreshToken"];

    if (!refreshToken) {
      throw new UnauthorizedException();
    }

    const tokens = await this.authService.refresh(refreshToken);

    res.cookie("accessToken", tokens.accessToken);
    res.cookie("refreshToken", tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
  }

  @Put("reset")
  @HttpCode(200)
  async resetPassword(@Body() resetDTO: UpdateDTO): Promise<void> {
    try {
      if (!resetDTO.email || resetDTO.email.trim() === "") {
        throw new BadRequestException("email cannot be empty");
      }
      if (!resetDTO.password || resetDTO.password.trim() === "") {
        throw new BadRequestException("password cannot be empty");
      }
      if (!resetDTO.passwordChanged || resetDTO.passwordChanged.trim() === "") {
        throw new BadRequestException("repeat password cannot be empty");
      }
      if (resetDTO.email.length < 8) {
        throw new BadRequestException("email must be atleast 8 charachter");
      }
      if (resetDTO.password.length < 8) {
        throw new BadRequestException("password must be atleast 8 charachter");
      }
      if (resetDTO.passwordChanged.length < 8) {
        throw new BadRequestException(
          "repeat password must be atleast 8 charachter",
        );
      }
      if (resetDTO.password !== resetDTO.passwordChanged) {
        throw new BadRequestException(
          "password and repeat password is not the same",
        );
      }
      await this.authService.resetPassword(resetDTO.email, resetDTO.password);
    } catch (err: unknown) {
      throw new BadRequestException(
        (err as Error).message || "unknown message",
      );
    }
  }

  @Put("delete")
  async delete(
    @Body("email") email: string,
    @Body("password") password: string,
    @Body("confPassword") confPassword: string,
    @Res({ passthrough: true }) response: Response,
  ): Promise<void> {
    if (!email || email.trim() === "") {
      throw new BadRequestException("email cannot be empty");
    }
    if (!password || password.trim() === "") {
      throw new BadRequestException("password cannot be empty");
    }
    if (password.length < 8) {
      throw new BadRequestException("password must be atleast 8 charachter");
    }
    if (email.length < 8) {
      throw new BadRequestException("email must be atleast 8 charachter");
    }
    if (!confPassword || confPassword.trim() === "") {
      throw new BadRequestException("cofirmation password cannot be empty");
    }
    if (confPassword.length < 8) {
      throw new BadRequestException(
        "confirmation password must be atleast 8 charachter",
      );
    }
    if (confPassword !== password) {
      throw new BadRequestException(
        "confirmation password and password is not same",
      );
    }
    response.clearCookie("refreshToken");
    response.clearCookie("accessToken");
    await this.authService.deleteSQL(email);
  }

  @Get("verify")
  @HttpCode(200)
  async verify(@Req() request: Request) {
    // ambil cookie
    const cookie = (request.cookies as CookiePayload).accessToken;
    return await this.authService.verify(cookie);
  }

  @UseGuards(LocalAuthGuard)
  @Put("logout")
  @HttpCode(200)
  async logout(
    @Body("email") email: string,
    @Res({ passthrough: true }) response: Response,
  ): Promise<{ message: string }> {
    response.clearCookie("refreshToken");
    response.clearCookie("accessToken");
    await this.authService.logout(email);
    return {
      message: "clear Cookie",
    };
  }
}
