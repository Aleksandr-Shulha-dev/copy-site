"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailer = void 0;
const express_1 = require("express");
const enum_1 = require("../common/enum");
const controllers_1 = require("../controllers");
const mailer = (0, express_1.Router)();
exports.mailer = mailer;
mailer.post(enum_1.Api.SEND, controllers_1.sendMail);
