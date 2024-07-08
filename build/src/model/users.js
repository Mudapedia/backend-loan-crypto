"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schemaUser = new mongoose_1.default.Schema({
    codeTransaksi: {
        type: String,
    },
    name: {
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
    walletAddress: {
        type: String,
        required: true,
    },
    cryptoLoan: {
        type: String,
        default: "",
    },
    fee: {
        type: String,
        required: true,
    },
    loan: {
        type: String,
        required: true,
    },
    buktiHash: {
        type: String,
        default: "",
    },
    statusTransaksi: {
        type: Boolean,
        default: false,
    },
    rejectComment: {
        type: String,
        default: "",
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});
const UsersCol = mongoose_1.default.model("users", schemaUser, "users");
exports.default = UsersCol;
