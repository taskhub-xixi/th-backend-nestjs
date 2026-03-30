import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from "class-validator";

export class UpdateUserRequest {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  firstname?: string;

  @IsString()
  @IsOptional()
  lastname?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsString()
  @IsOptional()
  role?: string;
}

export class UpdateUserResponse {
  data!: {
    id?: string;
    firstname: string;
    lastname: string;
    email: string;
  };
}

export class GetUserResponse {
  data!: {
    id?: string;
    firstname: string;
    lastname: string;
    email: string;
  };
}

export class GetUserById {
  @IsString()
  @IsNotEmpty()
  id!: string;
}

export class User {
  user!: {
    sub: string;
    email: string;
  };
}

export class UserResponse {
  data!: {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    role: string;
  };
}

export class ListQueryRequest {
  @IsNumber()
  @Min(1)
  page?: number;

  @IsNumber()
  limit?: number;

  @IsString()
  order?: string;

  @IsString()
  sort?: string;
}

export class RequestQuery {
  query!: unknown;
}

export class UserResponseAll {
  user?: unknown;
  id?: string;
  username?: string;
  email?: string;
  role?: string;
  createdAt?: Date;
}

export class GetAllUserResponse<T> {
  data!: T;
  pagination!: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
