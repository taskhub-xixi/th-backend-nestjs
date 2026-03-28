import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { PrismaService } from "../common/prisma.service";
import {
  CreateProductRequest,
  CreateProductResponseSuccess,
  DeleteProductResponse,
  GetProductByCategoryResponse,
  GetProductsRequest,
  GetProductsResponseSuccess,
  SearchRequest,
  UpdateProductRequest,
  UpdateProductResponse,
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

  async getProductById(id: string): Promise<GetProductsResponseSuccess> {
    this.logger.info(`PRODUCT_SERVICE.getProductById: ${id}`);
    const data = await this.prismaService.$queryRaw<
      Product[]
    >`SELECT * FROM products WHERE id = ${id} LIMIT 5`;

    if (data.length === 0) {
      throw new HttpException("Data Not Found", 404);
    }

    this.logger.info(`PRODUCT_SERVICE.getProductById: ${JSON.stringify(data)}`);

    return {
      products: data,
    };
  }

  async updateProductById(
    id: string,
    req: UpdateProductRequest,
  ): Promise<UpdateProductResponse> {
    const isExist = await this.prismaService.product.findUnique({
      where: { id },
    });
    if (!isExist) {
      throw new HttpException("Product not found", 404);
    }

    const product = await this.prismaService.product.update({
      where: { id: id },
      data: req,
    });

    return {
      products: product,
    };
  }

  async deleteProductById(id: string): Promise<DeleteProductResponse> {
    const isExist = await this.prismaService.product.findUnique({
      where: { id },
    });

    if (!isExist) {
      throw new HttpException("Product not found", 404);
    }

    await this.prismaService.$executeRaw`DELETE FROM products WHERE id = ${id}`;

    const product = await this.prismaService
      .$queryRaw`SELECT * FROM products WHERE id = ${id}`;

    let dtd: boolean = false;

    if (product) {
      throw new HttpException("Product not deleted", 404);
    }

    dtd = true;

    return {
      deleted: dtd,
    };
  }

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

    const totalCategory = Number(total[0].perCategory);

    return {
      products: rawCategory,
      total: totalCategory,
    };
  }

  async search(name: string): Promise<GetProductByCategoryResponse> {
    this.logger.info(`PRODUCT_SERVICE:search ${name}`);
    const flex = name.concat("%");

    const resultRaw = await this.prismaService.$queryRaw<
      Product[]
    >`SELECT * FROM products WHERE name LIKE ${flex}`;

    if (!resultRaw || resultRaw.length === 0) {
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
