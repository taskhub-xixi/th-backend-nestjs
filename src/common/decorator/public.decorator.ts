import { SetMetadata } from "@nestjs/common";

export const Public = () => {
  SetMetadata("isPublic", true);
};

// CREATE ROLES BASED DECORATOR BISA MENGGUNAKAN METODE BAWAAH "setMetadata" ATAUA MENGGUNAKAN REFLECTOR: --->
// export const Roles = Reflector.createDecorator<string[]>();
