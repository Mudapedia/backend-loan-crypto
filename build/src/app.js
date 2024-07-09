"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("./router/user"));
const errorHandling_1 = __importDefault(require("./middlewares/errorHandling"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_1 = __importDefault(require("./router/auth"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const admin_1 = __importDefault(require("./router/admin"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: [
        "https://cryptoglobalswift.com",
        "https://frontend-loan-crypto.vercel.app",
        "http://localhost:5173",
    ],
    credentials: true,
}));
app.use((0, cookie_parser_1.default)("secret"));
app.use(express_1.default.json());
app.use(user_1.default);
app.use(auth_1.default);
app.use(admin_1.default);
app.use(errorHandling_1.default);
exports.default = app;
