import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
  Query,
  Patch,
} from "@nestjs/common";
import { Admin } from "../common/decorator/admin.decorator";
import { AdminGuard } from "../common/guards/admin.guard";
import {
  CreateProductRequest,
  CreateProductResponseSuccess,
  GetProductsRequest,
  GetProductsResponseSuccess,
  UpdateProductRequest,
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
  async getProductAll(
    @Query() req: GetProductsRequest,
  ): Promise<GetProductsResponseSuccess> {
    const result = await this.productService.getProductAll(req);
    return result;
  }

  @Admin()
  @UseGuards(AdminGuard)
  @HttpCode(HttpStatus.OK)
  @Get("single/:id")
  async getProductById(
    @Param("id") id: number,
  ): Promise<GetProductsResponseSuccess> {
    const result = await this.productService.getProductById(id);
    return result;
  }

  @Admin()
  @UseGuards(AdminGuard)
  @HttpCode(HttpStatus.OK)
  @Patch("single/:id")
  async updateProductById(
    @Param("id") id: number,
    @Body() req: UpdateProductRequest,
  ) {
    const result = await this.productService.updateProductById(id, req);
    return result;
  }
}
