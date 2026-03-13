import { IsEmail, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class UpdateUserRequest {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsEmail()
  @IsOptional()
  emailUpdate?: string;

  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsOptional()
  password?: string;
}

export class GetUserById {
  @IsNumber()
  id?: number;
}
