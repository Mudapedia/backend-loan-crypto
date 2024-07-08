import { Request, Response, NextFunction } from "express";
import UsersCol from "../model/users";
import { EntityUsers } from "../entity/users";
import { isValidObjectId } from "mongoose";
import ResponseError from "../middlewares/responseError";
import { RequestBodyAdminComment } from "../requestbody/admin";
import AdminValidation from "../validation/admin";

class AdminControl {
  static async getUsersTransactionNotFinish(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const user: EntityUsers[] = await UsersCol.aggregate([
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
    } catch (err) {
      next(err);
    }
  }

  static async getUsersTransactionFinish(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const user: EntityUsers[] = await UsersCol.aggregate([
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
    } catch (err) {
      next(err);
    }
  }

  static async editComment(req: Request, res: Response, next: NextFunction) {
    try {
      const id: string = req.params.id;
      if (!isValidObjectId(id)) {
        throw new ResponseError(400, "Invalid");
      }

      const body: RequestBodyAdminComment = req.body;
      await AdminValidation.editComment(body);

      await UsersCol.updateOne(
        { _id: id },
        {
          $set: {
            rejectComment: body.comment,
          },
        }
      );

      res.status(200).json({ message: "update comment successfully" });
      return;
    } catch (err) {
      next(next);
    }
  }
}

export default AdminControl;
