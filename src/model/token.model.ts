export class RefreshTokenResponseQuery {
  id!: string;
  email!: string;
  expires_at!: Date;
  refresh_token_hash!: string;
}
[];

export class RefreshTokenResponse {
  refresh_token!: string;
  access_token!: string;
}
