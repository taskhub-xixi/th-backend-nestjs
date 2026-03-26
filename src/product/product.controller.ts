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
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Public } from "../common/decorator";
import { Admin } from "../common/decorator/admin.decorator";
import { JwtAuthGuard } from "../common/guards";
import { AdminGuard } from "../common/guards/admin.guard";
import { PublicGuard } from "../common/guards/public.guards";
import {
  CreateProductRequest,
  CreateProductResponseSuccess,
  GetProductByCategoryResponse,
  GetProductsRequest,
  GetProductsResponseSuccess,
  UpdateProductRequest,
} from "../model/product.model";
import { ProductService } from "./product.service";
import { WebResponse } from "../model/web.mode";

@Controller("/products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Admin()
  @Public()
  @UseGuards(PublicGuard)
  @UseGuards(AdminGuard)
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createProduct(
    @Body() req: CreateProductRequest,
  ): Promise<WebResponse<CreateProductResponseSuccess>> {
    const result = await this.productService.createProduct(req);
    return {
      data: result,
      statusCode: HttpStatus.CREATED,
    };
  }

  @Admin()
  @Public()
  @UseGuards(PublicGuard)
  @UseGuards(AdminGuard)
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get()
  async getProductAll(
    @Query() req: GetProductsRequest,
  ): Promise<WebResponse<GetProductsResponseSuccess[]>> {
    const result = await this.productService.getProductAll(req);
    return {
      data: result,
      statusCode: HttpStatus.OK,
    };
  }

  @Admin()
  @Public()
  @UseGuards(AdminGuard)
  @UseGuards(PublicGuard)
  @UseGuards(JwtAuthGuard)
  @Get("category")
  async getProductByCategory(@Req() req) {
    const data = await this.productService.getProductByCategory(
      req.query.category,
    );
    return data;
  }
  //
  // @Admin()
  // @Public()
  // @UseGuards(AdminGuard)
  // @UseGuards(PublicGuard)
  // @UseGuards(JwtAuthGuard)
  // @Get("search")
  // async searchProductName(@Req() req) {
  //   console.log(typeof req);
  //   const data = await this.productService.search(req.query.name);
  //   return data;
  // }
  //
  // @Admin()
  // @Public()
  // @UseGuards(PublicGuard)
  // @UseGuards(AdminGuard)
  // @Post("upload")
  // @UseInterceptors(
  //   FileInterceptor("file", {
  //     dest: "./files/",
  //     limits: {
  //       fileSize: 1000 * 1000 * 5, // uqual to 5MB
  //     },
  //   }),
  // )
  // uploadFile(
  //   @UploadedFile(
  //     new ParseFilePipe({
  //       validators: [new FileTypeValidator({ fileType: "image/jpg" })],
  //     }),
  //   )
  //   file: Express.Multer.File,
  // ) {
  //   return {
  //     fileName: file.filename,
  //   };
  // }
  //
  // @Admin()
  // @Public()
  // @UseGuards(PublicGuard)
  // @UseGuards(AdminGuard)
  // @HttpCode(HttpStatus.OK)
  // @Get("/single/:id")
  // async getProductById(@Param("id") id: number) {
  //   const result = await this.productService.getProductById(id);
  //   return result;
  // }
  //
  // @Admin()
  // @Public()
  // @UseGuards(PublicGuard)
  // @UseGuards(AdminGuard)
  // @HttpCode(HttpStatus.OK)
  // @Patch("/update/:id")
  // async updateProductById(
  //   @Param("id") id: number,
  //   @Body() req: UpdateProductRequest,
  // ) {
  //   const result = await this.productService.updateProductById(id, req);
  //   return result;
  // }
  //
  // @Admin()
  // @Public()
  // @UseGuards(PublicGuard)
  // @UseGuards(AdminGuard)
  // @HttpCode(HttpStatus.OK)
  // @Delete("/delete/:id")
  // async deleteProductById(@Param("id") id: number) {
  //   const result = await this.productService.deleteProductById(id);
  //   return result;
  // }
}
