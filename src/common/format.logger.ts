import { format } from "winston";
const { combine, timestamp, label, printf } = format;
export const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
