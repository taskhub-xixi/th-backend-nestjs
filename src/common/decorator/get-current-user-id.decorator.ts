import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { JwtPayload } from "../../auth/dto/payload-interface";

export const GetCurrentUserId = createParamDecorator(
  (_data: undefined, context: ExecutionContext): number | undefined => {
    const request = context.switchToHttp().getRequest();
    const user = request.user as JwtPayload;
    return user.sub;
  },
);
