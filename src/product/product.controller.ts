import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Req,
  Param,
  Post,
  UseGuards,
} from "@nestjs/common";
import { Admin } from "../common/decorator/admin.decorator";
import { AdminGuard } from "../common/guards/admin.guard";
import {
  CreateProductRequest,
  CreateProductResponseSuccess,
  GetProductById,
  GetProductsResponseSuccess,
} from "../model/product.model";
import { ProductService } from "./product.service";

@Controller("/product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Admin()
  @UseGuards(AdminGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post("create")
  async createProduct(
    @Body() req: CreateProductRequest,
  ): Promise<CreateProductResponseSuccess> {
    const result = await this.productService.createProduct(req);
    return result;
  }

  @Admin()
  @UseGuards(AdminGuard)
  @HttpCode(HttpStatus.OK)
  @Get("all")
  async getProductAll(): Promise<GetProductsResponseSuccess> {
    const result = await this.productService.getProductAll();
    return result;
  }

  @Admin()
  @UseGuards(AdminGuard)
  @HttpCode(HttpStatus.OK)
  @Get("single/:id")
  async getProductById(@Param("id") id: number) {
    const result = await this.productService.getProductById(id);
    return result;
  }
}
