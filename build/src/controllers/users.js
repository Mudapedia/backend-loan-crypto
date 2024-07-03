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
class UsersControl {
    static add(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                yield users_1.default.add(body);
                const user = new users_2.default(body);
                const insertedID = (yield user.save())._id;
                res.status(201).json({ message: "Successfully added user", insertedID });
                return;
            }
            catch (err) {
                next(err);
            }
        });
    }
    static edit(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const body = req.body;
                yield users_1.default.edit(body);
                yield users_2.default.updateOne({ _id: id }, {
                    $set: {
                        nominal: body.nominal,
                        cryptoLoan: body.cryptoLoan,
                        walletAddresTujuan: body.walletAddressTujuan,
                        buktiHash: body.buktiHash,
                    },
                });
                res.status(200).json({ message: "Successfully updated user" });
                return;
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = UsersControl;
