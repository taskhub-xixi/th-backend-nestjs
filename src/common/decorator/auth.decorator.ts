import {
  createParamDecorator,
  ExecutionContext,
  HttpException,
} from "@nestjs/common";

export const Auth = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    console.info(`USER: ${JSON.stringify(user)}`);
    if (!user) {
      throw new HttpException("Unauthorized User", 401);
    }
    return user;
  },
);
