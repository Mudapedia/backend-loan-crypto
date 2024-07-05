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
const users_1 = __importDefault(require("../model/users"));
class AdminControl {
    static getUsersTransactionNotFinish(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield users_1.default.find({
                    statusTransaksi: false,
                });
                res.status(200).json({ message: "Successfully added user", data: user });
                return;
            }
            catch (err) {
                next(err);
            }
        });
    }
    static getUsersTransactionFinish(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield users_1.default.find({
                    statusTransaksi: true,
                });
                res.status(200).json({ message: "Successfully added user", data: user });
                return;
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = AdminControl;
