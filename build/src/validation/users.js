"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
class Schema {
    static get addSchema() {
        return joi_1.default.object({
            username: joi_1.default.string().trim().required(),
            email: joi_1.default.string().trim().email().required(),
            noHP: joi_1.default.string().trim().required(),
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
