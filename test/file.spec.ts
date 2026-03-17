import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { readFileSync } from "fs";
import request from "supertest";
import { AppModule } from "../src/app.module";

describe("E2E FileTest", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  it("should allow for file uploads", () => {
    return (
      request(app.getHttpServer())
        .post("/product/upload")
        .attach(
          "file",
          "/home/saken/Documents/wallpapers_example/wallhaven-6drjmq_2251x500.png",
        )
        // .field("name", "test")
        .expect(201)
    );
    // .expect({
    //   body: {
    //     name: "test",
    //   },
    //   file: readFileSync("./package.json").toString(),
    // });
  });

  afterAll(async () => {
    await app.close();
  });
});
