"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const errorHandling = (err, req, res, next) => {
    if (!err) {
        next();
        return;
    }
    if (err instanceof joi_1.default.ValidationError) {
        res.status(400).json({ errors: [err.message.split(".")] });
        return;
    }
    return res.status(500).json({
        errors: [err.message],
    });
};
exports.default = errorHandling;
