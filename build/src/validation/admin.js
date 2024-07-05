"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
class Schema {
    static get editCommentSchema() {
        return joi_1.default.object({
            comment: joi_1.default.string().trim().required(),
        });
    }
}
class AdminValidation extends Schema {
    static editComment(body) {
        return this.editCommentSchema.validateAsync(body, {
            abortEarly: false,
        });
    }
}
exports.default = AdminValidation;
