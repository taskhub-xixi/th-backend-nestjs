import { ExecutionContext, HttpException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

@Injectable()
export class AdminGuard extends AuthGuard() {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const metadata = this.reflector.get("isAdmin", context.getHandler());
    if (!metadata) {
      throw new HttpException("Forbbiden Resources", 403);
    }
    return true;
  }
}
