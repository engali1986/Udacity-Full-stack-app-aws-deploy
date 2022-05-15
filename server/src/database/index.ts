import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

let database;

if (process.env.NODE_ENV == "test") {
  database = process.env.POSTGRES_DB_TEST;
  console.log("current environment is" + process.env.NODE_ENV);
} else {
  database = process.env.POSTGRES_DB_DEV;
  console.log("current environment is" + process.env.NODE_ENV);
}

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  database: database,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  port: parseInt(process.env.POSTGRES_PORT as string, 10),
});
pool.on("error", (error: Error) => {
  console.error(error.message);
});

export default pool;
