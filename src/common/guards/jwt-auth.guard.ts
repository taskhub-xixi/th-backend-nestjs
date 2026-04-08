import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt-strategy") {
  constructor() {
    super();
  }
  // canActivate(
  //   context: ExecutionContext,
  // ): boolean | Promise<boolean> | Observable<boolean> {
  //   const req = context.switchToHttp().getRequest();
  //   const token = req.cookies.access_token;
  //   console.log(`GUARD: ${token}`);
  //   return true;
  // }
}
