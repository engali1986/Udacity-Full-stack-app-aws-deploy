import db from "../database/index";
import env from "dotenv";
import increption from "bcrypt";
import token from "jsonwebtoken";
env.config();

const hashpass = (password: string) => {
  const salt = parseInt(process.env.SALT_ROUNDS as string);
  return increption.hashSync(`${password}${process.env.BCRYPT_PASS}`, salt);
};
type user = {
  id?: number;
  first_name: string;
  last_name: string;
  pass: string;
};

class userModel {
  async create(user: user): Promise<user> {
    console.log(user);
    try {
      const regestred = {
        first_name: user.first_name,
        pass: user.pass,
      };
      const tok = token.sign({ regestred }, process.env.TOKEN_SECRET as string);
      const conn = await db.connect();
      const sql = `INSERT INTO users (first_name,last_name,pass,token) VALUES ($1,$2,$3,$4) returning *`;
      const result = await conn.query(sql, [
        user.first_name,
        user.last_name,
        hashpass(user.pass),
        tok,
      ]);

      conn.release();

      return result.rows[0];
    } catch (error) {
      console.error(error);
      throw new Error("Unable to create user");
    }
  }

  async listusers(): Promise<user[]> {
    try {
      const conn = await db.connect();
      const sql = "SELECT * FROM users";
      const result = await conn.query(sql);
      conn.release();
      console.log(typeof result + typeof result.rows + result.rows.length);
      return result.rows;
    } catch (error) {
      throw new Error("Cannot get users list");
    }
  }
}

export default userModel;
