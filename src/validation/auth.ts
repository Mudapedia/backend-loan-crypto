import Joi from "joi";
import { RequestBodyUsersLogin } from "../requestbody/auth";

class Schema {
  protected static get loginSchema() {
    return Joi.object({
      username: Joi.string().trim().required(),
      password: Joi.string().trim().required(),
    });
  }
}

class AuthValidation extends Schema {
  static login(body: RequestBodyUsersLogin) {
    return this.loginSchema.validateAsync(body, {
      abortEarly: false,
    });
  }
}

export default AuthValidation;
