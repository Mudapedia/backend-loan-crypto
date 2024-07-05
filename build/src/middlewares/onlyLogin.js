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
const responseError_1 = __importDefault(require("./responseError"));
const mongoose_1 = require("mongoose");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const admin_1 = __importDefault(require("../model/admin"));
const onlyLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.signedCookies.token;
        if (!token) {
            throw new responseError_1.default(403, "Forbidden");
        }
        if (!process.env.SECRET_KEY) {
            throw new responseError_1.default(500, "Invalid");
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        if (!(0, mongoose_1.isValidObjectId)(decoded._id)) {
            res.cookie("token", "", {
                httpOnly: true,
                maxAge: 0,
                priority: "high",
                secure: true,
                signed: true,
            });
            throw new responseError_1.default(403, "Forbidden");
        }
        const admin = yield admin_1.default.findOne({
            _id: decoded._id,
        });
        if (!admin) {
            res.cookie("token", "", {
                httpOnly: true,
                maxAge: 0,
                priority: "high",
                secure: true,
                signed: true,
            });
            throw new responseError_1.default(403, "Forbidden");
        }
        next();
        return;
    }
    catch (err) {
        next(err);
    }
});
exports.default = onlyLogin;
