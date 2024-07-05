"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_1 = __importDefault(require("../controllers/admin"));
const onlyLogin_1 = __importDefault(require("../middlewares/onlyLogin"));
const adminRoute = express_1.default.Router();
adminRoute.get("/api/admin/transaction-finish", onlyLogin_1.default, admin_1.default.getUsersTransactionFinish);
adminRoute.get("/api/admin/transaction-not-finish", onlyLogin_1.default, admin_1.default.getUsersTransactionNotFinish);
adminRoute.post("/api/admin/comment", onlyLogin_1.default, admin_1.default.editComment);
exports.default = adminRoute;
