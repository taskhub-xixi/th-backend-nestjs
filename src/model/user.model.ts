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

export class User {
  user: {
    sub: number;
    email: string;
  };
}

export class UserResponse {
  data: {
    id: number;
    username: string;
    email: string;
    role: string;
    createdAt: Date;
  };
  statusCode?: number;
}

export class ListQueryRequest {
  page?: number;
  limit?: number;
  order?: string;
  sort?: string;
}

export class GetAllUserResponse {
  data: [
    {
      id: number;
      email: string;
      username: string;
      role: string;
      createdAt: Date;
    },
  ];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  statusCode: number;
}
