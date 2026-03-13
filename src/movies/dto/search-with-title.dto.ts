import { IsInt, IsOptional, Min } from 'class-validator';

export class SearchMovieWithTitleDto {
  title: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  limit?: number = 10;

  @IsOptional()
  @IsInt()
  @Min(0)
  offset?: number = 0;
}
