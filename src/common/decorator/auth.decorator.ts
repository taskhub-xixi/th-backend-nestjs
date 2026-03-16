import {
  createParamDecorator,
  ExecutionContext,
  HttpException,
} from "@nestjs/common";

export const Auth = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    console.log(`AUTH_DECORATOR: Context: ${context}`);
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (user) {
      return user;
    } else {
      throw new HttpException("Unauthorized User", 401);
    }
  },
);
