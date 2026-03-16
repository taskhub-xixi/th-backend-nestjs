import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from "@nestjs/common";
import { RTGuard } from "../common/guards/rt-token.guard";
import {
  CreateProductRequest,
  CreateProductResponseSuccess,
} from "../model/product.model";
import { ProductService } from "./product.service";

@Controller("/product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(RTGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post("create")
  async createProduct(
    @Body() req: CreateProductRequest,
  ): Promise<CreateProductResponseSuccess> {
    const result = await this.productService.createProduct(req);
    return {
      data: {
        id: result.data.id,
        name: result.data.name,
        price: result.data.price,
        category: result.data.category,
        image: result.data.image,
      },
      message: result.message,
    };
  }
}
