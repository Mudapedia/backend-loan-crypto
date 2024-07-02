import Joi from "joi";
import RequestBodyUsers from "../requestbody/users";

class Schema {
  protected static get addSchema() {
    return Joi.object({
      username: Joi.string().trim().required(),
      email: Joi.string().trim().email().required(),
      noHP: Joi.string().trim().required(),
    });
  }
}

class UserValidation extends Schema {
  static add(body: RequestBodyUsers) {
    return this.addSchema.validateAsync(body, {
      abortEarly: false,
    });
  }
}

export default UserValidation;
