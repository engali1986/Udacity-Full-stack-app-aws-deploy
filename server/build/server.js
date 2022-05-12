"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const dotenv_1 = __importDefault(require("dotenv"));
const usersRoute_1 = __importDefault(require("./routes/usersRoute"));
const index_1 = __importDefault(require("./database/index"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use((0, morgan_1.default)("common")); // logging middle ware
app.use((0, helmet_1.default)()); // security middle ware
app.use(express_1.default.json());
app.use((0, express_rate_limit_1.default)({
    windowMs: 1 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
}));
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use("/api/users", usersRoute_1.default); // main users route
app.get("/test", (req, res) => {
    res.send("test");
});
app.get("/", (req, res) => {
    res.send("Test page");
});
app.use((req, res) => {
    res.status(404).json({
        massage: "Page not found",
    });
});
// Here i will test database connection
index_1.default.connect().then((client) => {
    return client
        .query("SELECT NOW()")
        .then((res) => {
        client.release();
        console.log("database connected");
        console.log(res.rows);
    })
        .catch((err) => {
        console.log(err);
    });
});
//----------------------------------------
app.use((err, req, res) => {
    if (err) {
        res.send("Error");
    }
    else {
    }
});
app.listen(process.env.port, () => {
    console.log("Running");
});
exports.default = app;
