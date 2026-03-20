import { Decimal } from "@prisma/client/runtime/client";
import { Type } from "class-transformer";
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
  @Type(() => Number)
  page?: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  limit?: number = 10;

  @IsString()
  @IsOptional()
  category?: string;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  minPrice?: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
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

export class UpdateProductRequest {
  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  price: Decimal;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  category: string;

  @IsOptional()
  image: string;
}

export class UploadPhotoRequest {
  @IsString()
  filename: string;

  // @IsString()
  // originalName: string;
  //
  // @IsNumber()
  // @Max(5120) // equal to = 5MB
  // size: number;

  // @IsString()
  // mimetype: string;
}

export class UploadPhotoResponseSuccess {
  data: {
    filename: string;
    originalName: string;
    size: number;
    // mimetype: string;
  };
  statusCode: number;
}
