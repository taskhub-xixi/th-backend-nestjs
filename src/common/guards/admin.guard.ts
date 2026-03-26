import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "../../auth/auth.service";
import { JwtService } from "@nestjs/jwt";
import { jwtConstants } from "../../auth/constants";
import { JwtPayload } from "../../auth/dto/payload-interface";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  // JwtAuthGuard --> user: Payload --> adminGuard --> req.user --> checkRole
  async canActivate(context: ExecutionContext) {
    const metadata = this.reflector.get("isAdmin", context.getHandler());
    console.log(`ADMIN_STRATEGY_validate: LOG: ${metadata}`);

    if (!metadata) {
      throw new HttpException("AdminGuard: Forbbiden Resources", 403);
    }

    const req = context.switchToHttp().getRequest();
    const token = req?.cookies?.access_token;
    console.log(req);

    if (token === undefined) {
      throw new HttpException("AdminGuard: token not found", 401);
    }

    // verify token and get JWT payload
    const user: JwtPayload = this.jwtService.verify(token, {
      secret: jwtConstants.secrets,
    });

    if (!user) {
      throw new HttpException("AdminGuard: Forbidden user", 403);
    }

    await this.authService.checkRole(user.email);
    return true;
  }
}
