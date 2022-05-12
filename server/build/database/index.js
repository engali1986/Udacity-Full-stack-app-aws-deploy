"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let database;
if (process.env.NODE_ENV == "test") {
    database = process.env.POSTGRES_DB_TEST;
    console.log("current environment is" + process.env.NODE_ENV);
}
else {
    database = process.env.POSTGRES_DB_DEV;
    console.log("current environment is" + process.env.NODE_ENV);
}
const pool = new pg_1.Pool({
    host: process.env.postgres_host,
    database: database,
    user: process.env.postgres_user,
    password: process.env.postgres_pass,
    port: parseInt(process.env.postgres_port, 10),
});
pool.on("error", (error) => {
    console.error(error.message);
});
exports.default = pool;
