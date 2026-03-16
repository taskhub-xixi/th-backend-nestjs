import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TitleBacis } from "../typeorm/entities/title-basisc";
import { Repository } from "typeorm";

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(TitleBacis)
    private readonly titleRepo: Repository<TitleBacis>,
  ) {}

  async showAllMovie(): Promise<TitleBacis[]> {
    return await this.titleRepo.query(
      `SELECT primaryTitle from title_basics limit 50`,
    );
  }

  async findByTitle(keyword: string, type: string): Promise<string> {
    return await this.titleRepo.query(
      `SELECT * from title_basics WHERE MATCH(primaryTitle)
      AGAINST("${keyword}") AND titleType="${type}" limit 1`,
    );
  }

  async findById(id: string): Promise<string> {
    return await this.titleRepo.query(
      `SELECT * from title_basics where tconst like "${id}" limit 1 `,
    );
  }

  async findBytitleOnly(keyword: string): Promise<string> {
    return await this.titleRepo.query(
      `SELECT * from title_basics WHERE primaryTitle LIKE
        "${keyword}"`,
    );
  }
}
