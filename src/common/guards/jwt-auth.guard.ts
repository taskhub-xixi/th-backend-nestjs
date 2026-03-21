import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt-strategy") {
  // canActivate(
  //   context: ExecutionContext,
  // ): boolean | Promise<boolean> | Observable<boolean> {
  //   const req = context.switchToHttp().getRequest();
  //   const token = req.cookies.access_token;
  //   console.log(`GUARD: ${token}`);
  //   return true;
  // }
}
