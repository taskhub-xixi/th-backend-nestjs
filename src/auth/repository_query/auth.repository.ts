export class AuthRepositorySQL {
  insertUser(): string {
    return "INSERT INTO users (email, username, password, createdAt) VALUES (?, ?, ?, ?)";
  }
}

// LATER
