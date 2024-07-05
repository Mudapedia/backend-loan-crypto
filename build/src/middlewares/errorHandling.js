"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const responseError_1 = __importDefault(require("./responseError"));
const errorHandling = (err, req, res, next) => {
    if (!err) {
        next();
        return;
    }
    if (err instanceof joi_1.default.ValidationError) {
        res.status(400).json({ errors: [err.message.split(".")] });
        return;
    }
    else if (err instanceof responseError_1.default) {
        res.status(err.getStatus).json({ errors: [err.message] });
        return;
    }
    return res.status(500).json({
        errors: [err.message],
    });
};
exports.default = errorHandling;
