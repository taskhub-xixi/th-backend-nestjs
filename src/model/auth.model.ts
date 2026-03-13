import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from "class-validator";

export class LoginDTO {
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100)
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(100)
  password: string;
}

export class RegisterDTO {
  @IsNotEmpty()
  @MaxLength(100)
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(100)
  password: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  username: string;
}

export class UpdateDTO {
  @IsEmail()
  @IsEmpty()
  @IsString()
  @Min(8)
  @Max(100)
  email?: string;

  @IsString()
  @Min(8)
  @Max(100)
  password?: string;

  @IsString()
  @Min(8)
  @Max(100)
  passwordChanged?: string;

  @IsString()
  @IsEmpty()
  @Min(3)
  @Max(100)
  usernameChanged?: string;
}

export class CookiePayload {
  @IsString()
  @IsEmpty()
  refreshtoken: string;

  @IsString()
  @IsEmpty()
  accessToken: string;
}

export class UserResponse {
  username?: string;
  access_token?: string;
  refresh_token?: string;
}
