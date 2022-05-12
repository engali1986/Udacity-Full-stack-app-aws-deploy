"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../database/index"));
const dotenv_1 = __importDefault(require("dotenv"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const hashpass = (password) => {
    const salt = parseInt(process.env.SALT_ROUNDS);
    return bcrypt_1.default.hashSync(`${password}${process.env.BCRYPT_PASS}`, salt);
};
class userModel {
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(user);
            try {
                const regestred = {
                    first_name: user.first_name,
                    pass: user.pass,
                };
                const tok = jsonwebtoken_1.default.sign({ regestred }, process.env.TOKEN_SECRET);
                const conn = yield index_1.default.connect();
                const sql = `INSERT INTO users (first_name,last_name,pass,token) VALUES ($1,$2,$3,$4) returning *`;
                const result = yield conn.query(sql, [
                    user.first_name,
                    user.last_name,
                    hashpass(user.pass),
                    tok,
                ]);
                conn.release();
                return result.rows[0];
            }
            catch (error) {
                console.error(error);
                throw new Error("Unable to create user");
            }
        });
    }
    listusers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield index_1.default.connect();
                const sql = "SELECT * FROM users";
                const result = yield conn.query(sql);
                conn.release();
                console.log(typeof result + typeof result.rows + result.rows.length);
                return result.rows;
            }
            catch (error) {
                throw new Error("Cannot get users list");
            }
        });
    }
}
exports.default = userModel;