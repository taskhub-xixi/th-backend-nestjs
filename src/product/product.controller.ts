import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseFilePipe,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
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
import { FileFilterImage } from "./file.filter";

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
  @Patch("single/update/:id")
  async updateProductById(
    @Param("id") id: number,
    @Body() req: UpdateProductRequest,
  ) {
    const result = await this.productService.updateProductById(id, req);
    return result;
  }

  @Admin()
  @UseGuards(AdminGuard)
  @HttpCode(HttpStatus.OK)
  @Delete("single/delete/:id")
  async deleteProductById(@Param("id") id: number) {
    const result = await this.productService.deleteProductById(id);
    return result;
  }

  @Post("upload")
  @UseInterceptors(
    FileInterceptor("file", {
      dest: "./files/",
      limits: {
        fileSize: 1000 * 1000 * 5, // uqual to 5MB
      },
    }),
  )
  uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: "image/jpg" })],
      }),
    )
    file: Express.Multer.File,
  ) {
    return {
      fileName: file.filename,
    };
  }
}
