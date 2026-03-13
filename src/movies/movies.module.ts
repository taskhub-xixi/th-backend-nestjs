import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TitleBacis } from 'src/typeorm/entities/title-basisc';
import { NameBasics } from 'src/typeorm/entities/name-basics';
import { MovieService } from './movies.service';

@Module({
  imports: [TypeOrmModule.forFeature([TitleBacis, NameBasics])],
  controllers: [MoviesController],
  providers: [MovieService],
})
export class MoviesModule {}
