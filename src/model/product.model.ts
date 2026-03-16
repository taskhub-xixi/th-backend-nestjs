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
  message?: string;
}

export class CreateProductResponseError {
  data: {
    message: string;
    statusCode: number;
  };
}
