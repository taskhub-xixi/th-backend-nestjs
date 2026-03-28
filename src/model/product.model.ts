import { Decimal } from "@prisma/client/runtime/client";
import { Type } from "class-transformer";
import {
  IsBoolean,
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Min,
} from "class-validator";

export class CreateProductRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  slug: string;

  @IsString()
  sku: string;

  @IsNumber()
  @Min(1)
  price: Decimal;

  @IsString()
  description: string;

  @IsString()
  brandId: string;

  @IsString()
  @IsNotEmpty()
  categoryId: string;
}

export class CreateProductResponseSuccess {
  id?: string;
  name: string;
  price: Decimal;
  slug: string;
  sku: string;
  description: string;
  originalPrice?: Decimal;
  categoryId: string;
  brandId: string;
  stock: number;
  lowStockThreshold: number;
  ratingAverage: Decimal;
  ratingCount: number;
  reviewCount: number;
  isActive: boolean;
  metadata: {};
  createdAt?: Date;
  updatedAt?: Date;
  shortDescription?: string;
  deletedAt?: Date;
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
  page?: number = 1;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  limit?: number = 20;

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
  products: {
    id?: string;
    name: string;
    price: Decimal;
    slug: string;
    sku: string;
    description: string;
    originalPrice?: Decimal;
    categoryId: string;
    brandId: string;
    stock: number;
    lowStockThreshold: number;
    ratingAverage: Decimal;
    ratingCount: number;
    reviewCount: number;
    isActive: boolean;
    metadata: {};
    createdAt?: Date;
    updatedAt?: Date;
    shortDescription?: string;
    deletedAt?: Date;
  }[];
  total?: number;
  page?: number;
  limit?: number;
  totalPages?: number;
}
export class GetProductsResponseError {
  message: string[];
  statusCode: number;
}

export class GetProductById {
  @IsNumber()
  id?: number;
}

export class UpdateProductResponse {
  products: {
    id?: string;
    name: string;
    price: Decimal;
    slug: string;
    sku: string;
    description: string;
    originalPrice?: Decimal;
    categoryId: string;
    brandId: string;
    stock: number;
    lowStockThreshold: number;
    ratingAverage: Decimal;
    ratingCount: number;
    reviewCount: number;
    isActive: boolean;
    metadata: {};
    createdAt?: Date;
    updatedAt?: Date;
    shortDescription?: string;
    deletedAt?: Date;
  };
}

export class UpdateProductRequest {
  @IsString()
  @IsOptional()
  name: string;

  @IsDecimal()
  @Min(0)
  @IsOptional()
  price: Decimal;

  @IsString()
  @IsOptional()
  description: string;

  @IsDecimal()
  @IsOptional()
  originalPrice?: Decimal;

  @IsString()
  @IsOptional()
  slug: string;

  @IsString()
  @IsOptional()
  sku: string;

  @IsString()
  @IsOptional()
  brandId: string;

  @IsNumber()
  @IsOptional()
  stock: number;

  @IsNumber()
  @IsOptional()
  lowStockThreshold: number;

  @IsNumber()
  @IsOptional()
  ratingAverage: Decimal;

  @IsNumber()
  @IsOptional()
  ratingCount: number;

  @IsNumber()
  @IsOptional()
  reviewCount: number;

  @IsBoolean()
  @IsOptional()
  isActive: boolean;

  @IsObject()
  @IsOptional()
  metadata: {};
}

export class UploadPhotoRequest {
  @IsString()
  filename: string;
}

export class UploadPhotoResponseSuccess {
  data: {
    filename: string;
    originalName: string;
  };
  statusCode: number;
}

export class GetProductByCategoryResponse {
  products: {
    id?: string;
    name: string;
    price: Decimal;
    slug: string;
    sku: string;
    description: string;
    originalPrice?: Decimal;
    categoryId: string;
    brandId: string;
    stock: number;
    lowStockThreshold: number;
    ratingAverage: Decimal;
    ratingCount: number;
    reviewCount: number;
    isActive: boolean;
    metadata: {};
    createdAt?: Date;
    updatedAt?: Date;
    shortDescription?: string;
    deletedAt?: Date;
  }[];
  total?: number;
  page?: number;
  limit?: number;
  totalPages?: number;
}

export class SearchRequest {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class DeleteProductResponse {
  @IsBoolean()
  deleted: boolean;
}
