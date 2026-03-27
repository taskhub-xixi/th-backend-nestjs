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
  SearchRequest,
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
  ): Promise<GetProductsResponseSuccess> {
    this.logger.info(
      `PRODUCT_SERVICE.getProductList: ${JSON.stringify(req.search)}`,
    );

    // const where = this.queryQondition(reqresult);
    const limit = Number(req.limit);
    const total = await this.prismaService.product.count();
    let totalPages: number;
    if (limit === 20) {
      totalPages = Math.ceil(total / 20);
    } else {
      totalPages = Math.ceil(total / limit);
    }
    const page = Number(req.page);
    const countPage = limit * page - 20;

    const productRaw = await this.prismaService.product.findMany({
      where: {
        categoryId: req.category !== undefined ? req.category : undefined,
      },
      take: limit,
      skip: page === 1 ? 0 : countPage,
    });

    return {
      products: productRaw,
      total: total,
      limit: limit,
      page: page,
      totalPages: totalPages,
    };
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

  async getProductByCategory(
    req: GetProductsRequest,
  ): Promise<GetProductByCategoryResponse> {
    this.logger.info(
      `PRODUCT_SERVICE.getProductByCategory: ${JSON.stringify(req)}`,
    );
    const category = req.category;
    const limit = Number(req.limit);

    let skip: number;
    let page = Number(req.page);

    if (page === 1) {
      page = 0;
    } else {
      skip = limit * page - 20;
    }

    if (!category) {
      throw new HttpException("Product not found", 404);
    }

    const rawCategory = await this.prismaService.$queryRaw<
      Product[]
    >`SELECT p.*, c.name as category_name
FROM products AS p
    JOIN categories as c ON p.category_id = c.id
WHERE
    c.name LIKE ${category} 
LIMIT ${limit}
OFFSET
    ${skip}`;

    const total = await this.prismaService
      .$queryRaw`SELECT COUNT(*) as perCategory, c.name
FROM products as p
    JOIN categories as c ON p.category_id = c.id
WHERE c.name = ${category}
GROUP BY
    category_id, c.name;`;
    // console.log(total);

    const totalCategory = Number(total[0].perCategory);

    // console.log(count);

    return {
      products: rawCategory,
      total: totalCategory,
    };
  }

  async search(req: string): Promise<GetProductByCategoryResponse> {
    this.logger.info(`PRODUCT_SERVICE:search ${req}`);
    const flex = req.concat("%");

    const resultRaw = await this.prismaService.$queryRaw<
      Product[]
    >`SELECT * FROM products WHERE name LIKE ${flex}`;

    if (!resultRaw) {
      throw new HttpException("Product not found", 404);
    }

    const counting = await this.prismaService.product.count({
      where: { name: { startsWith: flex } },
    });

    return {
      products: resultRaw,
      total: counting,
    };
  }
}
