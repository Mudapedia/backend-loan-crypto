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
const mongoose_1 = require("mongoose");
const responseError_1 = __importDefault(require("../middlewares/responseError"));
const admin_1 = __importDefault(require("../validation/admin"));
class AdminControl {
    static getUsersTransactionNotFinish(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield users_1.default.aggregate([
                    {
                        $match: {
                            statusTransaksi: false,
                        },
                    },
                    {
                        $sort: {
                            created_at: -1,
                        },
                    },
                ]);
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
                const user = yield users_1.default.aggregate([
                    {
                        $match: {
                            statusTransaksi: true,
                        },
                    },
                    {
                        $sort: {
                            created_at: -1,
                        },
                    },
                ]);
                res.status(200).json({ message: "Successfully added user", data: user });
                return;
            }
            catch (err) {
                next(err);
            }
        });
    }
    static editComment(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                if (!(0, mongoose_1.isValidObjectId)(id)) {
                    throw new responseError_1.default(400, "Invalid");
                }
                const body = req.body;
                yield admin_1.default.editComment(body);
                yield users_1.default.updateOne({ _id: id }, {
                    $set: {
                        rejectComment: body.comment,
                        statusTransaksi: true,
                    },
                });
                res.status(200).json({ message: "update comment successfully" });
                return;
            }
            catch (err) {
                next(next);
            }
        });
    }
    static finishedTransaction(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                if (!(0, mongoose_1.isValidObjectId)(id)) {
                    throw new responseError_1.default(400, "Invalid");
                }
                yield users_1.default.updateOne({ _id: id }, {
                    $set: {
                        statusTransaksi: true,
                    },
                });
                res.status(200).json({ message: "update transaction successfully" });
                return;
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = AdminControl;
