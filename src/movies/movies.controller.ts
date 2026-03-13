import { Body, Controller, Get, Query } from '@nestjs/common';
import { MovieService } from './movies.service';
import { SearchMovieWithTitleDto } from './dto/search-with-title.dto';

@Controller('/movies')
export class MoviesController {
  constructor(private readonly moviesService: MovieService) {}

  @Get()
  rootString() {
    return 'DASHBOARD';
  }

  @Get('all')
  async getAllMovies(): Promise<unknown> {
    return this.moviesService.showAllMovie();
  }

  @Get('mv')
  async getByTitle(
    @Body() searchMovieDto: SearchMovieWithTitleDto,
    @Query('keyword') keyword: string,
    @Query('type') type: string,
  ) {
    if (keyword !== undefined && type !== undefined) {
      const results = await this.moviesService.findByTitle(keyword, type);
      return results;
    } else if (keyword !== undefined && type === undefined) {
      const results = await this.moviesService.findBytitleOnly(keyword);
      return results;
    }
  }

  @Get('id')
  async getbyId(@Query('id') id: string) {
    const results = await this.moviesService.findById(id);
    return results;
  }
}
