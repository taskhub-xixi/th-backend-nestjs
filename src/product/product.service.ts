import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { PrismaService } from "../common/prisma.service";
import {
  CreateProductRequest,
  CreateProductResponseSuccess,
  GetProductsRequest,
  GetProductsResponseSuccess,
  UpdateProductRequest,
} from "../model/product.model";
import { Logger } from "winston";

@Injectable()
export class ProductService {
  @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger;
  constructor(private readonly prismaService: PrismaService) {}

  async createProduct(
    req: CreateProductRequest,
  ): Promise<CreateProductResponseSuccess> {
    this.logger.info(`PRODUCT_SERVICE.createProduct: ${JSON.stringify(req)}`);
    const user = await this.prismaService.product.create({
      data: req,
    });
    // await this.prismaService.$executeRaw`
    //   INSERT into products (name, price, description, category, image) VALUES (${req.name}, ${req.price}, ${req.description}, ${req.category}, ${req.image})`;
    return {
      data: {
        id: user.id,
        name: user.name,
        price: user.price,
        category: user.category,
        image: user.image,
      },
      statusCode: HttpStatus.CREATED,
      message: "Product created successfully",
    };
  }

  async getProductAll(
    req: GetProductsRequest,
  ): Promise<GetProductsResponseSuccess> {
    this.logger.info(`PRODUCT_SERVICE.getProductList: ${req.page}`);
    // if (!page) {
    //   page = 0;
    // }
    // if (!limit) {
    //   limit = 10;
    // }
    // if (!minPrice) {
    //   minPrice = 0;
    // }

    // PAGE
    const products = await this.prismaService
      .$queryRaw`SELECT * FROM products LIMIT 10 OFFSET ${req.page}`;
    return {
      data: {
        products,
      },
      statusCode: HttpStatus.OK,
    };
  }

  async getProductById(req: number) {
    const products: object[] = await this.prismaService
      .$queryRaw`SELECT * FROM products WHERE id = ${req}`;

    if (!products || products.length === 0) {
      throw new HttpException("Data Not Found", 404);
    }

    this.logger.info(
      `PRODUCT_SERVICE.getProductById: ${JSON.stringify(products)}`,
    );
    return {
      data: {
        products,
      },
      statusCode: HttpStatus.OK,
    };
  }

  async updateProductById(id: number, req: UpdateProductRequest) {
    const isExist = await this.prismaService.product.findUnique({
      where: { id },
    });
    if (!isExist) {
      throw new HttpException("Product not found", 404);
    }
    const data = Object.fromEntries(
      Object.entries(req).filter(([_, v]) => v !== undefined),
    );

    const products = await this.prismaService.product.update({
      where: { id: id },
      data,
    });

    return {
      data: {
        products,
      },
      statusCode: HttpStatus.OK,
    };
  }
}
