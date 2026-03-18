import { IsEmail, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class UpdateUserRequest {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsOptional()
  password?: string;
}

export class UpdateUserResponse {
  data: {
    id?: number;
    username: string;
    email: string;
  };
}

export class GetUserResponse {
  data: {
    id?: number;
    username: string;
    email: string;
  };
}

export class GetUserById {
  @IsNumber()
  id?: number;
}
