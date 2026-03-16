import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { ExecutionContext, HttpException, Injectable } from "@nestjs/common";

@Injectable()
export class AtGuard extends AuthGuard("jwt") {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    if (
      context.getHandler() ===
      this.reflector.get("isPublic", context.getHandler())
    ) {
      return true;
    } else {
      throw new HttpException("Unathorized", 401);
    }
  }
}
