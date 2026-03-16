import { Decimal } from "@prisma/client/runtime/client";
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from "class-validator";

export class CreateProductRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Min(1)
  price: Decimal;

  @IsString()
  description: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsOptional()
  image: string;
}

export class CreateProductResponseSuccess {
  data: {
    id?: number;
    name: string;
    price: Decimal;
    category: string;
    image: string;
  };
  statusCode: number;
  message?: string;
}

export class CreateProductResponseError {
  message: string[];
  statusCode: number;
}

export class GetProductsRequest {
  @IsNumber()
  @IsOptional()
  @Min(1)
  page?: number;

  @IsNumber()
  @IsOptional()
  limit?: number = 10;

  @IsString()
  @IsOptional()
  category?: string;

  @IsNumber()
  @IsOptional()
  minPrice?: number;

  @IsNumber()
  @IsOptional()
  maxPrice?: number;

  @IsString()
  @IsOptional()
  search?: string;
}

export class GetProductsResponseSuccess {
  data: {
    products: unknown;
    total?: number;
    page?: number;
    limit?: number;
    totalPages?: number;
  };
  statusCode: number;
}

export class GetProductsResponseError {
  message: string[];
  statusCode: number;
}

export class GetProductById {
  @IsNumber()
  id?: number;
}
