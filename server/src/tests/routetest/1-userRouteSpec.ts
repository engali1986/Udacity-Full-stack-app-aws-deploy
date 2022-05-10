import supertest from "supertest";
import db from "../../database/index";
import app from "../../server";

const request = supertest(app);
describe("test user Routes", () => {
  beforeAll(async () => {
    const connection = await db.connect();

    const sql3 = "DELETE FROM users;";
    const sql4 = "ALTER SEQUENCE users_id_seq RESTART WITH 1";

    await connection.query(sql3);
    await connection.query(sql4);
    connection.release();
  });

  afterAll(async () => {
    const connection = await db.connect();

    const sql3 = "DELETE FROM users;";
    const sql4 = "ALTER SEQUENCE users_id_seq RESTART WITH 1";

    await connection.query(sql3);
    await connection.query(sql4);
    connection.release();
  });

  it("expect create user to return 200", async () => {
    await request
      .post("/api/users/create")

      .send({
        first_name: "ali3",
        last_name: "ali3",
        pass: "ali3",
      })
      .expect((res) => {
        expect(res.status).toBe(200);
      });
  });

  it("expect list user to return 200", async () => {
    await request
      .get("/api/users/")

      .expect((res) => {
        expect(res.status).toBe(200);
      });
  });
});
