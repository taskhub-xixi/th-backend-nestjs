import { HttpStatus, Inject, Injectable } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { PrismaService } from "../common/prisma.service";
import {
  CreateProductRequest,
  CreateProductResponseSuccess,
  GetProductsRequest,
  GetProductsResponseSuccess,
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

  async getProductAll() {
    this.logger.info(`[PRODUCT_SERVICE.getProductList: `);
    const products = await this.prismaService.product.findMany();
    return {
      data: {
        products: {
          products,
        },
      },
      statusCode: HttpStatus.OK,
    };
  }
}
