"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const dec_1 = __importDefault(require("../type/dec"));
class Schema {
    static get addSchema() {
        return joi_1.default.object({
            name: joi_1.default.string().trim().required(),
            email: joi_1.default.string().trim().email().required(),
            noHP: joi_1.default.string().trim().required(),
            walletAddress: joi_1.default.string().trim().required(),
            cryptoLoan: joi_1.default.string()
                .trim()
                .required()
                .custom((value, helper) => {
                if (!dec_1.default[value]) {
                    return helper.error("any.invalid");
                }
                return value;
            })
                .messages({
                "any.invalid": "Crypto Loan Value Not Allowed",
            }),
            nominal: joi_1.default.string().trim().required(),
            buktiHash: joi_1.default.string().trim().required(),
        });
    }
}
class UserValidation extends Schema {
    static add(body) {
        return this.addSchema.validateAsync(body, {
            abortEarly: false,
        });
    }
}
exports.default = UserValidation;
