"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
class Schema {
    static get loginSchema() {
        return joi_1.default.object({
            username: joi_1.default.string().trim().required(),
            password: joi_1.default.string().trim().required(),
        });
    }
}
class AuthValidation extends Schema {
    static login(body) {
        return this.loginSchema.validateAsync(body, {
            abortEarly: false,
        });
    }
}
exports.default = AuthValidation;
