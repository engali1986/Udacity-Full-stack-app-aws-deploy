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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../../database/index"));
const server_1 = __importDefault(require("../../server"));
const request = (0, supertest_1.default)(server_1.default);
describe("test user Routes", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const connection = yield index_1.default.connect();
        const sql3 = "DELETE FROM users;";
        const sql4 = "ALTER SEQUENCE users_id_seq RESTART WITH 1";
        yield connection.query(sql3);
        yield connection.query(sql4);
        connection.release();
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const connection = yield index_1.default.connect();
        const sql3 = "DELETE FROM users;";
        const sql4 = "ALTER SEQUENCE users_id_seq RESTART WITH 1";
        yield connection.query(sql3);
        yield connection.query(sql4);
        connection.release();
    }));
    it("expect create user to return 200", () => __awaiter(void 0, void 0, void 0, function* () {
        yield request
            .post("/api/users/create")
            .send({
            first_name: "ali3",
            last_name: "ali3",
            pass: "ali3",
        })
            .expect((res) => {
            expect(res.status).toBe(200);
        });
    }));
    it("expect list user to return 200", () => __awaiter(void 0, void 0, void 0, function* () {
        yield request
            .get("/api/users/")
            .expect((res) => {
            expect(res.status).toBe(200);
        });
    }));
});
