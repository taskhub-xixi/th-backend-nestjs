import { HttpException, Inject, Injectable } from "@nestjs/common";
import { Brand, Category, Product } from "@prisma/client";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { PrismaService } from "../common/prisma.service";
import {
  CreateProductRequest,
  CreateProductResponseSuccess,
  DeleteProductResponse,
  GetProductByCategoryResponse,
  GetProductResponseSuccessQuery,
  GetProductsRequest,
  GetProductsResponseSuccess,
  GetProductsResponseSuccessAll,
  TotalResultCategories,
  UpdateProductRequest,
  UpdateProductResponse,
} from "../model/product.model";

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
    const category_id = await this.prismaService.category.findFirst({
      where: { name: req.categoryId },
    });

    if (!category_id) {
      throw new HttpException("category not found", 403);
    }

    const checkBrandId = await this.prismaService.brand.findFirst({
      where: { name: req.brandId },
    });

    if (!checkBrandId) {
      await this.createBrand(req.brandId);
    }

    const brand_id = await this.prismaService.brand.findFirst({
      where: { name: req.brandId },
    });

    if (!brand_id) {
      throw new HttpException("Brand not found", 403);
    }

    await this.prismaService.$executeRaw<Product>`
    insert into products (
        name, slug, sku, description, short_description, price, 
        original_price, category_id, brand_id, stock, low_stock_threshold,
        rating_average, rating_count, review_count, is_active, metadata
    ) values (
        ${req.name}, ${req.slug}, ${req.sku}, ${req.description}, 
        ${req.shortDescription}, ${req.price}, ${req.originalPrice},
        ${category_id.id}, ${brand_id.id}, ${req.stock}, ${req.lowStockThreshold},
        ${req.ratingAverage}, ${req.ratingCount}, ${req.reviewCount},
        ${req.isActive}, ${req.metadata}
    )`;

    const product = await this.prismaService.product.findUnique({
      where: {
        slug: req.slug,
      },
    });

    if (!product) {
      throw new HttpException("Product not created", 403);
    }

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
  ): Promise<GetProductsResponseSuccessAll> {
    this.logger.info(`PRODUCT_SERVICE.getProductAll: ${JSON.stringify(req)}`);

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

    // const dataProduct = await this.prismaService.product.findMany({
    //   where: {
    //     categoryId: req.category !== undefined ? req.category : undefined,
    //   },
    //   take: limit,
    //   skip: page === 1 ? 0 : countPage,
    // });

    // if (page === 1) {
    //   page = 0;
    // }

    const dataProduct = await this.prismaService.$queryRaw<
      GetProductResponseSuccessQuery[]
    >`
      select p.*, 
      c.id as category_id, c.name as category_name, c.slug as category_slug, 
      b.id as brand_id, b.name as brand_name 
      from products as p 
      left join brands as b on p.brand_id = b.id
      left join categories as c on c.id = p.category_id
      limit ${limit}
      offset ${page === 1 ? 0 : countPage};`;

    const dp = dataProduct.map((i) => ({
      id: i.id,
      name: i.name,
      price: i.price,
      originalPrice: i.original_price,
      slug: i.slug,
      sku: i.slug,
      description: i.description,
      shortDescription: i.short_description,
      category: {
        id: i.category_id,
        name: i.category_name,
        slug: i.category_slug,
      },
      brand: {
        id: i.brand_id,
        name: i.brand_name,
      },
      stock: i.stock,
      lowStockThreshold: i.low_stock_threshold,
      ratingAverage: i.rating_average,
      ratingCount: i.rating_count,
      reviewCount: i.review_count,
      isActive: i.isActive,
      metadata: i.metadata,
      createdAt: i.created_at,
    }));

    return {
      products: dp,
      total: total,
      limit: limit,
      page: page,
      totalPages: totalPages,
    };
  }

  async getProductById(id: string): Promise<GetProductsResponseSuccess> {
    this.logger.info(`PRODUCT_SERVICE.getProductById: ${id}`);

    const dataProduct = await this.prismaService
      .$queryRaw<GetProductResponseSuccessQuery>`
      select p.*, b.*, c.* from product as p 
      left join brands as b on p.brand_id = b.id
      left join categories as c on c.id = p.category_id where p.id = ${id}`;

    const product = await this.prismaService.product.findUnique({
      where: { id: id },
    });

    const total = await this.prismaService.product.count({ where: { id: id } });

    if (!product) {
      throw new HttpException("Data Not Found", 404);
    }

    const dataCategory = await this.prismaService
      .$queryRaw<Category>`select * from categories where id = ${product.categoryId}`;

    const dataBrand = await this.prismaService
      .$queryRaw<Brand>`select * from brand_id where id = ${product.brandId}`;

    if (!dataProduct) {
      throw new HttpException("Data Not Found", 404);
    }

    return {
      products: {
        id: dataProduct.id,
        name: dataProduct.name,
        price: dataProduct.price,
        originalPrice: dataProduct.original_price,
        slug: dataProduct.slug,
        sku: dataProduct.slug,
        description: dataProduct.description,
        shortDescription: dataProduct.short_description,
        category: {
          id: dataCategory.id,
          name: dataCategory.name,
          slug: dataCategory.slug,
        },
        brand: {
          id: dataBrand.id,
          name: dataBrand.name,
        },
        stock: dataProduct.stock,
        lowStockThreshold: dataProduct.low_stock_threshold,
        ratingAverage: dataProduct.rating_average,
        ratingCount: dataProduct.rating_count,
        reviewCount: dataProduct.review_count,
        isActive: dataProduct.isActive,
        metadata: dataProduct.metadata,
        createdAt: dataProduct.created_at,
      },
      total: total,
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

  // async getProductBySlug() {
  //     const product = await this.prismaService.product
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
      skip = 0;
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

    const total = await this.prismaService.$queryRaw<
      TotalResultCategories[]
    >`SELECT COUNT(*) as perCategory, c.name
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

  async search(name: string): Promise<GetProductsResponseSuccess> {
    this.logger.info(`PRODUCT_SERVICE:search ${name}`);

    if (!name || typeof name !== "string") {
      throw new HttpException("Search term is required", 400);
    }

    const sanitized = name.replace("/%/g", "\\%").replace("/_/g", "\\_");

    const flex = sanitized.concat("%");

    const dataProduct = await this.prismaService
      .$queryRaw<GetProductResponseSuccessQuery>`
      SELECT * FROM products as p 
      left join categories as c on c.id = p.category_id 
      left join brands as b on b.id = p.brand_id
      WHERE p.name LIKE ${flex}`;

    if (!dataProduct) {
      throw new HttpException("Product not found", 404);
    }

    const counting = await this.prismaService.product.count({
      where: { name: { startsWith: flex } },
    });

    return {
      products: {
        id: dataProduct.id,
        name: dataProduct.name,
        price: dataProduct.price,
        originalPrice: dataProduct.original_price,
        slug: dataProduct.slug,
        sku: dataProduct.slug,
        description: dataProduct.description,
        shortDescription: dataProduct.short_description,
        category: {
          id: dataProduct.category_id,
          name: dataProduct.category_name,
          slug: dataProduct.category_slug,
        },
        brand: {
          id: dataProduct.brand_id,
          name: dataProduct.brand_name,
        },
        stock: dataProduct.stock,
        lowStockThreshold: dataProduct.low_stock_threshold,
        ratingAverage: dataProduct.rating_average,
        ratingCount: dataProduct.rating_count,
        reviewCount: dataProduct.review_count,
        isActive: dataProduct.isActive,
        metadata: dataProduct.metadata,
        createdAt: dataProduct.created_at,
      },
      total: counting,
    };
  }

  async createBrand(brand: string): Promise<void> {
    await this.prismaService.brand.create({
      data: {
        name: brand,
        slug: brand.toLowerCase(),
        description: brand,
        isActive: true,
        websiteUrl: `www.${brand.toLowerCase()}.com`,
      },
    });
  }
}
