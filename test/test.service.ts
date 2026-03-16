import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../src/user/user.entity";
import { Repository } from "typeorm";
import { RegisterDTO } from "../src/model/auth.model";

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly authRepo: Repository<UserEntity>,
  ) {}

  async deleteUser() {
    const del = await this.authRepo.query(
      "DELETE from users where email LIKE ?",
      ["sakentest1@%"],
    );
  }

  async createUser(req: RegisterDTO) {
    await this.authRepo.query("INSERT INTO users (username, email, password)", [
      req.username,
      req.email,
      req.password,
    ]);
  }
}
