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
// this is the test spect for user model first i will create user then i use after all to delete the created user
const userModel_1 = __importDefault(require("../../models/userModel"));
const userTest = new userModel_1.default();
const testuser = {
    first_name: "ali1",
    last_name: "ali2",
    pass: "ali3",
};
describe("user model test", () => {
    it("Test create user", () => __awaiter(void 0, void 0, void 0, function* () {
        const usercreated = yield userTest.create(testuser);
        expect(usercreated.first_name).toBe("ali1");
    }));
    it("Test list users", () => __awaiter(void 0, void 0, void 0, function* () {
        const list = yield userTest.listusers();
        expect(list.length).toBeGreaterThan(0);
    }));
});
