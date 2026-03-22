import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "../../auth/auth.service";

@Injectable()
export class AdminGuard extends AuthGuard("admin") implements CanActivate {
  constructor(
    private reflector: Reflector,
    private authService: AuthService,
  ) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const metadata = this.reflector.get("isAdmin", context.getHandler());
    console.log(`ADMIN_STRATEGY_validate: LOG: ${metadata}`);
    if (!metadata) {
      throw new HttpException("Forbbiden Resources", 403);
    }
    const req = context.switchToHttp().getRequest();
    await this.authService.checkRole(req?.body?.email);
    return true;
  }
}
