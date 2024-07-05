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
const bcrypt_1 = __importDefault(require("bcrypt"));
const auth_1 = __importDefault(require("../validation/auth"));
const admin_1 = __importDefault(require("../model/admin"));
const responseError_1 = __importDefault(require("../middlewares/responseError"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mongoose_1 = require("mongoose");
class Auth {
    static login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                yield auth_1.default.login(body);
                const admin = yield admin_1.default.findOne({
                    username: body.username,
                });
                if (!admin) {
                    throw new responseError_1.default(404, "periksa username dan password anda");
                }
                const check = yield bcrypt_1.default.compare(body.password, admin.password);
                if (!check) {
                    throw new responseError_1.default(404, "periksa username dan password anda");
                }
                if (!process.env.SECRET_KEY) {
                    throw new responseError_1.default(500, "Invalid");
                }
                const token = jsonwebtoken_1.default.sign({ _id: admin._id }, process.env.SECRET_KEY, {
                    expiresIn: "1d",
                });
                res.cookie("token", token, {
                    httpOnly: true,
                    maxAge: 86400 * 1000,
                    priority: "high",
                    secure: true,
                    signed: true,
                });
                res.status(200).json({ message: "berhasil login" });
                return;
            }
            catch (err) {
                next(err);
            }
        });
    }
    static isLogin(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
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
                res.status(200).json({ message: "user has logged in" });
                return;
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = Auth;
