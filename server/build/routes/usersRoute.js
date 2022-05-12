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
const express_1 = __importDefault(require("express"));
const userModel_1 = __importDefault(require("../models/userModel"));
const route = express_1.default.Router();
route.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("this is type body request first_name" + typeof req.body.pass);
    console.log("this is body request" + req.body.pass);
    try {
        const user = new userModel_1.default();
        const adduser = yield user.create(req.body);
        res.json({
            massage: "User Added",
            adduser,
        });
    }
    catch (error) {
        console.log(req.body);
        res.send("Error user not added");
    }
}));
// the following route will be used to list all users
route.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = new userModel_1.default();
        const userslist = yield users.listusers();
        res.json({
            massage: "Users list",
            userslist,
        });
    }
    catch (error) {
        res.send("cannot send users list");
    }
}));
exports.default = route;
