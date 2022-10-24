import { Router } from "express";
import { Api } from "../common/enum";
import { sendMail } from "../controllers";

const mailer = Router();



mailer.post(Api.SEND, sendMail);


export { mailer };