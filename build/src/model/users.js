"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schemaUser = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    noHP: {
        type: String,
        required: true,
    },
    walledAddresPendaftar: {
        type: String,
        default: null,
    },
    buktiHash: {
        type: String,
        default: null,
    },
    cryptoLoan: {
        type: String,
        default: null,
    },
    walletAddressTujuan: {
        type: String,
        default: null,
    },
    nominal: {
        type: String,
        default: null,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});
const UsersCol = mongoose_1.default.model("users", schemaUser, "users");
exports.default = UsersCol;
