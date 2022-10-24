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
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const sendMail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let transporter = nodemailer_1.default.createTransport({
            host: "smtp.ukr.net",
            port: 465,
            secure: true,
            auth: {
                user: "robot-sender-for-appside@ukr.net",
                pass: "K6Bqyngw3H2kDWUC",
            },
        });
        let info = yield transporter.sendMail({
            from: '"Appside test task (Oleksandr Shulha)" <robot-sender-for-appside@ukr.net>',
            to: "alexross2197@gmail.com",
            subject: "Appside test task (Oleksandr Shulha)",
            text: `Result`,
            html: `<b>First name : </b><span>${req.body.firstName}</span><br/>
      <b>Last name : </b><span>${req.body.lastName}</span><br/>
      <b>Email : </b><span>${req.body.email}</span><br/>
      <b>Telephone : </b><span>${req.body.tel}</span>`,
        });
        res.sendStatus(http_status_codes_1.default.CREATED);
    }
    catch (error) {
        console.log(error);
    }
});
exports.sendMail = sendMail;
