"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = exports.ENV = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const ENV = {
    PORT: process.env.PORT || "8001",
};
exports.ENV = ENV;
var Api;
(function (Api) {
    Api["BASE"] = "/";
    Api["SEND"] = "/send";
})(Api || (Api = {}));
exports.Api = Api;
