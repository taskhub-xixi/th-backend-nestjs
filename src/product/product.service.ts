import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { PrismaService } from "../common/prisma.service";
import {
  CreateProductRequest,
  CreateProductResponseSuccess,
  GetProductByCategoryResponse,
  GetProductsRequest,
  GetProductsResponseSuccess,
  UpdateProductRequest,
} from "../model/product.model";
import { Product } from "@prisma/client";

@Injectable()
export class ProductService {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  async createProduct(
    req: CreateProductRequest,
  ): Promise<CreateProductResponseSuccess> {
    this.logger.info(`PRODUCT_SERVICE.createProduct: ${JSON.stringify(req)}`);
    const product = await this.prismaService.product.create({
      data: {
        name: req.name,
        slug: req.slug,
        sku: req.sku,
        description: req.description,
        price: req.price,
        categoryId: req.categoryId,
        brandId: req.brandId,
      },
    });
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      slug: product.slug,
      sku: product.sku,
      description: product.description,
      originalPrice: product.originalPrice,
      categoryId: product.categoryId,
      brandId: product.brandId,
      stock: product.stock,
      lowStockThreshold: product.lowStockThreshold,
      ratingAverage: product.ratingAverage,
      ratingCount: product.ratingCount,
      reviewCount: product.reviewCount,
      isActive: product.isActive,
      metadata: product.metadata,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
      shortDescription: product.shortDescription,
      deletedAt: product.deletedAt,
    };
  }

  async getProductAll(
    req: GetProductsRequest,
  ): Promise<GetProductsResponseSuccess[]> {
    this.logger.info(
      `PRODUCT_SERVICE.getProductList: ${JSON.stringify(req.search)}`,
    );

    // const where = this.queryQondition(reqresult);
    const productRaw = await this.prismaService.product.findMany({
      where: {
        categoryId: req.categoryId !== undefined ? req.categoryId : undefined,
      },
      take: req.limit !== undefined ? req.limit : null,
      skip: req.page !== undefined ? req.page : 0,
    });

    const response: GetProductsResponseSuccess[] = productRaw.map((p) => ({
      id: p.id,
      name: p.name,
      price: p.price,
      slug: p.slug,
      sku: p.sku,
      description: p.description,
      originalPrice: p.originalPrice,
      categoryId: p.categoryId,
      brandId: p.brandId,
      stock: p.stock,
      lowStockThreshold: p.lowStockThreshold,
      ratingAverage: p.ratingAverage,
      ratingCount: p.ratingCount,
      reviewCount: p.reviewCount,
      isActive: p.isActive,
      metadata: p.metadata,
      createdAt: p.createdAt,
      updatedAt: p.updatedAt,
      shortDescription: p.shortDescription,
      deletedAt: p.deletedAt,
    }));

    console.log(typeof response);
    return response;
  }

  // async getProductById(req: number) {
  //   this.logger.info(`PRODUCT_SERVICE.getProductById: ${req}`);
  //   const products = await this.prismaService.$queryRaw<
  //     Product[]
  //   >`SELECT * FROM products WHERE id = ${req}`;
  //
  //   if (!products) {
  //     throw new HttpException("Data Not Found", 404);
  //   }
  //   const result = products.map(({ createdAt, ...rest }) => ({
  //     id: rest.id,
  //     name: rest.name,
  //     price: rest.price,
  //     description: rest.description,
  //     category: rest.category,
  //     image: rest.image,
  //   }));
  //
  //   this.logger.info(
  //     `PRODUCT_SERVICE.getProductById: ${JSON.stringify(products)}`,
  //   );
  //   return {
  //     data: result,
  //     statusCode: HttpStatus.OK,
  //   };
  // }
  //
  // async updateProductById(id: number, req: UpdateProductRequest) {
  //   const isExist = await this.prismaService.product.findUnique({
  //     where: { id },
  //   });
  //   if (!isExist) {
  //     throw new HttpException("Product not found", 404);
  //   }
  //   const data = Object.fromEntries(
  //     Object.entries(req).filter(([_, v]) => v !== undefined),
  //   );
  //
  //   const products = await this.prismaService.product.update({
  //     where: { id: id },
  //     data,
  //   });
  //
  //   return {
  //     data: {
  //       products,
  //     },
  //     statusCode: HttpStatus.OK,
  //   };
  // }

  // async deleteProductById(id: number) {
  //   const isExist = await this.prismaService.product.findUnique({
  //     where: { id: id },
  //   });
  //
  //   if (!isExist) {
  //     throw new HttpException("Product not found", 404);
  //   }
  //
  //   const result = await this.prismaService
  //     .$executeRaw`DELETE FROM products WHERE id = ${id}`;
  //
  //   return {
  //     data: {
  //       result,
  //     },
  //     statusCode: HttpStatus.OK,
  //   };
  // }

  queryQondition(req: GetProductsRequest) {
    interface whereOptions {
      name?: string;
      categoryId?: string;
      page?: number;
      limit?: number;
    }
    const where: whereOptions = {};

    if (req.search !== undefined) {
      where.name = req.search;
    }

    if (req.categoryId !== undefined) {
      where.categoryId = req.categoryId;
    }

    if (req.page !== undefined) {
      where.page = req.page;
    }

    if (req.limit !== undefined) {
      where.limit = req.limit;
    }

    return where;
  }

  async getProductByCategory(
    req: string,
  ): Promise<GetProductByCategoryResponse[]> {
    this.logger.info("PRODUCT_SERVICE.getProductByCategory: Executed");
    const category = req;
    if (!category) {
      throw new HttpException("Product not found", 404);
    }
    const rawCategory = await this.prismaService.$queryRaw<
      GetProductByCategoryResponse[]
    >`SELECT * , c.name as Category FROM products AS p JOIN categories AS c ON p.category_id = c.id
WHERE c.name = ${category} LIMIT 10`;

    const countRaw = await this.prismaService
      .$queryRaw`SELECT COUNT(*) as perCategory, c.name
FROM products as p
    JOIN categories as c ON p.category_id = c.id
WHERE c.name = ${category}
GROUP BY
    category_id, c.name;`;
    const count = Number(countRaw[0].perCategory);
    // const result = rawCategory.map(({ createdAt, updatedAt, ...rest }) => ({
    //   id: rest.id,
    //   name: rest.name,
    //   price: rest.price,
    //   description: rest.description,
    //   categoryId: rest.categoryId,
    // }));

    return {
      data: rawCategory,
      total: count,
    };
  }

  // async search(req: string): Promise<GetProductByCategoryResponse> {
  //   this.logger.info(`PRODUCT_SERVICE:search  ${req}`);
  //   const flex = req.concat("%");
  //
  //   const resultRaw = await this.prismaService.$queryRaw<
  //     Product[]
  //   >`SELECT * FROM products WHERE name LIKE ${flex}`;
  //
  //   if (!resultRaw) {
  //     throw new HttpException("Product not found", 404);
  //   }
  //
  //   const result = resultRaw.map(({ ...rest }) => ({
  //     id: rest.id,
  //     name: rest.name,
  //     price: rest.price,
  //     description: rest.description,
  //     category: rest.category,
  //     image: rest.image,
  //   }));
  //
  //   const counting = await this.prismaService.product.count({
  //     where: { name: { startsWith: flex } },
  //   });
  //
  //   return {
  //     data: result,
  //     productCount: counting,
  //     statusCode: HttpStatus.OK,
  //   };
  // }

  // async createOrder() {
  //   return null;
  // }
}
