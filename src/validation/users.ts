import Joi from "joi";
import { RequestBodyUsers, RequestBodyUsersEdit } from "../requestbody/users";

class Schema {
  protected static get addSchema() {
    return Joi.object({
      username: Joi.string().trim().required(),
      email: Joi.string().trim().email().required(),
      walletAddressPendaftar: Joi.string().trim().required(),
      noHP: Joi.string().trim().required(),
    });
  }
  protected static get editSchema() {
    return Joi.object({
      nominal: Joi.string().trim().required(),
      walletAddressTujuan: Joi.string().trim().required(),
      buktiHash: Joi.string().trim().required(),
    });
  }
}

class UserValidation extends Schema {
  static add(body: RequestBodyUsers) {
    return this.addSchema.validateAsync(body, {
      abortEarly: false,
    });
  }
  static edit(body: RequestBodyUsersEdit) {
    return this.editSchema.validateAsync(body, {
      abortEarly: false,
    });
  }
}

export default UserValidation;
