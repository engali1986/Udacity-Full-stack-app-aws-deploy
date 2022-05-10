// this is the test spect for user model first i will create user then i use after all to delete the created user
import userModel from "../../models/userModel";

const userTest = new userModel();

type user = {
  id?: number;
  first_name: string;
  last_name: string;
  pass: string;
};

const testuser: user = {
  first_name: "ali1",
  last_name: "ali2",
  pass: "ali3",
};

describe("user model test", () => {
  it("Test create user", async () => {
    const usercreated = await userTest.create(testuser);
    expect(usercreated.first_name).toBe("ali1");
  });

  it("Test list users", async () => {
    const list = await userTest.listusers();
    expect(list.length).toBeGreaterThan(0);
  });
});
