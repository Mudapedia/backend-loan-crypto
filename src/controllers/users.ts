import { Request, Response, NextFunction } from "express";
import { RequestBodyUsers, RequestBodyUsersEdit } from "../requestbody/users";
import UserValidation from "../validation/users";
import UsersCol from "../model/users";

class UsersControl {
  static async add(req: Request, res: Response, next: NextFunction) {
    try {
      const body: RequestBodyUsers = req.body;
      await UserValidation.add(body);

      const user = new UsersCol(body);
      const insertedID = (await user.save())._id;

      res.status(201).json({ message: "Successfully added user", insertedID });
      return;
    } catch (err) {
      next(err);
    }
  }
  static async edit(req: Request, res: Response, next: NextFunction) {
    try {
      const id: string = req.params.id;
      const body: RequestBodyUsersEdit = req.body;
      await UserValidation.edit(body);

      await UsersCol.updateOne(
        { _id: id },
        {
          $set: {
            nominal: body.nominal,
            cryptoLoan: body.cryptoLoan,
            walletAddressTujuan: body.walletAddressTujuan,
            buktiHash: body.buktiHash,
          },
        }
      );

      res.status(200).json({ message: "Successfully updated user" });
      return;
    } catch (err) {
      next(err);
    }
  }
}

export default UsersControl;
