"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../controllers/auth"));
const authRoute = express_1.default.Router();
authRoute.post("/api/login", auth_1.default.login);
authRoute.get("/api/islogin", auth_1.default.isLogin);
exports.default = authRoute;
