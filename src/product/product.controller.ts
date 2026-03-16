import {
  Get,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from "@nestjs/common";
import { Public } from "../common/decorator/";
import { AdminGuard } from "../common/guards/admin.guard";
import {
  CreateProductRequest,
  CreateProductResponseSuccess,
} from "../model/product.model";
import { ProductService } from "./product.service";
import { Admin } from "../common/decorator/admin.decorator";

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
  async getProductAll() {
    const result = await this.productService.getProductAll();
    return result;
  }
}
