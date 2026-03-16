import { applyDecorators, SetMetadata } from "@nestjs/common";

export const Public = () => {
  return applyDecorators(SetMetadata("isPublic", true));
};

// CREATE ROLES BASED DECORATOR BISA MENGGUNAKAN METODE BAWAAH "setMetadata" ATAUA MENGGUNAKAN REFLECTOR: --->
// export const Roles = Reflector.createDecorator<string[]>();
