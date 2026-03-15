import { IsEmail } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 100 })
  @IsEmail()
  email: string;

  @Column({ unique: true, length: 100, nullable: true })
  username: string;

  @Column({ length: 100 })
  password: string;

  @Column({ type: "text", nullable: true })
  hashedRefreshToken?: string;

  @Column({ type: "timestamp", nullable: true })
  refreshTokenExpAt?: Date;
}
