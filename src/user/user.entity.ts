import { IsEmail } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 100 })
  @IsEmail()
  email: string;

  @Column({ unique: true, length: 100 })
  username: string;

  @Column({ length: 100 })
  password: string;

  @Column({ type: "text", nullable: true })
  hashedAccessToken?: string;

  @Column({ type: "timestamp", nullable: true })
  refrehTokenExpAt?: Date;
}
