"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const enum_1 = require("./common/enum");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app
    .use((0, cors_1.default)({ origin: "*" }))
    .use(express_1.default.json());
app.use(enum_1.Api.BASE, routes_1.mailer);
app.get(enum_1.Api.BASE, (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(enum_1.ENV.PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${enum_1.ENV.PORT}`);
});
