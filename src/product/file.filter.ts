import { HttpException } from "@nestjs/common";
import { Request } from "express";
export const FileFilterImage = (
  _req: Request,
  file: any,
  callback: (error: any, valid: boolean) => void,
) => {
  if (
    !file.originalName ||
    !file.originalName.match(/\.(jpg|jpeg|png|gif|svg|webp)$/)
  ) {
    return callback(new HttpException("File type invalid", 400), false);
  }
  callback(null, true);
};
