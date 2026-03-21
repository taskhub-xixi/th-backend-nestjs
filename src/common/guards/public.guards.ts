import {
  ExecutionContext,
  HttpException,
  Inject,
  Injectable,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Observable } from "rxjs";
import { Logger } from "winston";
import { AuthService } from "../../auth/auth.service";

@Injectable()
export class PublicGuard extends AuthGuard() {
  constructor(
    private reflector: Reflector,
    @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
  ) {
    super();
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const metadata = this.reflector.get("isPublic", context.getHandler());
    this.logger.info(`metadata : ${metadata}`);
    if (!metadata) {
      throw new HttpException("Forbidden Resources", 403);
    }
    return true;
  }
}
