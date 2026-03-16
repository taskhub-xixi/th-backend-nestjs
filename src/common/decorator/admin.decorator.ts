import { applyDecorators, SetMetadata } from "@nestjs/common";

export const Admin = () => {
  return applyDecorators(SetMetadata("isAdmin", true));
};
