import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { PrismaService } from "../common/prisma.service";
import {
  CreateProductRequest,
  CreateProductResponseSuccess,
  GetProductsRequest,
  GetProductsResponseSuccess,
  UpdateProductRequest,
} from "../model/product.model";
import { Decimal } from "@prisma/client/runtime/client";

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
    this.logger.info(
      `PRODUCT_SERVICE.getProductList: ${JSON.stringify(req.search)}`,
    );

    const where = this.queryQondition(req);
    const products = await this.prismaService.product.findMany({ where });
    return {
      data: {
        products,
      },
      statusCode: HttpStatus.OK,
    };
  }

  async getProductById(req: number) {
    this.logger.info(`PRODUCT_SERVICE.getProductById: ${req}`);
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

  async deleteProductById(id: number) {
    const isExist = await this.prismaService.product.findUnique({
      where: { id: id },
    });

    if (!isExist) {
      throw new HttpException("Product not found", 404);
    }

    const result = await this.prismaService
      .$executeRaw`DELETE FROM products WHERE id = ${id}`;

    return {
      data: {
        result,
      },
      statusCode: HttpStatus.OK,
    };
  }

  queryQondition(req: GetProductsRequest) {
    interface whereOptions {
      name?: string;
      category?: string;
      page?: number;
    }
    const where: whereOptions = {};

    if (req.search !== undefined) {
      where.name = req.search;
    }

    if (req.category !== undefined) {
      where.category = req.category;
    }

    if (req.page !== undefined) {
      where.page = req.page;
    }

    // if (req.limit !== undefined) {
    //   where.limit = req.limit;
    // }

    return where;
  }
}
