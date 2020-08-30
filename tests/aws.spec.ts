import app, { server } from "../src/index";
import supertest, { SuperTest, Test } from "supertest";

describe("AWSRouter", () => {
  let agent: SuperTest<Test>;

  beforeAll((done) => {
    agent = supertest.agent(app);
    done();
  });

  afterAll(() => {
    server.close();
  });

  test("tests our testing framework if it works", () => {
    expect(4).toBe(4);
  });
});
