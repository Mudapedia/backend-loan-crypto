import Joi from "joi";
import { RequestBodyAdminComment } from "../requestbody/admin";

class Schema {
  protected static get editCommentSchema() {
    return Joi.object({
      comment: Joi.string().trim().required(),
    });
  }
}

class AdminValidation extends Schema {
  static editComment(body: RequestBodyAdminComment) {
    return this.editCommentSchema.validateAsync(body, {
      abortEarly: false,
    });
  }
}

export default AdminValidation;
