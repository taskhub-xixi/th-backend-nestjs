
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductVariant
 * 
 */
export type ProductVariant = $Result.DefaultSelection<Prisma.$ProductVariantPayload>
/**
 * Model ProductImage
 * 
 */
export type ProductImage = $Result.DefaultSelection<Prisma.$ProductImagePayload>
/**
 * Model ProductReview
 * 
 */
export type ProductReview = $Result.DefaultSelection<Prisma.$ProductReviewPayload>
/**
 * Model ProductTag
 * 
 */
export type ProductTag = $Result.DefaultSelection<Prisma.$ProductTagPayload>
/**
 * Model ProductAttribute
 * 
 */
export type ProductAttribute = $Result.DefaultSelection<Prisma.$ProductAttributePayload>
/**
 * Model Coupon
 * 
 */
export type Coupon = $Result.DefaultSelection<Prisma.$CouponPayload>
/**
 * Model CouponUsage
 * 
 */
export type CouponUsage = $Result.DefaultSelection<Prisma.$CouponUsagePayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model OrderStatusHistory
 * 
 */
export type OrderStatusHistory = $Result.DefaultSelection<Prisma.$OrderStatusHistoryPayload>
/**
 * Model user_addresses
 * 
 */
export type user_addresses = $Result.DefaultSelection<Prisma.$user_addressesPayload>
/**
 * Model auth_tokens
 * 
 */
export type auth_tokens = $Result.DefaultSelection<Prisma.$auth_tokensPayload>
/**
 * Model password_reset_tokens
 * 
 */
export type password_reset_tokens = $Result.DefaultSelection<Prisma.$password_reset_tokensPayload>
/**
 * Model email_verification_tokens
 * 
 */
export type email_verification_tokens = $Result.DefaultSelection<Prisma.$email_verification_tokensPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productVariant`: Exposes CRUD operations for the **ProductVariant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductVariants
    * const productVariants = await prisma.productVariant.findMany()
    * ```
    */
  get productVariant(): Prisma.ProductVariantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productImage`: Exposes CRUD operations for the **ProductImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductImages
    * const productImages = await prisma.productImage.findMany()
    * ```
    */
  get productImage(): Prisma.ProductImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productReview`: Exposes CRUD operations for the **ProductReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductReviews
    * const productReviews = await prisma.productReview.findMany()
    * ```
    */
  get productReview(): Prisma.ProductReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productTag`: Exposes CRUD operations for the **ProductTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductTags
    * const productTags = await prisma.productTag.findMany()
    * ```
    */
  get productTag(): Prisma.ProductTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productAttribute`: Exposes CRUD operations for the **ProductAttribute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductAttributes
    * const productAttributes = await prisma.productAttribute.findMany()
    * ```
    */
  get productAttribute(): Prisma.ProductAttributeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coupon`: Exposes CRUD operations for the **Coupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coupons
    * const coupons = await prisma.coupon.findMany()
    * ```
    */
  get coupon(): Prisma.CouponDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.couponUsage`: Exposes CRUD operations for the **CouponUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CouponUsages
    * const couponUsages = await prisma.couponUsage.findMany()
    * ```
    */
  get couponUsage(): Prisma.CouponUsageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderStatusHistory`: Exposes CRUD operations for the **OrderStatusHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderStatusHistories
    * const orderStatusHistories = await prisma.orderStatusHistory.findMany()
    * ```
    */
  get orderStatusHistory(): Prisma.OrderStatusHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_addresses`: Exposes CRUD operations for the **user_addresses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_addresses
    * const user_addresses = await prisma.user_addresses.findMany()
    * ```
    */
  get user_addresses(): Prisma.user_addressesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auth_tokens`: Exposes CRUD operations for the **auth_tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auth_tokens
    * const auth_tokens = await prisma.auth_tokens.findMany()
    * ```
    */
  get auth_tokens(): Prisma.auth_tokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.password_reset_tokens`: Exposes CRUD operations for the **password_reset_tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Password_reset_tokens
    * const password_reset_tokens = await prisma.password_reset_tokens.findMany()
    * ```
    */
  get password_reset_tokens(): Prisma.password_reset_tokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.email_verification_tokens`: Exposes CRUD operations for the **email_verification_tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Email_verification_tokens
    * const email_verification_tokens = await prisma.email_verification_tokens.findMany()
    * ```
    */
  get email_verification_tokens(): Prisma.email_verification_tokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Category: 'Category',
    Brand: 'Brand',
    Product: 'Product',
    ProductVariant: 'ProductVariant',
    ProductImage: 'ProductImage',
    ProductReview: 'ProductReview',
    ProductTag: 'ProductTag',
    ProductAttribute: 'ProductAttribute',
    Coupon: 'Coupon',
    CouponUsage: 'CouponUsage',
    Order: 'Order',
    OrderItem: 'OrderItem',
    OrderStatusHistory: 'OrderStatusHistory',
    user_addresses: 'user_addresses',
    auth_tokens: 'auth_tokens',
    password_reset_tokens: 'password_reset_tokens',
    email_verification_tokens: 'email_verification_tokens',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "category" | "brand" | "product" | "productVariant" | "productImage" | "productReview" | "productTag" | "productAttribute" | "coupon" | "couponUsage" | "order" | "orderItem" | "orderStatusHistory" | "user_addresses" | "auth_tokens" | "password_reset_tokens" | "email_verification_tokens" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductVariant: {
        payload: Prisma.$ProductVariantPayload<ExtArgs>
        fields: Prisma.ProductVariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductVariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductVariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findFirst: {
            args: Prisma.ProductVariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductVariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findMany: {
            args: Prisma.ProductVariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          create: {
            args: Prisma.ProductVariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          createMany: {
            args: Prisma.ProductVariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductVariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          update: {
            args: Prisma.ProductVariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          deleteMany: {
            args: Prisma.ProductVariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductVariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductVariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          aggregate: {
            args: Prisma.ProductVariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductVariant>
          }
          groupBy: {
            args: Prisma.ProductVariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductVariantCountArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantCountAggregateOutputType> | number
          }
        }
      }
      ProductImage: {
        payload: Prisma.$ProductImagePayload<ExtArgs>
        fields: Prisma.ProductImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findFirst: {
            args: Prisma.ProductImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findMany: {
            args: Prisma.ProductImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          create: {
            args: Prisma.ProductImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          createMany: {
            args: Prisma.ProductImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          update: {
            args: Prisma.ProductImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          deleteMany: {
            args: Prisma.ProductImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          aggregate: {
            args: Prisma.ProductImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductImage>
          }
          groupBy: {
            args: Prisma.ProductImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductImageCountArgs<ExtArgs>
            result: $Utils.Optional<ProductImageCountAggregateOutputType> | number
          }
        }
      }
      ProductReview: {
        payload: Prisma.$ProductReviewPayload<ExtArgs>
        fields: Prisma.ProductReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload>
          }
          findFirst: {
            args: Prisma.ProductReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload>
          }
          findMany: {
            args: Prisma.ProductReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload>[]
          }
          create: {
            args: Prisma.ProductReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload>
          }
          createMany: {
            args: Prisma.ProductReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload>
          }
          update: {
            args: Prisma.ProductReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload>
          }
          deleteMany: {
            args: Prisma.ProductReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload>
          }
          aggregate: {
            args: Prisma.ProductReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductReview>
          }
          groupBy: {
            args: Prisma.ProductReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ProductReviewCountAggregateOutputType> | number
          }
        }
      }
      ProductTag: {
        payload: Prisma.$ProductTagPayload<ExtArgs>
        fields: Prisma.ProductTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagPayload>
          }
          findFirst: {
            args: Prisma.ProductTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagPayload>
          }
          findMany: {
            args: Prisma.ProductTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagPayload>[]
          }
          create: {
            args: Prisma.ProductTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagPayload>
          }
          createMany: {
            args: Prisma.ProductTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagPayload>
          }
          update: {
            args: Prisma.ProductTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagPayload>
          }
          deleteMany: {
            args: Prisma.ProductTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagPayload>
          }
          aggregate: {
            args: Prisma.ProductTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductTag>
          }
          groupBy: {
            args: Prisma.ProductTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductTagCountArgs<ExtArgs>
            result: $Utils.Optional<ProductTagCountAggregateOutputType> | number
          }
        }
      }
      ProductAttribute: {
        payload: Prisma.$ProductAttributePayload<ExtArgs>
        fields: Prisma.ProductAttributeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductAttributeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductAttributeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributePayload>
          }
          findFirst: {
            args: Prisma.ProductAttributeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductAttributeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributePayload>
          }
          findMany: {
            args: Prisma.ProductAttributeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributePayload>[]
          }
          create: {
            args: Prisma.ProductAttributeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributePayload>
          }
          createMany: {
            args: Prisma.ProductAttributeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductAttributeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributePayload>
          }
          update: {
            args: Prisma.ProductAttributeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributePayload>
          }
          deleteMany: {
            args: Prisma.ProductAttributeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductAttributeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductAttributeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributePayload>
          }
          aggregate: {
            args: Prisma.ProductAttributeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductAttribute>
          }
          groupBy: {
            args: Prisma.ProductAttributeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductAttributeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductAttributeCountArgs<ExtArgs>
            result: $Utils.Optional<ProductAttributeCountAggregateOutputType> | number
          }
        }
      }
      Coupon: {
        payload: Prisma.$CouponPayload<ExtArgs>
        fields: Prisma.CouponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CouponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CouponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findFirst: {
            args: Prisma.CouponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CouponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findMany: {
            args: Prisma.CouponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          create: {
            args: Prisma.CouponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          createMany: {
            args: Prisma.CouponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CouponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          update: {
            args: Prisma.CouponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          deleteMany: {
            args: Prisma.CouponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CouponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CouponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          aggregate: {
            args: Prisma.CouponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoupon>
          }
          groupBy: {
            args: Prisma.CouponGroupByArgs<ExtArgs>
            result: $Utils.Optional<CouponGroupByOutputType>[]
          }
          count: {
            args: Prisma.CouponCountArgs<ExtArgs>
            result: $Utils.Optional<CouponCountAggregateOutputType> | number
          }
        }
      }
      CouponUsage: {
        payload: Prisma.$CouponUsagePayload<ExtArgs>
        fields: Prisma.CouponUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CouponUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CouponUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUsagePayload>
          }
          findFirst: {
            args: Prisma.CouponUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CouponUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUsagePayload>
          }
          findMany: {
            args: Prisma.CouponUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUsagePayload>[]
          }
          create: {
            args: Prisma.CouponUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUsagePayload>
          }
          createMany: {
            args: Prisma.CouponUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CouponUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUsagePayload>
          }
          update: {
            args: Prisma.CouponUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUsagePayload>
          }
          deleteMany: {
            args: Prisma.CouponUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CouponUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CouponUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUsagePayload>
          }
          aggregate: {
            args: Prisma.CouponUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCouponUsage>
          }
          groupBy: {
            args: Prisma.CouponUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CouponUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.CouponUsageCountArgs<ExtArgs>
            result: $Utils.Optional<CouponUsageCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      OrderStatusHistory: {
        payload: Prisma.$OrderStatusHistoryPayload<ExtArgs>
        fields: Prisma.OrderStatusHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderStatusHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderStatusHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>
          }
          findFirst: {
            args: Prisma.OrderStatusHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderStatusHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>
          }
          findMany: {
            args: Prisma.OrderStatusHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>[]
          }
          create: {
            args: Prisma.OrderStatusHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>
          }
          createMany: {
            args: Prisma.OrderStatusHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderStatusHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>
          }
          update: {
            args: Prisma.OrderStatusHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>
          }
          deleteMany: {
            args: Prisma.OrderStatusHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderStatusHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderStatusHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>
          }
          aggregate: {
            args: Prisma.OrderStatusHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderStatusHistory>
          }
          groupBy: {
            args: Prisma.OrderStatusHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderStatusHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderStatusHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<OrderStatusHistoryCountAggregateOutputType> | number
          }
        }
      }
      user_addresses: {
        payload: Prisma.$user_addressesPayload<ExtArgs>
        fields: Prisma.user_addressesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_addressesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_addressesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressesPayload>
          }
          findFirst: {
            args: Prisma.user_addressesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_addressesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressesPayload>
          }
          findMany: {
            args: Prisma.user_addressesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressesPayload>[]
          }
          create: {
            args: Prisma.user_addressesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressesPayload>
          }
          createMany: {
            args: Prisma.user_addressesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_addressesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressesPayload>
          }
          update: {
            args: Prisma.user_addressesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressesPayload>
          }
          deleteMany: {
            args: Prisma.user_addressesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_addressesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_addressesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressesPayload>
          }
          aggregate: {
            args: Prisma.User_addressesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_addresses>
          }
          groupBy: {
            args: Prisma.user_addressesGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_addressesGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_addressesCountArgs<ExtArgs>
            result: $Utils.Optional<User_addressesCountAggregateOutputType> | number
          }
        }
      }
      auth_tokens: {
        payload: Prisma.$auth_tokensPayload<ExtArgs>
        fields: Prisma.auth_tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.auth_tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.auth_tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_tokensPayload>
          }
          findFirst: {
            args: Prisma.auth_tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.auth_tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_tokensPayload>
          }
          findMany: {
            args: Prisma.auth_tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_tokensPayload>[]
          }
          create: {
            args: Prisma.auth_tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_tokensPayload>
          }
          createMany: {
            args: Prisma.auth_tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.auth_tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_tokensPayload>
          }
          update: {
            args: Prisma.auth_tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_tokensPayload>
          }
          deleteMany: {
            args: Prisma.auth_tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.auth_tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.auth_tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_tokensPayload>
          }
          aggregate: {
            args: Prisma.Auth_tokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuth_tokens>
          }
          groupBy: {
            args: Prisma.auth_tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<Auth_tokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.auth_tokensCountArgs<ExtArgs>
            result: $Utils.Optional<Auth_tokensCountAggregateOutputType> | number
          }
        }
      }
      password_reset_tokens: {
        payload: Prisma.$password_reset_tokensPayload<ExtArgs>
        fields: Prisma.password_reset_tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.password_reset_tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.password_reset_tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          findFirst: {
            args: Prisma.password_reset_tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.password_reset_tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          findMany: {
            args: Prisma.password_reset_tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>[]
          }
          create: {
            args: Prisma.password_reset_tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          createMany: {
            args: Prisma.password_reset_tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.password_reset_tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          update: {
            args: Prisma.password_reset_tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          deleteMany: {
            args: Prisma.password_reset_tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.password_reset_tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.password_reset_tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          aggregate: {
            args: Prisma.Password_reset_tokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassword_reset_tokens>
          }
          groupBy: {
            args: Prisma.password_reset_tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<Password_reset_tokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.password_reset_tokensCountArgs<ExtArgs>
            result: $Utils.Optional<Password_reset_tokensCountAggregateOutputType> | number
          }
        }
      }
      email_verification_tokens: {
        payload: Prisma.$email_verification_tokensPayload<ExtArgs>
        fields: Prisma.email_verification_tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.email_verification_tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verification_tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.email_verification_tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verification_tokensPayload>
          }
          findFirst: {
            args: Prisma.email_verification_tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verification_tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.email_verification_tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verification_tokensPayload>
          }
          findMany: {
            args: Prisma.email_verification_tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verification_tokensPayload>[]
          }
          create: {
            args: Prisma.email_verification_tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verification_tokensPayload>
          }
          createMany: {
            args: Prisma.email_verification_tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.email_verification_tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verification_tokensPayload>
          }
          update: {
            args: Prisma.email_verification_tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verification_tokensPayload>
          }
          deleteMany: {
            args: Prisma.email_verification_tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.email_verification_tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.email_verification_tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verification_tokensPayload>
          }
          aggregate: {
            args: Prisma.Email_verification_tokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmail_verification_tokens>
          }
          groupBy: {
            args: Prisma.email_verification_tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<Email_verification_tokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.email_verification_tokensCountArgs<ExtArgs>
            result: $Utils.Optional<Email_verification_tokensCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    category?: CategoryOmit
    brand?: BrandOmit
    product?: ProductOmit
    productVariant?: ProductVariantOmit
    productImage?: ProductImageOmit
    productReview?: ProductReviewOmit
    productTag?: ProductTagOmit
    productAttribute?: ProductAttributeOmit
    coupon?: CouponOmit
    couponUsage?: CouponUsageOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
    orderStatusHistory?: OrderStatusHistoryOmit
    user_addresses?: user_addressesOmit
    auth_tokens?: auth_tokensOmit
    password_reset_tokens?: password_reset_tokensOmit
    email_verification_tokens?: email_verification_tokensOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    authTokens: number
    passwordResetTokens: number
    emailVerificationTokens: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authTokens?: boolean | UsersCountOutputTypeCountAuthTokensArgs
    passwordResetTokens?: boolean | UsersCountOutputTypeCountPasswordResetTokensArgs
    emailVerificationTokens?: boolean | UsersCountOutputTypeCountEmailVerificationTokensArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAuthTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_tokensWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPasswordResetTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: password_reset_tokensWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEmailVerificationTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: email_verification_tokensWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type CategorySumAggregateOutputType = {
    sortOrder: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    iconUrl: string | null
    imageUrl: string | null
    parentId: string | null
    sortOrder: number | null
    isActive: boolean | null
    metadata: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    iconUrl: string | null
    imageUrl: string | null
    parentId: string | null
    sortOrder: number | null
    isActive: boolean | null
    metadata: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    iconUrl: number
    imageUrl: number
    parentId: number
    sortOrder: number
    isActive: number
    metadata: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    sortOrder?: true
  }

  export type CategorySumAggregateInputType = {
    sortOrder?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    iconUrl?: true
    imageUrl?: true
    parentId?: true
    sortOrder?: true
    isActive?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    iconUrl?: true
    imageUrl?: true
    parentId?: true
    sortOrder?: true
    isActive?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    iconUrl?: true
    imageUrl?: true
    parentId?: true
    sortOrder?: true
    isActive?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    iconUrl: string | null
    imageUrl: string | null
    parentId: string | null
    sortOrder: number | null
    isActive: boolean
    metadata: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    iconUrl?: boolean
    imageUrl?: boolean
    parentId?: boolean
    sortOrder?: boolean
    isActive?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    iconUrl?: boolean
    imageUrl?: boolean
    parentId?: boolean
    sortOrder?: boolean
    isActive?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "iconUrl" | "imageUrl" | "parentId" | "sortOrder" | "isActive" | "metadata" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["category"]>

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      iconUrl: string | null
      imageUrl: string | null
      parentId: string | null
      sortOrder: number | null
      isActive: boolean
      metadata: string | null
      createdAt: Date | null
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly iconUrl: FieldRef<"Category", 'String'>
    readonly imageUrl: FieldRef<"Category", 'String'>
    readonly parentId: FieldRef<"Category", 'String'>
    readonly sortOrder: FieldRef<"Category", 'Int'>
    readonly isActive: FieldRef<"Category", 'Boolean'>
    readonly metadata: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
    readonly deletedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
  }


  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    logoUrl: string | null
    description: string | null
    websiteUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type BrandMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    logoUrl: string | null
    description: string | null
    websiteUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    logoUrl: number
    description: number
    websiteUrl: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type BrandMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    logoUrl?: true
    description?: true
    websiteUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    logoUrl?: true
    description?: true
    websiteUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    logoUrl?: true
    description?: true
    websiteUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    id: string
    name: string
    slug: string
    logoUrl: string | null
    description: string | null
    websiteUrl: string | null
    isActive: boolean
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    logoUrl?: boolean
    description?: boolean
    websiteUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["brand"]>



  export type BrandSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    logoUrl?: boolean
    description?: boolean
    websiteUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type BrandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "logoUrl" | "description" | "websiteUrl" | "isActive" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["brand"]>

  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      logoUrl: string | null
      description: string | null
      websiteUrl: string | null
      isActive: boolean
      createdAt: Date | null
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }

  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandFindUniqueArgs>(args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandFindFirstArgs>(args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandFindManyArgs>(args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
     */
    create<T extends BrandCreateArgs>(args: SelectSubset<T, BrandCreateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandCreateManyArgs>(args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
     */
    delete<T extends BrandDeleteArgs>(args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandUpdateArgs>(args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandDeleteManyArgs>(args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandUpdateManyArgs>(args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
     */
    upsert<T extends BrandUpsertArgs>(args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Brand model
   */
  interface BrandFieldRefs {
    readonly id: FieldRef<"Brand", 'String'>
    readonly name: FieldRef<"Brand", 'String'>
    readonly slug: FieldRef<"Brand", 'String'>
    readonly logoUrl: FieldRef<"Brand", 'String'>
    readonly description: FieldRef<"Brand", 'String'>
    readonly websiteUrl: FieldRef<"Brand", 'String'>
    readonly isActive: FieldRef<"Brand", 'Boolean'>
    readonly createdAt: FieldRef<"Brand", 'DateTime'>
    readonly updatedAt: FieldRef<"Brand", 'DateTime'>
    readonly deletedAt: FieldRef<"Brand", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }

  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }

  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to delete.
     */
    limit?: number
  }

  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: Decimal | null
    originalPrice: Decimal | null
    stock: number | null
    lowStockThreshold: number | null
    ratingAverage: Decimal | null
    ratingCount: number | null
    reviewCount: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: Decimal | null
    originalPrice: Decimal | null
    stock: number | null
    lowStockThreshold: number | null
    ratingAverage: Decimal | null
    ratingCount: number | null
    reviewCount: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    sku: string | null
    description: string | null
    shortDescription: string | null
    price: Decimal | null
    originalPrice: Decimal | null
    categoryId: string | null
    brandId: string | null
    stock: number | null
    lowStockThreshold: number | null
    ratingAverage: Decimal | null
    ratingCount: number | null
    reviewCount: number | null
    isActive: boolean | null
    metadata: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    sku: string | null
    description: string | null
    shortDescription: string | null
    price: Decimal | null
    originalPrice: Decimal | null
    categoryId: string | null
    brandId: string | null
    stock: number | null
    lowStockThreshold: number | null
    ratingAverage: Decimal | null
    ratingCount: number | null
    reviewCount: number | null
    isActive: boolean | null
    metadata: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    sku: number
    description: number
    shortDescription: number
    price: number
    originalPrice: number
    categoryId: number
    brandId: number
    stock: number
    lowStockThreshold: number
    ratingAverage: number
    ratingCount: number
    reviewCount: number
    isActive: number
    metadata: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
    originalPrice?: true
    stock?: true
    lowStockThreshold?: true
    ratingAverage?: true
    ratingCount?: true
    reviewCount?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
    originalPrice?: true
    stock?: true
    lowStockThreshold?: true
    ratingAverage?: true
    ratingCount?: true
    reviewCount?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    sku?: true
    description?: true
    shortDescription?: true
    price?: true
    originalPrice?: true
    categoryId?: true
    brandId?: true
    stock?: true
    lowStockThreshold?: true
    ratingAverage?: true
    ratingCount?: true
    reviewCount?: true
    isActive?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    sku?: true
    description?: true
    shortDescription?: true
    price?: true
    originalPrice?: true
    categoryId?: true
    brandId?: true
    stock?: true
    lowStockThreshold?: true
    ratingAverage?: true
    ratingCount?: true
    reviewCount?: true
    isActive?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    sku?: true
    description?: true
    shortDescription?: true
    price?: true
    originalPrice?: true
    categoryId?: true
    brandId?: true
    stock?: true
    lowStockThreshold?: true
    ratingAverage?: true
    ratingCount?: true
    reviewCount?: true
    isActive?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    slug: string
    sku: string
    description: string
    shortDescription: string | null
    price: Decimal
    originalPrice: Decimal | null
    categoryId: string
    brandId: string | null
    stock: number
    lowStockThreshold: number | null
    ratingAverage: Decimal | null
    ratingCount: number | null
    reviewCount: number | null
    isActive: boolean
    metadata: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    sku?: boolean
    description?: boolean
    shortDescription?: boolean
    price?: boolean
    originalPrice?: boolean
    categoryId?: boolean
    brandId?: boolean
    stock?: boolean
    lowStockThreshold?: boolean
    ratingAverage?: boolean
    ratingCount?: boolean
    reviewCount?: boolean
    isActive?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    sku?: boolean
    description?: boolean
    shortDescription?: boolean
    price?: boolean
    originalPrice?: boolean
    categoryId?: boolean
    brandId?: boolean
    stock?: boolean
    lowStockThreshold?: boolean
    ratingAverage?: boolean
    ratingCount?: boolean
    reviewCount?: boolean
    isActive?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "sku" | "description" | "shortDescription" | "price" | "originalPrice" | "categoryId" | "brandId" | "stock" | "lowStockThreshold" | "ratingAverage" | "ratingCount" | "reviewCount" | "isActive" | "metadata" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["product"]>

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      sku: string
      description: string
      shortDescription: string | null
      price: Prisma.Decimal
      originalPrice: Prisma.Decimal | null
      categoryId: string
      brandId: string | null
      stock: number
      lowStockThreshold: number | null
      ratingAverage: Prisma.Decimal | null
      ratingCount: number | null
      reviewCount: number | null
      isActive: boolean
      metadata: string | null
      createdAt: Date | null
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly shortDescription: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Decimal'>
    readonly originalPrice: FieldRef<"Product", 'Decimal'>
    readonly categoryId: FieldRef<"Product", 'String'>
    readonly brandId: FieldRef<"Product", 'String'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly lowStockThreshold: FieldRef<"Product", 'Int'>
    readonly ratingAverage: FieldRef<"Product", 'Decimal'>
    readonly ratingCount: FieldRef<"Product", 'Int'>
    readonly reviewCount: FieldRef<"Product", 'Int'>
    readonly isActive: FieldRef<"Product", 'Boolean'>
    readonly metadata: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
    readonly deletedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
  }


  /**
   * Model ProductVariant
   */

  export type AggregateProductVariant = {
    _count: ProductVariantCountAggregateOutputType | null
    _avg: ProductVariantAvgAggregateOutputType | null
    _sum: ProductVariantSumAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  export type ProductVariantAvgAggregateOutputType = {
    priceAdjustment: Decimal | null
    stock: number | null
  }

  export type ProductVariantSumAggregateOutputType = {
    priceAdjustment: Decimal | null
    stock: number | null
  }

  export type ProductVariantMinAggregateOutputType = {
    id: string | null
    productId: string | null
    sku: string | null
    name: string | null
    priceAdjustment: Decimal | null
    stock: number | null
    attributes: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductVariantMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    sku: string | null
    name: string | null
    priceAdjustment: Decimal | null
    stock: number | null
    attributes: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductVariantCountAggregateOutputType = {
    id: number
    productId: number
    sku: number
    name: number
    priceAdjustment: number
    stock: number
    attributes: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductVariantAvgAggregateInputType = {
    priceAdjustment?: true
    stock?: true
  }

  export type ProductVariantSumAggregateInputType = {
    priceAdjustment?: true
    stock?: true
  }

  export type ProductVariantMinAggregateInputType = {
    id?: true
    productId?: true
    sku?: true
    name?: true
    priceAdjustment?: true
    stock?: true
    attributes?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductVariantMaxAggregateInputType = {
    id?: true
    productId?: true
    sku?: true
    name?: true
    priceAdjustment?: true
    stock?: true
    attributes?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductVariantCountAggregateInputType = {
    id?: true
    productId?: true
    sku?: true
    name?: true
    priceAdjustment?: true
    stock?: true
    attributes?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductVariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariant to aggregate.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductVariants
    **/
    _count?: true | ProductVariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductVariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductVariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductVariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductVariantMaxAggregateInputType
  }

  export type GetProductVariantAggregateType<T extends ProductVariantAggregateArgs> = {
        [P in keyof T & keyof AggregateProductVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductVariant[P]>
      : GetScalarType<T[P], AggregateProductVariant[P]>
  }




  export type ProductVariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithAggregationInput | ProductVariantOrderByWithAggregationInput[]
    by: ProductVariantScalarFieldEnum[] | ProductVariantScalarFieldEnum
    having?: ProductVariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductVariantCountAggregateInputType | true
    _avg?: ProductVariantAvgAggregateInputType
    _sum?: ProductVariantSumAggregateInputType
    _min?: ProductVariantMinAggregateInputType
    _max?: ProductVariantMaxAggregateInputType
  }

  export type ProductVariantGroupByOutputType = {
    id: string
    productId: string
    sku: string
    name: string
    priceAdjustment: Decimal | null
    stock: number | null
    attributes: string
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: ProductVariantCountAggregateOutputType | null
    _avg: ProductVariantAvgAggregateOutputType | null
    _sum: ProductVariantSumAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  type GetProductVariantGroupByPayload<T extends ProductVariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductVariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductVariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
            : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
        }
      >
    >


  export type ProductVariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    sku?: boolean
    name?: boolean
    priceAdjustment?: boolean
    stock?: boolean
    attributes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["productVariant"]>



  export type ProductVariantSelectScalar = {
    id?: boolean
    productId?: boolean
    sku?: boolean
    name?: boolean
    priceAdjustment?: boolean
    stock?: boolean
    attributes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductVariantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "sku" | "name" | "priceAdjustment" | "stock" | "attributes" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["productVariant"]>

  export type $ProductVariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductVariant"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      sku: string
      name: string
      priceAdjustment: Prisma.Decimal | null
      stock: number | null
      attributes: string
      isActive: boolean | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["productVariant"]>
    composites: {}
  }

  type ProductVariantGetPayload<S extends boolean | null | undefined | ProductVariantDefaultArgs> = $Result.GetResult<Prisma.$ProductVariantPayload, S>

  type ProductVariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductVariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductVariantCountAggregateInputType | true
    }

  export interface ProductVariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductVariant'], meta: { name: 'ProductVariant' } }
    /**
     * Find zero or one ProductVariant that matches the filter.
     * @param {ProductVariantFindUniqueArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductVariantFindUniqueArgs>(args: SelectSubset<T, ProductVariantFindUniqueArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductVariant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductVariantFindUniqueOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductVariantFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductVariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductVariantFindFirstArgs>(args?: SelectSubset<T, ProductVariantFindFirstArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductVariantFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductVariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductVariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductVariants
     * const productVariants = await prisma.productVariant.findMany()
     * 
     * // Get first 10 ProductVariants
     * const productVariants = await prisma.productVariant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductVariantFindManyArgs>(args?: SelectSubset<T, ProductVariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductVariant.
     * @param {ProductVariantCreateArgs} args - Arguments to create a ProductVariant.
     * @example
     * // Create one ProductVariant
     * const ProductVariant = await prisma.productVariant.create({
     *   data: {
     *     // ... data to create a ProductVariant
     *   }
     * })
     * 
     */
    create<T extends ProductVariantCreateArgs>(args: SelectSubset<T, ProductVariantCreateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductVariants.
     * @param {ProductVariantCreateManyArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariant = await prisma.productVariant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductVariantCreateManyArgs>(args?: SelectSubset<T, ProductVariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductVariant.
     * @param {ProductVariantDeleteArgs} args - Arguments to delete one ProductVariant.
     * @example
     * // Delete one ProductVariant
     * const ProductVariant = await prisma.productVariant.delete({
     *   where: {
     *     // ... filter to delete one ProductVariant
     *   }
     * })
     * 
     */
    delete<T extends ProductVariantDeleteArgs>(args: SelectSubset<T, ProductVariantDeleteArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductVariant.
     * @param {ProductVariantUpdateArgs} args - Arguments to update one ProductVariant.
     * @example
     * // Update one ProductVariant
     * const productVariant = await prisma.productVariant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductVariantUpdateArgs>(args: SelectSubset<T, ProductVariantUpdateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductVariants.
     * @param {ProductVariantDeleteManyArgs} args - Arguments to filter ProductVariants to delete.
     * @example
     * // Delete a few ProductVariants
     * const { count } = await prisma.productVariant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductVariantDeleteManyArgs>(args?: SelectSubset<T, ProductVariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductVariants
     * const productVariant = await prisma.productVariant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductVariantUpdateManyArgs>(args: SelectSubset<T, ProductVariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductVariant.
     * @param {ProductVariantUpsertArgs} args - Arguments to update or create a ProductVariant.
     * @example
     * // Update or create a ProductVariant
     * const productVariant = await prisma.productVariant.upsert({
     *   create: {
     *     // ... data to create a ProductVariant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductVariant we want to update
     *   }
     * })
     */
    upsert<T extends ProductVariantUpsertArgs>(args: SelectSubset<T, ProductVariantUpsertArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantCountArgs} args - Arguments to filter ProductVariants to count.
     * @example
     * // Count the number of ProductVariants
     * const count = await prisma.productVariant.count({
     *   where: {
     *     // ... the filter for the ProductVariants we want to count
     *   }
     * })
    **/
    count<T extends ProductVariantCountArgs>(
      args?: Subset<T, ProductVariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductVariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductVariantAggregateArgs>(args: Subset<T, ProductVariantAggregateArgs>): Prisma.PrismaPromise<GetProductVariantAggregateType<T>>

    /**
     * Group by ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductVariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductVariantGroupByArgs['orderBy'] }
        : { orderBy?: ProductVariantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductVariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductVariant model
   */
  readonly fields: ProductVariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductVariant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductVariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductVariant model
   */
  interface ProductVariantFieldRefs {
    readonly id: FieldRef<"ProductVariant", 'String'>
    readonly productId: FieldRef<"ProductVariant", 'String'>
    readonly sku: FieldRef<"ProductVariant", 'String'>
    readonly name: FieldRef<"ProductVariant", 'String'>
    readonly priceAdjustment: FieldRef<"ProductVariant", 'Decimal'>
    readonly stock: FieldRef<"ProductVariant", 'Int'>
    readonly attributes: FieldRef<"ProductVariant", 'String'>
    readonly isActive: FieldRef<"ProductVariant", 'Boolean'>
    readonly createdAt: FieldRef<"ProductVariant", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductVariant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductVariant findUnique
   */
  export type ProductVariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findUniqueOrThrow
   */
  export type ProductVariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findFirst
   */
  export type ProductVariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findFirstOrThrow
   */
  export type ProductVariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findMany
   */
  export type ProductVariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Filter, which ProductVariants to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant create
   */
  export type ProductVariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * The data needed to create a ProductVariant.
     */
    data: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
  }

  /**
   * ProductVariant createMany
   */
  export type ProductVariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductVariant update
   */
  export type ProductVariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * The data needed to update a ProductVariant.
     */
    data: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
    /**
     * Choose, which ProductVariant to update.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant updateMany
   */
  export type ProductVariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to update.
     */
    limit?: number
  }

  /**
   * ProductVariant upsert
   */
  export type ProductVariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * The filter to search for the ProductVariant to update in case it exists.
     */
    where: ProductVariantWhereUniqueInput
    /**
     * In case the ProductVariant found by the `where` argument doesn't exist, create a new ProductVariant with this data.
     */
    create: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
    /**
     * In case the ProductVariant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
  }

  /**
   * ProductVariant delete
   */
  export type ProductVariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Filter which ProductVariant to delete.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant deleteMany
   */
  export type ProductVariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariants to delete
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to delete.
     */
    limit?: number
  }

  /**
   * ProductVariant without action
   */
  export type ProductVariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
  }


  /**
   * Model ProductImage
   */

  export type AggregateProductImage = {
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  export type ProductImageAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type ProductImageSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type ProductImageMinAggregateOutputType = {
    id: string | null
    productId: string | null
    url: string | null
    altText: string | null
    sortOrder: number | null
    is_primary: boolean | null
    createdAt: Date | null
  }

  export type ProductImageMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    url: string | null
    altText: string | null
    sortOrder: number | null
    is_primary: boolean | null
    createdAt: Date | null
  }

  export type ProductImageCountAggregateOutputType = {
    id: number
    productId: number
    url: number
    altText: number
    sortOrder: number
    is_primary: number
    createdAt: number
    _all: number
  }


  export type ProductImageAvgAggregateInputType = {
    sortOrder?: true
  }

  export type ProductImageSumAggregateInputType = {
    sortOrder?: true
  }

  export type ProductImageMinAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    altText?: true
    sortOrder?: true
    is_primary?: true
    createdAt?: true
  }

  export type ProductImageMaxAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    altText?: true
    sortOrder?: true
    is_primary?: true
    createdAt?: true
  }

  export type ProductImageCountAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    altText?: true
    sortOrder?: true
    is_primary?: true
    createdAt?: true
    _all?: true
  }

  export type ProductImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImage to aggregate.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductImages
    **/
    _count?: true | ProductImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductImageMaxAggregateInputType
  }

  export type GetProductImageAggregateType<T extends ProductImageAggregateArgs> = {
        [P in keyof T & keyof AggregateProductImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductImage[P]>
      : GetScalarType<T[P], AggregateProductImage[P]>
  }




  export type ProductImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithAggregationInput | ProductImageOrderByWithAggregationInput[]
    by: ProductImageScalarFieldEnum[] | ProductImageScalarFieldEnum
    having?: ProductImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductImageCountAggregateInputType | true
    _avg?: ProductImageAvgAggregateInputType
    _sum?: ProductImageSumAggregateInputType
    _min?: ProductImageMinAggregateInputType
    _max?: ProductImageMaxAggregateInputType
  }

  export type ProductImageGroupByOutputType = {
    id: string
    productId: string
    url: string
    altText: string | null
    sortOrder: number | null
    is_primary: boolean | null
    createdAt: Date | null
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  type GetProductImageGroupByPayload<T extends ProductImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
            : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
        }
      >
    >


  export type ProductImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    url?: boolean
    altText?: boolean
    sortOrder?: boolean
    is_primary?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["productImage"]>



  export type ProductImageSelectScalar = {
    id?: boolean
    productId?: boolean
    url?: boolean
    altText?: boolean
    sortOrder?: boolean
    is_primary?: boolean
    createdAt?: boolean
  }

  export type ProductImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "url" | "altText" | "sortOrder" | "is_primary" | "createdAt", ExtArgs["result"]["productImage"]>

  export type $ProductImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductImage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      url: string
      altText: string | null
      sortOrder: number | null
      is_primary: boolean | null
      createdAt: Date | null
    }, ExtArgs["result"]["productImage"]>
    composites: {}
  }

  type ProductImageGetPayload<S extends boolean | null | undefined | ProductImageDefaultArgs> = $Result.GetResult<Prisma.$ProductImagePayload, S>

  type ProductImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductImageCountAggregateInputType | true
    }

  export interface ProductImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductImage'], meta: { name: 'ProductImage' } }
    /**
     * Find zero or one ProductImage that matches the filter.
     * @param {ProductImageFindUniqueArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductImageFindUniqueArgs>(args: SelectSubset<T, ProductImageFindUniqueArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductImageFindUniqueOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductImageFindFirstArgs>(args?: SelectSubset<T, ProductImageFindFirstArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductImages
     * const productImages = await prisma.productImage.findMany()
     * 
     * // Get first 10 ProductImages
     * const productImages = await prisma.productImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productImageWithIdOnly = await prisma.productImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductImageFindManyArgs>(args?: SelectSubset<T, ProductImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductImage.
     * @param {ProductImageCreateArgs} args - Arguments to create a ProductImage.
     * @example
     * // Create one ProductImage
     * const ProductImage = await prisma.productImage.create({
     *   data: {
     *     // ... data to create a ProductImage
     *   }
     * })
     * 
     */
    create<T extends ProductImageCreateArgs>(args: SelectSubset<T, ProductImageCreateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductImages.
     * @param {ProductImageCreateManyArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImage = await prisma.productImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductImageCreateManyArgs>(args?: SelectSubset<T, ProductImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductImage.
     * @param {ProductImageDeleteArgs} args - Arguments to delete one ProductImage.
     * @example
     * // Delete one ProductImage
     * const ProductImage = await prisma.productImage.delete({
     *   where: {
     *     // ... filter to delete one ProductImage
     *   }
     * })
     * 
     */
    delete<T extends ProductImageDeleteArgs>(args: SelectSubset<T, ProductImageDeleteArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductImage.
     * @param {ProductImageUpdateArgs} args - Arguments to update one ProductImage.
     * @example
     * // Update one ProductImage
     * const productImage = await prisma.productImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductImageUpdateArgs>(args: SelectSubset<T, ProductImageUpdateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductImages.
     * @param {ProductImageDeleteManyArgs} args - Arguments to filter ProductImages to delete.
     * @example
     * // Delete a few ProductImages
     * const { count } = await prisma.productImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductImageDeleteManyArgs>(args?: SelectSubset<T, ProductImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductImages
     * const productImage = await prisma.productImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductImageUpdateManyArgs>(args: SelectSubset<T, ProductImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductImage.
     * @param {ProductImageUpsertArgs} args - Arguments to update or create a ProductImage.
     * @example
     * // Update or create a ProductImage
     * const productImage = await prisma.productImage.upsert({
     *   create: {
     *     // ... data to create a ProductImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductImage we want to update
     *   }
     * })
     */
    upsert<T extends ProductImageUpsertArgs>(args: SelectSubset<T, ProductImageUpsertArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageCountArgs} args - Arguments to filter ProductImages to count.
     * @example
     * // Count the number of ProductImages
     * const count = await prisma.productImage.count({
     *   where: {
     *     // ... the filter for the ProductImages we want to count
     *   }
     * })
    **/
    count<T extends ProductImageCountArgs>(
      args?: Subset<T, ProductImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductImageAggregateArgs>(args: Subset<T, ProductImageAggregateArgs>): Prisma.PrismaPromise<GetProductImageAggregateType<T>>

    /**
     * Group by ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductImageGroupByArgs['orderBy'] }
        : { orderBy?: ProductImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductImage model
   */
  readonly fields: ProductImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductImage model
   */
  interface ProductImageFieldRefs {
    readonly id: FieldRef<"ProductImage", 'String'>
    readonly productId: FieldRef<"ProductImage", 'String'>
    readonly url: FieldRef<"ProductImage", 'String'>
    readonly altText: FieldRef<"ProductImage", 'String'>
    readonly sortOrder: FieldRef<"ProductImage", 'Int'>
    readonly is_primary: FieldRef<"ProductImage", 'Boolean'>
    readonly createdAt: FieldRef<"ProductImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductImage findUnique
   */
  export type ProductImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findUniqueOrThrow
   */
  export type ProductImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findFirst
   */
  export type ProductImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findFirstOrThrow
   */
  export type ProductImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findMany
   */
  export type ProductImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage create
   */
  export type ProductImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * The data needed to create a ProductImage.
     */
    data: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
  }

  /**
   * ProductImage createMany
   */
  export type ProductImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImageCreateManyInput | ProductImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductImage update
   */
  export type ProductImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * The data needed to update a ProductImage.
     */
    data: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
    /**
     * Choose, which ProductImage to update.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage updateMany
   */
  export type ProductImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to update.
     */
    limit?: number
  }

  /**
   * ProductImage upsert
   */
  export type ProductImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * The filter to search for the ProductImage to update in case it exists.
     */
    where: ProductImageWhereUniqueInput
    /**
     * In case the ProductImage found by the `where` argument doesn't exist, create a new ProductImage with this data.
     */
    create: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
    /**
     * In case the ProductImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
  }

  /**
   * ProductImage delete
   */
  export type ProductImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Filter which ProductImage to delete.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage deleteMany
   */
  export type ProductImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImages to delete
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to delete.
     */
    limit?: number
  }

  /**
   * ProductImage without action
   */
  export type ProductImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
  }


  /**
   * Model ProductReview
   */

  export type AggregateProductReview = {
    _count: ProductReviewCountAggregateOutputType | null
    _avg: ProductReviewAvgAggregateOutputType | null
    _sum: ProductReviewSumAggregateOutputType | null
    _min: ProductReviewMinAggregateOutputType | null
    _max: ProductReviewMaxAggregateOutputType | null
  }

  export type ProductReviewAvgAggregateOutputType = {
    rating: number | null
    helpful_count: number | null
  }

  export type ProductReviewSumAggregateOutputType = {
    rating: number | null
    helpful_count: number | null
  }

  export type ProductReviewMinAggregateOutputType = {
    id: string | null
    productId: string | null
    userId: string | null
    rating: number | null
    title: string | null
    content: string | null
    is_verified_purchase: boolean | null
    is_approved: boolean | null
    helpful_count: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted_at: Date | null
  }

  export type ProductReviewMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    userId: string | null
    rating: number | null
    title: string | null
    content: string | null
    is_verified_purchase: boolean | null
    is_approved: boolean | null
    helpful_count: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted_at: Date | null
  }

  export type ProductReviewCountAggregateOutputType = {
    id: number
    productId: number
    userId: number
    rating: number
    title: number
    content: number
    is_verified_purchase: number
    is_approved: number
    helpful_count: number
    createdAt: number
    updatedAt: number
    deleted_at: number
    _all: number
  }


  export type ProductReviewAvgAggregateInputType = {
    rating?: true
    helpful_count?: true
  }

  export type ProductReviewSumAggregateInputType = {
    rating?: true
    helpful_count?: true
  }

  export type ProductReviewMinAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
    rating?: true
    title?: true
    content?: true
    is_verified_purchase?: true
    is_approved?: true
    helpful_count?: true
    createdAt?: true
    updatedAt?: true
    deleted_at?: true
  }

  export type ProductReviewMaxAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
    rating?: true
    title?: true
    content?: true
    is_verified_purchase?: true
    is_approved?: true
    helpful_count?: true
    createdAt?: true
    updatedAt?: true
    deleted_at?: true
  }

  export type ProductReviewCountAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
    rating?: true
    title?: true
    content?: true
    is_verified_purchase?: true
    is_approved?: true
    helpful_count?: true
    createdAt?: true
    updatedAt?: true
    deleted_at?: true
    _all?: true
  }

  export type ProductReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductReview to aggregate.
     */
    where?: ProductReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductReviews to fetch.
     */
    orderBy?: ProductReviewOrderByWithRelationInput | ProductReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductReviews
    **/
    _count?: true | ProductReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductReviewMaxAggregateInputType
  }

  export type GetProductReviewAggregateType<T extends ProductReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateProductReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductReview[P]>
      : GetScalarType<T[P], AggregateProductReview[P]>
  }




  export type ProductReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductReviewWhereInput
    orderBy?: ProductReviewOrderByWithAggregationInput | ProductReviewOrderByWithAggregationInput[]
    by: ProductReviewScalarFieldEnum[] | ProductReviewScalarFieldEnum
    having?: ProductReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductReviewCountAggregateInputType | true
    _avg?: ProductReviewAvgAggregateInputType
    _sum?: ProductReviewSumAggregateInputType
    _min?: ProductReviewMinAggregateInputType
    _max?: ProductReviewMaxAggregateInputType
  }

  export type ProductReviewGroupByOutputType = {
    id: string
    productId: string
    userId: string
    rating: number
    title: string
    content: string
    is_verified_purchase: boolean | null
    is_approved: boolean | null
    helpful_count: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted_at: Date | null
    _count: ProductReviewCountAggregateOutputType | null
    _avg: ProductReviewAvgAggregateOutputType | null
    _sum: ProductReviewSumAggregateOutputType | null
    _min: ProductReviewMinAggregateOutputType | null
    _max: ProductReviewMaxAggregateOutputType | null
  }

  type GetProductReviewGroupByPayload<T extends ProductReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ProductReviewGroupByOutputType[P]>
        }
      >
    >


  export type ProductReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    userId?: boolean
    rating?: boolean
    title?: boolean
    content?: boolean
    is_verified_purchase?: boolean
    is_approved?: boolean
    helpful_count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["productReview"]>



  export type ProductReviewSelectScalar = {
    id?: boolean
    productId?: boolean
    userId?: boolean
    rating?: boolean
    title?: boolean
    content?: boolean
    is_verified_purchase?: boolean
    is_approved?: boolean
    helpful_count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted_at?: boolean
  }

  export type ProductReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "userId" | "rating" | "title" | "content" | "is_verified_purchase" | "is_approved" | "helpful_count" | "createdAt" | "updatedAt" | "deleted_at", ExtArgs["result"]["productReview"]>

  export type $ProductReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductReview"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      userId: string
      rating: number
      title: string
      content: string
      is_verified_purchase: boolean | null
      is_approved: boolean | null
      helpful_count: number | null
      createdAt: Date | null
      updatedAt: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["productReview"]>
    composites: {}
  }

  type ProductReviewGetPayload<S extends boolean | null | undefined | ProductReviewDefaultArgs> = $Result.GetResult<Prisma.$ProductReviewPayload, S>

  type ProductReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductReviewCountAggregateInputType | true
    }

  export interface ProductReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductReview'], meta: { name: 'ProductReview' } }
    /**
     * Find zero or one ProductReview that matches the filter.
     * @param {ProductReviewFindUniqueArgs} args - Arguments to find a ProductReview
     * @example
     * // Get one ProductReview
     * const productReview = await prisma.productReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductReviewFindUniqueArgs>(args: SelectSubset<T, ProductReviewFindUniqueArgs<ExtArgs>>): Prisma__ProductReviewClient<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductReviewFindUniqueOrThrowArgs} args - Arguments to find a ProductReview
     * @example
     * // Get one ProductReview
     * const productReview = await prisma.productReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductReviewClient<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewFindFirstArgs} args - Arguments to find a ProductReview
     * @example
     * // Get one ProductReview
     * const productReview = await prisma.productReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductReviewFindFirstArgs>(args?: SelectSubset<T, ProductReviewFindFirstArgs<ExtArgs>>): Prisma__ProductReviewClient<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewFindFirstOrThrowArgs} args - Arguments to find a ProductReview
     * @example
     * // Get one ProductReview
     * const productReview = await prisma.productReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductReviewClient<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductReviews
     * const productReviews = await prisma.productReview.findMany()
     * 
     * // Get first 10 ProductReviews
     * const productReviews = await prisma.productReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productReviewWithIdOnly = await prisma.productReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductReviewFindManyArgs>(args?: SelectSubset<T, ProductReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductReview.
     * @param {ProductReviewCreateArgs} args - Arguments to create a ProductReview.
     * @example
     * // Create one ProductReview
     * const ProductReview = await prisma.productReview.create({
     *   data: {
     *     // ... data to create a ProductReview
     *   }
     * })
     * 
     */
    create<T extends ProductReviewCreateArgs>(args: SelectSubset<T, ProductReviewCreateArgs<ExtArgs>>): Prisma__ProductReviewClient<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductReviews.
     * @param {ProductReviewCreateManyArgs} args - Arguments to create many ProductReviews.
     * @example
     * // Create many ProductReviews
     * const productReview = await prisma.productReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductReviewCreateManyArgs>(args?: SelectSubset<T, ProductReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductReview.
     * @param {ProductReviewDeleteArgs} args - Arguments to delete one ProductReview.
     * @example
     * // Delete one ProductReview
     * const ProductReview = await prisma.productReview.delete({
     *   where: {
     *     // ... filter to delete one ProductReview
     *   }
     * })
     * 
     */
    delete<T extends ProductReviewDeleteArgs>(args: SelectSubset<T, ProductReviewDeleteArgs<ExtArgs>>): Prisma__ProductReviewClient<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductReview.
     * @param {ProductReviewUpdateArgs} args - Arguments to update one ProductReview.
     * @example
     * // Update one ProductReview
     * const productReview = await prisma.productReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductReviewUpdateArgs>(args: SelectSubset<T, ProductReviewUpdateArgs<ExtArgs>>): Prisma__ProductReviewClient<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductReviews.
     * @param {ProductReviewDeleteManyArgs} args - Arguments to filter ProductReviews to delete.
     * @example
     * // Delete a few ProductReviews
     * const { count } = await prisma.productReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductReviewDeleteManyArgs>(args?: SelectSubset<T, ProductReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductReviews
     * const productReview = await prisma.productReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductReviewUpdateManyArgs>(args: SelectSubset<T, ProductReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductReview.
     * @param {ProductReviewUpsertArgs} args - Arguments to update or create a ProductReview.
     * @example
     * // Update or create a ProductReview
     * const productReview = await prisma.productReview.upsert({
     *   create: {
     *     // ... data to create a ProductReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductReview we want to update
     *   }
     * })
     */
    upsert<T extends ProductReviewUpsertArgs>(args: SelectSubset<T, ProductReviewUpsertArgs<ExtArgs>>): Prisma__ProductReviewClient<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewCountArgs} args - Arguments to filter ProductReviews to count.
     * @example
     * // Count the number of ProductReviews
     * const count = await prisma.productReview.count({
     *   where: {
     *     // ... the filter for the ProductReviews we want to count
     *   }
     * })
    **/
    count<T extends ProductReviewCountArgs>(
      args?: Subset<T, ProductReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductReviewAggregateArgs>(args: Subset<T, ProductReviewAggregateArgs>): Prisma.PrismaPromise<GetProductReviewAggregateType<T>>

    /**
     * Group by ProductReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductReviewGroupByArgs['orderBy'] }
        : { orderBy?: ProductReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductReview model
   */
  readonly fields: ProductReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductReview model
   */
  interface ProductReviewFieldRefs {
    readonly id: FieldRef<"ProductReview", 'String'>
    readonly productId: FieldRef<"ProductReview", 'String'>
    readonly userId: FieldRef<"ProductReview", 'String'>
    readonly rating: FieldRef<"ProductReview", 'Int'>
    readonly title: FieldRef<"ProductReview", 'String'>
    readonly content: FieldRef<"ProductReview", 'String'>
    readonly is_verified_purchase: FieldRef<"ProductReview", 'Boolean'>
    readonly is_approved: FieldRef<"ProductReview", 'Boolean'>
    readonly helpful_count: FieldRef<"ProductReview", 'Int'>
    readonly createdAt: FieldRef<"ProductReview", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductReview", 'DateTime'>
    readonly deleted_at: FieldRef<"ProductReview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductReview findUnique
   */
  export type ProductReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Filter, which ProductReview to fetch.
     */
    where: ProductReviewWhereUniqueInput
  }

  /**
   * ProductReview findUniqueOrThrow
   */
  export type ProductReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Filter, which ProductReview to fetch.
     */
    where: ProductReviewWhereUniqueInput
  }

  /**
   * ProductReview findFirst
   */
  export type ProductReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Filter, which ProductReview to fetch.
     */
    where?: ProductReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductReviews to fetch.
     */
    orderBy?: ProductReviewOrderByWithRelationInput | ProductReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductReviews.
     */
    cursor?: ProductReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductReviews.
     */
    distinct?: ProductReviewScalarFieldEnum | ProductReviewScalarFieldEnum[]
  }

  /**
   * ProductReview findFirstOrThrow
   */
  export type ProductReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Filter, which ProductReview to fetch.
     */
    where?: ProductReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductReviews to fetch.
     */
    orderBy?: ProductReviewOrderByWithRelationInput | ProductReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductReviews.
     */
    cursor?: ProductReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductReviews.
     */
    distinct?: ProductReviewScalarFieldEnum | ProductReviewScalarFieldEnum[]
  }

  /**
   * ProductReview findMany
   */
  export type ProductReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Filter, which ProductReviews to fetch.
     */
    where?: ProductReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductReviews to fetch.
     */
    orderBy?: ProductReviewOrderByWithRelationInput | ProductReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductReviews.
     */
    cursor?: ProductReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductReviews.
     */
    distinct?: ProductReviewScalarFieldEnum | ProductReviewScalarFieldEnum[]
  }

  /**
   * ProductReview create
   */
  export type ProductReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * The data needed to create a ProductReview.
     */
    data: XOR<ProductReviewCreateInput, ProductReviewUncheckedCreateInput>
  }

  /**
   * ProductReview createMany
   */
  export type ProductReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductReviews.
     */
    data: ProductReviewCreateManyInput | ProductReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductReview update
   */
  export type ProductReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * The data needed to update a ProductReview.
     */
    data: XOR<ProductReviewUpdateInput, ProductReviewUncheckedUpdateInput>
    /**
     * Choose, which ProductReview to update.
     */
    where: ProductReviewWhereUniqueInput
  }

  /**
   * ProductReview updateMany
   */
  export type ProductReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductReviews.
     */
    data: XOR<ProductReviewUpdateManyMutationInput, ProductReviewUncheckedUpdateManyInput>
    /**
     * Filter which ProductReviews to update
     */
    where?: ProductReviewWhereInput
    /**
     * Limit how many ProductReviews to update.
     */
    limit?: number
  }

  /**
   * ProductReview upsert
   */
  export type ProductReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * The filter to search for the ProductReview to update in case it exists.
     */
    where: ProductReviewWhereUniqueInput
    /**
     * In case the ProductReview found by the `where` argument doesn't exist, create a new ProductReview with this data.
     */
    create: XOR<ProductReviewCreateInput, ProductReviewUncheckedCreateInput>
    /**
     * In case the ProductReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductReviewUpdateInput, ProductReviewUncheckedUpdateInput>
  }

  /**
   * ProductReview delete
   */
  export type ProductReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Filter which ProductReview to delete.
     */
    where: ProductReviewWhereUniqueInput
  }

  /**
   * ProductReview deleteMany
   */
  export type ProductReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductReviews to delete
     */
    where?: ProductReviewWhereInput
    /**
     * Limit how many ProductReviews to delete.
     */
    limit?: number
  }

  /**
   * ProductReview without action
   */
  export type ProductReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
  }


  /**
   * Model ProductTag
   */

  export type AggregateProductTag = {
    _count: ProductTagCountAggregateOutputType | null
    _min: ProductTagMinAggregateOutputType | null
    _max: ProductTagMaxAggregateOutputType | null
  }

  export type ProductTagMinAggregateOutputType = {
    id: string | null
    productId: string | null
    tag: string | null
    createdAt: Date | null
  }

  export type ProductTagMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    tag: string | null
    createdAt: Date | null
  }

  export type ProductTagCountAggregateOutputType = {
    id: number
    productId: number
    tag: number
    createdAt: number
    _all: number
  }


  export type ProductTagMinAggregateInputType = {
    id?: true
    productId?: true
    tag?: true
    createdAt?: true
  }

  export type ProductTagMaxAggregateInputType = {
    id?: true
    productId?: true
    tag?: true
    createdAt?: true
  }

  export type ProductTagCountAggregateInputType = {
    id?: true
    productId?: true
    tag?: true
    createdAt?: true
    _all?: true
  }

  export type ProductTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductTag to aggregate.
     */
    where?: ProductTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTags to fetch.
     */
    orderBy?: ProductTagOrderByWithRelationInput | ProductTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductTags
    **/
    _count?: true | ProductTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductTagMaxAggregateInputType
  }

  export type GetProductTagAggregateType<T extends ProductTagAggregateArgs> = {
        [P in keyof T & keyof AggregateProductTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductTag[P]>
      : GetScalarType<T[P], AggregateProductTag[P]>
  }




  export type ProductTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductTagWhereInput
    orderBy?: ProductTagOrderByWithAggregationInput | ProductTagOrderByWithAggregationInput[]
    by: ProductTagScalarFieldEnum[] | ProductTagScalarFieldEnum
    having?: ProductTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductTagCountAggregateInputType | true
    _min?: ProductTagMinAggregateInputType
    _max?: ProductTagMaxAggregateInputType
  }

  export type ProductTagGroupByOutputType = {
    id: string
    productId: string
    tag: string
    createdAt: Date | null
    _count: ProductTagCountAggregateOutputType | null
    _min: ProductTagMinAggregateOutputType | null
    _max: ProductTagMaxAggregateOutputType | null
  }

  type GetProductTagGroupByPayload<T extends ProductTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductTagGroupByOutputType[P]>
            : GetScalarType<T[P], ProductTagGroupByOutputType[P]>
        }
      >
    >


  export type ProductTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    tag?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["productTag"]>



  export type ProductTagSelectScalar = {
    id?: boolean
    productId?: boolean
    tag?: boolean
    createdAt?: boolean
  }

  export type ProductTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "tag" | "createdAt", ExtArgs["result"]["productTag"]>

  export type $ProductTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductTag"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      tag: string
      createdAt: Date | null
    }, ExtArgs["result"]["productTag"]>
    composites: {}
  }

  type ProductTagGetPayload<S extends boolean | null | undefined | ProductTagDefaultArgs> = $Result.GetResult<Prisma.$ProductTagPayload, S>

  type ProductTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductTagCountAggregateInputType | true
    }

  export interface ProductTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductTag'], meta: { name: 'ProductTag' } }
    /**
     * Find zero or one ProductTag that matches the filter.
     * @param {ProductTagFindUniqueArgs} args - Arguments to find a ProductTag
     * @example
     * // Get one ProductTag
     * const productTag = await prisma.productTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductTagFindUniqueArgs>(args: SelectSubset<T, ProductTagFindUniqueArgs<ExtArgs>>): Prisma__ProductTagClient<$Result.GetResult<Prisma.$ProductTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductTagFindUniqueOrThrowArgs} args - Arguments to find a ProductTag
     * @example
     * // Get one ProductTag
     * const productTag = await prisma.productTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductTagFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductTagClient<$Result.GetResult<Prisma.$ProductTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTagFindFirstArgs} args - Arguments to find a ProductTag
     * @example
     * // Get one ProductTag
     * const productTag = await prisma.productTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductTagFindFirstArgs>(args?: SelectSubset<T, ProductTagFindFirstArgs<ExtArgs>>): Prisma__ProductTagClient<$Result.GetResult<Prisma.$ProductTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTagFindFirstOrThrowArgs} args - Arguments to find a ProductTag
     * @example
     * // Get one ProductTag
     * const productTag = await prisma.productTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductTagFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductTagClient<$Result.GetResult<Prisma.$ProductTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductTags
     * const productTags = await prisma.productTag.findMany()
     * 
     * // Get first 10 ProductTags
     * const productTags = await prisma.productTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productTagWithIdOnly = await prisma.productTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductTagFindManyArgs>(args?: SelectSubset<T, ProductTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductTag.
     * @param {ProductTagCreateArgs} args - Arguments to create a ProductTag.
     * @example
     * // Create one ProductTag
     * const ProductTag = await prisma.productTag.create({
     *   data: {
     *     // ... data to create a ProductTag
     *   }
     * })
     * 
     */
    create<T extends ProductTagCreateArgs>(args: SelectSubset<T, ProductTagCreateArgs<ExtArgs>>): Prisma__ProductTagClient<$Result.GetResult<Prisma.$ProductTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductTags.
     * @param {ProductTagCreateManyArgs} args - Arguments to create many ProductTags.
     * @example
     * // Create many ProductTags
     * const productTag = await prisma.productTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductTagCreateManyArgs>(args?: SelectSubset<T, ProductTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductTag.
     * @param {ProductTagDeleteArgs} args - Arguments to delete one ProductTag.
     * @example
     * // Delete one ProductTag
     * const ProductTag = await prisma.productTag.delete({
     *   where: {
     *     // ... filter to delete one ProductTag
     *   }
     * })
     * 
     */
    delete<T extends ProductTagDeleteArgs>(args: SelectSubset<T, ProductTagDeleteArgs<ExtArgs>>): Prisma__ProductTagClient<$Result.GetResult<Prisma.$ProductTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductTag.
     * @param {ProductTagUpdateArgs} args - Arguments to update one ProductTag.
     * @example
     * // Update one ProductTag
     * const productTag = await prisma.productTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductTagUpdateArgs>(args: SelectSubset<T, ProductTagUpdateArgs<ExtArgs>>): Prisma__ProductTagClient<$Result.GetResult<Prisma.$ProductTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductTags.
     * @param {ProductTagDeleteManyArgs} args - Arguments to filter ProductTags to delete.
     * @example
     * // Delete a few ProductTags
     * const { count } = await prisma.productTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductTagDeleteManyArgs>(args?: SelectSubset<T, ProductTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductTags
     * const productTag = await prisma.productTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductTagUpdateManyArgs>(args: SelectSubset<T, ProductTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductTag.
     * @param {ProductTagUpsertArgs} args - Arguments to update or create a ProductTag.
     * @example
     * // Update or create a ProductTag
     * const productTag = await prisma.productTag.upsert({
     *   create: {
     *     // ... data to create a ProductTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductTag we want to update
     *   }
     * })
     */
    upsert<T extends ProductTagUpsertArgs>(args: SelectSubset<T, ProductTagUpsertArgs<ExtArgs>>): Prisma__ProductTagClient<$Result.GetResult<Prisma.$ProductTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTagCountArgs} args - Arguments to filter ProductTags to count.
     * @example
     * // Count the number of ProductTags
     * const count = await prisma.productTag.count({
     *   where: {
     *     // ... the filter for the ProductTags we want to count
     *   }
     * })
    **/
    count<T extends ProductTagCountArgs>(
      args?: Subset<T, ProductTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductTagAggregateArgs>(args: Subset<T, ProductTagAggregateArgs>): Prisma.PrismaPromise<GetProductTagAggregateType<T>>

    /**
     * Group by ProductTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductTagGroupByArgs['orderBy'] }
        : { orderBy?: ProductTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductTag model
   */
  readonly fields: ProductTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductTag model
   */
  interface ProductTagFieldRefs {
    readonly id: FieldRef<"ProductTag", 'String'>
    readonly productId: FieldRef<"ProductTag", 'String'>
    readonly tag: FieldRef<"ProductTag", 'String'>
    readonly createdAt: FieldRef<"ProductTag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductTag findUnique
   */
  export type ProductTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTag
     */
    select?: ProductTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTag
     */
    omit?: ProductTagOmit<ExtArgs> | null
    /**
     * Filter, which ProductTag to fetch.
     */
    where: ProductTagWhereUniqueInput
  }

  /**
   * ProductTag findUniqueOrThrow
   */
  export type ProductTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTag
     */
    select?: ProductTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTag
     */
    omit?: ProductTagOmit<ExtArgs> | null
    /**
     * Filter, which ProductTag to fetch.
     */
    where: ProductTagWhereUniqueInput
  }

  /**
   * ProductTag findFirst
   */
  export type ProductTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTag
     */
    select?: ProductTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTag
     */
    omit?: ProductTagOmit<ExtArgs> | null
    /**
     * Filter, which ProductTag to fetch.
     */
    where?: ProductTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTags to fetch.
     */
    orderBy?: ProductTagOrderByWithRelationInput | ProductTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductTags.
     */
    cursor?: ProductTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductTags.
     */
    distinct?: ProductTagScalarFieldEnum | ProductTagScalarFieldEnum[]
  }

  /**
   * ProductTag findFirstOrThrow
   */
  export type ProductTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTag
     */
    select?: ProductTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTag
     */
    omit?: ProductTagOmit<ExtArgs> | null
    /**
     * Filter, which ProductTag to fetch.
     */
    where?: ProductTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTags to fetch.
     */
    orderBy?: ProductTagOrderByWithRelationInput | ProductTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductTags.
     */
    cursor?: ProductTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductTags.
     */
    distinct?: ProductTagScalarFieldEnum | ProductTagScalarFieldEnum[]
  }

  /**
   * ProductTag findMany
   */
  export type ProductTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTag
     */
    select?: ProductTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTag
     */
    omit?: ProductTagOmit<ExtArgs> | null
    /**
     * Filter, which ProductTags to fetch.
     */
    where?: ProductTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTags to fetch.
     */
    orderBy?: ProductTagOrderByWithRelationInput | ProductTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductTags.
     */
    cursor?: ProductTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductTags.
     */
    distinct?: ProductTagScalarFieldEnum | ProductTagScalarFieldEnum[]
  }

  /**
   * ProductTag create
   */
  export type ProductTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTag
     */
    select?: ProductTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTag
     */
    omit?: ProductTagOmit<ExtArgs> | null
    /**
     * The data needed to create a ProductTag.
     */
    data: XOR<ProductTagCreateInput, ProductTagUncheckedCreateInput>
  }

  /**
   * ProductTag createMany
   */
  export type ProductTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductTags.
     */
    data: ProductTagCreateManyInput | ProductTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductTag update
   */
  export type ProductTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTag
     */
    select?: ProductTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTag
     */
    omit?: ProductTagOmit<ExtArgs> | null
    /**
     * The data needed to update a ProductTag.
     */
    data: XOR<ProductTagUpdateInput, ProductTagUncheckedUpdateInput>
    /**
     * Choose, which ProductTag to update.
     */
    where: ProductTagWhereUniqueInput
  }

  /**
   * ProductTag updateMany
   */
  export type ProductTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductTags.
     */
    data: XOR<ProductTagUpdateManyMutationInput, ProductTagUncheckedUpdateManyInput>
    /**
     * Filter which ProductTags to update
     */
    where?: ProductTagWhereInput
    /**
     * Limit how many ProductTags to update.
     */
    limit?: number
  }

  /**
   * ProductTag upsert
   */
  export type ProductTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTag
     */
    select?: ProductTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTag
     */
    omit?: ProductTagOmit<ExtArgs> | null
    /**
     * The filter to search for the ProductTag to update in case it exists.
     */
    where: ProductTagWhereUniqueInput
    /**
     * In case the ProductTag found by the `where` argument doesn't exist, create a new ProductTag with this data.
     */
    create: XOR<ProductTagCreateInput, ProductTagUncheckedCreateInput>
    /**
     * In case the ProductTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductTagUpdateInput, ProductTagUncheckedUpdateInput>
  }

  /**
   * ProductTag delete
   */
  export type ProductTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTag
     */
    select?: ProductTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTag
     */
    omit?: ProductTagOmit<ExtArgs> | null
    /**
     * Filter which ProductTag to delete.
     */
    where: ProductTagWhereUniqueInput
  }

  /**
   * ProductTag deleteMany
   */
  export type ProductTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductTags to delete
     */
    where?: ProductTagWhereInput
    /**
     * Limit how many ProductTags to delete.
     */
    limit?: number
  }

  /**
   * ProductTag without action
   */
  export type ProductTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTag
     */
    select?: ProductTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTag
     */
    omit?: ProductTagOmit<ExtArgs> | null
  }


  /**
   * Model ProductAttribute
   */

  export type AggregateProductAttribute = {
    _count: ProductAttributeCountAggregateOutputType | null
    _min: ProductAttributeMinAggregateOutputType | null
    _max: ProductAttributeMaxAggregateOutputType | null
  }

  export type ProductAttributeMinAggregateOutputType = {
    id: string | null
    productId: string | null
    attribute_name: string | null
    attribute_value: string | null
    createdAt: Date | null
  }

  export type ProductAttributeMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    attribute_name: string | null
    attribute_value: string | null
    createdAt: Date | null
  }

  export type ProductAttributeCountAggregateOutputType = {
    id: number
    productId: number
    attribute_name: number
    attribute_value: number
    createdAt: number
    _all: number
  }


  export type ProductAttributeMinAggregateInputType = {
    id?: true
    productId?: true
    attribute_name?: true
    attribute_value?: true
    createdAt?: true
  }

  export type ProductAttributeMaxAggregateInputType = {
    id?: true
    productId?: true
    attribute_name?: true
    attribute_value?: true
    createdAt?: true
  }

  export type ProductAttributeCountAggregateInputType = {
    id?: true
    productId?: true
    attribute_name?: true
    attribute_value?: true
    createdAt?: true
    _all?: true
  }

  export type ProductAttributeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductAttribute to aggregate.
     */
    where?: ProductAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAttributes to fetch.
     */
    orderBy?: ProductAttributeOrderByWithRelationInput | ProductAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductAttributes
    **/
    _count?: true | ProductAttributeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductAttributeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductAttributeMaxAggregateInputType
  }

  export type GetProductAttributeAggregateType<T extends ProductAttributeAggregateArgs> = {
        [P in keyof T & keyof AggregateProductAttribute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductAttribute[P]>
      : GetScalarType<T[P], AggregateProductAttribute[P]>
  }




  export type ProductAttributeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductAttributeWhereInput
    orderBy?: ProductAttributeOrderByWithAggregationInput | ProductAttributeOrderByWithAggregationInput[]
    by: ProductAttributeScalarFieldEnum[] | ProductAttributeScalarFieldEnum
    having?: ProductAttributeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductAttributeCountAggregateInputType | true
    _min?: ProductAttributeMinAggregateInputType
    _max?: ProductAttributeMaxAggregateInputType
  }

  export type ProductAttributeGroupByOutputType = {
    id: string
    productId: string
    attribute_name: string
    attribute_value: string
    createdAt: Date | null
    _count: ProductAttributeCountAggregateOutputType | null
    _min: ProductAttributeMinAggregateOutputType | null
    _max: ProductAttributeMaxAggregateOutputType | null
  }

  type GetProductAttributeGroupByPayload<T extends ProductAttributeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductAttributeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductAttributeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductAttributeGroupByOutputType[P]>
            : GetScalarType<T[P], ProductAttributeGroupByOutputType[P]>
        }
      >
    >


  export type ProductAttributeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    attribute_name?: boolean
    attribute_value?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["productAttribute"]>



  export type ProductAttributeSelectScalar = {
    id?: boolean
    productId?: boolean
    attribute_name?: boolean
    attribute_value?: boolean
    createdAt?: boolean
  }

  export type ProductAttributeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "attribute_name" | "attribute_value" | "createdAt", ExtArgs["result"]["productAttribute"]>

  export type $ProductAttributePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductAttribute"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      attribute_name: string
      attribute_value: string
      createdAt: Date | null
    }, ExtArgs["result"]["productAttribute"]>
    composites: {}
  }

  type ProductAttributeGetPayload<S extends boolean | null | undefined | ProductAttributeDefaultArgs> = $Result.GetResult<Prisma.$ProductAttributePayload, S>

  type ProductAttributeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductAttributeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductAttributeCountAggregateInputType | true
    }

  export interface ProductAttributeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductAttribute'], meta: { name: 'ProductAttribute' } }
    /**
     * Find zero or one ProductAttribute that matches the filter.
     * @param {ProductAttributeFindUniqueArgs} args - Arguments to find a ProductAttribute
     * @example
     * // Get one ProductAttribute
     * const productAttribute = await prisma.productAttribute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductAttributeFindUniqueArgs>(args: SelectSubset<T, ProductAttributeFindUniqueArgs<ExtArgs>>): Prisma__ProductAttributeClient<$Result.GetResult<Prisma.$ProductAttributePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductAttribute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductAttributeFindUniqueOrThrowArgs} args - Arguments to find a ProductAttribute
     * @example
     * // Get one ProductAttribute
     * const productAttribute = await prisma.productAttribute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductAttributeFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductAttributeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductAttributeClient<$Result.GetResult<Prisma.$ProductAttributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductAttribute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributeFindFirstArgs} args - Arguments to find a ProductAttribute
     * @example
     * // Get one ProductAttribute
     * const productAttribute = await prisma.productAttribute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductAttributeFindFirstArgs>(args?: SelectSubset<T, ProductAttributeFindFirstArgs<ExtArgs>>): Prisma__ProductAttributeClient<$Result.GetResult<Prisma.$ProductAttributePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductAttribute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributeFindFirstOrThrowArgs} args - Arguments to find a ProductAttribute
     * @example
     * // Get one ProductAttribute
     * const productAttribute = await prisma.productAttribute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductAttributeFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductAttributeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductAttributeClient<$Result.GetResult<Prisma.$ProductAttributePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductAttributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductAttributes
     * const productAttributes = await prisma.productAttribute.findMany()
     * 
     * // Get first 10 ProductAttributes
     * const productAttributes = await prisma.productAttribute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productAttributeWithIdOnly = await prisma.productAttribute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductAttributeFindManyArgs>(args?: SelectSubset<T, ProductAttributeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductAttribute.
     * @param {ProductAttributeCreateArgs} args - Arguments to create a ProductAttribute.
     * @example
     * // Create one ProductAttribute
     * const ProductAttribute = await prisma.productAttribute.create({
     *   data: {
     *     // ... data to create a ProductAttribute
     *   }
     * })
     * 
     */
    create<T extends ProductAttributeCreateArgs>(args: SelectSubset<T, ProductAttributeCreateArgs<ExtArgs>>): Prisma__ProductAttributeClient<$Result.GetResult<Prisma.$ProductAttributePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductAttributes.
     * @param {ProductAttributeCreateManyArgs} args - Arguments to create many ProductAttributes.
     * @example
     * // Create many ProductAttributes
     * const productAttribute = await prisma.productAttribute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductAttributeCreateManyArgs>(args?: SelectSubset<T, ProductAttributeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductAttribute.
     * @param {ProductAttributeDeleteArgs} args - Arguments to delete one ProductAttribute.
     * @example
     * // Delete one ProductAttribute
     * const ProductAttribute = await prisma.productAttribute.delete({
     *   where: {
     *     // ... filter to delete one ProductAttribute
     *   }
     * })
     * 
     */
    delete<T extends ProductAttributeDeleteArgs>(args: SelectSubset<T, ProductAttributeDeleteArgs<ExtArgs>>): Prisma__ProductAttributeClient<$Result.GetResult<Prisma.$ProductAttributePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductAttribute.
     * @param {ProductAttributeUpdateArgs} args - Arguments to update one ProductAttribute.
     * @example
     * // Update one ProductAttribute
     * const productAttribute = await prisma.productAttribute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductAttributeUpdateArgs>(args: SelectSubset<T, ProductAttributeUpdateArgs<ExtArgs>>): Prisma__ProductAttributeClient<$Result.GetResult<Prisma.$ProductAttributePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductAttributes.
     * @param {ProductAttributeDeleteManyArgs} args - Arguments to filter ProductAttributes to delete.
     * @example
     * // Delete a few ProductAttributes
     * const { count } = await prisma.productAttribute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductAttributeDeleteManyArgs>(args?: SelectSubset<T, ProductAttributeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductAttributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductAttributes
     * const productAttribute = await prisma.productAttribute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductAttributeUpdateManyArgs>(args: SelectSubset<T, ProductAttributeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductAttribute.
     * @param {ProductAttributeUpsertArgs} args - Arguments to update or create a ProductAttribute.
     * @example
     * // Update or create a ProductAttribute
     * const productAttribute = await prisma.productAttribute.upsert({
     *   create: {
     *     // ... data to create a ProductAttribute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductAttribute we want to update
     *   }
     * })
     */
    upsert<T extends ProductAttributeUpsertArgs>(args: SelectSubset<T, ProductAttributeUpsertArgs<ExtArgs>>): Prisma__ProductAttributeClient<$Result.GetResult<Prisma.$ProductAttributePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductAttributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributeCountArgs} args - Arguments to filter ProductAttributes to count.
     * @example
     * // Count the number of ProductAttributes
     * const count = await prisma.productAttribute.count({
     *   where: {
     *     // ... the filter for the ProductAttributes we want to count
     *   }
     * })
    **/
    count<T extends ProductAttributeCountArgs>(
      args?: Subset<T, ProductAttributeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductAttributeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductAttribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAttributeAggregateArgs>(args: Subset<T, ProductAttributeAggregateArgs>): Prisma.PrismaPromise<GetProductAttributeAggregateType<T>>

    /**
     * Group by ProductAttribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductAttributeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductAttributeGroupByArgs['orderBy'] }
        : { orderBy?: ProductAttributeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductAttributeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductAttributeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductAttribute model
   */
  readonly fields: ProductAttributeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductAttribute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductAttributeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductAttribute model
   */
  interface ProductAttributeFieldRefs {
    readonly id: FieldRef<"ProductAttribute", 'String'>
    readonly productId: FieldRef<"ProductAttribute", 'String'>
    readonly attribute_name: FieldRef<"ProductAttribute", 'String'>
    readonly attribute_value: FieldRef<"ProductAttribute", 'String'>
    readonly createdAt: FieldRef<"ProductAttribute", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductAttribute findUnique
   */
  export type ProductAttributeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
    /**
     * Filter, which ProductAttribute to fetch.
     */
    where: ProductAttributeWhereUniqueInput
  }

  /**
   * ProductAttribute findUniqueOrThrow
   */
  export type ProductAttributeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
    /**
     * Filter, which ProductAttribute to fetch.
     */
    where: ProductAttributeWhereUniqueInput
  }

  /**
   * ProductAttribute findFirst
   */
  export type ProductAttributeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
    /**
     * Filter, which ProductAttribute to fetch.
     */
    where?: ProductAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAttributes to fetch.
     */
    orderBy?: ProductAttributeOrderByWithRelationInput | ProductAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductAttributes.
     */
    cursor?: ProductAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductAttributes.
     */
    distinct?: ProductAttributeScalarFieldEnum | ProductAttributeScalarFieldEnum[]
  }

  /**
   * ProductAttribute findFirstOrThrow
   */
  export type ProductAttributeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
    /**
     * Filter, which ProductAttribute to fetch.
     */
    where?: ProductAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAttributes to fetch.
     */
    orderBy?: ProductAttributeOrderByWithRelationInput | ProductAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductAttributes.
     */
    cursor?: ProductAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductAttributes.
     */
    distinct?: ProductAttributeScalarFieldEnum | ProductAttributeScalarFieldEnum[]
  }

  /**
   * ProductAttribute findMany
   */
  export type ProductAttributeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
    /**
     * Filter, which ProductAttributes to fetch.
     */
    where?: ProductAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAttributes to fetch.
     */
    orderBy?: ProductAttributeOrderByWithRelationInput | ProductAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductAttributes.
     */
    cursor?: ProductAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductAttributes.
     */
    distinct?: ProductAttributeScalarFieldEnum | ProductAttributeScalarFieldEnum[]
  }

  /**
   * ProductAttribute create
   */
  export type ProductAttributeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
    /**
     * The data needed to create a ProductAttribute.
     */
    data: XOR<ProductAttributeCreateInput, ProductAttributeUncheckedCreateInput>
  }

  /**
   * ProductAttribute createMany
   */
  export type ProductAttributeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductAttributes.
     */
    data: ProductAttributeCreateManyInput | ProductAttributeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductAttribute update
   */
  export type ProductAttributeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
    /**
     * The data needed to update a ProductAttribute.
     */
    data: XOR<ProductAttributeUpdateInput, ProductAttributeUncheckedUpdateInput>
    /**
     * Choose, which ProductAttribute to update.
     */
    where: ProductAttributeWhereUniqueInput
  }

  /**
   * ProductAttribute updateMany
   */
  export type ProductAttributeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductAttributes.
     */
    data: XOR<ProductAttributeUpdateManyMutationInput, ProductAttributeUncheckedUpdateManyInput>
    /**
     * Filter which ProductAttributes to update
     */
    where?: ProductAttributeWhereInput
    /**
     * Limit how many ProductAttributes to update.
     */
    limit?: number
  }

  /**
   * ProductAttribute upsert
   */
  export type ProductAttributeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
    /**
     * The filter to search for the ProductAttribute to update in case it exists.
     */
    where: ProductAttributeWhereUniqueInput
    /**
     * In case the ProductAttribute found by the `where` argument doesn't exist, create a new ProductAttribute with this data.
     */
    create: XOR<ProductAttributeCreateInput, ProductAttributeUncheckedCreateInput>
    /**
     * In case the ProductAttribute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductAttributeUpdateInput, ProductAttributeUncheckedUpdateInput>
  }

  /**
   * ProductAttribute delete
   */
  export type ProductAttributeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
    /**
     * Filter which ProductAttribute to delete.
     */
    where: ProductAttributeWhereUniqueInput
  }

  /**
   * ProductAttribute deleteMany
   */
  export type ProductAttributeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductAttributes to delete
     */
    where?: ProductAttributeWhereInput
    /**
     * Limit how many ProductAttributes to delete.
     */
    limit?: number
  }

  /**
   * ProductAttribute without action
   */
  export type ProductAttributeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
  }


  /**
   * Model Coupon
   */

  export type AggregateCoupon = {
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  export type CouponAvgAggregateOutputType = {
    value: Decimal | null
    minOrderAmount: Decimal | null
    maxDiscount: Decimal | null
    maxUses: number | null
    usedCount: number | null
  }

  export type CouponSumAggregateOutputType = {
    value: Decimal | null
    minOrderAmount: Decimal | null
    maxDiscount: Decimal | null
    maxUses: number | null
    usedCount: number | null
  }

  export type CouponMinAggregateOutputType = {
    id: string | null
    code: string | null
    type: string | null
    value: Decimal | null
    minOrderAmount: Decimal | null
    maxDiscount: Decimal | null
    maxUses: number | null
    usedCount: number | null
    validFrom: Date | null
    validUntil: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CouponMaxAggregateOutputType = {
    id: string | null
    code: string | null
    type: string | null
    value: Decimal | null
    minOrderAmount: Decimal | null
    maxDiscount: Decimal | null
    maxUses: number | null
    usedCount: number | null
    validFrom: Date | null
    validUntil: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CouponCountAggregateOutputType = {
    id: number
    code: number
    type: number
    value: number
    minOrderAmount: number
    maxDiscount: number
    maxUses: number
    usedCount: number
    validFrom: number
    validUntil: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CouponAvgAggregateInputType = {
    value?: true
    minOrderAmount?: true
    maxDiscount?: true
    maxUses?: true
    usedCount?: true
  }

  export type CouponSumAggregateInputType = {
    value?: true
    minOrderAmount?: true
    maxDiscount?: true
    maxUses?: true
    usedCount?: true
  }

  export type CouponMinAggregateInputType = {
    id?: true
    code?: true
    type?: true
    value?: true
    minOrderAmount?: true
    maxDiscount?: true
    maxUses?: true
    usedCount?: true
    validFrom?: true
    validUntil?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CouponMaxAggregateInputType = {
    id?: true
    code?: true
    type?: true
    value?: true
    minOrderAmount?: true
    maxDiscount?: true
    maxUses?: true
    usedCount?: true
    validFrom?: true
    validUntil?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CouponCountAggregateInputType = {
    id?: true
    code?: true
    type?: true
    value?: true
    minOrderAmount?: true
    maxDiscount?: true
    maxUses?: true
    usedCount?: true
    validFrom?: true
    validUntil?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CouponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupon to aggregate.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coupons
    **/
    _count?: true | CouponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CouponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CouponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponMaxAggregateInputType
  }

  export type GetCouponAggregateType<T extends CouponAggregateArgs> = {
        [P in keyof T & keyof AggregateCoupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoupon[P]>
      : GetScalarType<T[P], AggregateCoupon[P]>
  }




  export type CouponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponWhereInput
    orderBy?: CouponOrderByWithAggregationInput | CouponOrderByWithAggregationInput[]
    by: CouponScalarFieldEnum[] | CouponScalarFieldEnum
    having?: CouponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponCountAggregateInputType | true
    _avg?: CouponAvgAggregateInputType
    _sum?: CouponSumAggregateInputType
    _min?: CouponMinAggregateInputType
    _max?: CouponMaxAggregateInputType
  }

  export type CouponGroupByOutputType = {
    id: string
    code: string
    type: string
    value: Decimal
    minOrderAmount: Decimal | null
    maxDiscount: Decimal | null
    maxUses: number | null
    usedCount: number | null
    validFrom: Date
    validUntil: Date
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  type GetCouponGroupByPayload<T extends CouponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CouponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponGroupByOutputType[P]>
            : GetScalarType<T[P], CouponGroupByOutputType[P]>
        }
      >
    >


  export type CouponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    value?: boolean
    minOrderAmount?: boolean
    maxDiscount?: boolean
    maxUses?: boolean
    usedCount?: boolean
    validFrom?: boolean
    validUntil?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["coupon"]>



  export type CouponSelectScalar = {
    id?: boolean
    code?: boolean
    type?: boolean
    value?: boolean
    minOrderAmount?: boolean
    maxDiscount?: boolean
    maxUses?: boolean
    usedCount?: boolean
    validFrom?: boolean
    validUntil?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CouponOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "type" | "value" | "minOrderAmount" | "maxDiscount" | "maxUses" | "usedCount" | "validFrom" | "validUntil" | "isActive" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["coupon"]>

  export type $CouponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coupon"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      type: string
      value: Prisma.Decimal
      minOrderAmount: Prisma.Decimal | null
      maxDiscount: Prisma.Decimal | null
      maxUses: number | null
      usedCount: number | null
      validFrom: Date
      validUntil: Date
      isActive: boolean | null
      createdAt: Date | null
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["coupon"]>
    composites: {}
  }

  type CouponGetPayload<S extends boolean | null | undefined | CouponDefaultArgs> = $Result.GetResult<Prisma.$CouponPayload, S>

  type CouponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CouponFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CouponCountAggregateInputType | true
    }

  export interface CouponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coupon'], meta: { name: 'Coupon' } }
    /**
     * Find zero or one Coupon that matches the filter.
     * @param {CouponFindUniqueArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CouponFindUniqueArgs>(args: SelectSubset<T, CouponFindUniqueArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coupon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CouponFindUniqueOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CouponFindUniqueOrThrowArgs>(args: SelectSubset<T, CouponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CouponFindFirstArgs>(args?: SelectSubset<T, CouponFindFirstArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CouponFindFirstOrThrowArgs>(args?: SelectSubset<T, CouponFindFirstOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coupons
     * const coupons = await prisma.coupon.findMany()
     * 
     * // Get first 10 Coupons
     * const coupons = await prisma.coupon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponWithIdOnly = await prisma.coupon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CouponFindManyArgs>(args?: SelectSubset<T, CouponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coupon.
     * @param {CouponCreateArgs} args - Arguments to create a Coupon.
     * @example
     * // Create one Coupon
     * const Coupon = await prisma.coupon.create({
     *   data: {
     *     // ... data to create a Coupon
     *   }
     * })
     * 
     */
    create<T extends CouponCreateArgs>(args: SelectSubset<T, CouponCreateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coupons.
     * @param {CouponCreateManyArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupon = await prisma.coupon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CouponCreateManyArgs>(args?: SelectSubset<T, CouponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Coupon.
     * @param {CouponDeleteArgs} args - Arguments to delete one Coupon.
     * @example
     * // Delete one Coupon
     * const Coupon = await prisma.coupon.delete({
     *   where: {
     *     // ... filter to delete one Coupon
     *   }
     * })
     * 
     */
    delete<T extends CouponDeleteArgs>(args: SelectSubset<T, CouponDeleteArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coupon.
     * @param {CouponUpdateArgs} args - Arguments to update one Coupon.
     * @example
     * // Update one Coupon
     * const coupon = await prisma.coupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CouponUpdateArgs>(args: SelectSubset<T, CouponUpdateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coupons.
     * @param {CouponDeleteManyArgs} args - Arguments to filter Coupons to delete.
     * @example
     * // Delete a few Coupons
     * const { count } = await prisma.coupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CouponDeleteManyArgs>(args?: SelectSubset<T, CouponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coupons
     * const coupon = await prisma.coupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CouponUpdateManyArgs>(args: SelectSubset<T, CouponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Coupon.
     * @param {CouponUpsertArgs} args - Arguments to update or create a Coupon.
     * @example
     * // Update or create a Coupon
     * const coupon = await prisma.coupon.upsert({
     *   create: {
     *     // ... data to create a Coupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coupon we want to update
     *   }
     * })
     */
    upsert<T extends CouponUpsertArgs>(args: SelectSubset<T, CouponUpsertArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponCountArgs} args - Arguments to filter Coupons to count.
     * @example
     * // Count the number of Coupons
     * const count = await prisma.coupon.count({
     *   where: {
     *     // ... the filter for the Coupons we want to count
     *   }
     * })
    **/
    count<T extends CouponCountArgs>(
      args?: Subset<T, CouponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CouponAggregateArgs>(args: Subset<T, CouponAggregateArgs>): Prisma.PrismaPromise<GetCouponAggregateType<T>>

    /**
     * Group by Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CouponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouponGroupByArgs['orderBy'] }
        : { orderBy?: CouponGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CouponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coupon model
   */
  readonly fields: CouponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CouponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Coupon model
   */
  interface CouponFieldRefs {
    readonly id: FieldRef<"Coupon", 'String'>
    readonly code: FieldRef<"Coupon", 'String'>
    readonly type: FieldRef<"Coupon", 'String'>
    readonly value: FieldRef<"Coupon", 'Decimal'>
    readonly minOrderAmount: FieldRef<"Coupon", 'Decimal'>
    readonly maxDiscount: FieldRef<"Coupon", 'Decimal'>
    readonly maxUses: FieldRef<"Coupon", 'Int'>
    readonly usedCount: FieldRef<"Coupon", 'Int'>
    readonly validFrom: FieldRef<"Coupon", 'DateTime'>
    readonly validUntil: FieldRef<"Coupon", 'DateTime'>
    readonly isActive: FieldRef<"Coupon", 'Boolean'>
    readonly createdAt: FieldRef<"Coupon", 'DateTime'>
    readonly updatedAt: FieldRef<"Coupon", 'DateTime'>
    readonly deletedAt: FieldRef<"Coupon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Coupon findUnique
   */
  export type CouponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findUniqueOrThrow
   */
  export type CouponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findFirst
   */
  export type CouponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findFirstOrThrow
   */
  export type CouponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findMany
   */
  export type CouponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Filter, which Coupons to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon create
   */
  export type CouponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * The data needed to create a Coupon.
     */
    data: XOR<CouponCreateInput, CouponUncheckedCreateInput>
  }

  /**
   * Coupon createMany
   */
  export type CouponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coupons.
     */
    data: CouponCreateManyInput | CouponCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coupon update
   */
  export type CouponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * The data needed to update a Coupon.
     */
    data: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
    /**
     * Choose, which Coupon to update.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon updateMany
   */
  export type CouponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coupons.
     */
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyInput>
    /**
     * Filter which Coupons to update
     */
    where?: CouponWhereInput
    /**
     * Limit how many Coupons to update.
     */
    limit?: number
  }

  /**
   * Coupon upsert
   */
  export type CouponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * The filter to search for the Coupon to update in case it exists.
     */
    where: CouponWhereUniqueInput
    /**
     * In case the Coupon found by the `where` argument doesn't exist, create a new Coupon with this data.
     */
    create: XOR<CouponCreateInput, CouponUncheckedCreateInput>
    /**
     * In case the Coupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
  }

  /**
   * Coupon delete
   */
  export type CouponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Filter which Coupon to delete.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon deleteMany
   */
  export type CouponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupons to delete
     */
    where?: CouponWhereInput
    /**
     * Limit how many Coupons to delete.
     */
    limit?: number
  }

  /**
   * Coupon without action
   */
  export type CouponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
  }


  /**
   * Model CouponUsage
   */

  export type AggregateCouponUsage = {
    _count: CouponUsageCountAggregateOutputType | null
    _avg: CouponUsageAvgAggregateOutputType | null
    _sum: CouponUsageSumAggregateOutputType | null
    _min: CouponUsageMinAggregateOutputType | null
    _max: CouponUsageMaxAggregateOutputType | null
  }

  export type CouponUsageAvgAggregateOutputType = {
    discount_amount: Decimal | null
  }

  export type CouponUsageSumAggregateOutputType = {
    discount_amount: Decimal | null
  }

  export type CouponUsageMinAggregateOutputType = {
    id: string | null
    couponId: string | null
    userId: string | null
    orderId: string | null
    discount_amount: Decimal | null
    created_at: Date | null
  }

  export type CouponUsageMaxAggregateOutputType = {
    id: string | null
    couponId: string | null
    userId: string | null
    orderId: string | null
    discount_amount: Decimal | null
    created_at: Date | null
  }

  export type CouponUsageCountAggregateOutputType = {
    id: number
    couponId: number
    userId: number
    orderId: number
    discount_amount: number
    created_at: number
    _all: number
  }


  export type CouponUsageAvgAggregateInputType = {
    discount_amount?: true
  }

  export type CouponUsageSumAggregateInputType = {
    discount_amount?: true
  }

  export type CouponUsageMinAggregateInputType = {
    id?: true
    couponId?: true
    userId?: true
    orderId?: true
    discount_amount?: true
    created_at?: true
  }

  export type CouponUsageMaxAggregateInputType = {
    id?: true
    couponId?: true
    userId?: true
    orderId?: true
    discount_amount?: true
    created_at?: true
  }

  export type CouponUsageCountAggregateInputType = {
    id?: true
    couponId?: true
    userId?: true
    orderId?: true
    discount_amount?: true
    created_at?: true
    _all?: true
  }

  export type CouponUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CouponUsage to aggregate.
     */
    where?: CouponUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CouponUsages to fetch.
     */
    orderBy?: CouponUsageOrderByWithRelationInput | CouponUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CouponUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CouponUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CouponUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CouponUsages
    **/
    _count?: true | CouponUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CouponUsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CouponUsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponUsageMaxAggregateInputType
  }

  export type GetCouponUsageAggregateType<T extends CouponUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateCouponUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCouponUsage[P]>
      : GetScalarType<T[P], AggregateCouponUsage[P]>
  }




  export type CouponUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponUsageWhereInput
    orderBy?: CouponUsageOrderByWithAggregationInput | CouponUsageOrderByWithAggregationInput[]
    by: CouponUsageScalarFieldEnum[] | CouponUsageScalarFieldEnum
    having?: CouponUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponUsageCountAggregateInputType | true
    _avg?: CouponUsageAvgAggregateInputType
    _sum?: CouponUsageSumAggregateInputType
    _min?: CouponUsageMinAggregateInputType
    _max?: CouponUsageMaxAggregateInputType
  }

  export type CouponUsageGroupByOutputType = {
    id: string
    couponId: string
    userId: string
    orderId: string
    discount_amount: Decimal
    created_at: Date | null
    _count: CouponUsageCountAggregateOutputType | null
    _avg: CouponUsageAvgAggregateOutputType | null
    _sum: CouponUsageSumAggregateOutputType | null
    _min: CouponUsageMinAggregateOutputType | null
    _max: CouponUsageMaxAggregateOutputType | null
  }

  type GetCouponUsageGroupByPayload<T extends CouponUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CouponUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponUsageGroupByOutputType[P]>
            : GetScalarType<T[P], CouponUsageGroupByOutputType[P]>
        }
      >
    >


  export type CouponUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    couponId?: boolean
    userId?: boolean
    orderId?: boolean
    discount_amount?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["couponUsage"]>



  export type CouponUsageSelectScalar = {
    id?: boolean
    couponId?: boolean
    userId?: boolean
    orderId?: boolean
    discount_amount?: boolean
    created_at?: boolean
  }

  export type CouponUsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "couponId" | "userId" | "orderId" | "discount_amount" | "created_at", ExtArgs["result"]["couponUsage"]>

  export type $CouponUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CouponUsage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      couponId: string
      userId: string
      orderId: string
      discount_amount: Prisma.Decimal
      created_at: Date | null
    }, ExtArgs["result"]["couponUsage"]>
    composites: {}
  }

  type CouponUsageGetPayload<S extends boolean | null | undefined | CouponUsageDefaultArgs> = $Result.GetResult<Prisma.$CouponUsagePayload, S>

  type CouponUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CouponUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CouponUsageCountAggregateInputType | true
    }

  export interface CouponUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CouponUsage'], meta: { name: 'CouponUsage' } }
    /**
     * Find zero or one CouponUsage that matches the filter.
     * @param {CouponUsageFindUniqueArgs} args - Arguments to find a CouponUsage
     * @example
     * // Get one CouponUsage
     * const couponUsage = await prisma.couponUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CouponUsageFindUniqueArgs>(args: SelectSubset<T, CouponUsageFindUniqueArgs<ExtArgs>>): Prisma__CouponUsageClient<$Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CouponUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CouponUsageFindUniqueOrThrowArgs} args - Arguments to find a CouponUsage
     * @example
     * // Get one CouponUsage
     * const couponUsage = await prisma.couponUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CouponUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, CouponUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CouponUsageClient<$Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CouponUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUsageFindFirstArgs} args - Arguments to find a CouponUsage
     * @example
     * // Get one CouponUsage
     * const couponUsage = await prisma.couponUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CouponUsageFindFirstArgs>(args?: SelectSubset<T, CouponUsageFindFirstArgs<ExtArgs>>): Prisma__CouponUsageClient<$Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CouponUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUsageFindFirstOrThrowArgs} args - Arguments to find a CouponUsage
     * @example
     * // Get one CouponUsage
     * const couponUsage = await prisma.couponUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CouponUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, CouponUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__CouponUsageClient<$Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CouponUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CouponUsages
     * const couponUsages = await prisma.couponUsage.findMany()
     * 
     * // Get first 10 CouponUsages
     * const couponUsages = await prisma.couponUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponUsageWithIdOnly = await prisma.couponUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CouponUsageFindManyArgs>(args?: SelectSubset<T, CouponUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CouponUsage.
     * @param {CouponUsageCreateArgs} args - Arguments to create a CouponUsage.
     * @example
     * // Create one CouponUsage
     * const CouponUsage = await prisma.couponUsage.create({
     *   data: {
     *     // ... data to create a CouponUsage
     *   }
     * })
     * 
     */
    create<T extends CouponUsageCreateArgs>(args: SelectSubset<T, CouponUsageCreateArgs<ExtArgs>>): Prisma__CouponUsageClient<$Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CouponUsages.
     * @param {CouponUsageCreateManyArgs} args - Arguments to create many CouponUsages.
     * @example
     * // Create many CouponUsages
     * const couponUsage = await prisma.couponUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CouponUsageCreateManyArgs>(args?: SelectSubset<T, CouponUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CouponUsage.
     * @param {CouponUsageDeleteArgs} args - Arguments to delete one CouponUsage.
     * @example
     * // Delete one CouponUsage
     * const CouponUsage = await prisma.couponUsage.delete({
     *   where: {
     *     // ... filter to delete one CouponUsage
     *   }
     * })
     * 
     */
    delete<T extends CouponUsageDeleteArgs>(args: SelectSubset<T, CouponUsageDeleteArgs<ExtArgs>>): Prisma__CouponUsageClient<$Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CouponUsage.
     * @param {CouponUsageUpdateArgs} args - Arguments to update one CouponUsage.
     * @example
     * // Update one CouponUsage
     * const couponUsage = await prisma.couponUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CouponUsageUpdateArgs>(args: SelectSubset<T, CouponUsageUpdateArgs<ExtArgs>>): Prisma__CouponUsageClient<$Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CouponUsages.
     * @param {CouponUsageDeleteManyArgs} args - Arguments to filter CouponUsages to delete.
     * @example
     * // Delete a few CouponUsages
     * const { count } = await prisma.couponUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CouponUsageDeleteManyArgs>(args?: SelectSubset<T, CouponUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CouponUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CouponUsages
     * const couponUsage = await prisma.couponUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CouponUsageUpdateManyArgs>(args: SelectSubset<T, CouponUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CouponUsage.
     * @param {CouponUsageUpsertArgs} args - Arguments to update or create a CouponUsage.
     * @example
     * // Update or create a CouponUsage
     * const couponUsage = await prisma.couponUsage.upsert({
     *   create: {
     *     // ... data to create a CouponUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CouponUsage we want to update
     *   }
     * })
     */
    upsert<T extends CouponUsageUpsertArgs>(args: SelectSubset<T, CouponUsageUpsertArgs<ExtArgs>>): Prisma__CouponUsageClient<$Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CouponUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUsageCountArgs} args - Arguments to filter CouponUsages to count.
     * @example
     * // Count the number of CouponUsages
     * const count = await prisma.couponUsage.count({
     *   where: {
     *     // ... the filter for the CouponUsages we want to count
     *   }
     * })
    **/
    count<T extends CouponUsageCountArgs>(
      args?: Subset<T, CouponUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CouponUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CouponUsageAggregateArgs>(args: Subset<T, CouponUsageAggregateArgs>): Prisma.PrismaPromise<GetCouponUsageAggregateType<T>>

    /**
     * Group by CouponUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUsageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CouponUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouponUsageGroupByArgs['orderBy'] }
        : { orderBy?: CouponUsageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CouponUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CouponUsage model
   */
  readonly fields: CouponUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CouponUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CouponUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CouponUsage model
   */
  interface CouponUsageFieldRefs {
    readonly id: FieldRef<"CouponUsage", 'String'>
    readonly couponId: FieldRef<"CouponUsage", 'String'>
    readonly userId: FieldRef<"CouponUsage", 'String'>
    readonly orderId: FieldRef<"CouponUsage", 'String'>
    readonly discount_amount: FieldRef<"CouponUsage", 'Decimal'>
    readonly created_at: FieldRef<"CouponUsage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CouponUsage findUnique
   */
  export type CouponUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUsage
     */
    select?: CouponUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponUsage
     */
    omit?: CouponUsageOmit<ExtArgs> | null
    /**
     * Filter, which CouponUsage to fetch.
     */
    where: CouponUsageWhereUniqueInput
  }

  /**
   * CouponUsage findUniqueOrThrow
   */
  export type CouponUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUsage
     */
    select?: CouponUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponUsage
     */
    omit?: CouponUsageOmit<ExtArgs> | null
    /**
     * Filter, which CouponUsage to fetch.
     */
    where: CouponUsageWhereUniqueInput
  }

  /**
   * CouponUsage findFirst
   */
  export type CouponUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUsage
     */
    select?: CouponUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponUsage
     */
    omit?: CouponUsageOmit<ExtArgs> | null
    /**
     * Filter, which CouponUsage to fetch.
     */
    where?: CouponUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CouponUsages to fetch.
     */
    orderBy?: CouponUsageOrderByWithRelationInput | CouponUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CouponUsages.
     */
    cursor?: CouponUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CouponUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CouponUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CouponUsages.
     */
    distinct?: CouponUsageScalarFieldEnum | CouponUsageScalarFieldEnum[]
  }

  /**
   * CouponUsage findFirstOrThrow
   */
  export type CouponUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUsage
     */
    select?: CouponUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponUsage
     */
    omit?: CouponUsageOmit<ExtArgs> | null
    /**
     * Filter, which CouponUsage to fetch.
     */
    where?: CouponUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CouponUsages to fetch.
     */
    orderBy?: CouponUsageOrderByWithRelationInput | CouponUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CouponUsages.
     */
    cursor?: CouponUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CouponUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CouponUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CouponUsages.
     */
    distinct?: CouponUsageScalarFieldEnum | CouponUsageScalarFieldEnum[]
  }

  /**
   * CouponUsage findMany
   */
  export type CouponUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUsage
     */
    select?: CouponUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponUsage
     */
    omit?: CouponUsageOmit<ExtArgs> | null
    /**
     * Filter, which CouponUsages to fetch.
     */
    where?: CouponUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CouponUsages to fetch.
     */
    orderBy?: CouponUsageOrderByWithRelationInput | CouponUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CouponUsages.
     */
    cursor?: CouponUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CouponUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CouponUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CouponUsages.
     */
    distinct?: CouponUsageScalarFieldEnum | CouponUsageScalarFieldEnum[]
  }

  /**
   * CouponUsage create
   */
  export type CouponUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUsage
     */
    select?: CouponUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponUsage
     */
    omit?: CouponUsageOmit<ExtArgs> | null
    /**
     * The data needed to create a CouponUsage.
     */
    data: XOR<CouponUsageCreateInput, CouponUsageUncheckedCreateInput>
  }

  /**
   * CouponUsage createMany
   */
  export type CouponUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CouponUsages.
     */
    data: CouponUsageCreateManyInput | CouponUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CouponUsage update
   */
  export type CouponUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUsage
     */
    select?: CouponUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponUsage
     */
    omit?: CouponUsageOmit<ExtArgs> | null
    /**
     * The data needed to update a CouponUsage.
     */
    data: XOR<CouponUsageUpdateInput, CouponUsageUncheckedUpdateInput>
    /**
     * Choose, which CouponUsage to update.
     */
    where: CouponUsageWhereUniqueInput
  }

  /**
   * CouponUsage updateMany
   */
  export type CouponUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CouponUsages.
     */
    data: XOR<CouponUsageUpdateManyMutationInput, CouponUsageUncheckedUpdateManyInput>
    /**
     * Filter which CouponUsages to update
     */
    where?: CouponUsageWhereInput
    /**
     * Limit how many CouponUsages to update.
     */
    limit?: number
  }

  /**
   * CouponUsage upsert
   */
  export type CouponUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUsage
     */
    select?: CouponUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponUsage
     */
    omit?: CouponUsageOmit<ExtArgs> | null
    /**
     * The filter to search for the CouponUsage to update in case it exists.
     */
    where: CouponUsageWhereUniqueInput
    /**
     * In case the CouponUsage found by the `where` argument doesn't exist, create a new CouponUsage with this data.
     */
    create: XOR<CouponUsageCreateInput, CouponUsageUncheckedCreateInput>
    /**
     * In case the CouponUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CouponUsageUpdateInput, CouponUsageUncheckedUpdateInput>
  }

  /**
   * CouponUsage delete
   */
  export type CouponUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUsage
     */
    select?: CouponUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponUsage
     */
    omit?: CouponUsageOmit<ExtArgs> | null
    /**
     * Filter which CouponUsage to delete.
     */
    where: CouponUsageWhereUniqueInput
  }

  /**
   * CouponUsage deleteMany
   */
  export type CouponUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CouponUsages to delete
     */
    where?: CouponUsageWhereInput
    /**
     * Limit how many CouponUsages to delete.
     */
    limit?: number
  }

  /**
   * CouponUsage without action
   */
  export type CouponUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUsage
     */
    select?: CouponUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponUsage
     */
    omit?: CouponUsageOmit<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    subtotal: Decimal | null
    shippingCost: Decimal | null
    discount: Decimal | null
    tax: Decimal | null
    total: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    subtotal: Decimal | null
    shippingCost: Decimal | null
    discount: Decimal | null
    tax: Decimal | null
    total: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    userId: string | null
    status: string | null
    subtotal: Decimal | null
    shippingCost: Decimal | null
    discount: Decimal | null
    tax: Decimal | null
    total: Decimal | null
    shippingMethod: string | null
    shippingAddress: string | null
    billingAddress: string | null
    trackingNumber: string | null
    notes: string | null
    couponId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    userId: string | null
    status: string | null
    subtotal: Decimal | null
    shippingCost: Decimal | null
    discount: Decimal | null
    tax: Decimal | null
    total: Decimal | null
    shippingMethod: string | null
    shippingAddress: string | null
    billingAddress: string | null
    trackingNumber: string | null
    notes: string | null
    couponId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    orderNumber: number
    userId: number
    status: number
    subtotal: number
    shippingCost: number
    discount: number
    tax: number
    total: number
    shippingMethod: number
    shippingAddress: number
    billingAddress: number
    trackingNumber: number
    notes: number
    couponId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    subtotal?: true
    shippingCost?: true
    discount?: true
    tax?: true
    total?: true
  }

  export type OrderSumAggregateInputType = {
    subtotal?: true
    shippingCost?: true
    discount?: true
    tax?: true
    total?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    orderNumber?: true
    userId?: true
    status?: true
    subtotal?: true
    shippingCost?: true
    discount?: true
    tax?: true
    total?: true
    shippingMethod?: true
    shippingAddress?: true
    billingAddress?: true
    trackingNumber?: true
    notes?: true
    couponId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    orderNumber?: true
    userId?: true
    status?: true
    subtotal?: true
    shippingCost?: true
    discount?: true
    tax?: true
    total?: true
    shippingMethod?: true
    shippingAddress?: true
    billingAddress?: true
    trackingNumber?: true
    notes?: true
    couponId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    orderNumber?: true
    userId?: true
    status?: true
    subtotal?: true
    shippingCost?: true
    discount?: true
    tax?: true
    total?: true
    shippingMethod?: true
    shippingAddress?: true
    billingAddress?: true
    trackingNumber?: true
    notes?: true
    couponId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    orderNumber: string
    userId: string
    status: string
    subtotal: Decimal
    shippingCost: Decimal
    discount: Decimal
    tax: Decimal
    total: Decimal
    shippingMethod: string | null
    shippingAddress: string
    billingAddress: string | null
    trackingNumber: string | null
    notes: string | null
    couponId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    userId?: boolean
    status?: boolean
    subtotal?: boolean
    shippingCost?: boolean
    discount?: boolean
    tax?: boolean
    total?: boolean
    shippingMethod?: boolean
    shippingAddress?: boolean
    billingAddress?: boolean
    trackingNumber?: boolean
    notes?: boolean
    couponId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["order"]>



  export type OrderSelectScalar = {
    id?: boolean
    orderNumber?: boolean
    userId?: boolean
    status?: boolean
    subtotal?: boolean
    shippingCost?: boolean
    discount?: boolean
    tax?: boolean
    total?: boolean
    shippingMethod?: boolean
    shippingAddress?: boolean
    billingAddress?: boolean
    trackingNumber?: boolean
    notes?: boolean
    couponId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderNumber" | "userId" | "status" | "subtotal" | "shippingCost" | "discount" | "tax" | "total" | "shippingMethod" | "shippingAddress" | "billingAddress" | "trackingNumber" | "notes" | "couponId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["order"]>

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderNumber: string
      userId: string
      status: string
      subtotal: Prisma.Decimal
      shippingCost: Prisma.Decimal
      discount: Prisma.Decimal
      tax: Prisma.Decimal
      total: Prisma.Decimal
      shippingMethod: string | null
      shippingAddress: string
      billingAddress: string | null
      trackingNumber: string | null
      notes: string | null
      couponId: string | null
      createdAt: Date | null
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly orderNumber: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'String'>
    readonly subtotal: FieldRef<"Order", 'Decimal'>
    readonly shippingCost: FieldRef<"Order", 'Decimal'>
    readonly discount: FieldRef<"Order", 'Decimal'>
    readonly tax: FieldRef<"Order", 'Decimal'>
    readonly total: FieldRef<"Order", 'Decimal'>
    readonly shippingMethod: FieldRef<"Order", 'String'>
    readonly shippingAddress: FieldRef<"Order", 'String'>
    readonly billingAddress: FieldRef<"Order", 'String'>
    readonly trackingNumber: FieldRef<"Order", 'String'>
    readonly notes: FieldRef<"Order", 'String'>
    readonly couponId: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
    readonly deletedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
    subtotal: Decimal | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
    subtotal: Decimal | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    variantId: string | null
    quantity: number | null
    price: Decimal | null
    subtotal: Decimal | null
    createdAt: Date | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    variantId: string | null
    quantity: number | null
    price: Decimal | null
    subtotal: Decimal | null
    createdAt: Date | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    variantId: number
    quantity: number
    price: number
    subtotal: number
    createdAt: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
    price?: true
    subtotal?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
    price?: true
    subtotal?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    variantId?: true
    quantity?: true
    price?: true
    subtotal?: true
    createdAt?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    variantId?: true
    quantity?: true
    price?: true
    subtotal?: true
    createdAt?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    variantId?: true
    quantity?: true
    price?: true
    subtotal?: true
    createdAt?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    productId: string
    variantId: string | null
    quantity: number
    price: Decimal
    subtotal: Decimal
    createdAt: Date | null
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    variantId?: boolean
    quantity?: boolean
    price?: boolean
    subtotal?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["orderItem"]>



  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    productId?: boolean
    variantId?: boolean
    quantity?: boolean
    price?: boolean
    subtotal?: boolean
    createdAt?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "productId" | "variantId" | "quantity" | "price" | "subtotal" | "createdAt", ExtArgs["result"]["orderItem"]>

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      productId: string
      variantId: string | null
      quantity: number
      price: Prisma.Decimal
      subtotal: Prisma.Decimal
      createdAt: Date | null
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly productId: FieldRef<"OrderItem", 'String'>
    readonly variantId: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly price: FieldRef<"OrderItem", 'Decimal'>
    readonly subtotal: FieldRef<"OrderItem", 'Decimal'>
    readonly createdAt: FieldRef<"OrderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
  }


  /**
   * Model OrderStatusHistory
   */

  export type AggregateOrderStatusHistory = {
    _count: OrderStatusHistoryCountAggregateOutputType | null
    _min: OrderStatusHistoryMinAggregateOutputType | null
    _max: OrderStatusHistoryMaxAggregateOutputType | null
  }

  export type OrderStatusHistoryMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    status: string | null
    note: string | null
    changed_by: string | null
    created_at: Date | null
  }

  export type OrderStatusHistoryMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    status: string | null
    note: string | null
    changed_by: string | null
    created_at: Date | null
  }

  export type OrderStatusHistoryCountAggregateOutputType = {
    id: number
    orderId: number
    status: number
    note: number
    changed_by: number
    created_at: number
    _all: number
  }


  export type OrderStatusHistoryMinAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    note?: true
    changed_by?: true
    created_at?: true
  }

  export type OrderStatusHistoryMaxAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    note?: true
    changed_by?: true
    created_at?: true
  }

  export type OrderStatusHistoryCountAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    note?: true
    changed_by?: true
    created_at?: true
    _all?: true
  }

  export type OrderStatusHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderStatusHistory to aggregate.
     */
    where?: OrderStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStatusHistories to fetch.
     */
    orderBy?: OrderStatusHistoryOrderByWithRelationInput | OrderStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderStatusHistories
    **/
    _count?: true | OrderStatusHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderStatusHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderStatusHistoryMaxAggregateInputType
  }

  export type GetOrderStatusHistoryAggregateType<T extends OrderStatusHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderStatusHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderStatusHistory[P]>
      : GetScalarType<T[P], AggregateOrderStatusHistory[P]>
  }




  export type OrderStatusHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderStatusHistoryWhereInput
    orderBy?: OrderStatusHistoryOrderByWithAggregationInput | OrderStatusHistoryOrderByWithAggregationInput[]
    by: OrderStatusHistoryScalarFieldEnum[] | OrderStatusHistoryScalarFieldEnum
    having?: OrderStatusHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderStatusHistoryCountAggregateInputType | true
    _min?: OrderStatusHistoryMinAggregateInputType
    _max?: OrderStatusHistoryMaxAggregateInputType
  }

  export type OrderStatusHistoryGroupByOutputType = {
    id: string
    orderId: string
    status: string
    note: string | null
    changed_by: string | null
    created_at: Date | null
    _count: OrderStatusHistoryCountAggregateOutputType | null
    _min: OrderStatusHistoryMinAggregateOutputType | null
    _max: OrderStatusHistoryMaxAggregateOutputType | null
  }

  type GetOrderStatusHistoryGroupByPayload<T extends OrderStatusHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderStatusHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderStatusHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderStatusHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], OrderStatusHistoryGroupByOutputType[P]>
        }
      >
    >


  export type OrderStatusHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    status?: boolean
    note?: boolean
    changed_by?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["orderStatusHistory"]>



  export type OrderStatusHistorySelectScalar = {
    id?: boolean
    orderId?: boolean
    status?: boolean
    note?: boolean
    changed_by?: boolean
    created_at?: boolean
  }

  export type OrderStatusHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "status" | "note" | "changed_by" | "created_at", ExtArgs["result"]["orderStatusHistory"]>

  export type $OrderStatusHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderStatusHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      status: string
      note: string | null
      changed_by: string | null
      created_at: Date | null
    }, ExtArgs["result"]["orderStatusHistory"]>
    composites: {}
  }

  type OrderStatusHistoryGetPayload<S extends boolean | null | undefined | OrderStatusHistoryDefaultArgs> = $Result.GetResult<Prisma.$OrderStatusHistoryPayload, S>

  type OrderStatusHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderStatusHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderStatusHistoryCountAggregateInputType | true
    }

  export interface OrderStatusHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderStatusHistory'], meta: { name: 'OrderStatusHistory' } }
    /**
     * Find zero or one OrderStatusHistory that matches the filter.
     * @param {OrderStatusHistoryFindUniqueArgs} args - Arguments to find a OrderStatusHistory
     * @example
     * // Get one OrderStatusHistory
     * const orderStatusHistory = await prisma.orderStatusHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderStatusHistoryFindUniqueArgs>(args: SelectSubset<T, OrderStatusHistoryFindUniqueArgs<ExtArgs>>): Prisma__OrderStatusHistoryClient<$Result.GetResult<Prisma.$OrderStatusHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderStatusHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderStatusHistoryFindUniqueOrThrowArgs} args - Arguments to find a OrderStatusHistory
     * @example
     * // Get one OrderStatusHistory
     * const orderStatusHistory = await prisma.orderStatusHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderStatusHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderStatusHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderStatusHistoryClient<$Result.GetResult<Prisma.$OrderStatusHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderStatusHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusHistoryFindFirstArgs} args - Arguments to find a OrderStatusHistory
     * @example
     * // Get one OrderStatusHistory
     * const orderStatusHistory = await prisma.orderStatusHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderStatusHistoryFindFirstArgs>(args?: SelectSubset<T, OrderStatusHistoryFindFirstArgs<ExtArgs>>): Prisma__OrderStatusHistoryClient<$Result.GetResult<Prisma.$OrderStatusHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderStatusHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusHistoryFindFirstOrThrowArgs} args - Arguments to find a OrderStatusHistory
     * @example
     * // Get one OrderStatusHistory
     * const orderStatusHistory = await prisma.orderStatusHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderStatusHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderStatusHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderStatusHistoryClient<$Result.GetResult<Prisma.$OrderStatusHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderStatusHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderStatusHistories
     * const orderStatusHistories = await prisma.orderStatusHistory.findMany()
     * 
     * // Get first 10 OrderStatusHistories
     * const orderStatusHistories = await prisma.orderStatusHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderStatusHistoryWithIdOnly = await prisma.orderStatusHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderStatusHistoryFindManyArgs>(args?: SelectSubset<T, OrderStatusHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderStatusHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderStatusHistory.
     * @param {OrderStatusHistoryCreateArgs} args - Arguments to create a OrderStatusHistory.
     * @example
     * // Create one OrderStatusHistory
     * const OrderStatusHistory = await prisma.orderStatusHistory.create({
     *   data: {
     *     // ... data to create a OrderStatusHistory
     *   }
     * })
     * 
     */
    create<T extends OrderStatusHistoryCreateArgs>(args: SelectSubset<T, OrderStatusHistoryCreateArgs<ExtArgs>>): Prisma__OrderStatusHistoryClient<$Result.GetResult<Prisma.$OrderStatusHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderStatusHistories.
     * @param {OrderStatusHistoryCreateManyArgs} args - Arguments to create many OrderStatusHistories.
     * @example
     * // Create many OrderStatusHistories
     * const orderStatusHistory = await prisma.orderStatusHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderStatusHistoryCreateManyArgs>(args?: SelectSubset<T, OrderStatusHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderStatusHistory.
     * @param {OrderStatusHistoryDeleteArgs} args - Arguments to delete one OrderStatusHistory.
     * @example
     * // Delete one OrderStatusHistory
     * const OrderStatusHistory = await prisma.orderStatusHistory.delete({
     *   where: {
     *     // ... filter to delete one OrderStatusHistory
     *   }
     * })
     * 
     */
    delete<T extends OrderStatusHistoryDeleteArgs>(args: SelectSubset<T, OrderStatusHistoryDeleteArgs<ExtArgs>>): Prisma__OrderStatusHistoryClient<$Result.GetResult<Prisma.$OrderStatusHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderStatusHistory.
     * @param {OrderStatusHistoryUpdateArgs} args - Arguments to update one OrderStatusHistory.
     * @example
     * // Update one OrderStatusHistory
     * const orderStatusHistory = await prisma.orderStatusHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderStatusHistoryUpdateArgs>(args: SelectSubset<T, OrderStatusHistoryUpdateArgs<ExtArgs>>): Prisma__OrderStatusHistoryClient<$Result.GetResult<Prisma.$OrderStatusHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderStatusHistories.
     * @param {OrderStatusHistoryDeleteManyArgs} args - Arguments to filter OrderStatusHistories to delete.
     * @example
     * // Delete a few OrderStatusHistories
     * const { count } = await prisma.orderStatusHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderStatusHistoryDeleteManyArgs>(args?: SelectSubset<T, OrderStatusHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderStatusHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderStatusHistories
     * const orderStatusHistory = await prisma.orderStatusHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderStatusHistoryUpdateManyArgs>(args: SelectSubset<T, OrderStatusHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderStatusHistory.
     * @param {OrderStatusHistoryUpsertArgs} args - Arguments to update or create a OrderStatusHistory.
     * @example
     * // Update or create a OrderStatusHistory
     * const orderStatusHistory = await prisma.orderStatusHistory.upsert({
     *   create: {
     *     // ... data to create a OrderStatusHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderStatusHistory we want to update
     *   }
     * })
     */
    upsert<T extends OrderStatusHistoryUpsertArgs>(args: SelectSubset<T, OrderStatusHistoryUpsertArgs<ExtArgs>>): Prisma__OrderStatusHistoryClient<$Result.GetResult<Prisma.$OrderStatusHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderStatusHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusHistoryCountArgs} args - Arguments to filter OrderStatusHistories to count.
     * @example
     * // Count the number of OrderStatusHistories
     * const count = await prisma.orderStatusHistory.count({
     *   where: {
     *     // ... the filter for the OrderStatusHistories we want to count
     *   }
     * })
    **/
    count<T extends OrderStatusHistoryCountArgs>(
      args?: Subset<T, OrderStatusHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderStatusHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderStatusHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderStatusHistoryAggregateArgs>(args: Subset<T, OrderStatusHistoryAggregateArgs>): Prisma.PrismaPromise<GetOrderStatusHistoryAggregateType<T>>

    /**
     * Group by OrderStatusHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderStatusHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderStatusHistoryGroupByArgs['orderBy'] }
        : { orderBy?: OrderStatusHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderStatusHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderStatusHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderStatusHistory model
   */
  readonly fields: OrderStatusHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderStatusHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderStatusHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderStatusHistory model
   */
  interface OrderStatusHistoryFieldRefs {
    readonly id: FieldRef<"OrderStatusHistory", 'String'>
    readonly orderId: FieldRef<"OrderStatusHistory", 'String'>
    readonly status: FieldRef<"OrderStatusHistory", 'String'>
    readonly note: FieldRef<"OrderStatusHistory", 'String'>
    readonly changed_by: FieldRef<"OrderStatusHistory", 'String'>
    readonly created_at: FieldRef<"OrderStatusHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderStatusHistory findUnique
   */
  export type OrderStatusHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusHistory
     */
    select?: OrderStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusHistory
     */
    omit?: OrderStatusHistoryOmit<ExtArgs> | null
    /**
     * Filter, which OrderStatusHistory to fetch.
     */
    where: OrderStatusHistoryWhereUniqueInput
  }

  /**
   * OrderStatusHistory findUniqueOrThrow
   */
  export type OrderStatusHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusHistory
     */
    select?: OrderStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusHistory
     */
    omit?: OrderStatusHistoryOmit<ExtArgs> | null
    /**
     * Filter, which OrderStatusHistory to fetch.
     */
    where: OrderStatusHistoryWhereUniqueInput
  }

  /**
   * OrderStatusHistory findFirst
   */
  export type OrderStatusHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusHistory
     */
    select?: OrderStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusHistory
     */
    omit?: OrderStatusHistoryOmit<ExtArgs> | null
    /**
     * Filter, which OrderStatusHistory to fetch.
     */
    where?: OrderStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStatusHistories to fetch.
     */
    orderBy?: OrderStatusHistoryOrderByWithRelationInput | OrderStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderStatusHistories.
     */
    cursor?: OrderStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderStatusHistories.
     */
    distinct?: OrderStatusHistoryScalarFieldEnum | OrderStatusHistoryScalarFieldEnum[]
  }

  /**
   * OrderStatusHistory findFirstOrThrow
   */
  export type OrderStatusHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusHistory
     */
    select?: OrderStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusHistory
     */
    omit?: OrderStatusHistoryOmit<ExtArgs> | null
    /**
     * Filter, which OrderStatusHistory to fetch.
     */
    where?: OrderStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStatusHistories to fetch.
     */
    orderBy?: OrderStatusHistoryOrderByWithRelationInput | OrderStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderStatusHistories.
     */
    cursor?: OrderStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderStatusHistories.
     */
    distinct?: OrderStatusHistoryScalarFieldEnum | OrderStatusHistoryScalarFieldEnum[]
  }

  /**
   * OrderStatusHistory findMany
   */
  export type OrderStatusHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusHistory
     */
    select?: OrderStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusHistory
     */
    omit?: OrderStatusHistoryOmit<ExtArgs> | null
    /**
     * Filter, which OrderStatusHistories to fetch.
     */
    where?: OrderStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStatusHistories to fetch.
     */
    orderBy?: OrderStatusHistoryOrderByWithRelationInput | OrderStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderStatusHistories.
     */
    cursor?: OrderStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderStatusHistories.
     */
    distinct?: OrderStatusHistoryScalarFieldEnum | OrderStatusHistoryScalarFieldEnum[]
  }

  /**
   * OrderStatusHistory create
   */
  export type OrderStatusHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusHistory
     */
    select?: OrderStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusHistory
     */
    omit?: OrderStatusHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a OrderStatusHistory.
     */
    data: XOR<OrderStatusHistoryCreateInput, OrderStatusHistoryUncheckedCreateInput>
  }

  /**
   * OrderStatusHistory createMany
   */
  export type OrderStatusHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderStatusHistories.
     */
    data: OrderStatusHistoryCreateManyInput | OrderStatusHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderStatusHistory update
   */
  export type OrderStatusHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusHistory
     */
    select?: OrderStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusHistory
     */
    omit?: OrderStatusHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a OrderStatusHistory.
     */
    data: XOR<OrderStatusHistoryUpdateInput, OrderStatusHistoryUncheckedUpdateInput>
    /**
     * Choose, which OrderStatusHistory to update.
     */
    where: OrderStatusHistoryWhereUniqueInput
  }

  /**
   * OrderStatusHistory updateMany
   */
  export type OrderStatusHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderStatusHistories.
     */
    data: XOR<OrderStatusHistoryUpdateManyMutationInput, OrderStatusHistoryUncheckedUpdateManyInput>
    /**
     * Filter which OrderStatusHistories to update
     */
    where?: OrderStatusHistoryWhereInput
    /**
     * Limit how many OrderStatusHistories to update.
     */
    limit?: number
  }

  /**
   * OrderStatusHistory upsert
   */
  export type OrderStatusHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusHistory
     */
    select?: OrderStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusHistory
     */
    omit?: OrderStatusHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the OrderStatusHistory to update in case it exists.
     */
    where: OrderStatusHistoryWhereUniqueInput
    /**
     * In case the OrderStatusHistory found by the `where` argument doesn't exist, create a new OrderStatusHistory with this data.
     */
    create: XOR<OrderStatusHistoryCreateInput, OrderStatusHistoryUncheckedCreateInput>
    /**
     * In case the OrderStatusHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderStatusHistoryUpdateInput, OrderStatusHistoryUncheckedUpdateInput>
  }

  /**
   * OrderStatusHistory delete
   */
  export type OrderStatusHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusHistory
     */
    select?: OrderStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusHistory
     */
    omit?: OrderStatusHistoryOmit<ExtArgs> | null
    /**
     * Filter which OrderStatusHistory to delete.
     */
    where: OrderStatusHistoryWhereUniqueInput
  }

  /**
   * OrderStatusHistory deleteMany
   */
  export type OrderStatusHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderStatusHistories to delete
     */
    where?: OrderStatusHistoryWhereInput
    /**
     * Limit how many OrderStatusHistories to delete.
     */
    limit?: number
  }

  /**
   * OrderStatusHistory without action
   */
  export type OrderStatusHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusHistory
     */
    select?: OrderStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusHistory
     */
    omit?: OrderStatusHistoryOmit<ExtArgs> | null
  }


  /**
   * Model user_addresses
   */

  export type AggregateUser_addresses = {
    _count: User_addressesCountAggregateOutputType | null
    _min: User_addressesMinAggregateOutputType | null
    _max: User_addressesMaxAggregateOutputType | null
  }

  export type User_addressesMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    label: string | null
    recipient_name: string | null
    phone: string | null
    address_line_1: string | null
    address_line_2: string | null
    city: string | null
    province: string | null
    postal_code: string | null
    country: string | null
    is_default: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type User_addressesMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    label: string | null
    recipient_name: string | null
    phone: string | null
    address_line_1: string | null
    address_line_2: string | null
    city: string | null
    province: string | null
    postal_code: string | null
    country: string | null
    is_default: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type User_addressesCountAggregateOutputType = {
    id: number
    user_id: number
    label: number
    recipient_name: number
    phone: number
    address_line_1: number
    address_line_2: number
    city: number
    province: number
    postal_code: number
    country: number
    is_default: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type User_addressesMinAggregateInputType = {
    id?: true
    user_id?: true
    label?: true
    recipient_name?: true
    phone?: true
    address_line_1?: true
    address_line_2?: true
    city?: true
    province?: true
    postal_code?: true
    country?: true
    is_default?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type User_addressesMaxAggregateInputType = {
    id?: true
    user_id?: true
    label?: true
    recipient_name?: true
    phone?: true
    address_line_1?: true
    address_line_2?: true
    city?: true
    province?: true
    postal_code?: true
    country?: true
    is_default?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type User_addressesCountAggregateInputType = {
    id?: true
    user_id?: true
    label?: true
    recipient_name?: true
    phone?: true
    address_line_1?: true
    address_line_2?: true
    city?: true
    province?: true
    postal_code?: true
    country?: true
    is_default?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type User_addressesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_addresses to aggregate.
     */
    where?: user_addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_addresses to fetch.
     */
    orderBy?: user_addressesOrderByWithRelationInput | user_addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_addresses
    **/
    _count?: true | User_addressesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_addressesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_addressesMaxAggregateInputType
  }

  export type GetUser_addressesAggregateType<T extends User_addressesAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_addresses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_addresses[P]>
      : GetScalarType<T[P], AggregateUser_addresses[P]>
  }




  export type user_addressesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_addressesWhereInput
    orderBy?: user_addressesOrderByWithAggregationInput | user_addressesOrderByWithAggregationInput[]
    by: User_addressesScalarFieldEnum[] | User_addressesScalarFieldEnum
    having?: user_addressesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_addressesCountAggregateInputType | true
    _min?: User_addressesMinAggregateInputType
    _max?: User_addressesMaxAggregateInputType
  }

  export type User_addressesGroupByOutputType = {
    id: string
    user_id: string
    label: string
    recipient_name: string
    phone: string
    address_line_1: string
    address_line_2: string | null
    city: string
    province: string
    postal_code: string
    country: string
    is_default: boolean
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: User_addressesCountAggregateOutputType | null
    _min: User_addressesMinAggregateOutputType | null
    _max: User_addressesMaxAggregateOutputType | null
  }

  type GetUser_addressesGroupByPayload<T extends user_addressesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_addressesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_addressesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_addressesGroupByOutputType[P]>
            : GetScalarType<T[P], User_addressesGroupByOutputType[P]>
        }
      >
    >


  export type user_addressesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    label?: boolean
    recipient_name?: boolean
    phone?: boolean
    address_line_1?: boolean
    address_line_2?: boolean
    city?: boolean
    province?: boolean
    postal_code?: boolean
    country?: boolean
    is_default?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["user_addresses"]>



  export type user_addressesSelectScalar = {
    id?: boolean
    user_id?: boolean
    label?: boolean
    recipient_name?: boolean
    phone?: boolean
    address_line_1?: boolean
    address_line_2?: boolean
    city?: boolean
    province?: boolean
    postal_code?: boolean
    country?: boolean
    is_default?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type user_addressesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "label" | "recipient_name" | "phone" | "address_line_1" | "address_line_2" | "city" | "province" | "postal_code" | "country" | "is_default" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["user_addresses"]>

  export type $user_addressesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_addresses"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      label: string
      recipient_name: string
      phone: string
      address_line_1: string
      address_line_2: string | null
      city: string
      province: string
      postal_code: string
      country: string
      is_default: boolean
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["user_addresses"]>
    composites: {}
  }

  type user_addressesGetPayload<S extends boolean | null | undefined | user_addressesDefaultArgs> = $Result.GetResult<Prisma.$user_addressesPayload, S>

  type user_addressesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_addressesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_addressesCountAggregateInputType | true
    }

  export interface user_addressesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_addresses'], meta: { name: 'user_addresses' } }
    /**
     * Find zero or one User_addresses that matches the filter.
     * @param {user_addressesFindUniqueArgs} args - Arguments to find a User_addresses
     * @example
     * // Get one User_addresses
     * const user_addresses = await prisma.user_addresses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_addressesFindUniqueArgs>(args: SelectSubset<T, user_addressesFindUniqueArgs<ExtArgs>>): Prisma__user_addressesClient<$Result.GetResult<Prisma.$user_addressesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_addresses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_addressesFindUniqueOrThrowArgs} args - Arguments to find a User_addresses
     * @example
     * // Get one User_addresses
     * const user_addresses = await prisma.user_addresses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_addressesFindUniqueOrThrowArgs>(args: SelectSubset<T, user_addressesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_addressesClient<$Result.GetResult<Prisma.$user_addressesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_addressesFindFirstArgs} args - Arguments to find a User_addresses
     * @example
     * // Get one User_addresses
     * const user_addresses = await prisma.user_addresses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_addressesFindFirstArgs>(args?: SelectSubset<T, user_addressesFindFirstArgs<ExtArgs>>): Prisma__user_addressesClient<$Result.GetResult<Prisma.$user_addressesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_addresses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_addressesFindFirstOrThrowArgs} args - Arguments to find a User_addresses
     * @example
     * // Get one User_addresses
     * const user_addresses = await prisma.user_addresses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_addressesFindFirstOrThrowArgs>(args?: SelectSubset<T, user_addressesFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_addressesClient<$Result.GetResult<Prisma.$user_addressesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_addressesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_addresses
     * const user_addresses = await prisma.user_addresses.findMany()
     * 
     * // Get first 10 User_addresses
     * const user_addresses = await prisma.user_addresses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_addressesWithIdOnly = await prisma.user_addresses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_addressesFindManyArgs>(args?: SelectSubset<T, user_addressesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_addressesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_addresses.
     * @param {user_addressesCreateArgs} args - Arguments to create a User_addresses.
     * @example
     * // Create one User_addresses
     * const User_addresses = await prisma.user_addresses.create({
     *   data: {
     *     // ... data to create a User_addresses
     *   }
     * })
     * 
     */
    create<T extends user_addressesCreateArgs>(args: SelectSubset<T, user_addressesCreateArgs<ExtArgs>>): Prisma__user_addressesClient<$Result.GetResult<Prisma.$user_addressesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_addresses.
     * @param {user_addressesCreateManyArgs} args - Arguments to create many User_addresses.
     * @example
     * // Create many User_addresses
     * const user_addresses = await prisma.user_addresses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_addressesCreateManyArgs>(args?: SelectSubset<T, user_addressesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_addresses.
     * @param {user_addressesDeleteArgs} args - Arguments to delete one User_addresses.
     * @example
     * // Delete one User_addresses
     * const User_addresses = await prisma.user_addresses.delete({
     *   where: {
     *     // ... filter to delete one User_addresses
     *   }
     * })
     * 
     */
    delete<T extends user_addressesDeleteArgs>(args: SelectSubset<T, user_addressesDeleteArgs<ExtArgs>>): Prisma__user_addressesClient<$Result.GetResult<Prisma.$user_addressesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_addresses.
     * @param {user_addressesUpdateArgs} args - Arguments to update one User_addresses.
     * @example
     * // Update one User_addresses
     * const user_addresses = await prisma.user_addresses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_addressesUpdateArgs>(args: SelectSubset<T, user_addressesUpdateArgs<ExtArgs>>): Prisma__user_addressesClient<$Result.GetResult<Prisma.$user_addressesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_addresses.
     * @param {user_addressesDeleteManyArgs} args - Arguments to filter User_addresses to delete.
     * @example
     * // Delete a few User_addresses
     * const { count } = await prisma.user_addresses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_addressesDeleteManyArgs>(args?: SelectSubset<T, user_addressesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_addressesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_addresses
     * const user_addresses = await prisma.user_addresses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_addressesUpdateManyArgs>(args: SelectSubset<T, user_addressesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_addresses.
     * @param {user_addressesUpsertArgs} args - Arguments to update or create a User_addresses.
     * @example
     * // Update or create a User_addresses
     * const user_addresses = await prisma.user_addresses.upsert({
     *   create: {
     *     // ... data to create a User_addresses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_addresses we want to update
     *   }
     * })
     */
    upsert<T extends user_addressesUpsertArgs>(args: SelectSubset<T, user_addressesUpsertArgs<ExtArgs>>): Prisma__user_addressesClient<$Result.GetResult<Prisma.$user_addressesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_addressesCountArgs} args - Arguments to filter User_addresses to count.
     * @example
     * // Count the number of User_addresses
     * const count = await prisma.user_addresses.count({
     *   where: {
     *     // ... the filter for the User_addresses we want to count
     *   }
     * })
    **/
    count<T extends user_addressesCountArgs>(
      args?: Subset<T, user_addressesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_addressesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_addressesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_addressesAggregateArgs>(args: Subset<T, User_addressesAggregateArgs>): Prisma.PrismaPromise<GetUser_addressesAggregateType<T>>

    /**
     * Group by User_addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_addressesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_addressesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_addressesGroupByArgs['orderBy'] }
        : { orderBy?: user_addressesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_addressesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_addressesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_addresses model
   */
  readonly fields: user_addressesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_addresses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_addressesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_addresses model
   */
  interface user_addressesFieldRefs {
    readonly id: FieldRef<"user_addresses", 'String'>
    readonly user_id: FieldRef<"user_addresses", 'String'>
    readonly label: FieldRef<"user_addresses", 'String'>
    readonly recipient_name: FieldRef<"user_addresses", 'String'>
    readonly phone: FieldRef<"user_addresses", 'String'>
    readonly address_line_1: FieldRef<"user_addresses", 'String'>
    readonly address_line_2: FieldRef<"user_addresses", 'String'>
    readonly city: FieldRef<"user_addresses", 'String'>
    readonly province: FieldRef<"user_addresses", 'String'>
    readonly postal_code: FieldRef<"user_addresses", 'String'>
    readonly country: FieldRef<"user_addresses", 'String'>
    readonly is_default: FieldRef<"user_addresses", 'Boolean'>
    readonly created_at: FieldRef<"user_addresses", 'DateTime'>
    readonly updated_at: FieldRef<"user_addresses", 'DateTime'>
    readonly deleted_at: FieldRef<"user_addresses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_addresses findUnique
   */
  export type user_addressesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_addresses
     */
    select?: user_addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_addresses
     */
    omit?: user_addressesOmit<ExtArgs> | null
    /**
     * Filter, which user_addresses to fetch.
     */
    where: user_addressesWhereUniqueInput
  }

  /**
   * user_addresses findUniqueOrThrow
   */
  export type user_addressesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_addresses
     */
    select?: user_addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_addresses
     */
    omit?: user_addressesOmit<ExtArgs> | null
    /**
     * Filter, which user_addresses to fetch.
     */
    where: user_addressesWhereUniqueInput
  }

  /**
   * user_addresses findFirst
   */
  export type user_addressesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_addresses
     */
    select?: user_addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_addresses
     */
    omit?: user_addressesOmit<ExtArgs> | null
    /**
     * Filter, which user_addresses to fetch.
     */
    where?: user_addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_addresses to fetch.
     */
    orderBy?: user_addressesOrderByWithRelationInput | user_addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_addresses.
     */
    cursor?: user_addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_addresses.
     */
    distinct?: User_addressesScalarFieldEnum | User_addressesScalarFieldEnum[]
  }

  /**
   * user_addresses findFirstOrThrow
   */
  export type user_addressesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_addresses
     */
    select?: user_addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_addresses
     */
    omit?: user_addressesOmit<ExtArgs> | null
    /**
     * Filter, which user_addresses to fetch.
     */
    where?: user_addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_addresses to fetch.
     */
    orderBy?: user_addressesOrderByWithRelationInput | user_addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_addresses.
     */
    cursor?: user_addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_addresses.
     */
    distinct?: User_addressesScalarFieldEnum | User_addressesScalarFieldEnum[]
  }

  /**
   * user_addresses findMany
   */
  export type user_addressesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_addresses
     */
    select?: user_addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_addresses
     */
    omit?: user_addressesOmit<ExtArgs> | null
    /**
     * Filter, which user_addresses to fetch.
     */
    where?: user_addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_addresses to fetch.
     */
    orderBy?: user_addressesOrderByWithRelationInput | user_addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_addresses.
     */
    cursor?: user_addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_addresses.
     */
    distinct?: User_addressesScalarFieldEnum | User_addressesScalarFieldEnum[]
  }

  /**
   * user_addresses create
   */
  export type user_addressesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_addresses
     */
    select?: user_addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_addresses
     */
    omit?: user_addressesOmit<ExtArgs> | null
    /**
     * The data needed to create a user_addresses.
     */
    data: XOR<user_addressesCreateInput, user_addressesUncheckedCreateInput>
  }

  /**
   * user_addresses createMany
   */
  export type user_addressesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_addresses.
     */
    data: user_addressesCreateManyInput | user_addressesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_addresses update
   */
  export type user_addressesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_addresses
     */
    select?: user_addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_addresses
     */
    omit?: user_addressesOmit<ExtArgs> | null
    /**
     * The data needed to update a user_addresses.
     */
    data: XOR<user_addressesUpdateInput, user_addressesUncheckedUpdateInput>
    /**
     * Choose, which user_addresses to update.
     */
    where: user_addressesWhereUniqueInput
  }

  /**
   * user_addresses updateMany
   */
  export type user_addressesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_addresses.
     */
    data: XOR<user_addressesUpdateManyMutationInput, user_addressesUncheckedUpdateManyInput>
    /**
     * Filter which user_addresses to update
     */
    where?: user_addressesWhereInput
    /**
     * Limit how many user_addresses to update.
     */
    limit?: number
  }

  /**
   * user_addresses upsert
   */
  export type user_addressesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_addresses
     */
    select?: user_addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_addresses
     */
    omit?: user_addressesOmit<ExtArgs> | null
    /**
     * The filter to search for the user_addresses to update in case it exists.
     */
    where: user_addressesWhereUniqueInput
    /**
     * In case the user_addresses found by the `where` argument doesn't exist, create a new user_addresses with this data.
     */
    create: XOR<user_addressesCreateInput, user_addressesUncheckedCreateInput>
    /**
     * In case the user_addresses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_addressesUpdateInput, user_addressesUncheckedUpdateInput>
  }

  /**
   * user_addresses delete
   */
  export type user_addressesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_addresses
     */
    select?: user_addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_addresses
     */
    omit?: user_addressesOmit<ExtArgs> | null
    /**
     * Filter which user_addresses to delete.
     */
    where: user_addressesWhereUniqueInput
  }

  /**
   * user_addresses deleteMany
   */
  export type user_addressesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_addresses to delete
     */
    where?: user_addressesWhereInput
    /**
     * Limit how many user_addresses to delete.
     */
    limit?: number
  }

  /**
   * user_addresses without action
   */
  export type user_addressesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_addresses
     */
    select?: user_addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_addresses
     */
    omit?: user_addressesOmit<ExtArgs> | null
  }


  /**
   * Model auth_tokens
   */

  export type AggregateAuth_tokens = {
    _count: Auth_tokensCountAggregateOutputType | null
    _min: Auth_tokensMinAggregateOutputType | null
    _max: Auth_tokensMaxAggregateOutputType | null
  }

  export type Auth_tokensMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    refresh_token_hash: string | null
    ip_address: string | null
    expires_at: Date | null
    created_at: Date | null
    revoked_at: Date | null
    deleted_at: Date | null
  }

  export type Auth_tokensMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    refresh_token_hash: string | null
    ip_address: string | null
    expires_at: Date | null
    created_at: Date | null
    revoked_at: Date | null
    deleted_at: Date | null
  }

  export type Auth_tokensCountAggregateOutputType = {
    id: number
    user_id: number
    refresh_token_hash: number
    device_info: number
    ip_address: number
    expires_at: number
    created_at: number
    revoked_at: number
    deleted_at: number
    _all: number
  }


  export type Auth_tokensMinAggregateInputType = {
    id?: true
    user_id?: true
    refresh_token_hash?: true
    ip_address?: true
    expires_at?: true
    created_at?: true
    revoked_at?: true
    deleted_at?: true
  }

  export type Auth_tokensMaxAggregateInputType = {
    id?: true
    user_id?: true
    refresh_token_hash?: true
    ip_address?: true
    expires_at?: true
    created_at?: true
    revoked_at?: true
    deleted_at?: true
  }

  export type Auth_tokensCountAggregateInputType = {
    id?: true
    user_id?: true
    refresh_token_hash?: true
    device_info?: true
    ip_address?: true
    expires_at?: true
    created_at?: true
    revoked_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Auth_tokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_tokens to aggregate.
     */
    where?: auth_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_tokens to fetch.
     */
    orderBy?: auth_tokensOrderByWithRelationInput | auth_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auth_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auth_tokens
    **/
    _count?: true | Auth_tokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Auth_tokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Auth_tokensMaxAggregateInputType
  }

  export type GetAuth_tokensAggregateType<T extends Auth_tokensAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth_tokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth_tokens[P]>
      : GetScalarType<T[P], AggregateAuth_tokens[P]>
  }




  export type auth_tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_tokensWhereInput
    orderBy?: auth_tokensOrderByWithAggregationInput | auth_tokensOrderByWithAggregationInput[]
    by: Auth_tokensScalarFieldEnum[] | Auth_tokensScalarFieldEnum
    having?: auth_tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Auth_tokensCountAggregateInputType | true
    _min?: Auth_tokensMinAggregateInputType
    _max?: Auth_tokensMaxAggregateInputType
  }

  export type Auth_tokensGroupByOutputType = {
    id: string
    user_id: string
    refresh_token_hash: string
    device_info: JsonValue | null
    ip_address: string | null
    expires_at: Date
    created_at: Date
    revoked_at: Date | null
    deleted_at: Date | null
    _count: Auth_tokensCountAggregateOutputType | null
    _min: Auth_tokensMinAggregateOutputType | null
    _max: Auth_tokensMaxAggregateOutputType | null
  }

  type GetAuth_tokensGroupByPayload<T extends auth_tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Auth_tokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Auth_tokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Auth_tokensGroupByOutputType[P]>
            : GetScalarType<T[P], Auth_tokensGroupByOutputType[P]>
        }
      >
    >


  export type auth_tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    refresh_token_hash?: boolean
    device_info?: boolean
    ip_address?: boolean
    expires_at?: boolean
    created_at?: boolean
    revoked_at?: boolean
    deleted_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_tokens"]>



  export type auth_tokensSelectScalar = {
    id?: boolean
    user_id?: boolean
    refresh_token_hash?: boolean
    device_info?: boolean
    ip_address?: boolean
    expires_at?: boolean
    created_at?: boolean
    revoked_at?: boolean
    deleted_at?: boolean
  }

  export type auth_tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "refresh_token_hash" | "device_info" | "ip_address" | "expires_at" | "created_at" | "revoked_at" | "deleted_at", ExtArgs["result"]["auth_tokens"]>
  export type auth_tokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $auth_tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "auth_tokens"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      refresh_token_hash: string
      device_info: Prisma.JsonValue | null
      ip_address: string | null
      expires_at: Date
      created_at: Date
      revoked_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["auth_tokens"]>
    composites: {}
  }

  type auth_tokensGetPayload<S extends boolean | null | undefined | auth_tokensDefaultArgs> = $Result.GetResult<Prisma.$auth_tokensPayload, S>

  type auth_tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<auth_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Auth_tokensCountAggregateInputType | true
    }

  export interface auth_tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['auth_tokens'], meta: { name: 'auth_tokens' } }
    /**
     * Find zero or one Auth_tokens that matches the filter.
     * @param {auth_tokensFindUniqueArgs} args - Arguments to find a Auth_tokens
     * @example
     * // Get one Auth_tokens
     * const auth_tokens = await prisma.auth_tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends auth_tokensFindUniqueArgs>(args: SelectSubset<T, auth_tokensFindUniqueArgs<ExtArgs>>): Prisma__auth_tokensClient<$Result.GetResult<Prisma.$auth_tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auth_tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {auth_tokensFindUniqueOrThrowArgs} args - Arguments to find a Auth_tokens
     * @example
     * // Get one Auth_tokens
     * const auth_tokens = await prisma.auth_tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends auth_tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, auth_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__auth_tokensClient<$Result.GetResult<Prisma.$auth_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_tokensFindFirstArgs} args - Arguments to find a Auth_tokens
     * @example
     * // Get one Auth_tokens
     * const auth_tokens = await prisma.auth_tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends auth_tokensFindFirstArgs>(args?: SelectSubset<T, auth_tokensFindFirstArgs<ExtArgs>>): Prisma__auth_tokensClient<$Result.GetResult<Prisma.$auth_tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_tokensFindFirstOrThrowArgs} args - Arguments to find a Auth_tokens
     * @example
     * // Get one Auth_tokens
     * const auth_tokens = await prisma.auth_tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends auth_tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, auth_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__auth_tokensClient<$Result.GetResult<Prisma.$auth_tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auth_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auth_tokens
     * const auth_tokens = await prisma.auth_tokens.findMany()
     * 
     * // Get first 10 Auth_tokens
     * const auth_tokens = await prisma.auth_tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auth_tokensWithIdOnly = await prisma.auth_tokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends auth_tokensFindManyArgs>(args?: SelectSubset<T, auth_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auth_tokens.
     * @param {auth_tokensCreateArgs} args - Arguments to create a Auth_tokens.
     * @example
     * // Create one Auth_tokens
     * const Auth_tokens = await prisma.auth_tokens.create({
     *   data: {
     *     // ... data to create a Auth_tokens
     *   }
     * })
     * 
     */
    create<T extends auth_tokensCreateArgs>(args: SelectSubset<T, auth_tokensCreateArgs<ExtArgs>>): Prisma__auth_tokensClient<$Result.GetResult<Prisma.$auth_tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auth_tokens.
     * @param {auth_tokensCreateManyArgs} args - Arguments to create many Auth_tokens.
     * @example
     * // Create many Auth_tokens
     * const auth_tokens = await prisma.auth_tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends auth_tokensCreateManyArgs>(args?: SelectSubset<T, auth_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Auth_tokens.
     * @param {auth_tokensDeleteArgs} args - Arguments to delete one Auth_tokens.
     * @example
     * // Delete one Auth_tokens
     * const Auth_tokens = await prisma.auth_tokens.delete({
     *   where: {
     *     // ... filter to delete one Auth_tokens
     *   }
     * })
     * 
     */
    delete<T extends auth_tokensDeleteArgs>(args: SelectSubset<T, auth_tokensDeleteArgs<ExtArgs>>): Prisma__auth_tokensClient<$Result.GetResult<Prisma.$auth_tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auth_tokens.
     * @param {auth_tokensUpdateArgs} args - Arguments to update one Auth_tokens.
     * @example
     * // Update one Auth_tokens
     * const auth_tokens = await prisma.auth_tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends auth_tokensUpdateArgs>(args: SelectSubset<T, auth_tokensUpdateArgs<ExtArgs>>): Prisma__auth_tokensClient<$Result.GetResult<Prisma.$auth_tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auth_tokens.
     * @param {auth_tokensDeleteManyArgs} args - Arguments to filter Auth_tokens to delete.
     * @example
     * // Delete a few Auth_tokens
     * const { count } = await prisma.auth_tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends auth_tokensDeleteManyArgs>(args?: SelectSubset<T, auth_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auth_tokens
     * const auth_tokens = await prisma.auth_tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends auth_tokensUpdateManyArgs>(args: SelectSubset<T, auth_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Auth_tokens.
     * @param {auth_tokensUpsertArgs} args - Arguments to update or create a Auth_tokens.
     * @example
     * // Update or create a Auth_tokens
     * const auth_tokens = await prisma.auth_tokens.upsert({
     *   create: {
     *     // ... data to create a Auth_tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth_tokens we want to update
     *   }
     * })
     */
    upsert<T extends auth_tokensUpsertArgs>(args: SelectSubset<T, auth_tokensUpsertArgs<ExtArgs>>): Prisma__auth_tokensClient<$Result.GetResult<Prisma.$auth_tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auth_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_tokensCountArgs} args - Arguments to filter Auth_tokens to count.
     * @example
     * // Count the number of Auth_tokens
     * const count = await prisma.auth_tokens.count({
     *   where: {
     *     // ... the filter for the Auth_tokens we want to count
     *   }
     * })
    **/
    count<T extends auth_tokensCountArgs>(
      args?: Subset<T, auth_tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Auth_tokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_tokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Auth_tokensAggregateArgs>(args: Subset<T, Auth_tokensAggregateArgs>): Prisma.PrismaPromise<GetAuth_tokensAggregateType<T>>

    /**
     * Group by Auth_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_tokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends auth_tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: auth_tokensGroupByArgs['orderBy'] }
        : { orderBy?: auth_tokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, auth_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the auth_tokens model
   */
  readonly fields: auth_tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for auth_tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__auth_tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the auth_tokens model
   */
  interface auth_tokensFieldRefs {
    readonly id: FieldRef<"auth_tokens", 'String'>
    readonly user_id: FieldRef<"auth_tokens", 'String'>
    readonly refresh_token_hash: FieldRef<"auth_tokens", 'String'>
    readonly device_info: FieldRef<"auth_tokens", 'Json'>
    readonly ip_address: FieldRef<"auth_tokens", 'String'>
    readonly expires_at: FieldRef<"auth_tokens", 'DateTime'>
    readonly created_at: FieldRef<"auth_tokens", 'DateTime'>
    readonly revoked_at: FieldRef<"auth_tokens", 'DateTime'>
    readonly deleted_at: FieldRef<"auth_tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * auth_tokens findUnique
   */
  export type auth_tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_tokens
     */
    select?: auth_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_tokens
     */
    omit?: auth_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_tokensInclude<ExtArgs> | null
    /**
     * Filter, which auth_tokens to fetch.
     */
    where: auth_tokensWhereUniqueInput
  }

  /**
   * auth_tokens findUniqueOrThrow
   */
  export type auth_tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_tokens
     */
    select?: auth_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_tokens
     */
    omit?: auth_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_tokensInclude<ExtArgs> | null
    /**
     * Filter, which auth_tokens to fetch.
     */
    where: auth_tokensWhereUniqueInput
  }

  /**
   * auth_tokens findFirst
   */
  export type auth_tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_tokens
     */
    select?: auth_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_tokens
     */
    omit?: auth_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_tokensInclude<ExtArgs> | null
    /**
     * Filter, which auth_tokens to fetch.
     */
    where?: auth_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_tokens to fetch.
     */
    orderBy?: auth_tokensOrderByWithRelationInput | auth_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_tokens.
     */
    cursor?: auth_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_tokens.
     */
    distinct?: Auth_tokensScalarFieldEnum | Auth_tokensScalarFieldEnum[]
  }

  /**
   * auth_tokens findFirstOrThrow
   */
  export type auth_tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_tokens
     */
    select?: auth_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_tokens
     */
    omit?: auth_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_tokensInclude<ExtArgs> | null
    /**
     * Filter, which auth_tokens to fetch.
     */
    where?: auth_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_tokens to fetch.
     */
    orderBy?: auth_tokensOrderByWithRelationInput | auth_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_tokens.
     */
    cursor?: auth_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_tokens.
     */
    distinct?: Auth_tokensScalarFieldEnum | Auth_tokensScalarFieldEnum[]
  }

  /**
   * auth_tokens findMany
   */
  export type auth_tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_tokens
     */
    select?: auth_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_tokens
     */
    omit?: auth_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_tokensInclude<ExtArgs> | null
    /**
     * Filter, which auth_tokens to fetch.
     */
    where?: auth_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_tokens to fetch.
     */
    orderBy?: auth_tokensOrderByWithRelationInput | auth_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auth_tokens.
     */
    cursor?: auth_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_tokens.
     */
    distinct?: Auth_tokensScalarFieldEnum | Auth_tokensScalarFieldEnum[]
  }

  /**
   * auth_tokens create
   */
  export type auth_tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_tokens
     */
    select?: auth_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_tokens
     */
    omit?: auth_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_tokensInclude<ExtArgs> | null
    /**
     * The data needed to create a auth_tokens.
     */
    data: XOR<auth_tokensCreateInput, auth_tokensUncheckedCreateInput>
  }

  /**
   * auth_tokens createMany
   */
  export type auth_tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many auth_tokens.
     */
    data: auth_tokensCreateManyInput | auth_tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auth_tokens update
   */
  export type auth_tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_tokens
     */
    select?: auth_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_tokens
     */
    omit?: auth_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_tokensInclude<ExtArgs> | null
    /**
     * The data needed to update a auth_tokens.
     */
    data: XOR<auth_tokensUpdateInput, auth_tokensUncheckedUpdateInput>
    /**
     * Choose, which auth_tokens to update.
     */
    where: auth_tokensWhereUniqueInput
  }

  /**
   * auth_tokens updateMany
   */
  export type auth_tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update auth_tokens.
     */
    data: XOR<auth_tokensUpdateManyMutationInput, auth_tokensUncheckedUpdateManyInput>
    /**
     * Filter which auth_tokens to update
     */
    where?: auth_tokensWhereInput
    /**
     * Limit how many auth_tokens to update.
     */
    limit?: number
  }

  /**
   * auth_tokens upsert
   */
  export type auth_tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_tokens
     */
    select?: auth_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_tokens
     */
    omit?: auth_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_tokensInclude<ExtArgs> | null
    /**
     * The filter to search for the auth_tokens to update in case it exists.
     */
    where: auth_tokensWhereUniqueInput
    /**
     * In case the auth_tokens found by the `where` argument doesn't exist, create a new auth_tokens with this data.
     */
    create: XOR<auth_tokensCreateInput, auth_tokensUncheckedCreateInput>
    /**
     * In case the auth_tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auth_tokensUpdateInput, auth_tokensUncheckedUpdateInput>
  }

  /**
   * auth_tokens delete
   */
  export type auth_tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_tokens
     */
    select?: auth_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_tokens
     */
    omit?: auth_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_tokensInclude<ExtArgs> | null
    /**
     * Filter which auth_tokens to delete.
     */
    where: auth_tokensWhereUniqueInput
  }

  /**
   * auth_tokens deleteMany
   */
  export type auth_tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_tokens to delete
     */
    where?: auth_tokensWhereInput
    /**
     * Limit how many auth_tokens to delete.
     */
    limit?: number
  }

  /**
   * auth_tokens without action
   */
  export type auth_tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_tokens
     */
    select?: auth_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_tokens
     */
    omit?: auth_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_tokensInclude<ExtArgs> | null
  }


  /**
   * Model password_reset_tokens
   */

  export type AggregatePassword_reset_tokens = {
    _count: Password_reset_tokensCountAggregateOutputType | null
    _min: Password_reset_tokensMinAggregateOutputType | null
    _max: Password_reset_tokensMaxAggregateOutputType | null
  }

  export type Password_reset_tokensMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    token_hash: string | null
    expires_at: Date | null
    used_at: Date | null
    created_at: Date | null
  }

  export type Password_reset_tokensMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    token_hash: string | null
    expires_at: Date | null
    used_at: Date | null
    created_at: Date | null
  }

  export type Password_reset_tokensCountAggregateOutputType = {
    id: number
    user_id: number
    token_hash: number
    expires_at: number
    used_at: number
    created_at: number
    _all: number
  }


  export type Password_reset_tokensMinAggregateInputType = {
    id?: true
    user_id?: true
    token_hash?: true
    expires_at?: true
    used_at?: true
    created_at?: true
  }

  export type Password_reset_tokensMaxAggregateInputType = {
    id?: true
    user_id?: true
    token_hash?: true
    expires_at?: true
    used_at?: true
    created_at?: true
  }

  export type Password_reset_tokensCountAggregateInputType = {
    id?: true
    user_id?: true
    token_hash?: true
    expires_at?: true
    used_at?: true
    created_at?: true
    _all?: true
  }

  export type Password_reset_tokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which password_reset_tokens to aggregate.
     */
    where?: password_reset_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: password_reset_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned password_reset_tokens
    **/
    _count?: true | Password_reset_tokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Password_reset_tokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Password_reset_tokensMaxAggregateInputType
  }

  export type GetPassword_reset_tokensAggregateType<T extends Password_reset_tokensAggregateArgs> = {
        [P in keyof T & keyof AggregatePassword_reset_tokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassword_reset_tokens[P]>
      : GetScalarType<T[P], AggregatePassword_reset_tokens[P]>
  }




  export type password_reset_tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: password_reset_tokensWhereInput
    orderBy?: password_reset_tokensOrderByWithAggregationInput | password_reset_tokensOrderByWithAggregationInput[]
    by: Password_reset_tokensScalarFieldEnum[] | Password_reset_tokensScalarFieldEnum
    having?: password_reset_tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Password_reset_tokensCountAggregateInputType | true
    _min?: Password_reset_tokensMinAggregateInputType
    _max?: Password_reset_tokensMaxAggregateInputType
  }

  export type Password_reset_tokensGroupByOutputType = {
    id: string
    user_id: string
    token_hash: string
    expires_at: Date
    used_at: Date | null
    created_at: Date
    _count: Password_reset_tokensCountAggregateOutputType | null
    _min: Password_reset_tokensMinAggregateOutputType | null
    _max: Password_reset_tokensMaxAggregateOutputType | null
  }

  type GetPassword_reset_tokensGroupByPayload<T extends password_reset_tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Password_reset_tokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Password_reset_tokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Password_reset_tokensGroupByOutputType[P]>
            : GetScalarType<T[P], Password_reset_tokensGroupByOutputType[P]>
        }
      >
    >


  export type password_reset_tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token_hash?: boolean
    expires_at?: boolean
    used_at?: boolean
    created_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["password_reset_tokens"]>



  export type password_reset_tokensSelectScalar = {
    id?: boolean
    user_id?: boolean
    token_hash?: boolean
    expires_at?: boolean
    used_at?: boolean
    created_at?: boolean
  }

  export type password_reset_tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "token_hash" | "expires_at" | "used_at" | "created_at", ExtArgs["result"]["password_reset_tokens"]>
  export type password_reset_tokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $password_reset_tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "password_reset_tokens"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      token_hash: string
      expires_at: Date
      used_at: Date | null
      created_at: Date
    }, ExtArgs["result"]["password_reset_tokens"]>
    composites: {}
  }

  type password_reset_tokensGetPayload<S extends boolean | null | undefined | password_reset_tokensDefaultArgs> = $Result.GetResult<Prisma.$password_reset_tokensPayload, S>

  type password_reset_tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<password_reset_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Password_reset_tokensCountAggregateInputType | true
    }

  export interface password_reset_tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['password_reset_tokens'], meta: { name: 'password_reset_tokens' } }
    /**
     * Find zero or one Password_reset_tokens that matches the filter.
     * @param {password_reset_tokensFindUniqueArgs} args - Arguments to find a Password_reset_tokens
     * @example
     * // Get one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends password_reset_tokensFindUniqueArgs>(args: SelectSubset<T, password_reset_tokensFindUniqueArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Password_reset_tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {password_reset_tokensFindUniqueOrThrowArgs} args - Arguments to find a Password_reset_tokens
     * @example
     * // Get one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends password_reset_tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, password_reset_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password_reset_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensFindFirstArgs} args - Arguments to find a Password_reset_tokens
     * @example
     * // Get one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends password_reset_tokensFindFirstArgs>(args?: SelectSubset<T, password_reset_tokensFindFirstArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password_reset_tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensFindFirstOrThrowArgs} args - Arguments to find a Password_reset_tokens
     * @example
     * // Get one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends password_reset_tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, password_reset_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Password_reset_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findMany()
     * 
     * // Get first 10 Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const password_reset_tokensWithIdOnly = await prisma.password_reset_tokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends password_reset_tokensFindManyArgs>(args?: SelectSubset<T, password_reset_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Password_reset_tokens.
     * @param {password_reset_tokensCreateArgs} args - Arguments to create a Password_reset_tokens.
     * @example
     * // Create one Password_reset_tokens
     * const Password_reset_tokens = await prisma.password_reset_tokens.create({
     *   data: {
     *     // ... data to create a Password_reset_tokens
     *   }
     * })
     * 
     */
    create<T extends password_reset_tokensCreateArgs>(args: SelectSubset<T, password_reset_tokensCreateArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Password_reset_tokens.
     * @param {password_reset_tokensCreateManyArgs} args - Arguments to create many Password_reset_tokens.
     * @example
     * // Create many Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends password_reset_tokensCreateManyArgs>(args?: SelectSubset<T, password_reset_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Password_reset_tokens.
     * @param {password_reset_tokensDeleteArgs} args - Arguments to delete one Password_reset_tokens.
     * @example
     * // Delete one Password_reset_tokens
     * const Password_reset_tokens = await prisma.password_reset_tokens.delete({
     *   where: {
     *     // ... filter to delete one Password_reset_tokens
     *   }
     * })
     * 
     */
    delete<T extends password_reset_tokensDeleteArgs>(args: SelectSubset<T, password_reset_tokensDeleteArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Password_reset_tokens.
     * @param {password_reset_tokensUpdateArgs} args - Arguments to update one Password_reset_tokens.
     * @example
     * // Update one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends password_reset_tokensUpdateArgs>(args: SelectSubset<T, password_reset_tokensUpdateArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Password_reset_tokens.
     * @param {password_reset_tokensDeleteManyArgs} args - Arguments to filter Password_reset_tokens to delete.
     * @example
     * // Delete a few Password_reset_tokens
     * const { count } = await prisma.password_reset_tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends password_reset_tokensDeleteManyArgs>(args?: SelectSubset<T, password_reset_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends password_reset_tokensUpdateManyArgs>(args: SelectSubset<T, password_reset_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Password_reset_tokens.
     * @param {password_reset_tokensUpsertArgs} args - Arguments to update or create a Password_reset_tokens.
     * @example
     * // Update or create a Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.upsert({
     *   create: {
     *     // ... data to create a Password_reset_tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Password_reset_tokens we want to update
     *   }
     * })
     */
    upsert<T extends password_reset_tokensUpsertArgs>(args: SelectSubset<T, password_reset_tokensUpsertArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensCountArgs} args - Arguments to filter Password_reset_tokens to count.
     * @example
     * // Count the number of Password_reset_tokens
     * const count = await prisma.password_reset_tokens.count({
     *   where: {
     *     // ... the filter for the Password_reset_tokens we want to count
     *   }
     * })
    **/
    count<T extends password_reset_tokensCountArgs>(
      args?: Subset<T, password_reset_tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Password_reset_tokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Password_reset_tokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Password_reset_tokensAggregateArgs>(args: Subset<T, Password_reset_tokensAggregateArgs>): Prisma.PrismaPromise<GetPassword_reset_tokensAggregateType<T>>

    /**
     * Group by Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends password_reset_tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: password_reset_tokensGroupByArgs['orderBy'] }
        : { orderBy?: password_reset_tokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, password_reset_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassword_reset_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the password_reset_tokens model
   */
  readonly fields: password_reset_tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for password_reset_tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__password_reset_tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the password_reset_tokens model
   */
  interface password_reset_tokensFieldRefs {
    readonly id: FieldRef<"password_reset_tokens", 'String'>
    readonly user_id: FieldRef<"password_reset_tokens", 'String'>
    readonly token_hash: FieldRef<"password_reset_tokens", 'String'>
    readonly expires_at: FieldRef<"password_reset_tokens", 'DateTime'>
    readonly used_at: FieldRef<"password_reset_tokens", 'DateTime'>
    readonly created_at: FieldRef<"password_reset_tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * password_reset_tokens findUnique
   */
  export type password_reset_tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where: password_reset_tokensWhereUniqueInput
  }

  /**
   * password_reset_tokens findUniqueOrThrow
   */
  export type password_reset_tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where: password_reset_tokensWhereUniqueInput
  }

  /**
   * password_reset_tokens findFirst
   */
  export type password_reset_tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where?: password_reset_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for password_reset_tokens.
     */
    cursor?: password_reset_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of password_reset_tokens.
     */
    distinct?: Password_reset_tokensScalarFieldEnum | Password_reset_tokensScalarFieldEnum[]
  }

  /**
   * password_reset_tokens findFirstOrThrow
   */
  export type password_reset_tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where?: password_reset_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for password_reset_tokens.
     */
    cursor?: password_reset_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of password_reset_tokens.
     */
    distinct?: Password_reset_tokensScalarFieldEnum | Password_reset_tokensScalarFieldEnum[]
  }

  /**
   * password_reset_tokens findMany
   */
  export type password_reset_tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where?: password_reset_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing password_reset_tokens.
     */
    cursor?: password_reset_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of password_reset_tokens.
     */
    distinct?: Password_reset_tokensScalarFieldEnum | Password_reset_tokensScalarFieldEnum[]
  }

  /**
   * password_reset_tokens create
   */
  export type password_reset_tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * The data needed to create a password_reset_tokens.
     */
    data: XOR<password_reset_tokensCreateInput, password_reset_tokensUncheckedCreateInput>
  }

  /**
   * password_reset_tokens createMany
   */
  export type password_reset_tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many password_reset_tokens.
     */
    data: password_reset_tokensCreateManyInput | password_reset_tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * password_reset_tokens update
   */
  export type password_reset_tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * The data needed to update a password_reset_tokens.
     */
    data: XOR<password_reset_tokensUpdateInput, password_reset_tokensUncheckedUpdateInput>
    /**
     * Choose, which password_reset_tokens to update.
     */
    where: password_reset_tokensWhereUniqueInput
  }

  /**
   * password_reset_tokens updateMany
   */
  export type password_reset_tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update password_reset_tokens.
     */
    data: XOR<password_reset_tokensUpdateManyMutationInput, password_reset_tokensUncheckedUpdateManyInput>
    /**
     * Filter which password_reset_tokens to update
     */
    where?: password_reset_tokensWhereInput
    /**
     * Limit how many password_reset_tokens to update.
     */
    limit?: number
  }

  /**
   * password_reset_tokens upsert
   */
  export type password_reset_tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * The filter to search for the password_reset_tokens to update in case it exists.
     */
    where: password_reset_tokensWhereUniqueInput
    /**
     * In case the password_reset_tokens found by the `where` argument doesn't exist, create a new password_reset_tokens with this data.
     */
    create: XOR<password_reset_tokensCreateInput, password_reset_tokensUncheckedCreateInput>
    /**
     * In case the password_reset_tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<password_reset_tokensUpdateInput, password_reset_tokensUncheckedUpdateInput>
  }

  /**
   * password_reset_tokens delete
   */
  export type password_reset_tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * Filter which password_reset_tokens to delete.
     */
    where: password_reset_tokensWhereUniqueInput
  }

  /**
   * password_reset_tokens deleteMany
   */
  export type password_reset_tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which password_reset_tokens to delete
     */
    where?: password_reset_tokensWhereInput
    /**
     * Limit how many password_reset_tokens to delete.
     */
    limit?: number
  }

  /**
   * password_reset_tokens without action
   */
  export type password_reset_tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
  }


  /**
   * Model email_verification_tokens
   */

  export type AggregateEmail_verification_tokens = {
    _count: Email_verification_tokensCountAggregateOutputType | null
    _min: Email_verification_tokensMinAggregateOutputType | null
    _max: Email_verification_tokensMaxAggregateOutputType | null
  }

  export type Email_verification_tokensMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    token_hash: string | null
    expires_at: Date | null
    verified_at: Date | null
    created_at: Date | null
  }

  export type Email_verification_tokensMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    token_hash: string | null
    expires_at: Date | null
    verified_at: Date | null
    created_at: Date | null
  }

  export type Email_verification_tokensCountAggregateOutputType = {
    id: number
    user_id: number
    token_hash: number
    expires_at: number
    verified_at: number
    created_at: number
    _all: number
  }


  export type Email_verification_tokensMinAggregateInputType = {
    id?: true
    user_id?: true
    token_hash?: true
    expires_at?: true
    verified_at?: true
    created_at?: true
  }

  export type Email_verification_tokensMaxAggregateInputType = {
    id?: true
    user_id?: true
    token_hash?: true
    expires_at?: true
    verified_at?: true
    created_at?: true
  }

  export type Email_verification_tokensCountAggregateInputType = {
    id?: true
    user_id?: true
    token_hash?: true
    expires_at?: true
    verified_at?: true
    created_at?: true
    _all?: true
  }

  export type Email_verification_tokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which email_verification_tokens to aggregate.
     */
    where?: email_verification_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_verification_tokens to fetch.
     */
    orderBy?: email_verification_tokensOrderByWithRelationInput | email_verification_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: email_verification_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_verification_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_verification_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned email_verification_tokens
    **/
    _count?: true | Email_verification_tokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Email_verification_tokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Email_verification_tokensMaxAggregateInputType
  }

  export type GetEmail_verification_tokensAggregateType<T extends Email_verification_tokensAggregateArgs> = {
        [P in keyof T & keyof AggregateEmail_verification_tokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmail_verification_tokens[P]>
      : GetScalarType<T[P], AggregateEmail_verification_tokens[P]>
  }




  export type email_verification_tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: email_verification_tokensWhereInput
    orderBy?: email_verification_tokensOrderByWithAggregationInput | email_verification_tokensOrderByWithAggregationInput[]
    by: Email_verification_tokensScalarFieldEnum[] | Email_verification_tokensScalarFieldEnum
    having?: email_verification_tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Email_verification_tokensCountAggregateInputType | true
    _min?: Email_verification_tokensMinAggregateInputType
    _max?: Email_verification_tokensMaxAggregateInputType
  }

  export type Email_verification_tokensGroupByOutputType = {
    id: string
    user_id: string
    token_hash: string
    expires_at: Date
    verified_at: Date | null
    created_at: Date
    _count: Email_verification_tokensCountAggregateOutputType | null
    _min: Email_verification_tokensMinAggregateOutputType | null
    _max: Email_verification_tokensMaxAggregateOutputType | null
  }

  type GetEmail_verification_tokensGroupByPayload<T extends email_verification_tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Email_verification_tokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Email_verification_tokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Email_verification_tokensGroupByOutputType[P]>
            : GetScalarType<T[P], Email_verification_tokensGroupByOutputType[P]>
        }
      >
    >


  export type email_verification_tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token_hash?: boolean
    expires_at?: boolean
    verified_at?: boolean
    created_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email_verification_tokens"]>



  export type email_verification_tokensSelectScalar = {
    id?: boolean
    user_id?: boolean
    token_hash?: boolean
    expires_at?: boolean
    verified_at?: boolean
    created_at?: boolean
  }

  export type email_verification_tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "token_hash" | "expires_at" | "verified_at" | "created_at", ExtArgs["result"]["email_verification_tokens"]>
  export type email_verification_tokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $email_verification_tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "email_verification_tokens"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      token_hash: string
      expires_at: Date
      verified_at: Date | null
      created_at: Date
    }, ExtArgs["result"]["email_verification_tokens"]>
    composites: {}
  }

  type email_verification_tokensGetPayload<S extends boolean | null | undefined | email_verification_tokensDefaultArgs> = $Result.GetResult<Prisma.$email_verification_tokensPayload, S>

  type email_verification_tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<email_verification_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Email_verification_tokensCountAggregateInputType | true
    }

  export interface email_verification_tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['email_verification_tokens'], meta: { name: 'email_verification_tokens' } }
    /**
     * Find zero or one Email_verification_tokens that matches the filter.
     * @param {email_verification_tokensFindUniqueArgs} args - Arguments to find a Email_verification_tokens
     * @example
     * // Get one Email_verification_tokens
     * const email_verification_tokens = await prisma.email_verification_tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends email_verification_tokensFindUniqueArgs>(args: SelectSubset<T, email_verification_tokensFindUniqueArgs<ExtArgs>>): Prisma__email_verification_tokensClient<$Result.GetResult<Prisma.$email_verification_tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Email_verification_tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {email_verification_tokensFindUniqueOrThrowArgs} args - Arguments to find a Email_verification_tokens
     * @example
     * // Get one Email_verification_tokens
     * const email_verification_tokens = await prisma.email_verification_tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends email_verification_tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, email_verification_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__email_verification_tokensClient<$Result.GetResult<Prisma.$email_verification_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email_verification_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verification_tokensFindFirstArgs} args - Arguments to find a Email_verification_tokens
     * @example
     * // Get one Email_verification_tokens
     * const email_verification_tokens = await prisma.email_verification_tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends email_verification_tokensFindFirstArgs>(args?: SelectSubset<T, email_verification_tokensFindFirstArgs<ExtArgs>>): Prisma__email_verification_tokensClient<$Result.GetResult<Prisma.$email_verification_tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email_verification_tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verification_tokensFindFirstOrThrowArgs} args - Arguments to find a Email_verification_tokens
     * @example
     * // Get one Email_verification_tokens
     * const email_verification_tokens = await prisma.email_verification_tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends email_verification_tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, email_verification_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__email_verification_tokensClient<$Result.GetResult<Prisma.$email_verification_tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Email_verification_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verification_tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Email_verification_tokens
     * const email_verification_tokens = await prisma.email_verification_tokens.findMany()
     * 
     * // Get first 10 Email_verification_tokens
     * const email_verification_tokens = await prisma.email_verification_tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const email_verification_tokensWithIdOnly = await prisma.email_verification_tokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends email_verification_tokensFindManyArgs>(args?: SelectSubset<T, email_verification_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_verification_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Email_verification_tokens.
     * @param {email_verification_tokensCreateArgs} args - Arguments to create a Email_verification_tokens.
     * @example
     * // Create one Email_verification_tokens
     * const Email_verification_tokens = await prisma.email_verification_tokens.create({
     *   data: {
     *     // ... data to create a Email_verification_tokens
     *   }
     * })
     * 
     */
    create<T extends email_verification_tokensCreateArgs>(args: SelectSubset<T, email_verification_tokensCreateArgs<ExtArgs>>): Prisma__email_verification_tokensClient<$Result.GetResult<Prisma.$email_verification_tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Email_verification_tokens.
     * @param {email_verification_tokensCreateManyArgs} args - Arguments to create many Email_verification_tokens.
     * @example
     * // Create many Email_verification_tokens
     * const email_verification_tokens = await prisma.email_verification_tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends email_verification_tokensCreateManyArgs>(args?: SelectSubset<T, email_verification_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Email_verification_tokens.
     * @param {email_verification_tokensDeleteArgs} args - Arguments to delete one Email_verification_tokens.
     * @example
     * // Delete one Email_verification_tokens
     * const Email_verification_tokens = await prisma.email_verification_tokens.delete({
     *   where: {
     *     // ... filter to delete one Email_verification_tokens
     *   }
     * })
     * 
     */
    delete<T extends email_verification_tokensDeleteArgs>(args: SelectSubset<T, email_verification_tokensDeleteArgs<ExtArgs>>): Prisma__email_verification_tokensClient<$Result.GetResult<Prisma.$email_verification_tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Email_verification_tokens.
     * @param {email_verification_tokensUpdateArgs} args - Arguments to update one Email_verification_tokens.
     * @example
     * // Update one Email_verification_tokens
     * const email_verification_tokens = await prisma.email_verification_tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends email_verification_tokensUpdateArgs>(args: SelectSubset<T, email_verification_tokensUpdateArgs<ExtArgs>>): Prisma__email_verification_tokensClient<$Result.GetResult<Prisma.$email_verification_tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Email_verification_tokens.
     * @param {email_verification_tokensDeleteManyArgs} args - Arguments to filter Email_verification_tokens to delete.
     * @example
     * // Delete a few Email_verification_tokens
     * const { count } = await prisma.email_verification_tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends email_verification_tokensDeleteManyArgs>(args?: SelectSubset<T, email_verification_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Email_verification_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verification_tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Email_verification_tokens
     * const email_verification_tokens = await prisma.email_verification_tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends email_verification_tokensUpdateManyArgs>(args: SelectSubset<T, email_verification_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Email_verification_tokens.
     * @param {email_verification_tokensUpsertArgs} args - Arguments to update or create a Email_verification_tokens.
     * @example
     * // Update or create a Email_verification_tokens
     * const email_verification_tokens = await prisma.email_verification_tokens.upsert({
     *   create: {
     *     // ... data to create a Email_verification_tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Email_verification_tokens we want to update
     *   }
     * })
     */
    upsert<T extends email_verification_tokensUpsertArgs>(args: SelectSubset<T, email_verification_tokensUpsertArgs<ExtArgs>>): Prisma__email_verification_tokensClient<$Result.GetResult<Prisma.$email_verification_tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Email_verification_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verification_tokensCountArgs} args - Arguments to filter Email_verification_tokens to count.
     * @example
     * // Count the number of Email_verification_tokens
     * const count = await prisma.email_verification_tokens.count({
     *   where: {
     *     // ... the filter for the Email_verification_tokens we want to count
     *   }
     * })
    **/
    count<T extends email_verification_tokensCountArgs>(
      args?: Subset<T, email_verification_tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Email_verification_tokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Email_verification_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Email_verification_tokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Email_verification_tokensAggregateArgs>(args: Subset<T, Email_verification_tokensAggregateArgs>): Prisma.PrismaPromise<GetEmail_verification_tokensAggregateType<T>>

    /**
     * Group by Email_verification_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verification_tokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends email_verification_tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: email_verification_tokensGroupByArgs['orderBy'] }
        : { orderBy?: email_verification_tokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, email_verification_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmail_verification_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the email_verification_tokens model
   */
  readonly fields: email_verification_tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for email_verification_tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__email_verification_tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the email_verification_tokens model
   */
  interface email_verification_tokensFieldRefs {
    readonly id: FieldRef<"email_verification_tokens", 'String'>
    readonly user_id: FieldRef<"email_verification_tokens", 'String'>
    readonly token_hash: FieldRef<"email_verification_tokens", 'String'>
    readonly expires_at: FieldRef<"email_verification_tokens", 'DateTime'>
    readonly verified_at: FieldRef<"email_verification_tokens", 'DateTime'>
    readonly created_at: FieldRef<"email_verification_tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * email_verification_tokens findUnique
   */
  export type email_verification_tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification_tokens
     */
    select?: email_verification_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification_tokens
     */
    omit?: email_verification_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verification_tokensInclude<ExtArgs> | null
    /**
     * Filter, which email_verification_tokens to fetch.
     */
    where: email_verification_tokensWhereUniqueInput
  }

  /**
   * email_verification_tokens findUniqueOrThrow
   */
  export type email_verification_tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification_tokens
     */
    select?: email_verification_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification_tokens
     */
    omit?: email_verification_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verification_tokensInclude<ExtArgs> | null
    /**
     * Filter, which email_verification_tokens to fetch.
     */
    where: email_verification_tokensWhereUniqueInput
  }

  /**
   * email_verification_tokens findFirst
   */
  export type email_verification_tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification_tokens
     */
    select?: email_verification_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification_tokens
     */
    omit?: email_verification_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verification_tokensInclude<ExtArgs> | null
    /**
     * Filter, which email_verification_tokens to fetch.
     */
    where?: email_verification_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_verification_tokens to fetch.
     */
    orderBy?: email_verification_tokensOrderByWithRelationInput | email_verification_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for email_verification_tokens.
     */
    cursor?: email_verification_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_verification_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_verification_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of email_verification_tokens.
     */
    distinct?: Email_verification_tokensScalarFieldEnum | Email_verification_tokensScalarFieldEnum[]
  }

  /**
   * email_verification_tokens findFirstOrThrow
   */
  export type email_verification_tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification_tokens
     */
    select?: email_verification_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification_tokens
     */
    omit?: email_verification_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verification_tokensInclude<ExtArgs> | null
    /**
     * Filter, which email_verification_tokens to fetch.
     */
    where?: email_verification_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_verification_tokens to fetch.
     */
    orderBy?: email_verification_tokensOrderByWithRelationInput | email_verification_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for email_verification_tokens.
     */
    cursor?: email_verification_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_verification_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_verification_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of email_verification_tokens.
     */
    distinct?: Email_verification_tokensScalarFieldEnum | Email_verification_tokensScalarFieldEnum[]
  }

  /**
   * email_verification_tokens findMany
   */
  export type email_verification_tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification_tokens
     */
    select?: email_verification_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification_tokens
     */
    omit?: email_verification_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verification_tokensInclude<ExtArgs> | null
    /**
     * Filter, which email_verification_tokens to fetch.
     */
    where?: email_verification_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_verification_tokens to fetch.
     */
    orderBy?: email_verification_tokensOrderByWithRelationInput | email_verification_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing email_verification_tokens.
     */
    cursor?: email_verification_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_verification_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_verification_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of email_verification_tokens.
     */
    distinct?: Email_verification_tokensScalarFieldEnum | Email_verification_tokensScalarFieldEnum[]
  }

  /**
   * email_verification_tokens create
   */
  export type email_verification_tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification_tokens
     */
    select?: email_verification_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification_tokens
     */
    omit?: email_verification_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verification_tokensInclude<ExtArgs> | null
    /**
     * The data needed to create a email_verification_tokens.
     */
    data: XOR<email_verification_tokensCreateInput, email_verification_tokensUncheckedCreateInput>
  }

  /**
   * email_verification_tokens createMany
   */
  export type email_verification_tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many email_verification_tokens.
     */
    data: email_verification_tokensCreateManyInput | email_verification_tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * email_verification_tokens update
   */
  export type email_verification_tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification_tokens
     */
    select?: email_verification_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification_tokens
     */
    omit?: email_verification_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verification_tokensInclude<ExtArgs> | null
    /**
     * The data needed to update a email_verification_tokens.
     */
    data: XOR<email_verification_tokensUpdateInput, email_verification_tokensUncheckedUpdateInput>
    /**
     * Choose, which email_verification_tokens to update.
     */
    where: email_verification_tokensWhereUniqueInput
  }

  /**
   * email_verification_tokens updateMany
   */
  export type email_verification_tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update email_verification_tokens.
     */
    data: XOR<email_verification_tokensUpdateManyMutationInput, email_verification_tokensUncheckedUpdateManyInput>
    /**
     * Filter which email_verification_tokens to update
     */
    where?: email_verification_tokensWhereInput
    /**
     * Limit how many email_verification_tokens to update.
     */
    limit?: number
  }

  /**
   * email_verification_tokens upsert
   */
  export type email_verification_tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification_tokens
     */
    select?: email_verification_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification_tokens
     */
    omit?: email_verification_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verification_tokensInclude<ExtArgs> | null
    /**
     * The filter to search for the email_verification_tokens to update in case it exists.
     */
    where: email_verification_tokensWhereUniqueInput
    /**
     * In case the email_verification_tokens found by the `where` argument doesn't exist, create a new email_verification_tokens with this data.
     */
    create: XOR<email_verification_tokensCreateInput, email_verification_tokensUncheckedCreateInput>
    /**
     * In case the email_verification_tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<email_verification_tokensUpdateInput, email_verification_tokensUncheckedUpdateInput>
  }

  /**
   * email_verification_tokens delete
   */
  export type email_verification_tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification_tokens
     */
    select?: email_verification_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification_tokens
     */
    omit?: email_verification_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verification_tokensInclude<ExtArgs> | null
    /**
     * Filter which email_verification_tokens to delete.
     */
    where: email_verification_tokensWhereUniqueInput
  }

  /**
   * email_verification_tokens deleteMany
   */
  export type email_verification_tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which email_verification_tokens to delete
     */
    where?: email_verification_tokensWhereInput
    /**
     * Limit how many email_verification_tokens to delete.
     */
    limit?: number
  }

  /**
   * email_verification_tokens without action
   */
  export type email_verification_tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification_tokens
     */
    select?: email_verification_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification_tokens
     */
    omit?: email_verification_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verification_tokensInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    avatar_url: string | null
    role: string | null
    email_verified: boolean | null
    is_active: boolean | null
    date_of_birth: Date | null
    metadata: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    avatar_url: string | null
    role: string | null
    email_verified: boolean | null
    is_active: boolean | null
    date_of_birth: Date | null
    metadata: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password_hash: number
    first_name: number
    last_name: number
    phone: number
    avatar_url: number
    role: number
    email_verified: number
    is_active: number
    date_of_birth: number
    metadata: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    first_name?: true
    last_name?: true
    phone?: true
    avatar_url?: true
    role?: true
    email_verified?: true
    is_active?: true
    date_of_birth?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    first_name?: true
    last_name?: true
    phone?: true
    avatar_url?: true
    role?: true
    email_verified?: true
    is_active?: true
    date_of_birth?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    first_name?: true
    last_name?: true
    phone?: true
    avatar_url?: true
    role?: true
    email_verified?: true
    is_active?: true
    date_of_birth?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    phone: string | null
    avatar_url: string | null
    role: string
    email_verified: boolean
    is_active: boolean
    date_of_birth: Date | null
    metadata: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    avatar_url?: boolean
    role?: boolean
    email_verified?: boolean
    is_active?: boolean
    date_of_birth?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    authTokens?: boolean | users$authTokensArgs<ExtArgs>
    passwordResetTokens?: boolean | users$passwordResetTokensArgs<ExtArgs>
    emailVerificationTokens?: boolean | users$emailVerificationTokensArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password_hash?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    avatar_url?: boolean
    role?: boolean
    email_verified?: boolean
    is_active?: boolean
    date_of_birth?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password_hash" | "first_name" | "last_name" | "phone" | "avatar_url" | "role" | "email_verified" | "is_active" | "date_of_birth" | "metadata" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authTokens?: boolean | users$authTokensArgs<ExtArgs>
    passwordResetTokens?: boolean | users$passwordResetTokensArgs<ExtArgs>
    emailVerificationTokens?: boolean | users$emailVerificationTokensArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      authTokens: Prisma.$auth_tokensPayload<ExtArgs>[]
      passwordResetTokens: Prisma.$password_reset_tokensPayload<ExtArgs>[]
      emailVerificationTokens: Prisma.$email_verification_tokensPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password_hash: string
      first_name: string
      last_name: string
      phone: string | null
      avatar_url: string | null
      role: string
      email_verified: boolean
      is_active: boolean
      date_of_birth: Date | null
      metadata: string | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authTokens<T extends users$authTokensArgs<ExtArgs> = {}>(args?: Subset<T, users$authTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passwordResetTokens<T extends users$passwordResetTokensArgs<ExtArgs> = {}>(args?: Subset<T, users$passwordResetTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emailVerificationTokens<T extends users$emailVerificationTokensArgs<ExtArgs> = {}>(args?: Subset<T, users$emailVerificationTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_verification_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly avatar_url: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly email_verified: FieldRef<"users", 'Boolean'>
    readonly is_active: FieldRef<"users", 'Boolean'>
    readonly date_of_birth: FieldRef<"users", 'DateTime'>
    readonly metadata: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
    readonly deleted_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.authTokens
   */
  export type users$authTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_tokens
     */
    select?: auth_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_tokens
     */
    omit?: auth_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_tokensInclude<ExtArgs> | null
    where?: auth_tokensWhereInput
    orderBy?: auth_tokensOrderByWithRelationInput | auth_tokensOrderByWithRelationInput[]
    cursor?: auth_tokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Auth_tokensScalarFieldEnum | Auth_tokensScalarFieldEnum[]
  }

  /**
   * users.passwordResetTokens
   */
  export type users$passwordResetTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    where?: password_reset_tokensWhereInput
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    cursor?: password_reset_tokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Password_reset_tokensScalarFieldEnum | Password_reset_tokensScalarFieldEnum[]
  }

  /**
   * users.emailVerificationTokens
   */
  export type users$emailVerificationTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification_tokens
     */
    select?: email_verification_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification_tokens
     */
    omit?: email_verification_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verification_tokensInclude<ExtArgs> | null
    where?: email_verification_tokensWhereInput
    orderBy?: email_verification_tokensOrderByWithRelationInput | email_verification_tokensOrderByWithRelationInput[]
    cursor?: email_verification_tokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Email_verification_tokensScalarFieldEnum | Email_verification_tokensScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    iconUrl: 'iconUrl',
    imageUrl: 'imageUrl',
    parentId: 'parentId',
    sortOrder: 'sortOrder',
    isActive: 'isActive',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const BrandScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    logoUrl: 'logoUrl',
    description: 'description',
    websiteUrl: 'websiteUrl',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    sku: 'sku',
    description: 'description',
    shortDescription: 'shortDescription',
    price: 'price',
    originalPrice: 'originalPrice',
    categoryId: 'categoryId',
    brandId: 'brandId',
    stock: 'stock',
    lowStockThreshold: 'lowStockThreshold',
    ratingAverage: 'ratingAverage',
    ratingCount: 'ratingCount',
    reviewCount: 'reviewCount',
    isActive: 'isActive',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductVariantScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    sku: 'sku',
    name: 'name',
    priceAdjustment: 'priceAdjustment',
    stock: 'stock',
    attributes: 'attributes',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductVariantScalarFieldEnum = (typeof ProductVariantScalarFieldEnum)[keyof typeof ProductVariantScalarFieldEnum]


  export const ProductImageScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    url: 'url',
    altText: 'altText',
    sortOrder: 'sortOrder',
    is_primary: 'is_primary',
    createdAt: 'createdAt'
  };

  export type ProductImageScalarFieldEnum = (typeof ProductImageScalarFieldEnum)[keyof typeof ProductImageScalarFieldEnum]


  export const ProductReviewScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    userId: 'userId',
    rating: 'rating',
    title: 'title',
    content: 'content',
    is_verified_purchase: 'is_verified_purchase',
    is_approved: 'is_approved',
    helpful_count: 'helpful_count',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deleted_at: 'deleted_at'
  };

  export type ProductReviewScalarFieldEnum = (typeof ProductReviewScalarFieldEnum)[keyof typeof ProductReviewScalarFieldEnum]


  export const ProductTagScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    tag: 'tag',
    createdAt: 'createdAt'
  };

  export type ProductTagScalarFieldEnum = (typeof ProductTagScalarFieldEnum)[keyof typeof ProductTagScalarFieldEnum]


  export const ProductAttributeScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    attribute_name: 'attribute_name',
    attribute_value: 'attribute_value',
    createdAt: 'createdAt'
  };

  export type ProductAttributeScalarFieldEnum = (typeof ProductAttributeScalarFieldEnum)[keyof typeof ProductAttributeScalarFieldEnum]


  export const CouponScalarFieldEnum: {
    id: 'id',
    code: 'code',
    type: 'type',
    value: 'value',
    minOrderAmount: 'minOrderAmount',
    maxDiscount: 'maxDiscount',
    maxUses: 'maxUses',
    usedCount: 'usedCount',
    validFrom: 'validFrom',
    validUntil: 'validUntil',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum]


  export const CouponUsageScalarFieldEnum: {
    id: 'id',
    couponId: 'couponId',
    userId: 'userId',
    orderId: 'orderId',
    discount_amount: 'discount_amount',
    created_at: 'created_at'
  };

  export type CouponUsageScalarFieldEnum = (typeof CouponUsageScalarFieldEnum)[keyof typeof CouponUsageScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    userId: 'userId',
    status: 'status',
    subtotal: 'subtotal',
    shippingCost: 'shippingCost',
    discount: 'discount',
    tax: 'tax',
    total: 'total',
    shippingMethod: 'shippingMethod',
    shippingAddress: 'shippingAddress',
    billingAddress: 'billingAddress',
    trackingNumber: 'trackingNumber',
    notes: 'notes',
    couponId: 'couponId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    variantId: 'variantId',
    quantity: 'quantity',
    price: 'price',
    subtotal: 'subtotal',
    createdAt: 'createdAt'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const OrderStatusHistoryScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    status: 'status',
    note: 'note',
    changed_by: 'changed_by',
    created_at: 'created_at'
  };

  export type OrderStatusHistoryScalarFieldEnum = (typeof OrderStatusHistoryScalarFieldEnum)[keyof typeof OrderStatusHistoryScalarFieldEnum]


  export const User_addressesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    label: 'label',
    recipient_name: 'recipient_name',
    phone: 'phone',
    address_line_1: 'address_line_1',
    address_line_2: 'address_line_2',
    city: 'city',
    province: 'province',
    postal_code: 'postal_code',
    country: 'country',
    is_default: 'is_default',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type User_addressesScalarFieldEnum = (typeof User_addressesScalarFieldEnum)[keyof typeof User_addressesScalarFieldEnum]


  export const Auth_tokensScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    refresh_token_hash: 'refresh_token_hash',
    device_info: 'device_info',
    ip_address: 'ip_address',
    expires_at: 'expires_at',
    created_at: 'created_at',
    revoked_at: 'revoked_at',
    deleted_at: 'deleted_at'
  };

  export type Auth_tokensScalarFieldEnum = (typeof Auth_tokensScalarFieldEnum)[keyof typeof Auth_tokensScalarFieldEnum]


  export const Password_reset_tokensScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    token_hash: 'token_hash',
    expires_at: 'expires_at',
    used_at: 'used_at',
    created_at: 'created_at'
  };

  export type Password_reset_tokensScalarFieldEnum = (typeof Password_reset_tokensScalarFieldEnum)[keyof typeof Password_reset_tokensScalarFieldEnum]


  export const Email_verification_tokensScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    token_hash: 'token_hash',
    expires_at: 'expires_at',
    verified_at: 'verified_at',
    created_at: 'created_at'
  };

  export type Email_verification_tokensScalarFieldEnum = (typeof Email_verification_tokensScalarFieldEnum)[keyof typeof Email_verification_tokensScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    first_name: 'first_name',
    last_name: 'last_name',
    phone: 'phone',
    avatar_url: 'avatar_url',
    role: 'role',
    email_verified: 'email_verified',
    is_active: 'is_active',
    date_of_birth: 'date_of_birth',
    metadata: 'metadata',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const CategoryOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    iconUrl: 'iconUrl',
    imageUrl: 'imageUrl',
    parentId: 'parentId',
    metadata: 'metadata'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const BrandOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    logoUrl: 'logoUrl',
    description: 'description',
    websiteUrl: 'websiteUrl'
  };

  export type BrandOrderByRelevanceFieldEnum = (typeof BrandOrderByRelevanceFieldEnum)[keyof typeof BrandOrderByRelevanceFieldEnum]


  export const ProductOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    sku: 'sku',
    description: 'description',
    shortDescription: 'shortDescription',
    categoryId: 'categoryId',
    brandId: 'brandId',
    metadata: 'metadata'
  };

  export type ProductOrderByRelevanceFieldEnum = (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum]


  export const ProductVariantOrderByRelevanceFieldEnum: {
    id: 'id',
    productId: 'productId',
    sku: 'sku',
    name: 'name',
    attributes: 'attributes'
  };

  export type ProductVariantOrderByRelevanceFieldEnum = (typeof ProductVariantOrderByRelevanceFieldEnum)[keyof typeof ProductVariantOrderByRelevanceFieldEnum]


  export const ProductImageOrderByRelevanceFieldEnum: {
    id: 'id',
    productId: 'productId',
    url: 'url',
    altText: 'altText'
  };

  export type ProductImageOrderByRelevanceFieldEnum = (typeof ProductImageOrderByRelevanceFieldEnum)[keyof typeof ProductImageOrderByRelevanceFieldEnum]


  export const ProductReviewOrderByRelevanceFieldEnum: {
    id: 'id',
    productId: 'productId',
    userId: 'userId',
    title: 'title',
    content: 'content'
  };

  export type ProductReviewOrderByRelevanceFieldEnum = (typeof ProductReviewOrderByRelevanceFieldEnum)[keyof typeof ProductReviewOrderByRelevanceFieldEnum]


  export const ProductTagOrderByRelevanceFieldEnum: {
    id: 'id',
    productId: 'productId',
    tag: 'tag'
  };

  export type ProductTagOrderByRelevanceFieldEnum = (typeof ProductTagOrderByRelevanceFieldEnum)[keyof typeof ProductTagOrderByRelevanceFieldEnum]


  export const ProductAttributeOrderByRelevanceFieldEnum: {
    id: 'id',
    productId: 'productId',
    attribute_name: 'attribute_name',
    attribute_value: 'attribute_value'
  };

  export type ProductAttributeOrderByRelevanceFieldEnum = (typeof ProductAttributeOrderByRelevanceFieldEnum)[keyof typeof ProductAttributeOrderByRelevanceFieldEnum]


  export const CouponOrderByRelevanceFieldEnum: {
    id: 'id',
    code: 'code',
    type: 'type'
  };

  export type CouponOrderByRelevanceFieldEnum = (typeof CouponOrderByRelevanceFieldEnum)[keyof typeof CouponOrderByRelevanceFieldEnum]


  export const CouponUsageOrderByRelevanceFieldEnum: {
    id: 'id',
    couponId: 'couponId',
    userId: 'userId',
    orderId: 'orderId'
  };

  export type CouponUsageOrderByRelevanceFieldEnum = (typeof CouponUsageOrderByRelevanceFieldEnum)[keyof typeof CouponUsageOrderByRelevanceFieldEnum]


  export const OrderOrderByRelevanceFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    userId: 'userId',
    status: 'status',
    shippingMethod: 'shippingMethod',
    shippingAddress: 'shippingAddress',
    billingAddress: 'billingAddress',
    trackingNumber: 'trackingNumber',
    notes: 'notes',
    couponId: 'couponId'
  };

  export type OrderOrderByRelevanceFieldEnum = (typeof OrderOrderByRelevanceFieldEnum)[keyof typeof OrderOrderByRelevanceFieldEnum]


  export const OrderItemOrderByRelevanceFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    variantId: 'variantId'
  };

  export type OrderItemOrderByRelevanceFieldEnum = (typeof OrderItemOrderByRelevanceFieldEnum)[keyof typeof OrderItemOrderByRelevanceFieldEnum]


  export const OrderStatusHistoryOrderByRelevanceFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    status: 'status',
    note: 'note',
    changed_by: 'changed_by'
  };

  export type OrderStatusHistoryOrderByRelevanceFieldEnum = (typeof OrderStatusHistoryOrderByRelevanceFieldEnum)[keyof typeof OrderStatusHistoryOrderByRelevanceFieldEnum]


  export const user_addressesOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    label: 'label',
    recipient_name: 'recipient_name',
    phone: 'phone',
    address_line_1: 'address_line_1',
    address_line_2: 'address_line_2',
    city: 'city',
    province: 'province',
    postal_code: 'postal_code',
    country: 'country'
  };

  export type user_addressesOrderByRelevanceFieldEnum = (typeof user_addressesOrderByRelevanceFieldEnum)[keyof typeof user_addressesOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const auth_tokensOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    refresh_token_hash: 'refresh_token_hash',
    ip_address: 'ip_address'
  };

  export type auth_tokensOrderByRelevanceFieldEnum = (typeof auth_tokensOrderByRelevanceFieldEnum)[keyof typeof auth_tokensOrderByRelevanceFieldEnum]


  export const password_reset_tokensOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    token_hash: 'token_hash'
  };

  export type password_reset_tokensOrderByRelevanceFieldEnum = (typeof password_reset_tokensOrderByRelevanceFieldEnum)[keyof typeof password_reset_tokensOrderByRelevanceFieldEnum]


  export const email_verification_tokensOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    token_hash: 'token_hash'
  };

  export type email_verification_tokensOrderByRelevanceFieldEnum = (typeof email_verification_tokensOrderByRelevanceFieldEnum)[keyof typeof email_verification_tokensOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    first_name: 'first_name',
    last_name: 'last_name',
    phone: 'phone',
    avatar_url: 'avatar_url',
    role: 'role',
    metadata: 'metadata'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    iconUrl?: StringNullableFilter<"Category"> | string | null
    imageUrl?: StringNullableFilter<"Category"> | string | null
    parentId?: StringNullableFilter<"Category"> | string | null
    sortOrder?: IntNullableFilter<"Category"> | number | null
    isActive?: BoolFilter<"Category"> | boolean
    metadata?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeNullableFilter<"Category"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Category"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Category"> | Date | string | null
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    iconUrl?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    sortOrder?: SortOrderInput | SortOrder
    isActive?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    iconUrl?: StringNullableFilter<"Category"> | string | null
    imageUrl?: StringNullableFilter<"Category"> | string | null
    parentId?: StringNullableFilter<"Category"> | string | null
    sortOrder?: IntNullableFilter<"Category"> | number | null
    isActive?: BoolFilter<"Category"> | boolean
    metadata?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeNullableFilter<"Category"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Category"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Category"> | Date | string | null
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    iconUrl?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    sortOrder?: SortOrderInput | SortOrder
    isActive?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    iconUrl?: StringNullableWithAggregatesFilter<"Category"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Category"> | string | null
    parentId?: StringNullableWithAggregatesFilter<"Category"> | string | null
    sortOrder?: IntNullableWithAggregatesFilter<"Category"> | number | null
    isActive?: BoolWithAggregatesFilter<"Category"> | boolean
    metadata?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Category"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Category"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Category"> | Date | string | null
  }

  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    id?: StringFilter<"Brand"> | string
    name?: StringFilter<"Brand"> | string
    slug?: StringFilter<"Brand"> | string
    logoUrl?: StringNullableFilter<"Brand"> | string | null
    description?: StringNullableFilter<"Brand"> | string | null
    websiteUrl?: StringNullableFilter<"Brand"> | string | null
    isActive?: BoolFilter<"Brand"> | boolean
    createdAt?: DateTimeNullableFilter<"Brand"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Brand"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Brand"> | Date | string | null
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _relevance?: BrandOrderByRelevanceInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    name?: StringFilter<"Brand"> | string
    logoUrl?: StringNullableFilter<"Brand"> | string | null
    description?: StringNullableFilter<"Brand"> | string | null
    websiteUrl?: StringNullableFilter<"Brand"> | string | null
    isActive?: BoolFilter<"Brand"> | boolean
    createdAt?: DateTimeNullableFilter<"Brand"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Brand"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Brand"> | Date | string | null
  }, "id" | "slug">

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: BrandCountOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Brand"> | string
    name?: StringWithAggregatesFilter<"Brand"> | string
    slug?: StringWithAggregatesFilter<"Brand"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"Brand"> | string | null
    description?: StringNullableWithAggregatesFilter<"Brand"> | string | null
    websiteUrl?: StringNullableWithAggregatesFilter<"Brand"> | string | null
    isActive?: BoolWithAggregatesFilter<"Brand"> | boolean
    createdAt?: DateTimeNullableWithAggregatesFilter<"Brand"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Brand"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Brand"> | Date | string | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    sku?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    shortDescription?: StringNullableFilter<"Product"> | string | null
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    categoryId?: StringFilter<"Product"> | string
    brandId?: StringNullableFilter<"Product"> | string | null
    stock?: IntFilter<"Product"> | number
    lowStockThreshold?: IntNullableFilter<"Product"> | number | null
    ratingAverage?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    ratingCount?: IntNullableFilter<"Product"> | number | null
    reviewCount?: IntNullableFilter<"Product"> | number | null
    isActive?: BoolFilter<"Product"> | boolean
    metadata?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    sku?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrderInput | SortOrder
    price?: SortOrder
    originalPrice?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    brandId?: SortOrderInput | SortOrder
    stock?: SortOrder
    lowStockThreshold?: SortOrderInput | SortOrder
    ratingAverage?: SortOrderInput | SortOrder
    ratingCount?: SortOrderInput | SortOrder
    reviewCount?: SortOrderInput | SortOrder
    isActive?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _relevance?: ProductOrderByRelevanceInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    sku?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    shortDescription?: StringNullableFilter<"Product"> | string | null
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    categoryId?: StringFilter<"Product"> | string
    brandId?: StringNullableFilter<"Product"> | string | null
    stock?: IntFilter<"Product"> | number
    lowStockThreshold?: IntNullableFilter<"Product"> | number | null
    ratingAverage?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    ratingCount?: IntNullableFilter<"Product"> | number | null
    reviewCount?: IntNullableFilter<"Product"> | number | null
    isActive?: BoolFilter<"Product"> | boolean
    metadata?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
  }, "id" | "slug" | "sku">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    sku?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrderInput | SortOrder
    price?: SortOrder
    originalPrice?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    brandId?: SortOrderInput | SortOrder
    stock?: SortOrder
    lowStockThreshold?: SortOrderInput | SortOrder
    ratingAverage?: SortOrderInput | SortOrder
    ratingCount?: SortOrderInput | SortOrder
    reviewCount?: SortOrderInput | SortOrder
    isActive?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    slug?: StringWithAggregatesFilter<"Product"> | string
    sku?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    shortDescription?: StringNullableWithAggregatesFilter<"Product"> | string | null
    price?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalNullableWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    categoryId?: StringWithAggregatesFilter<"Product"> | string
    brandId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    stock?: IntWithAggregatesFilter<"Product"> | number
    lowStockThreshold?: IntNullableWithAggregatesFilter<"Product"> | number | null
    ratingAverage?: DecimalNullableWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    ratingCount?: IntNullableWithAggregatesFilter<"Product"> | number | null
    reviewCount?: IntNullableWithAggregatesFilter<"Product"> | number | null
    isActive?: BoolWithAggregatesFilter<"Product"> | boolean
    metadata?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
  }

  export type ProductVariantWhereInput = {
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    id?: StringFilter<"ProductVariant"> | string
    productId?: StringFilter<"ProductVariant"> | string
    sku?: StringFilter<"ProductVariant"> | string
    name?: StringFilter<"ProductVariant"> | string
    priceAdjustment?: DecimalNullableFilter<"ProductVariant"> | Decimal | DecimalJsLike | number | string | null
    stock?: IntNullableFilter<"ProductVariant"> | number | null
    attributes?: StringFilter<"ProductVariant"> | string
    isActive?: BoolNullableFilter<"ProductVariant"> | boolean | null
    createdAt?: DateTimeNullableFilter<"ProductVariant"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"ProductVariant"> | Date | string | null
  }

  export type ProductVariantOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    priceAdjustment?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    attributes?: SortOrder
    isActive?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: ProductVariantOrderByRelevanceInput
  }

  export type ProductVariantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sku?: string
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    productId?: StringFilter<"ProductVariant"> | string
    name?: StringFilter<"ProductVariant"> | string
    priceAdjustment?: DecimalNullableFilter<"ProductVariant"> | Decimal | DecimalJsLike | number | string | null
    stock?: IntNullableFilter<"ProductVariant"> | number | null
    attributes?: StringFilter<"ProductVariant"> | string
    isActive?: BoolNullableFilter<"ProductVariant"> | boolean | null
    createdAt?: DateTimeNullableFilter<"ProductVariant"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"ProductVariant"> | Date | string | null
  }, "id" | "sku">

  export type ProductVariantOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    priceAdjustment?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    attributes?: SortOrder
    isActive?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ProductVariantCountOrderByAggregateInput
    _avg?: ProductVariantAvgOrderByAggregateInput
    _max?: ProductVariantMaxOrderByAggregateInput
    _min?: ProductVariantMinOrderByAggregateInput
    _sum?: ProductVariantSumOrderByAggregateInput
  }

  export type ProductVariantScalarWhereWithAggregatesInput = {
    AND?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    OR?: ProductVariantScalarWhereWithAggregatesInput[]
    NOT?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductVariant"> | string
    productId?: StringWithAggregatesFilter<"ProductVariant"> | string
    sku?: StringWithAggregatesFilter<"ProductVariant"> | string
    name?: StringWithAggregatesFilter<"ProductVariant"> | string
    priceAdjustment?: DecimalNullableWithAggregatesFilter<"ProductVariant"> | Decimal | DecimalJsLike | number | string | null
    stock?: IntNullableWithAggregatesFilter<"ProductVariant"> | number | null
    attributes?: StringWithAggregatesFilter<"ProductVariant"> | string
    isActive?: BoolNullableWithAggregatesFilter<"ProductVariant"> | boolean | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"ProductVariant"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"ProductVariant"> | Date | string | null
  }

  export type ProductImageWhereInput = {
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    id?: StringFilter<"ProductImage"> | string
    productId?: StringFilter<"ProductImage"> | string
    url?: StringFilter<"ProductImage"> | string
    altText?: StringNullableFilter<"ProductImage"> | string | null
    sortOrder?: IntNullableFilter<"ProductImage"> | number | null
    is_primary?: BoolNullableFilter<"ProductImage"> | boolean | null
    createdAt?: DateTimeNullableFilter<"ProductImage"> | Date | string | null
  }

  export type ProductImageOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    altText?: SortOrderInput | SortOrder
    sortOrder?: SortOrderInput | SortOrder
    is_primary?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _relevance?: ProductImageOrderByRelevanceInput
  }

  export type ProductImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    productId?: StringFilter<"ProductImage"> | string
    url?: StringFilter<"ProductImage"> | string
    altText?: StringNullableFilter<"ProductImage"> | string | null
    sortOrder?: IntNullableFilter<"ProductImage"> | number | null
    is_primary?: BoolNullableFilter<"ProductImage"> | boolean | null
    createdAt?: DateTimeNullableFilter<"ProductImage"> | Date | string | null
  }, "id">

  export type ProductImageOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    altText?: SortOrderInput | SortOrder
    sortOrder?: SortOrderInput | SortOrder
    is_primary?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: ProductImageCountOrderByAggregateInput
    _avg?: ProductImageAvgOrderByAggregateInput
    _max?: ProductImageMaxOrderByAggregateInput
    _min?: ProductImageMinOrderByAggregateInput
    _sum?: ProductImageSumOrderByAggregateInput
  }

  export type ProductImageScalarWhereWithAggregatesInput = {
    AND?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    OR?: ProductImageScalarWhereWithAggregatesInput[]
    NOT?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductImage"> | string
    productId?: StringWithAggregatesFilter<"ProductImage"> | string
    url?: StringWithAggregatesFilter<"ProductImage"> | string
    altText?: StringNullableWithAggregatesFilter<"ProductImage"> | string | null
    sortOrder?: IntNullableWithAggregatesFilter<"ProductImage"> | number | null
    is_primary?: BoolNullableWithAggregatesFilter<"ProductImage"> | boolean | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"ProductImage"> | Date | string | null
  }

  export type ProductReviewWhereInput = {
    AND?: ProductReviewWhereInput | ProductReviewWhereInput[]
    OR?: ProductReviewWhereInput[]
    NOT?: ProductReviewWhereInput | ProductReviewWhereInput[]
    id?: StringFilter<"ProductReview"> | string
    productId?: StringFilter<"ProductReview"> | string
    userId?: StringFilter<"ProductReview"> | string
    rating?: IntFilter<"ProductReview"> | number
    title?: StringFilter<"ProductReview"> | string
    content?: StringFilter<"ProductReview"> | string
    is_verified_purchase?: BoolNullableFilter<"ProductReview"> | boolean | null
    is_approved?: BoolNullableFilter<"ProductReview"> | boolean | null
    helpful_count?: IntNullableFilter<"ProductReview"> | number | null
    createdAt?: DateTimeNullableFilter<"ProductReview"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"ProductReview"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"ProductReview"> | Date | string | null
  }

  export type ProductReviewOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    content?: SortOrder
    is_verified_purchase?: SortOrderInput | SortOrder
    is_approved?: SortOrderInput | SortOrder
    helpful_count?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _relevance?: ProductReviewOrderByRelevanceInput
  }

  export type ProductReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productId_userId?: ProductReviewProductIdUserIdCompoundUniqueInput
    AND?: ProductReviewWhereInput | ProductReviewWhereInput[]
    OR?: ProductReviewWhereInput[]
    NOT?: ProductReviewWhereInput | ProductReviewWhereInput[]
    productId?: StringFilter<"ProductReview"> | string
    userId?: StringFilter<"ProductReview"> | string
    rating?: IntFilter<"ProductReview"> | number
    title?: StringFilter<"ProductReview"> | string
    content?: StringFilter<"ProductReview"> | string
    is_verified_purchase?: BoolNullableFilter<"ProductReview"> | boolean | null
    is_approved?: BoolNullableFilter<"ProductReview"> | boolean | null
    helpful_count?: IntNullableFilter<"ProductReview"> | number | null
    createdAt?: DateTimeNullableFilter<"ProductReview"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"ProductReview"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"ProductReview"> | Date | string | null
  }, "id" | "productId_userId">

  export type ProductReviewOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    content?: SortOrder
    is_verified_purchase?: SortOrderInput | SortOrder
    is_approved?: SortOrderInput | SortOrder
    helpful_count?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: ProductReviewCountOrderByAggregateInput
    _avg?: ProductReviewAvgOrderByAggregateInput
    _max?: ProductReviewMaxOrderByAggregateInput
    _min?: ProductReviewMinOrderByAggregateInput
    _sum?: ProductReviewSumOrderByAggregateInput
  }

  export type ProductReviewScalarWhereWithAggregatesInput = {
    AND?: ProductReviewScalarWhereWithAggregatesInput | ProductReviewScalarWhereWithAggregatesInput[]
    OR?: ProductReviewScalarWhereWithAggregatesInput[]
    NOT?: ProductReviewScalarWhereWithAggregatesInput | ProductReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductReview"> | string
    productId?: StringWithAggregatesFilter<"ProductReview"> | string
    userId?: StringWithAggregatesFilter<"ProductReview"> | string
    rating?: IntWithAggregatesFilter<"ProductReview"> | number
    title?: StringWithAggregatesFilter<"ProductReview"> | string
    content?: StringWithAggregatesFilter<"ProductReview"> | string
    is_verified_purchase?: BoolNullableWithAggregatesFilter<"ProductReview"> | boolean | null
    is_approved?: BoolNullableWithAggregatesFilter<"ProductReview"> | boolean | null
    helpful_count?: IntNullableWithAggregatesFilter<"ProductReview"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"ProductReview"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"ProductReview"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"ProductReview"> | Date | string | null
  }

  export type ProductTagWhereInput = {
    AND?: ProductTagWhereInput | ProductTagWhereInput[]
    OR?: ProductTagWhereInput[]
    NOT?: ProductTagWhereInput | ProductTagWhereInput[]
    id?: StringFilter<"ProductTag"> | string
    productId?: StringFilter<"ProductTag"> | string
    tag?: StringFilter<"ProductTag"> | string
    createdAt?: DateTimeNullableFilter<"ProductTag"> | Date | string | null
  }

  export type ProductTagOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _relevance?: ProductTagOrderByRelevanceInput
  }

  export type ProductTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productId_tag?: ProductTagProductIdTagCompoundUniqueInput
    AND?: ProductTagWhereInput | ProductTagWhereInput[]
    OR?: ProductTagWhereInput[]
    NOT?: ProductTagWhereInput | ProductTagWhereInput[]
    productId?: StringFilter<"ProductTag"> | string
    tag?: StringFilter<"ProductTag"> | string
    createdAt?: DateTimeNullableFilter<"ProductTag"> | Date | string | null
  }, "id" | "productId_tag">

  export type ProductTagOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: ProductTagCountOrderByAggregateInput
    _max?: ProductTagMaxOrderByAggregateInput
    _min?: ProductTagMinOrderByAggregateInput
  }

  export type ProductTagScalarWhereWithAggregatesInput = {
    AND?: ProductTagScalarWhereWithAggregatesInput | ProductTagScalarWhereWithAggregatesInput[]
    OR?: ProductTagScalarWhereWithAggregatesInput[]
    NOT?: ProductTagScalarWhereWithAggregatesInput | ProductTagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductTag"> | string
    productId?: StringWithAggregatesFilter<"ProductTag"> | string
    tag?: StringWithAggregatesFilter<"ProductTag"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"ProductTag"> | Date | string | null
  }

  export type ProductAttributeWhereInput = {
    AND?: ProductAttributeWhereInput | ProductAttributeWhereInput[]
    OR?: ProductAttributeWhereInput[]
    NOT?: ProductAttributeWhereInput | ProductAttributeWhereInput[]
    id?: StringFilter<"ProductAttribute"> | string
    productId?: StringFilter<"ProductAttribute"> | string
    attribute_name?: StringFilter<"ProductAttribute"> | string
    attribute_value?: StringFilter<"ProductAttribute"> | string
    createdAt?: DateTimeNullableFilter<"ProductAttribute"> | Date | string | null
  }

  export type ProductAttributeOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    attribute_name?: SortOrder
    attribute_value?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _relevance?: ProductAttributeOrderByRelevanceInput
  }

  export type ProductAttributeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductAttributeWhereInput | ProductAttributeWhereInput[]
    OR?: ProductAttributeWhereInput[]
    NOT?: ProductAttributeWhereInput | ProductAttributeWhereInput[]
    productId?: StringFilter<"ProductAttribute"> | string
    attribute_name?: StringFilter<"ProductAttribute"> | string
    attribute_value?: StringFilter<"ProductAttribute"> | string
    createdAt?: DateTimeNullableFilter<"ProductAttribute"> | Date | string | null
  }, "id">

  export type ProductAttributeOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    attribute_name?: SortOrder
    attribute_value?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: ProductAttributeCountOrderByAggregateInput
    _max?: ProductAttributeMaxOrderByAggregateInput
    _min?: ProductAttributeMinOrderByAggregateInput
  }

  export type ProductAttributeScalarWhereWithAggregatesInput = {
    AND?: ProductAttributeScalarWhereWithAggregatesInput | ProductAttributeScalarWhereWithAggregatesInput[]
    OR?: ProductAttributeScalarWhereWithAggregatesInput[]
    NOT?: ProductAttributeScalarWhereWithAggregatesInput | ProductAttributeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductAttribute"> | string
    productId?: StringWithAggregatesFilter<"ProductAttribute"> | string
    attribute_name?: StringWithAggregatesFilter<"ProductAttribute"> | string
    attribute_value?: StringWithAggregatesFilter<"ProductAttribute"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"ProductAttribute"> | Date | string | null
  }

  export type CouponWhereInput = {
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    id?: StringFilter<"Coupon"> | string
    code?: StringFilter<"Coupon"> | string
    type?: StringFilter<"Coupon"> | string
    value?: DecimalFilter<"Coupon"> | Decimal | DecimalJsLike | number | string
    minOrderAmount?: DecimalNullableFilter<"Coupon"> | Decimal | DecimalJsLike | number | string | null
    maxDiscount?: DecimalNullableFilter<"Coupon"> | Decimal | DecimalJsLike | number | string | null
    maxUses?: IntNullableFilter<"Coupon"> | number | null
    usedCount?: IntNullableFilter<"Coupon"> | number | null
    validFrom?: DateTimeFilter<"Coupon"> | Date | string
    validUntil?: DateTimeFilter<"Coupon"> | Date | string
    isActive?: BoolNullableFilter<"Coupon"> | boolean | null
    createdAt?: DateTimeNullableFilter<"Coupon"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Coupon"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Coupon"> | Date | string | null
  }

  export type CouponOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    minOrderAmount?: SortOrderInput | SortOrder
    maxDiscount?: SortOrderInput | SortOrder
    maxUses?: SortOrderInput | SortOrder
    usedCount?: SortOrderInput | SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    isActive?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _relevance?: CouponOrderByRelevanceInput
  }

  export type CouponWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    type?: StringFilter<"Coupon"> | string
    value?: DecimalFilter<"Coupon"> | Decimal | DecimalJsLike | number | string
    minOrderAmount?: DecimalNullableFilter<"Coupon"> | Decimal | DecimalJsLike | number | string | null
    maxDiscount?: DecimalNullableFilter<"Coupon"> | Decimal | DecimalJsLike | number | string | null
    maxUses?: IntNullableFilter<"Coupon"> | number | null
    usedCount?: IntNullableFilter<"Coupon"> | number | null
    validFrom?: DateTimeFilter<"Coupon"> | Date | string
    validUntil?: DateTimeFilter<"Coupon"> | Date | string
    isActive?: BoolNullableFilter<"Coupon"> | boolean | null
    createdAt?: DateTimeNullableFilter<"Coupon"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Coupon"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Coupon"> | Date | string | null
  }, "id" | "code">

  export type CouponOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    minOrderAmount?: SortOrderInput | SortOrder
    maxDiscount?: SortOrderInput | SortOrder
    maxUses?: SortOrderInput | SortOrder
    usedCount?: SortOrderInput | SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    isActive?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CouponCountOrderByAggregateInput
    _avg?: CouponAvgOrderByAggregateInput
    _max?: CouponMaxOrderByAggregateInput
    _min?: CouponMinOrderByAggregateInput
    _sum?: CouponSumOrderByAggregateInput
  }

  export type CouponScalarWhereWithAggregatesInput = {
    AND?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    OR?: CouponScalarWhereWithAggregatesInput[]
    NOT?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Coupon"> | string
    code?: StringWithAggregatesFilter<"Coupon"> | string
    type?: StringWithAggregatesFilter<"Coupon"> | string
    value?: DecimalWithAggregatesFilter<"Coupon"> | Decimal | DecimalJsLike | number | string
    minOrderAmount?: DecimalNullableWithAggregatesFilter<"Coupon"> | Decimal | DecimalJsLike | number | string | null
    maxDiscount?: DecimalNullableWithAggregatesFilter<"Coupon"> | Decimal | DecimalJsLike | number | string | null
    maxUses?: IntNullableWithAggregatesFilter<"Coupon"> | number | null
    usedCount?: IntNullableWithAggregatesFilter<"Coupon"> | number | null
    validFrom?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
    validUntil?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
    isActive?: BoolNullableWithAggregatesFilter<"Coupon"> | boolean | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Coupon"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Coupon"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Coupon"> | Date | string | null
  }

  export type CouponUsageWhereInput = {
    AND?: CouponUsageWhereInput | CouponUsageWhereInput[]
    OR?: CouponUsageWhereInput[]
    NOT?: CouponUsageWhereInput | CouponUsageWhereInput[]
    id?: StringFilter<"CouponUsage"> | string
    couponId?: StringFilter<"CouponUsage"> | string
    userId?: StringFilter<"CouponUsage"> | string
    orderId?: StringFilter<"CouponUsage"> | string
    discount_amount?: DecimalFilter<"CouponUsage"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"CouponUsage"> | Date | string | null
  }

  export type CouponUsageOrderByWithRelationInput = {
    id?: SortOrder
    couponId?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
    discount_amount?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _relevance?: CouponUsageOrderByRelevanceInput
  }

  export type CouponUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    couponId_userId_orderId?: CouponUsageCouponIdUserIdOrderIdCompoundUniqueInput
    AND?: CouponUsageWhereInput | CouponUsageWhereInput[]
    OR?: CouponUsageWhereInput[]
    NOT?: CouponUsageWhereInput | CouponUsageWhereInput[]
    couponId?: StringFilter<"CouponUsage"> | string
    userId?: StringFilter<"CouponUsage"> | string
    orderId?: StringFilter<"CouponUsage"> | string
    discount_amount?: DecimalFilter<"CouponUsage"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"CouponUsage"> | Date | string | null
  }, "id" | "couponId_userId_orderId">

  export type CouponUsageOrderByWithAggregationInput = {
    id?: SortOrder
    couponId?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
    discount_amount?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: CouponUsageCountOrderByAggregateInput
    _avg?: CouponUsageAvgOrderByAggregateInput
    _max?: CouponUsageMaxOrderByAggregateInput
    _min?: CouponUsageMinOrderByAggregateInput
    _sum?: CouponUsageSumOrderByAggregateInput
  }

  export type CouponUsageScalarWhereWithAggregatesInput = {
    AND?: CouponUsageScalarWhereWithAggregatesInput | CouponUsageScalarWhereWithAggregatesInput[]
    OR?: CouponUsageScalarWhereWithAggregatesInput[]
    NOT?: CouponUsageScalarWhereWithAggregatesInput | CouponUsageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CouponUsage"> | string
    couponId?: StringWithAggregatesFilter<"CouponUsage"> | string
    userId?: StringWithAggregatesFilter<"CouponUsage"> | string
    orderId?: StringWithAggregatesFilter<"CouponUsage"> | string
    discount_amount?: DecimalWithAggregatesFilter<"CouponUsage"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableWithAggregatesFilter<"CouponUsage"> | Date | string | null
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    subtotal?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    shippingCost?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    tax?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    shippingMethod?: StringNullableFilter<"Order"> | string | null
    shippingAddress?: StringFilter<"Order"> | string
    billingAddress?: StringNullableFilter<"Order"> | string | null
    trackingNumber?: StringNullableFilter<"Order"> | string | null
    notes?: StringNullableFilter<"Order"> | string | null
    couponId?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    shippingCost?: SortOrder
    discount?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    shippingMethod?: SortOrderInput | SortOrder
    shippingAddress?: SortOrder
    billingAddress?: SortOrderInput | SortOrder
    trackingNumber?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    couponId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _relevance?: OrderOrderByRelevanceInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderNumber?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    subtotal?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    shippingCost?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    tax?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    shippingMethod?: StringNullableFilter<"Order"> | string | null
    shippingAddress?: StringFilter<"Order"> | string
    billingAddress?: StringNullableFilter<"Order"> | string | null
    trackingNumber?: StringNullableFilter<"Order"> | string | null
    notes?: StringNullableFilter<"Order"> | string | null
    couponId?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
  }, "id" | "orderNumber">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    shippingCost?: SortOrder
    discount?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    shippingMethod?: SortOrderInput | SortOrder
    shippingAddress?: SortOrder
    billingAddress?: SortOrderInput | SortOrder
    trackingNumber?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    couponId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    orderNumber?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringWithAggregatesFilter<"Order"> | string
    status?: StringWithAggregatesFilter<"Order"> | string
    subtotal?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    shippingCost?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    tax?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    total?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    shippingMethod?: StringNullableWithAggregatesFilter<"Order"> | string | null
    shippingAddress?: StringWithAggregatesFilter<"Order"> | string
    billingAddress?: StringNullableWithAggregatesFilter<"Order"> | string | null
    trackingNumber?: StringNullableWithAggregatesFilter<"Order"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Order"> | string | null
    couponId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    variantId?: StringNullableFilter<"OrderItem"> | string | null
    quantity?: IntFilter<"OrderItem"> | number
    price?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeNullableFilter<"OrderItem"> | Date | string | null
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _relevance?: OrderItemOrderByRelevanceInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    variantId?: StringNullableFilter<"OrderItem"> | string | null
    quantity?: IntFilter<"OrderItem"> | number
    price?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeNullableFilter<"OrderItem"> | Date | string | null
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    productId?: StringWithAggregatesFilter<"OrderItem"> | string
    variantId?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    price?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"OrderItem"> | Date | string | null
  }

  export type OrderStatusHistoryWhereInput = {
    AND?: OrderStatusHistoryWhereInput | OrderStatusHistoryWhereInput[]
    OR?: OrderStatusHistoryWhereInput[]
    NOT?: OrderStatusHistoryWhereInput | OrderStatusHistoryWhereInput[]
    id?: StringFilter<"OrderStatusHistory"> | string
    orderId?: StringFilter<"OrderStatusHistory"> | string
    status?: StringFilter<"OrderStatusHistory"> | string
    note?: StringNullableFilter<"OrderStatusHistory"> | string | null
    changed_by?: StringNullableFilter<"OrderStatusHistory"> | string | null
    created_at?: DateTimeNullableFilter<"OrderStatusHistory"> | Date | string | null
  }

  export type OrderStatusHistoryOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    changed_by?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _relevance?: OrderStatusHistoryOrderByRelevanceInput
  }

  export type OrderStatusHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderStatusHistoryWhereInput | OrderStatusHistoryWhereInput[]
    OR?: OrderStatusHistoryWhereInput[]
    NOT?: OrderStatusHistoryWhereInput | OrderStatusHistoryWhereInput[]
    orderId?: StringFilter<"OrderStatusHistory"> | string
    status?: StringFilter<"OrderStatusHistory"> | string
    note?: StringNullableFilter<"OrderStatusHistory"> | string | null
    changed_by?: StringNullableFilter<"OrderStatusHistory"> | string | null
    created_at?: DateTimeNullableFilter<"OrderStatusHistory"> | Date | string | null
  }, "id">

  export type OrderStatusHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    changed_by?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: OrderStatusHistoryCountOrderByAggregateInput
    _max?: OrderStatusHistoryMaxOrderByAggregateInput
    _min?: OrderStatusHistoryMinOrderByAggregateInput
  }

  export type OrderStatusHistoryScalarWhereWithAggregatesInput = {
    AND?: OrderStatusHistoryScalarWhereWithAggregatesInput | OrderStatusHistoryScalarWhereWithAggregatesInput[]
    OR?: OrderStatusHistoryScalarWhereWithAggregatesInput[]
    NOT?: OrderStatusHistoryScalarWhereWithAggregatesInput | OrderStatusHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderStatusHistory"> | string
    orderId?: StringWithAggregatesFilter<"OrderStatusHistory"> | string
    status?: StringWithAggregatesFilter<"OrderStatusHistory"> | string
    note?: StringNullableWithAggregatesFilter<"OrderStatusHistory"> | string | null
    changed_by?: StringNullableWithAggregatesFilter<"OrderStatusHistory"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"OrderStatusHistory"> | Date | string | null
  }

  export type user_addressesWhereInput = {
    AND?: user_addressesWhereInput | user_addressesWhereInput[]
    OR?: user_addressesWhereInput[]
    NOT?: user_addressesWhereInput | user_addressesWhereInput[]
    id?: StringFilter<"user_addresses"> | string
    user_id?: StringFilter<"user_addresses"> | string
    label?: StringFilter<"user_addresses"> | string
    recipient_name?: StringFilter<"user_addresses"> | string
    phone?: StringFilter<"user_addresses"> | string
    address_line_1?: StringFilter<"user_addresses"> | string
    address_line_2?: StringNullableFilter<"user_addresses"> | string | null
    city?: StringFilter<"user_addresses"> | string
    province?: StringFilter<"user_addresses"> | string
    postal_code?: StringFilter<"user_addresses"> | string
    country?: StringFilter<"user_addresses"> | string
    is_default?: BoolFilter<"user_addresses"> | boolean
    created_at?: DateTimeNullableFilter<"user_addresses"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_addresses"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"user_addresses"> | Date | string | null
  }

  export type user_addressesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    label?: SortOrder
    recipient_name?: SortOrder
    phone?: SortOrder
    address_line_1?: SortOrder
    address_line_2?: SortOrderInput | SortOrder
    city?: SortOrder
    province?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    is_default?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _relevance?: user_addressesOrderByRelevanceInput
  }

  export type user_addressesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: user_addressesWhereInput | user_addressesWhereInput[]
    OR?: user_addressesWhereInput[]
    NOT?: user_addressesWhereInput | user_addressesWhereInput[]
    user_id?: StringFilter<"user_addresses"> | string
    label?: StringFilter<"user_addresses"> | string
    recipient_name?: StringFilter<"user_addresses"> | string
    phone?: StringFilter<"user_addresses"> | string
    address_line_1?: StringFilter<"user_addresses"> | string
    address_line_2?: StringNullableFilter<"user_addresses"> | string | null
    city?: StringFilter<"user_addresses"> | string
    province?: StringFilter<"user_addresses"> | string
    postal_code?: StringFilter<"user_addresses"> | string
    country?: StringFilter<"user_addresses"> | string
    is_default?: BoolFilter<"user_addresses"> | boolean
    created_at?: DateTimeNullableFilter<"user_addresses"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_addresses"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"user_addresses"> | Date | string | null
  }, "id">

  export type user_addressesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    label?: SortOrder
    recipient_name?: SortOrder
    phone?: SortOrder
    address_line_1?: SortOrder
    address_line_2?: SortOrderInput | SortOrder
    city?: SortOrder
    province?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    is_default?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: user_addressesCountOrderByAggregateInput
    _max?: user_addressesMaxOrderByAggregateInput
    _min?: user_addressesMinOrderByAggregateInput
  }

  export type user_addressesScalarWhereWithAggregatesInput = {
    AND?: user_addressesScalarWhereWithAggregatesInput | user_addressesScalarWhereWithAggregatesInput[]
    OR?: user_addressesScalarWhereWithAggregatesInput[]
    NOT?: user_addressesScalarWhereWithAggregatesInput | user_addressesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user_addresses"> | string
    user_id?: StringWithAggregatesFilter<"user_addresses"> | string
    label?: StringWithAggregatesFilter<"user_addresses"> | string
    recipient_name?: StringWithAggregatesFilter<"user_addresses"> | string
    phone?: StringWithAggregatesFilter<"user_addresses"> | string
    address_line_1?: StringWithAggregatesFilter<"user_addresses"> | string
    address_line_2?: StringNullableWithAggregatesFilter<"user_addresses"> | string | null
    city?: StringWithAggregatesFilter<"user_addresses"> | string
    province?: StringWithAggregatesFilter<"user_addresses"> | string
    postal_code?: StringWithAggregatesFilter<"user_addresses"> | string
    country?: StringWithAggregatesFilter<"user_addresses"> | string
    is_default?: BoolWithAggregatesFilter<"user_addresses"> | boolean
    created_at?: DateTimeNullableWithAggregatesFilter<"user_addresses"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"user_addresses"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"user_addresses"> | Date | string | null
  }

  export type auth_tokensWhereInput = {
    AND?: auth_tokensWhereInput | auth_tokensWhereInput[]
    OR?: auth_tokensWhereInput[]
    NOT?: auth_tokensWhereInput | auth_tokensWhereInput[]
    id?: StringFilter<"auth_tokens"> | string
    user_id?: StringFilter<"auth_tokens"> | string
    refresh_token_hash?: StringFilter<"auth_tokens"> | string
    device_info?: JsonNullableFilter<"auth_tokens">
    ip_address?: StringNullableFilter<"auth_tokens"> | string | null
    expires_at?: DateTimeFilter<"auth_tokens"> | Date | string
    created_at?: DateTimeFilter<"auth_tokens"> | Date | string
    revoked_at?: DateTimeNullableFilter<"auth_tokens"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"auth_tokens"> | Date | string | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type auth_tokensOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    refresh_token_hash?: SortOrder
    device_info?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    revoked_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    user?: usersOrderByWithRelationInput
    _relevance?: auth_tokensOrderByRelevanceInput
  }

  export type auth_tokensWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: auth_tokensWhereInput | auth_tokensWhereInput[]
    OR?: auth_tokensWhereInput[]
    NOT?: auth_tokensWhereInput | auth_tokensWhereInput[]
    user_id?: StringFilter<"auth_tokens"> | string
    refresh_token_hash?: StringFilter<"auth_tokens"> | string
    device_info?: JsonNullableFilter<"auth_tokens">
    ip_address?: StringNullableFilter<"auth_tokens"> | string | null
    expires_at?: DateTimeFilter<"auth_tokens"> | Date | string
    created_at?: DateTimeFilter<"auth_tokens"> | Date | string
    revoked_at?: DateTimeNullableFilter<"auth_tokens"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"auth_tokens"> | Date | string | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type auth_tokensOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    refresh_token_hash?: SortOrder
    device_info?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    revoked_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: auth_tokensCountOrderByAggregateInput
    _max?: auth_tokensMaxOrderByAggregateInput
    _min?: auth_tokensMinOrderByAggregateInput
  }

  export type auth_tokensScalarWhereWithAggregatesInput = {
    AND?: auth_tokensScalarWhereWithAggregatesInput | auth_tokensScalarWhereWithAggregatesInput[]
    OR?: auth_tokensScalarWhereWithAggregatesInput[]
    NOT?: auth_tokensScalarWhereWithAggregatesInput | auth_tokensScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"auth_tokens"> | string
    user_id?: StringWithAggregatesFilter<"auth_tokens"> | string
    refresh_token_hash?: StringWithAggregatesFilter<"auth_tokens"> | string
    device_info?: JsonNullableWithAggregatesFilter<"auth_tokens">
    ip_address?: StringNullableWithAggregatesFilter<"auth_tokens"> | string | null
    expires_at?: DateTimeWithAggregatesFilter<"auth_tokens"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"auth_tokens"> | Date | string
    revoked_at?: DateTimeNullableWithAggregatesFilter<"auth_tokens"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"auth_tokens"> | Date | string | null
  }

  export type password_reset_tokensWhereInput = {
    AND?: password_reset_tokensWhereInput | password_reset_tokensWhereInput[]
    OR?: password_reset_tokensWhereInput[]
    NOT?: password_reset_tokensWhereInput | password_reset_tokensWhereInput[]
    id?: StringFilter<"password_reset_tokens"> | string
    user_id?: StringFilter<"password_reset_tokens"> | string
    token_hash?: StringFilter<"password_reset_tokens"> | string
    expires_at?: DateTimeFilter<"password_reset_tokens"> | Date | string
    used_at?: DateTimeNullableFilter<"password_reset_tokens"> | Date | string | null
    created_at?: DateTimeFilter<"password_reset_tokens"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type password_reset_tokensOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrder
    used_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: usersOrderByWithRelationInput
    _relevance?: password_reset_tokensOrderByRelevanceInput
  }

  export type password_reset_tokensWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: password_reset_tokensWhereInput | password_reset_tokensWhereInput[]
    OR?: password_reset_tokensWhereInput[]
    NOT?: password_reset_tokensWhereInput | password_reset_tokensWhereInput[]
    user_id?: StringFilter<"password_reset_tokens"> | string
    token_hash?: StringFilter<"password_reset_tokens"> | string
    expires_at?: DateTimeFilter<"password_reset_tokens"> | Date | string
    used_at?: DateTimeNullableFilter<"password_reset_tokens"> | Date | string | null
    created_at?: DateTimeFilter<"password_reset_tokens"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type password_reset_tokensOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrder
    used_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: password_reset_tokensCountOrderByAggregateInput
    _max?: password_reset_tokensMaxOrderByAggregateInput
    _min?: password_reset_tokensMinOrderByAggregateInput
  }

  export type password_reset_tokensScalarWhereWithAggregatesInput = {
    AND?: password_reset_tokensScalarWhereWithAggregatesInput | password_reset_tokensScalarWhereWithAggregatesInput[]
    OR?: password_reset_tokensScalarWhereWithAggregatesInput[]
    NOT?: password_reset_tokensScalarWhereWithAggregatesInput | password_reset_tokensScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"password_reset_tokens"> | string
    user_id?: StringWithAggregatesFilter<"password_reset_tokens"> | string
    token_hash?: StringWithAggregatesFilter<"password_reset_tokens"> | string
    expires_at?: DateTimeWithAggregatesFilter<"password_reset_tokens"> | Date | string
    used_at?: DateTimeNullableWithAggregatesFilter<"password_reset_tokens"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"password_reset_tokens"> | Date | string
  }

  export type email_verification_tokensWhereInput = {
    AND?: email_verification_tokensWhereInput | email_verification_tokensWhereInput[]
    OR?: email_verification_tokensWhereInput[]
    NOT?: email_verification_tokensWhereInput | email_verification_tokensWhereInput[]
    id?: StringFilter<"email_verification_tokens"> | string
    user_id?: StringFilter<"email_verification_tokens"> | string
    token_hash?: StringFilter<"email_verification_tokens"> | string
    expires_at?: DateTimeFilter<"email_verification_tokens"> | Date | string
    verified_at?: DateTimeNullableFilter<"email_verification_tokens"> | Date | string | null
    created_at?: DateTimeFilter<"email_verification_tokens"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type email_verification_tokensOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrder
    verified_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: usersOrderByWithRelationInput
    _relevance?: email_verification_tokensOrderByRelevanceInput
  }

  export type email_verification_tokensWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: email_verification_tokensWhereInput | email_verification_tokensWhereInput[]
    OR?: email_verification_tokensWhereInput[]
    NOT?: email_verification_tokensWhereInput | email_verification_tokensWhereInput[]
    user_id?: StringFilter<"email_verification_tokens"> | string
    token_hash?: StringFilter<"email_verification_tokens"> | string
    expires_at?: DateTimeFilter<"email_verification_tokens"> | Date | string
    verified_at?: DateTimeNullableFilter<"email_verification_tokens"> | Date | string | null
    created_at?: DateTimeFilter<"email_verification_tokens"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type email_verification_tokensOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrder
    verified_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: email_verification_tokensCountOrderByAggregateInput
    _max?: email_verification_tokensMaxOrderByAggregateInput
    _min?: email_verification_tokensMinOrderByAggregateInput
  }

  export type email_verification_tokensScalarWhereWithAggregatesInput = {
    AND?: email_verification_tokensScalarWhereWithAggregatesInput | email_verification_tokensScalarWhereWithAggregatesInput[]
    OR?: email_verification_tokensScalarWhereWithAggregatesInput[]
    NOT?: email_verification_tokensScalarWhereWithAggregatesInput | email_verification_tokensScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"email_verification_tokens"> | string
    user_id?: StringWithAggregatesFilter<"email_verification_tokens"> | string
    token_hash?: StringWithAggregatesFilter<"email_verification_tokens"> | string
    expires_at?: DateTimeWithAggregatesFilter<"email_verification_tokens"> | Date | string
    verified_at?: DateTimeNullableWithAggregatesFilter<"email_verification_tokens"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"email_verification_tokens"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    phone?: StringNullableFilter<"users"> | string | null
    avatar_url?: StringNullableFilter<"users"> | string | null
    role?: StringFilter<"users"> | string
    email_verified?: BoolFilter<"users"> | boolean
    is_active?: BoolFilter<"users"> | boolean
    date_of_birth?: DateTimeNullableFilter<"users"> | Date | string | null
    metadata?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
    authTokens?: Auth_tokensListRelationFilter
    passwordResetTokens?: Password_reset_tokensListRelationFilter
    emailVerificationTokens?: Email_verification_tokensListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    role?: SortOrder
    email_verified?: SortOrder
    is_active?: SortOrder
    date_of_birth?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    authTokens?: auth_tokensOrderByRelationAggregateInput
    passwordResetTokens?: password_reset_tokensOrderByRelationAggregateInput
    emailVerificationTokens?: email_verification_tokensOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    phone?: StringNullableFilter<"users"> | string | null
    avatar_url?: StringNullableFilter<"users"> | string | null
    role?: StringFilter<"users"> | string
    email_verified?: BoolFilter<"users"> | boolean
    is_active?: BoolFilter<"users"> | boolean
    date_of_birth?: DateTimeNullableFilter<"users"> | Date | string | null
    metadata?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
    authTokens?: Auth_tokensListRelationFilter
    passwordResetTokens?: Password_reset_tokensListRelationFilter
    emailVerificationTokens?: Email_verification_tokensListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    role?: SortOrder
    email_verified?: SortOrder
    is_active?: SortOrder
    date_of_birth?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    first_name?: StringWithAggregatesFilter<"users"> | string
    last_name?: StringWithAggregatesFilter<"users"> | string
    phone?: StringNullableWithAggregatesFilter<"users"> | string | null
    avatar_url?: StringNullableWithAggregatesFilter<"users"> | string | null
    role?: StringWithAggregatesFilter<"users"> | string
    email_verified?: BoolWithAggregatesFilter<"users"> | boolean
    is_active?: BoolWithAggregatesFilter<"users"> | boolean
    date_of_birth?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    metadata?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    iconUrl?: string | null
    imageUrl?: string | null
    parentId?: string | null
    sortOrder?: number | null
    isActive?: boolean
    metadata?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    iconUrl?: string | null
    imageUrl?: string | null
    parentId?: string | null
    sortOrder?: number | null
    isActive?: boolean
    metadata?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    iconUrl?: string | null
    imageUrl?: string | null
    parentId?: string | null
    sortOrder?: number | null
    isActive?: boolean
    metadata?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BrandCreateInput = {
    id?: string
    name: string
    slug: string
    logoUrl?: string | null
    description?: string | null
    websiteUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type BrandUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    logoUrl?: string | null
    description?: string | null
    websiteUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type BrandUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BrandUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BrandCreateManyInput = {
    id?: string
    name: string
    slug: string
    logoUrl?: string | null
    description?: string | null
    websiteUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type BrandUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BrandUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    slug: string
    sku: string
    description: string
    shortDescription?: string | null
    price: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string | null
    categoryId: string
    brandId?: string | null
    stock?: number
    lowStockThreshold?: number | null
    ratingAverage?: Decimal | DecimalJsLike | number | string | null
    ratingCount?: number | null
    reviewCount?: number | null
    isActive?: boolean
    metadata?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    sku: string
    description: string
    shortDescription?: string | null
    price: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string | null
    categoryId: string
    brandId?: string | null
    stock?: number
    lowStockThreshold?: number | null
    ratingAverage?: Decimal | DecimalJsLike | number | string | null
    ratingCount?: number | null
    reviewCount?: number | null
    isActive?: boolean
    metadata?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    lowStockThreshold?: NullableIntFieldUpdateOperationsInput | number | null
    ratingAverage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ratingCount?: NullableIntFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    lowStockThreshold?: NullableIntFieldUpdateOperationsInput | number | null
    ratingAverage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ratingCount?: NullableIntFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    slug: string
    sku: string
    description: string
    shortDescription?: string | null
    price: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string | null
    categoryId: string
    brandId?: string | null
    stock?: number
    lowStockThreshold?: number | null
    ratingAverage?: Decimal | DecimalJsLike | number | string | null
    ratingCount?: number | null
    reviewCount?: number | null
    isActive?: boolean
    metadata?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    lowStockThreshold?: NullableIntFieldUpdateOperationsInput | number | null
    ratingAverage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ratingCount?: NullableIntFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    lowStockThreshold?: NullableIntFieldUpdateOperationsInput | number | null
    ratingAverage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ratingCount?: NullableIntFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductVariantCreateInput = {
    id?: string
    productId: string
    sku: string
    name: string
    priceAdjustment?: Decimal | DecimalJsLike | number | string | null
    stock?: number | null
    attributes?: string
    isActive?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ProductVariantUncheckedCreateInput = {
    id?: string
    productId: string
    sku: string
    name: string
    priceAdjustment?: Decimal | DecimalJsLike | number | string | null
    stock?: number | null
    attributes?: string
    isActive?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ProductVariantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceAdjustment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    attributes?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductVariantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceAdjustment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    attributes?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductVariantCreateManyInput = {
    id?: string
    productId: string
    sku: string
    name: string
    priceAdjustment?: Decimal | DecimalJsLike | number | string | null
    stock?: number | null
    attributes?: string
    isActive?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ProductVariantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceAdjustment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    attributes?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductVariantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceAdjustment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    attributes?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductImageCreateInput = {
    id?: string
    productId: string
    url: string
    altText?: string | null
    sortOrder?: number | null
    is_primary?: boolean | null
    createdAt?: Date | string | null
  }

  export type ProductImageUncheckedCreateInput = {
    id?: string
    productId: string
    url: string
    altText?: string | null
    sortOrder?: number | null
    is_primary?: boolean | null
    createdAt?: Date | string | null
  }

  export type ProductImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    is_primary?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    is_primary?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductImageCreateManyInput = {
    id?: string
    productId: string
    url: string
    altText?: string | null
    sortOrder?: number | null
    is_primary?: boolean | null
    createdAt?: Date | string | null
  }

  export type ProductImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    is_primary?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    is_primary?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductReviewCreateInput = {
    id?: string
    productId: string
    userId: string
    rating: number
    title: string
    content: string
    is_verified_purchase?: boolean | null
    is_approved?: boolean | null
    helpful_count?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ProductReviewUncheckedCreateInput = {
    id?: string
    productId: string
    userId: string
    rating: number
    title: string
    content: string
    is_verified_purchase?: boolean | null
    is_approved?: boolean | null
    helpful_count?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ProductReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    is_verified_purchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    helpful_count?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    is_verified_purchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    helpful_count?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductReviewCreateManyInput = {
    id?: string
    productId: string
    userId: string
    rating: number
    title: string
    content: string
    is_verified_purchase?: boolean | null
    is_approved?: boolean | null
    helpful_count?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ProductReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    is_verified_purchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    helpful_count?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    is_verified_purchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    helpful_count?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductTagCreateInput = {
    id?: string
    productId: string
    tag: string
    createdAt?: Date | string | null
  }

  export type ProductTagUncheckedCreateInput = {
    id?: string
    productId: string
    tag: string
    createdAt?: Date | string | null
  }

  export type ProductTagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductTagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductTagCreateManyInput = {
    id?: string
    productId: string
    tag: string
    createdAt?: Date | string | null
  }

  export type ProductTagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductTagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductAttributeCreateInput = {
    id?: string
    productId: string
    attribute_name: string
    attribute_value: string
    createdAt?: Date | string | null
  }

  export type ProductAttributeUncheckedCreateInput = {
    id?: string
    productId: string
    attribute_name: string
    attribute_value: string
    createdAt?: Date | string | null
  }

  export type ProductAttributeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    attribute_name?: StringFieldUpdateOperationsInput | string
    attribute_value?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductAttributeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    attribute_name?: StringFieldUpdateOperationsInput | string
    attribute_value?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductAttributeCreateManyInput = {
    id?: string
    productId: string
    attribute_name: string
    attribute_value: string
    createdAt?: Date | string | null
  }

  export type ProductAttributeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    attribute_name?: StringFieldUpdateOperationsInput | string
    attribute_value?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductAttributeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    attribute_name?: StringFieldUpdateOperationsInput | string
    attribute_value?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CouponCreateInput = {
    id?: string
    code: string
    type: string
    value: Decimal | DecimalJsLike | number | string
    minOrderAmount?: Decimal | DecimalJsLike | number | string | null
    maxDiscount?: Decimal | DecimalJsLike | number | string | null
    maxUses?: number | null
    usedCount?: number | null
    validFrom: Date | string
    validUntil: Date | string
    isActive?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CouponUncheckedCreateInput = {
    id?: string
    code: string
    type: string
    value: Decimal | DecimalJsLike | number | string
    minOrderAmount?: Decimal | DecimalJsLike | number | string | null
    maxDiscount?: Decimal | DecimalJsLike | number | string | null
    maxUses?: number | null
    usedCount?: number | null
    validFrom: Date | string
    validUntil: Date | string
    isActive?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CouponUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOrderAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxDiscount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: NullableIntFieldUpdateOperationsInput | number | null
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CouponUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOrderAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxDiscount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: NullableIntFieldUpdateOperationsInput | number | null
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CouponCreateManyInput = {
    id?: string
    code: string
    type: string
    value: Decimal | DecimalJsLike | number | string
    minOrderAmount?: Decimal | DecimalJsLike | number | string | null
    maxDiscount?: Decimal | DecimalJsLike | number | string | null
    maxUses?: number | null
    usedCount?: number | null
    validFrom: Date | string
    validUntil: Date | string
    isActive?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CouponUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOrderAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxDiscount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: NullableIntFieldUpdateOperationsInput | number | null
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CouponUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOrderAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxDiscount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: NullableIntFieldUpdateOperationsInput | number | null
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CouponUsageCreateInput = {
    id?: string
    couponId: string
    userId: string
    orderId: string
    discount_amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type CouponUsageUncheckedCreateInput = {
    id?: string
    couponId: string
    userId: string
    orderId: string
    discount_amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type CouponUsageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    couponId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CouponUsageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    couponId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CouponUsageCreateManyInput = {
    id?: string
    couponId: string
    userId: string
    orderId: string
    discount_amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type CouponUsageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    couponId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CouponUsageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    couponId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderCreateInput = {
    id?: string
    orderNumber: string
    userId: string
    status?: string
    subtotal: Decimal | DecimalJsLike | number | string
    shippingCost?: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    shippingMethod?: string | null
    shippingAddress: string
    billingAddress?: string | null
    trackingNumber?: string | null
    notes?: string | null
    couponId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    orderNumber: string
    userId: string
    status?: string
    subtotal: Decimal | DecimalJsLike | number | string
    shippingCost?: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    shippingMethod?: string | null
    shippingAddress: string
    billingAddress?: string | null
    trackingNumber?: string | null
    notes?: string | null
    couponId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingMethod?: NullableStringFieldUpdateOperationsInput | string | null
    shippingAddress?: StringFieldUpdateOperationsInput | string
    billingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingMethod?: NullableStringFieldUpdateOperationsInput | string | null
    shippingAddress?: StringFieldUpdateOperationsInput | string
    billingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderCreateManyInput = {
    id?: string
    orderNumber: string
    userId: string
    status?: string
    subtotal: Decimal | DecimalJsLike | number | string
    shippingCost?: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    shippingMethod?: string | null
    shippingAddress: string
    billingAddress?: string | null
    trackingNumber?: string | null
    notes?: string | null
    couponId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingMethod?: NullableStringFieldUpdateOperationsInput | string | null
    shippingAddress?: StringFieldUpdateOperationsInput | string
    billingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingMethod?: NullableStringFieldUpdateOperationsInput | string | null
    shippingAddress?: StringFieldUpdateOperationsInput | string
    billingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderItemCreateInput = {
    id?: string
    orderId: string
    productId: string
    variantId?: string | null
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string | null
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    productId: string
    variantId?: string | null
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string | null
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    productId: string
    variantId?: string | null
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string | null
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderStatusHistoryCreateInput = {
    id?: string
    orderId: string
    status: string
    note?: string | null
    changed_by?: string | null
    created_at?: Date | string | null
  }

  export type OrderStatusHistoryUncheckedCreateInput = {
    id?: string
    orderId: string
    status: string
    note?: string | null
    changed_by?: string | null
    created_at?: Date | string | null
  }

  export type OrderStatusHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    changed_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderStatusHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    changed_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderStatusHistoryCreateManyInput = {
    id?: string
    orderId: string
    status: string
    note?: string | null
    changed_by?: string | null
    created_at?: Date | string | null
  }

  export type OrderStatusHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    changed_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderStatusHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    changed_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_addressesCreateInput = {
    id?: string
    user_id: string
    label: string
    recipient_name: string
    phone: string
    address_line_1: string
    address_line_2?: string | null
    city: string
    province: string
    postal_code: string
    country: string
    is_default?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type user_addressesUncheckedCreateInput = {
    id?: string
    user_id: string
    label: string
    recipient_name: string
    phone: string
    address_line_1: string
    address_line_2?: string | null
    city: string
    province: string
    postal_code: string
    country: string
    is_default?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type user_addressesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    recipient_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_line_1?: StringFieldUpdateOperationsInput | string
    address_line_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_addressesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    recipient_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_line_1?: StringFieldUpdateOperationsInput | string
    address_line_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_addressesCreateManyInput = {
    id?: string
    user_id: string
    label: string
    recipient_name: string
    phone: string
    address_line_1: string
    address_line_2?: string | null
    city: string
    province: string
    postal_code: string
    country: string
    is_default?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type user_addressesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    recipient_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_line_1?: StringFieldUpdateOperationsInput | string
    address_line_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_addressesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    recipient_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_line_1?: StringFieldUpdateOperationsInput | string
    address_line_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auth_tokensCreateInput = {
    id?: string
    refresh_token_hash: string
    device_info?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    expires_at: Date | string
    created_at?: Date | string
    revoked_at?: Date | string | null
    deleted_at?: Date | string | null
    user: usersCreateNestedOneWithoutAuthTokensInput
  }

  export type auth_tokensUncheckedCreateInput = {
    id?: string
    user_id: string
    refresh_token_hash: string
    device_info?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    expires_at: Date | string
    created_at?: Date | string
    revoked_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type auth_tokensUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refresh_token_hash?: StringFieldUpdateOperationsInput | string
    device_info?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: usersUpdateOneRequiredWithoutAuthTokensNestedInput
  }

  export type auth_tokensUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    refresh_token_hash?: StringFieldUpdateOperationsInput | string
    device_info?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auth_tokensCreateManyInput = {
    id?: string
    user_id: string
    refresh_token_hash: string
    device_info?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    expires_at: Date | string
    created_at?: Date | string
    revoked_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type auth_tokensUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    refresh_token_hash?: StringFieldUpdateOperationsInput | string
    device_info?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auth_tokensUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    refresh_token_hash?: StringFieldUpdateOperationsInput | string
    device_info?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type password_reset_tokensCreateInput = {
    id?: string
    token_hash: string
    expires_at: Date | string
    used_at?: Date | string | null
    created_at?: Date | string
    user: usersCreateNestedOneWithoutPasswordResetTokensInput
  }

  export type password_reset_tokensUncheckedCreateInput = {
    id?: string
    user_id: string
    token_hash: string
    expires_at: Date | string
    used_at?: Date | string | null
    created_at?: Date | string
  }

  export type password_reset_tokensUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutPasswordResetTokensNestedInput
  }

  export type password_reset_tokensUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_reset_tokensCreateManyInput = {
    id?: string
    user_id: string
    token_hash: string
    expires_at: Date | string
    used_at?: Date | string | null
    created_at?: Date | string
  }

  export type password_reset_tokensUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_reset_tokensUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type email_verification_tokensCreateInput = {
    id?: string
    token_hash: string
    expires_at: Date | string
    verified_at?: Date | string | null
    created_at?: Date | string
    user: usersCreateNestedOneWithoutEmailVerificationTokensInput
  }

  export type email_verification_tokensUncheckedCreateInput = {
    id?: string
    user_id: string
    token_hash: string
    expires_at: Date | string
    verified_at?: Date | string | null
    created_at?: Date | string
  }

  export type email_verification_tokensUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutEmailVerificationTokensNestedInput
  }

  export type email_verification_tokensUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type email_verification_tokensCreateManyInput = {
    id?: string
    user_id: string
    token_hash: string
    expires_at: Date | string
    verified_at?: Date | string | null
    created_at?: Date | string
  }

  export type email_verification_tokensUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type email_verification_tokensUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    id?: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    phone?: string | null
    avatar_url?: string | null
    role?: string
    email_verified?: boolean
    is_active?: boolean
    date_of_birth?: Date | string | null
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    authTokens?: auth_tokensCreateNestedManyWithoutUserInput
    passwordResetTokens?: password_reset_tokensCreateNestedManyWithoutUserInput
    emailVerificationTokens?: email_verification_tokensCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    phone?: string | null
    avatar_url?: string | null
    role?: string
    email_verified?: boolean
    is_active?: boolean
    date_of_birth?: Date | string | null
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    authTokens?: auth_tokensUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: password_reset_tokensUncheckedCreateNestedManyWithoutUserInput
    emailVerificationTokens?: email_verification_tokensUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authTokens?: auth_tokensUpdateManyWithoutUserNestedInput
    passwordResetTokens?: password_reset_tokensUpdateManyWithoutUserNestedInput
    emailVerificationTokens?: email_verification_tokensUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authTokens?: auth_tokensUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: password_reset_tokensUncheckedUpdateManyWithoutUserNestedInput
    emailVerificationTokens?: email_verification_tokensUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    phone?: string | null
    avatar_url?: string | null
    role?: string
    email_verified?: boolean
    is_active?: boolean
    date_of_birth?: Date | string | null
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    iconUrl?: SortOrder
    imageUrl?: SortOrder
    parentId?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    iconUrl?: SortOrder
    imageUrl?: SortOrder
    parentId?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    iconUrl?: SortOrder
    imageUrl?: SortOrder
    parentId?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BrandOrderByRelevanceInput = {
    fields: BrandOrderByRelevanceFieldEnum | BrandOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    logoUrl?: SortOrder
    description?: SortOrder
    websiteUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    logoUrl?: SortOrder
    description?: SortOrder
    websiteUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    logoUrl?: SortOrder
    description?: SortOrder
    websiteUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProductOrderByRelevanceInput = {
    fields: ProductOrderByRelevanceFieldEnum | ProductOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    sku?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    categoryId?: SortOrder
    brandId?: SortOrder
    stock?: SortOrder
    lowStockThreshold?: SortOrder
    ratingAverage?: SortOrder
    ratingCount?: SortOrder
    reviewCount?: SortOrder
    isActive?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
    originalPrice?: SortOrder
    stock?: SortOrder
    lowStockThreshold?: SortOrder
    ratingAverage?: SortOrder
    ratingCount?: SortOrder
    reviewCount?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    sku?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    categoryId?: SortOrder
    brandId?: SortOrder
    stock?: SortOrder
    lowStockThreshold?: SortOrder
    ratingAverage?: SortOrder
    ratingCount?: SortOrder
    reviewCount?: SortOrder
    isActive?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    sku?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    categoryId?: SortOrder
    brandId?: SortOrder
    stock?: SortOrder
    lowStockThreshold?: SortOrder
    ratingAverage?: SortOrder
    ratingCount?: SortOrder
    reviewCount?: SortOrder
    isActive?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
    originalPrice?: SortOrder
    stock?: SortOrder
    lowStockThreshold?: SortOrder
    ratingAverage?: SortOrder
    ratingCount?: SortOrder
    reviewCount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ProductVariantOrderByRelevanceInput = {
    fields: ProductVariantOrderByRelevanceFieldEnum | ProductVariantOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductVariantCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    priceAdjustment?: SortOrder
    stock?: SortOrder
    attributes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariantAvgOrderByAggregateInput = {
    priceAdjustment?: SortOrder
    stock?: SortOrder
  }

  export type ProductVariantMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    priceAdjustment?: SortOrder
    stock?: SortOrder
    attributes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariantMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    priceAdjustment?: SortOrder
    stock?: SortOrder
    attributes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariantSumOrderByAggregateInput = {
    priceAdjustment?: SortOrder
    stock?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ProductImageOrderByRelevanceInput = {
    fields: ProductImageOrderByRelevanceFieldEnum | ProductImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductImageCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    sortOrder?: SortOrder
    is_primary?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductImageAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ProductImageMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    sortOrder?: SortOrder
    is_primary?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductImageMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    sortOrder?: SortOrder
    is_primary?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductImageSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ProductReviewOrderByRelevanceInput = {
    fields: ProductReviewOrderByRelevanceFieldEnum | ProductReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductReviewProductIdUserIdCompoundUniqueInput = {
    productId: string
    userId: string
  }

  export type ProductReviewCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    content?: SortOrder
    is_verified_purchase?: SortOrder
    is_approved?: SortOrder
    helpful_count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted_at?: SortOrder
  }

  export type ProductReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
    helpful_count?: SortOrder
  }

  export type ProductReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    content?: SortOrder
    is_verified_purchase?: SortOrder
    is_approved?: SortOrder
    helpful_count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted_at?: SortOrder
  }

  export type ProductReviewMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    content?: SortOrder
    is_verified_purchase?: SortOrder
    is_approved?: SortOrder
    helpful_count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted_at?: SortOrder
  }

  export type ProductReviewSumOrderByAggregateInput = {
    rating?: SortOrder
    helpful_count?: SortOrder
  }

  export type ProductTagOrderByRelevanceInput = {
    fields: ProductTagOrderByRelevanceFieldEnum | ProductTagOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductTagProductIdTagCompoundUniqueInput = {
    productId: string
    tag: string
  }

  export type ProductTagCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductTagMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductTagMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductAttributeOrderByRelevanceInput = {
    fields: ProductAttributeOrderByRelevanceFieldEnum | ProductAttributeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductAttributeCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    attribute_name?: SortOrder
    attribute_value?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductAttributeMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    attribute_name?: SortOrder
    attribute_value?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductAttributeMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    attribute_name?: SortOrder
    attribute_value?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CouponOrderByRelevanceInput = {
    fields: CouponOrderByRelevanceFieldEnum | CouponOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CouponCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    minOrderAmount?: SortOrder
    maxDiscount?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CouponAvgOrderByAggregateInput = {
    value?: SortOrder
    minOrderAmount?: SortOrder
    maxDiscount?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
  }

  export type CouponMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    minOrderAmount?: SortOrder
    maxDiscount?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CouponMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    minOrderAmount?: SortOrder
    maxDiscount?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CouponSumOrderByAggregateInput = {
    value?: SortOrder
    minOrderAmount?: SortOrder
    maxDiscount?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CouponUsageOrderByRelevanceInput = {
    fields: CouponUsageOrderByRelevanceFieldEnum | CouponUsageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CouponUsageCouponIdUserIdOrderIdCompoundUniqueInput = {
    couponId: string
    userId: string
    orderId: string
  }

  export type CouponUsageCountOrderByAggregateInput = {
    id?: SortOrder
    couponId?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
    discount_amount?: SortOrder
    created_at?: SortOrder
  }

  export type CouponUsageAvgOrderByAggregateInput = {
    discount_amount?: SortOrder
  }

  export type CouponUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    couponId?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
    discount_amount?: SortOrder
    created_at?: SortOrder
  }

  export type CouponUsageMinOrderByAggregateInput = {
    id?: SortOrder
    couponId?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
    discount_amount?: SortOrder
    created_at?: SortOrder
  }

  export type CouponUsageSumOrderByAggregateInput = {
    discount_amount?: SortOrder
  }

  export type OrderOrderByRelevanceInput = {
    fields: OrderOrderByRelevanceFieldEnum | OrderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    shippingCost?: SortOrder
    discount?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    shippingMethod?: SortOrder
    shippingAddress?: SortOrder
    billingAddress?: SortOrder
    trackingNumber?: SortOrder
    notes?: SortOrder
    couponId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    subtotal?: SortOrder
    shippingCost?: SortOrder
    discount?: SortOrder
    tax?: SortOrder
    total?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    shippingCost?: SortOrder
    discount?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    shippingMethod?: SortOrder
    shippingAddress?: SortOrder
    billingAddress?: SortOrder
    trackingNumber?: SortOrder
    notes?: SortOrder
    couponId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    shippingCost?: SortOrder
    discount?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    shippingMethod?: SortOrder
    shippingAddress?: SortOrder
    billingAddress?: SortOrder
    trackingNumber?: SortOrder
    notes?: SortOrder
    couponId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    subtotal?: SortOrder
    shippingCost?: SortOrder
    discount?: SortOrder
    tax?: SortOrder
    total?: SortOrder
  }

  export type OrderItemOrderByRelevanceInput = {
    fields: OrderItemOrderByRelevanceFieldEnum | OrderItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
  }

  export type OrderStatusHistoryOrderByRelevanceInput = {
    fields: OrderStatusHistoryOrderByRelevanceFieldEnum | OrderStatusHistoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrderStatusHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    note?: SortOrder
    changed_by?: SortOrder
    created_at?: SortOrder
  }

  export type OrderStatusHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    note?: SortOrder
    changed_by?: SortOrder
    created_at?: SortOrder
  }

  export type OrderStatusHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    note?: SortOrder
    changed_by?: SortOrder
    created_at?: SortOrder
  }

  export type user_addressesOrderByRelevanceInput = {
    fields: user_addressesOrderByRelevanceFieldEnum | user_addressesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type user_addressesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    label?: SortOrder
    recipient_name?: SortOrder
    phone?: SortOrder
    address_line_1?: SortOrder
    address_line_2?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    is_default?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type user_addressesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    label?: SortOrder
    recipient_name?: SortOrder
    phone?: SortOrder
    address_line_1?: SortOrder
    address_line_2?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    is_default?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type user_addressesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    label?: SortOrder
    recipient_name?: SortOrder
    phone?: SortOrder
    address_line_1?: SortOrder
    address_line_2?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    is_default?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type auth_tokensOrderByRelevanceInput = {
    fields: auth_tokensOrderByRelevanceFieldEnum | auth_tokensOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type auth_tokensCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    refresh_token_hash?: SortOrder
    device_info?: SortOrder
    ip_address?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    revoked_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type auth_tokensMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    refresh_token_hash?: SortOrder
    ip_address?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    revoked_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type auth_tokensMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    refresh_token_hash?: SortOrder
    ip_address?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    revoked_at?: SortOrder
    deleted_at?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type password_reset_tokensOrderByRelevanceInput = {
    fields: password_reset_tokensOrderByRelevanceFieldEnum | password_reset_tokensOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type password_reset_tokensCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrder
    used_at?: SortOrder
    created_at?: SortOrder
  }

  export type password_reset_tokensMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrder
    used_at?: SortOrder
    created_at?: SortOrder
  }

  export type password_reset_tokensMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrder
    used_at?: SortOrder
    created_at?: SortOrder
  }

  export type email_verification_tokensOrderByRelevanceInput = {
    fields: email_verification_tokensOrderByRelevanceFieldEnum | email_verification_tokensOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type email_verification_tokensCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrder
    verified_at?: SortOrder
    created_at?: SortOrder
  }

  export type email_verification_tokensMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrder
    verified_at?: SortOrder
    created_at?: SortOrder
  }

  export type email_verification_tokensMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrder
    verified_at?: SortOrder
    created_at?: SortOrder
  }

  export type Auth_tokensListRelationFilter = {
    every?: auth_tokensWhereInput
    some?: auth_tokensWhereInput
    none?: auth_tokensWhereInput
  }

  export type Password_reset_tokensListRelationFilter = {
    every?: password_reset_tokensWhereInput
    some?: password_reset_tokensWhereInput
    none?: password_reset_tokensWhereInput
  }

  export type Email_verification_tokensListRelationFilter = {
    every?: email_verification_tokensWhereInput
    some?: email_verification_tokensWhereInput
    none?: email_verification_tokensWhereInput
  }

  export type auth_tokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type password_reset_tokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type email_verification_tokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    avatar_url?: SortOrder
    role?: SortOrder
    email_verified?: SortOrder
    is_active?: SortOrder
    date_of_birth?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    avatar_url?: SortOrder
    role?: SortOrder
    email_verified?: SortOrder
    is_active?: SortOrder
    date_of_birth?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    avatar_url?: SortOrder
    role?: SortOrder
    email_verified?: SortOrder
    is_active?: SortOrder
    date_of_birth?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersCreateNestedOneWithoutAuthTokensInput = {
    create?: XOR<usersCreateWithoutAuthTokensInput, usersUncheckedCreateWithoutAuthTokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutAuthTokensInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutAuthTokensNestedInput = {
    create?: XOR<usersCreateWithoutAuthTokensInput, usersUncheckedCreateWithoutAuthTokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutAuthTokensInput
    upsert?: usersUpsertWithoutAuthTokensInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAuthTokensInput, usersUpdateWithoutAuthTokensInput>, usersUncheckedUpdateWithoutAuthTokensInput>
  }

  export type usersCreateNestedOneWithoutPasswordResetTokensInput = {
    create?: XOR<usersCreateWithoutPasswordResetTokensInput, usersUncheckedCreateWithoutPasswordResetTokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutPasswordResetTokensInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutPasswordResetTokensNestedInput = {
    create?: XOR<usersCreateWithoutPasswordResetTokensInput, usersUncheckedCreateWithoutPasswordResetTokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutPasswordResetTokensInput
    upsert?: usersUpsertWithoutPasswordResetTokensInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPasswordResetTokensInput, usersUpdateWithoutPasswordResetTokensInput>, usersUncheckedUpdateWithoutPasswordResetTokensInput>
  }

  export type usersCreateNestedOneWithoutEmailVerificationTokensInput = {
    create?: XOR<usersCreateWithoutEmailVerificationTokensInput, usersUncheckedCreateWithoutEmailVerificationTokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutEmailVerificationTokensInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutEmailVerificationTokensNestedInput = {
    create?: XOR<usersCreateWithoutEmailVerificationTokensInput, usersUncheckedCreateWithoutEmailVerificationTokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutEmailVerificationTokensInput
    upsert?: usersUpsertWithoutEmailVerificationTokensInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutEmailVerificationTokensInput, usersUpdateWithoutEmailVerificationTokensInput>, usersUncheckedUpdateWithoutEmailVerificationTokensInput>
  }

  export type auth_tokensCreateNestedManyWithoutUserInput = {
    create?: XOR<auth_tokensCreateWithoutUserInput, auth_tokensUncheckedCreateWithoutUserInput> | auth_tokensCreateWithoutUserInput[] | auth_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: auth_tokensCreateOrConnectWithoutUserInput | auth_tokensCreateOrConnectWithoutUserInput[]
    createMany?: auth_tokensCreateManyUserInputEnvelope
    connect?: auth_tokensWhereUniqueInput | auth_tokensWhereUniqueInput[]
  }

  export type password_reset_tokensCreateNestedManyWithoutUserInput = {
    create?: XOR<password_reset_tokensCreateWithoutUserInput, password_reset_tokensUncheckedCreateWithoutUserInput> | password_reset_tokensCreateWithoutUserInput[] | password_reset_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_reset_tokensCreateOrConnectWithoutUserInput | password_reset_tokensCreateOrConnectWithoutUserInput[]
    createMany?: password_reset_tokensCreateManyUserInputEnvelope
    connect?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
  }

  export type email_verification_tokensCreateNestedManyWithoutUserInput = {
    create?: XOR<email_verification_tokensCreateWithoutUserInput, email_verification_tokensUncheckedCreateWithoutUserInput> | email_verification_tokensCreateWithoutUserInput[] | email_verification_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: email_verification_tokensCreateOrConnectWithoutUserInput | email_verification_tokensCreateOrConnectWithoutUserInput[]
    createMany?: email_verification_tokensCreateManyUserInputEnvelope
    connect?: email_verification_tokensWhereUniqueInput | email_verification_tokensWhereUniqueInput[]
  }

  export type auth_tokensUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<auth_tokensCreateWithoutUserInput, auth_tokensUncheckedCreateWithoutUserInput> | auth_tokensCreateWithoutUserInput[] | auth_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: auth_tokensCreateOrConnectWithoutUserInput | auth_tokensCreateOrConnectWithoutUserInput[]
    createMany?: auth_tokensCreateManyUserInputEnvelope
    connect?: auth_tokensWhereUniqueInput | auth_tokensWhereUniqueInput[]
  }

  export type password_reset_tokensUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<password_reset_tokensCreateWithoutUserInput, password_reset_tokensUncheckedCreateWithoutUserInput> | password_reset_tokensCreateWithoutUserInput[] | password_reset_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_reset_tokensCreateOrConnectWithoutUserInput | password_reset_tokensCreateOrConnectWithoutUserInput[]
    createMany?: password_reset_tokensCreateManyUserInputEnvelope
    connect?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
  }

  export type email_verification_tokensUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<email_verification_tokensCreateWithoutUserInput, email_verification_tokensUncheckedCreateWithoutUserInput> | email_verification_tokensCreateWithoutUserInput[] | email_verification_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: email_verification_tokensCreateOrConnectWithoutUserInput | email_verification_tokensCreateOrConnectWithoutUserInput[]
    createMany?: email_verification_tokensCreateManyUserInputEnvelope
    connect?: email_verification_tokensWhereUniqueInput | email_verification_tokensWhereUniqueInput[]
  }

  export type auth_tokensUpdateManyWithoutUserNestedInput = {
    create?: XOR<auth_tokensCreateWithoutUserInput, auth_tokensUncheckedCreateWithoutUserInput> | auth_tokensCreateWithoutUserInput[] | auth_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: auth_tokensCreateOrConnectWithoutUserInput | auth_tokensCreateOrConnectWithoutUserInput[]
    upsert?: auth_tokensUpsertWithWhereUniqueWithoutUserInput | auth_tokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: auth_tokensCreateManyUserInputEnvelope
    set?: auth_tokensWhereUniqueInput | auth_tokensWhereUniqueInput[]
    disconnect?: auth_tokensWhereUniqueInput | auth_tokensWhereUniqueInput[]
    delete?: auth_tokensWhereUniqueInput | auth_tokensWhereUniqueInput[]
    connect?: auth_tokensWhereUniqueInput | auth_tokensWhereUniqueInput[]
    update?: auth_tokensUpdateWithWhereUniqueWithoutUserInput | auth_tokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: auth_tokensUpdateManyWithWhereWithoutUserInput | auth_tokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: auth_tokensScalarWhereInput | auth_tokensScalarWhereInput[]
  }

  export type password_reset_tokensUpdateManyWithoutUserNestedInput = {
    create?: XOR<password_reset_tokensCreateWithoutUserInput, password_reset_tokensUncheckedCreateWithoutUserInput> | password_reset_tokensCreateWithoutUserInput[] | password_reset_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_reset_tokensCreateOrConnectWithoutUserInput | password_reset_tokensCreateOrConnectWithoutUserInput[]
    upsert?: password_reset_tokensUpsertWithWhereUniqueWithoutUserInput | password_reset_tokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: password_reset_tokensCreateManyUserInputEnvelope
    set?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
    disconnect?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
    delete?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
    connect?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
    update?: password_reset_tokensUpdateWithWhereUniqueWithoutUserInput | password_reset_tokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: password_reset_tokensUpdateManyWithWhereWithoutUserInput | password_reset_tokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: password_reset_tokensScalarWhereInput | password_reset_tokensScalarWhereInput[]
  }

  export type email_verification_tokensUpdateManyWithoutUserNestedInput = {
    create?: XOR<email_verification_tokensCreateWithoutUserInput, email_verification_tokensUncheckedCreateWithoutUserInput> | email_verification_tokensCreateWithoutUserInput[] | email_verification_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: email_verification_tokensCreateOrConnectWithoutUserInput | email_verification_tokensCreateOrConnectWithoutUserInput[]
    upsert?: email_verification_tokensUpsertWithWhereUniqueWithoutUserInput | email_verification_tokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: email_verification_tokensCreateManyUserInputEnvelope
    set?: email_verification_tokensWhereUniqueInput | email_verification_tokensWhereUniqueInput[]
    disconnect?: email_verification_tokensWhereUniqueInput | email_verification_tokensWhereUniqueInput[]
    delete?: email_verification_tokensWhereUniqueInput | email_verification_tokensWhereUniqueInput[]
    connect?: email_verification_tokensWhereUniqueInput | email_verification_tokensWhereUniqueInput[]
    update?: email_verification_tokensUpdateWithWhereUniqueWithoutUserInput | email_verification_tokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: email_verification_tokensUpdateManyWithWhereWithoutUserInput | email_verification_tokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: email_verification_tokensScalarWhereInput | email_verification_tokensScalarWhereInput[]
  }

  export type auth_tokensUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<auth_tokensCreateWithoutUserInput, auth_tokensUncheckedCreateWithoutUserInput> | auth_tokensCreateWithoutUserInput[] | auth_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: auth_tokensCreateOrConnectWithoutUserInput | auth_tokensCreateOrConnectWithoutUserInput[]
    upsert?: auth_tokensUpsertWithWhereUniqueWithoutUserInput | auth_tokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: auth_tokensCreateManyUserInputEnvelope
    set?: auth_tokensWhereUniqueInput | auth_tokensWhereUniqueInput[]
    disconnect?: auth_tokensWhereUniqueInput | auth_tokensWhereUniqueInput[]
    delete?: auth_tokensWhereUniqueInput | auth_tokensWhereUniqueInput[]
    connect?: auth_tokensWhereUniqueInput | auth_tokensWhereUniqueInput[]
    update?: auth_tokensUpdateWithWhereUniqueWithoutUserInput | auth_tokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: auth_tokensUpdateManyWithWhereWithoutUserInput | auth_tokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: auth_tokensScalarWhereInput | auth_tokensScalarWhereInput[]
  }

  export type password_reset_tokensUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<password_reset_tokensCreateWithoutUserInput, password_reset_tokensUncheckedCreateWithoutUserInput> | password_reset_tokensCreateWithoutUserInput[] | password_reset_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_reset_tokensCreateOrConnectWithoutUserInput | password_reset_tokensCreateOrConnectWithoutUserInput[]
    upsert?: password_reset_tokensUpsertWithWhereUniqueWithoutUserInput | password_reset_tokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: password_reset_tokensCreateManyUserInputEnvelope
    set?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
    disconnect?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
    delete?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
    connect?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
    update?: password_reset_tokensUpdateWithWhereUniqueWithoutUserInput | password_reset_tokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: password_reset_tokensUpdateManyWithWhereWithoutUserInput | password_reset_tokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: password_reset_tokensScalarWhereInput | password_reset_tokensScalarWhereInput[]
  }

  export type email_verification_tokensUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<email_verification_tokensCreateWithoutUserInput, email_verification_tokensUncheckedCreateWithoutUserInput> | email_verification_tokensCreateWithoutUserInput[] | email_verification_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: email_verification_tokensCreateOrConnectWithoutUserInput | email_verification_tokensCreateOrConnectWithoutUserInput[]
    upsert?: email_verification_tokensUpsertWithWhereUniqueWithoutUserInput | email_verification_tokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: email_verification_tokensCreateManyUserInputEnvelope
    set?: email_verification_tokensWhereUniqueInput | email_verification_tokensWhereUniqueInput[]
    disconnect?: email_verification_tokensWhereUniqueInput | email_verification_tokensWhereUniqueInput[]
    delete?: email_verification_tokensWhereUniqueInput | email_verification_tokensWhereUniqueInput[]
    connect?: email_verification_tokensWhereUniqueInput | email_verification_tokensWhereUniqueInput[]
    update?: email_verification_tokensUpdateWithWhereUniqueWithoutUserInput | email_verification_tokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: email_verification_tokensUpdateManyWithWhereWithoutUserInput | email_verification_tokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: email_verification_tokensScalarWhereInput | email_verification_tokensScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type usersCreateWithoutAuthTokensInput = {
    id?: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    phone?: string | null
    avatar_url?: string | null
    role?: string
    email_verified?: boolean
    is_active?: boolean
    date_of_birth?: Date | string | null
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    passwordResetTokens?: password_reset_tokensCreateNestedManyWithoutUserInput
    emailVerificationTokens?: email_verification_tokensCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutAuthTokensInput = {
    id?: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    phone?: string | null
    avatar_url?: string | null
    role?: string
    email_verified?: boolean
    is_active?: boolean
    date_of_birth?: Date | string | null
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    passwordResetTokens?: password_reset_tokensUncheckedCreateNestedManyWithoutUserInput
    emailVerificationTokens?: email_verification_tokensUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutAuthTokensInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAuthTokensInput, usersUncheckedCreateWithoutAuthTokensInput>
  }

  export type usersUpsertWithoutAuthTokensInput = {
    update: XOR<usersUpdateWithoutAuthTokensInput, usersUncheckedUpdateWithoutAuthTokensInput>
    create: XOR<usersCreateWithoutAuthTokensInput, usersUncheckedCreateWithoutAuthTokensInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAuthTokensInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAuthTokensInput, usersUncheckedUpdateWithoutAuthTokensInput>
  }

  export type usersUpdateWithoutAuthTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetTokens?: password_reset_tokensUpdateManyWithoutUserNestedInput
    emailVerificationTokens?: email_verification_tokensUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutAuthTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetTokens?: password_reset_tokensUncheckedUpdateManyWithoutUserNestedInput
    emailVerificationTokens?: email_verification_tokensUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutPasswordResetTokensInput = {
    id?: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    phone?: string | null
    avatar_url?: string | null
    role?: string
    email_verified?: boolean
    is_active?: boolean
    date_of_birth?: Date | string | null
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    authTokens?: auth_tokensCreateNestedManyWithoutUserInput
    emailVerificationTokens?: email_verification_tokensCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutPasswordResetTokensInput = {
    id?: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    phone?: string | null
    avatar_url?: string | null
    role?: string
    email_verified?: boolean
    is_active?: boolean
    date_of_birth?: Date | string | null
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    authTokens?: auth_tokensUncheckedCreateNestedManyWithoutUserInput
    emailVerificationTokens?: email_verification_tokensUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutPasswordResetTokensInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPasswordResetTokensInput, usersUncheckedCreateWithoutPasswordResetTokensInput>
  }

  export type usersUpsertWithoutPasswordResetTokensInput = {
    update: XOR<usersUpdateWithoutPasswordResetTokensInput, usersUncheckedUpdateWithoutPasswordResetTokensInput>
    create: XOR<usersCreateWithoutPasswordResetTokensInput, usersUncheckedCreateWithoutPasswordResetTokensInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPasswordResetTokensInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPasswordResetTokensInput, usersUncheckedUpdateWithoutPasswordResetTokensInput>
  }

  export type usersUpdateWithoutPasswordResetTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authTokens?: auth_tokensUpdateManyWithoutUserNestedInput
    emailVerificationTokens?: email_verification_tokensUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutPasswordResetTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authTokens?: auth_tokensUncheckedUpdateManyWithoutUserNestedInput
    emailVerificationTokens?: email_verification_tokensUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutEmailVerificationTokensInput = {
    id?: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    phone?: string | null
    avatar_url?: string | null
    role?: string
    email_verified?: boolean
    is_active?: boolean
    date_of_birth?: Date | string | null
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    authTokens?: auth_tokensCreateNestedManyWithoutUserInput
    passwordResetTokens?: password_reset_tokensCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutEmailVerificationTokensInput = {
    id?: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    phone?: string | null
    avatar_url?: string | null
    role?: string
    email_verified?: boolean
    is_active?: boolean
    date_of_birth?: Date | string | null
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    authTokens?: auth_tokensUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: password_reset_tokensUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutEmailVerificationTokensInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutEmailVerificationTokensInput, usersUncheckedCreateWithoutEmailVerificationTokensInput>
  }

  export type usersUpsertWithoutEmailVerificationTokensInput = {
    update: XOR<usersUpdateWithoutEmailVerificationTokensInput, usersUncheckedUpdateWithoutEmailVerificationTokensInput>
    create: XOR<usersCreateWithoutEmailVerificationTokensInput, usersUncheckedCreateWithoutEmailVerificationTokensInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutEmailVerificationTokensInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutEmailVerificationTokensInput, usersUncheckedUpdateWithoutEmailVerificationTokensInput>
  }

  export type usersUpdateWithoutEmailVerificationTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authTokens?: auth_tokensUpdateManyWithoutUserNestedInput
    passwordResetTokens?: password_reset_tokensUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutEmailVerificationTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authTokens?: auth_tokensUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: password_reset_tokensUncheckedUpdateManyWithoutUserNestedInput
  }

  export type auth_tokensCreateWithoutUserInput = {
    id?: string
    refresh_token_hash: string
    device_info?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    expires_at: Date | string
    created_at?: Date | string
    revoked_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type auth_tokensUncheckedCreateWithoutUserInput = {
    id?: string
    refresh_token_hash: string
    device_info?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    expires_at: Date | string
    created_at?: Date | string
    revoked_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type auth_tokensCreateOrConnectWithoutUserInput = {
    where: auth_tokensWhereUniqueInput
    create: XOR<auth_tokensCreateWithoutUserInput, auth_tokensUncheckedCreateWithoutUserInput>
  }

  export type auth_tokensCreateManyUserInputEnvelope = {
    data: auth_tokensCreateManyUserInput | auth_tokensCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type password_reset_tokensCreateWithoutUserInput = {
    id?: string
    token_hash: string
    expires_at: Date | string
    used_at?: Date | string | null
    created_at?: Date | string
  }

  export type password_reset_tokensUncheckedCreateWithoutUserInput = {
    id?: string
    token_hash: string
    expires_at: Date | string
    used_at?: Date | string | null
    created_at?: Date | string
  }

  export type password_reset_tokensCreateOrConnectWithoutUserInput = {
    where: password_reset_tokensWhereUniqueInput
    create: XOR<password_reset_tokensCreateWithoutUserInput, password_reset_tokensUncheckedCreateWithoutUserInput>
  }

  export type password_reset_tokensCreateManyUserInputEnvelope = {
    data: password_reset_tokensCreateManyUserInput | password_reset_tokensCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type email_verification_tokensCreateWithoutUserInput = {
    id?: string
    token_hash: string
    expires_at: Date | string
    verified_at?: Date | string | null
    created_at?: Date | string
  }

  export type email_verification_tokensUncheckedCreateWithoutUserInput = {
    id?: string
    token_hash: string
    expires_at: Date | string
    verified_at?: Date | string | null
    created_at?: Date | string
  }

  export type email_verification_tokensCreateOrConnectWithoutUserInput = {
    where: email_verification_tokensWhereUniqueInput
    create: XOR<email_verification_tokensCreateWithoutUserInput, email_verification_tokensUncheckedCreateWithoutUserInput>
  }

  export type email_verification_tokensCreateManyUserInputEnvelope = {
    data: email_verification_tokensCreateManyUserInput | email_verification_tokensCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type auth_tokensUpsertWithWhereUniqueWithoutUserInput = {
    where: auth_tokensWhereUniqueInput
    update: XOR<auth_tokensUpdateWithoutUserInput, auth_tokensUncheckedUpdateWithoutUserInput>
    create: XOR<auth_tokensCreateWithoutUserInput, auth_tokensUncheckedCreateWithoutUserInput>
  }

  export type auth_tokensUpdateWithWhereUniqueWithoutUserInput = {
    where: auth_tokensWhereUniqueInput
    data: XOR<auth_tokensUpdateWithoutUserInput, auth_tokensUncheckedUpdateWithoutUserInput>
  }

  export type auth_tokensUpdateManyWithWhereWithoutUserInput = {
    where: auth_tokensScalarWhereInput
    data: XOR<auth_tokensUpdateManyMutationInput, auth_tokensUncheckedUpdateManyWithoutUserInput>
  }

  export type auth_tokensScalarWhereInput = {
    AND?: auth_tokensScalarWhereInput | auth_tokensScalarWhereInput[]
    OR?: auth_tokensScalarWhereInput[]
    NOT?: auth_tokensScalarWhereInput | auth_tokensScalarWhereInput[]
    id?: StringFilter<"auth_tokens"> | string
    user_id?: StringFilter<"auth_tokens"> | string
    refresh_token_hash?: StringFilter<"auth_tokens"> | string
    device_info?: JsonNullableFilter<"auth_tokens">
    ip_address?: StringNullableFilter<"auth_tokens"> | string | null
    expires_at?: DateTimeFilter<"auth_tokens"> | Date | string
    created_at?: DateTimeFilter<"auth_tokens"> | Date | string
    revoked_at?: DateTimeNullableFilter<"auth_tokens"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"auth_tokens"> | Date | string | null
  }

  export type password_reset_tokensUpsertWithWhereUniqueWithoutUserInput = {
    where: password_reset_tokensWhereUniqueInput
    update: XOR<password_reset_tokensUpdateWithoutUserInput, password_reset_tokensUncheckedUpdateWithoutUserInput>
    create: XOR<password_reset_tokensCreateWithoutUserInput, password_reset_tokensUncheckedCreateWithoutUserInput>
  }

  export type password_reset_tokensUpdateWithWhereUniqueWithoutUserInput = {
    where: password_reset_tokensWhereUniqueInput
    data: XOR<password_reset_tokensUpdateWithoutUserInput, password_reset_tokensUncheckedUpdateWithoutUserInput>
  }

  export type password_reset_tokensUpdateManyWithWhereWithoutUserInput = {
    where: password_reset_tokensScalarWhereInput
    data: XOR<password_reset_tokensUpdateManyMutationInput, password_reset_tokensUncheckedUpdateManyWithoutUserInput>
  }

  export type password_reset_tokensScalarWhereInput = {
    AND?: password_reset_tokensScalarWhereInput | password_reset_tokensScalarWhereInput[]
    OR?: password_reset_tokensScalarWhereInput[]
    NOT?: password_reset_tokensScalarWhereInput | password_reset_tokensScalarWhereInput[]
    id?: StringFilter<"password_reset_tokens"> | string
    user_id?: StringFilter<"password_reset_tokens"> | string
    token_hash?: StringFilter<"password_reset_tokens"> | string
    expires_at?: DateTimeFilter<"password_reset_tokens"> | Date | string
    used_at?: DateTimeNullableFilter<"password_reset_tokens"> | Date | string | null
    created_at?: DateTimeFilter<"password_reset_tokens"> | Date | string
  }

  export type email_verification_tokensUpsertWithWhereUniqueWithoutUserInput = {
    where: email_verification_tokensWhereUniqueInput
    update: XOR<email_verification_tokensUpdateWithoutUserInput, email_verification_tokensUncheckedUpdateWithoutUserInput>
    create: XOR<email_verification_tokensCreateWithoutUserInput, email_verification_tokensUncheckedCreateWithoutUserInput>
  }

  export type email_verification_tokensUpdateWithWhereUniqueWithoutUserInput = {
    where: email_verification_tokensWhereUniqueInput
    data: XOR<email_verification_tokensUpdateWithoutUserInput, email_verification_tokensUncheckedUpdateWithoutUserInput>
  }

  export type email_verification_tokensUpdateManyWithWhereWithoutUserInput = {
    where: email_verification_tokensScalarWhereInput
    data: XOR<email_verification_tokensUpdateManyMutationInput, email_verification_tokensUncheckedUpdateManyWithoutUserInput>
  }

  export type email_verification_tokensScalarWhereInput = {
    AND?: email_verification_tokensScalarWhereInput | email_verification_tokensScalarWhereInput[]
    OR?: email_verification_tokensScalarWhereInput[]
    NOT?: email_verification_tokensScalarWhereInput | email_verification_tokensScalarWhereInput[]
    id?: StringFilter<"email_verification_tokens"> | string
    user_id?: StringFilter<"email_verification_tokens"> | string
    token_hash?: StringFilter<"email_verification_tokens"> | string
    expires_at?: DateTimeFilter<"email_verification_tokens"> | Date | string
    verified_at?: DateTimeNullableFilter<"email_verification_tokens"> | Date | string | null
    created_at?: DateTimeFilter<"email_verification_tokens"> | Date | string
  }

  export type auth_tokensCreateManyUserInput = {
    id?: string
    refresh_token_hash: string
    device_info?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    expires_at: Date | string
    created_at?: Date | string
    revoked_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type password_reset_tokensCreateManyUserInput = {
    id?: string
    token_hash: string
    expires_at: Date | string
    used_at?: Date | string | null
    created_at?: Date | string
  }

  export type email_verification_tokensCreateManyUserInput = {
    id?: string
    token_hash: string
    expires_at: Date | string
    verified_at?: Date | string | null
    created_at?: Date | string
  }

  export type auth_tokensUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refresh_token_hash?: StringFieldUpdateOperationsInput | string
    device_info?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auth_tokensUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refresh_token_hash?: StringFieldUpdateOperationsInput | string
    device_info?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auth_tokensUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refresh_token_hash?: StringFieldUpdateOperationsInput | string
    device_info?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type password_reset_tokensUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_reset_tokensUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_reset_tokensUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type email_verification_tokensUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type email_verification_tokensUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type email_verification_tokensUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}