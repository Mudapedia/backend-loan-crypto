"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_1 = __importDefault(require("../controllers/admin"));
const adminRoute = express_1.default.Router();
adminRoute.post("/api/admin/transaction-finish", admin_1.default.getUsersTransactionFinish);
adminRoute.put("/api/admin/transaction-not-finish", admin_1.default.getUsersTransactionNotFinish);
exports.default = adminRoute;
