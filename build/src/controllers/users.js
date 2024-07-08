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
const users_1 = __importDefault(require("../validation/users"));
const users_2 = __importDefault(require("../model/users"));
const date_fns_1 = require("date-fns");
const dec_1 = __importDefault(require("../type/dec"));
class UsersControl {
    static add(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                yield users_1.default.add(body);
                const tanggal = (0, date_fns_1.format)(new Date(2014, 1, 11), "ddMMyyyy");
                const codeTransaksi = Math.floor(10000 + Math.random() * 90000).toString();
                body.codeTransaksi =
                    dec_1.default[body.cryptoLoan] + tanggal + codeTransaksi;
                const user = new users_2.default(body);
                const insertedID = (yield user.save())._id;
                res.status(201).json({
                    message: "Successfully added user",
                    insertedID,
                    codeTransaksi: codeTransaksi,
                });
                return;
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = UsersControl;
