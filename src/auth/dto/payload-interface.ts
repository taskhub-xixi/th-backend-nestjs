export interface JwtPayload {
  id?: number;
  sub?: number;
  email?: string;
  role?: string;
  iat?: number;
  exp?: number;
}
