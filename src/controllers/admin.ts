import { Request, Response, NextFunction } from "express";
import UsersCol from "../model/users";
import { EntityUsers } from "../entity/users";

class AdminControl {
  static async getUsersTransactionNotFinish(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const user: EntityUsers[] = await UsersCol.find({
        statusTransaksi: false,
      });
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
      const user: EntityUsers[] = await UsersCol.find({
        statusTransaksi: true,
      });
      res.status(200).json({ message: "Successfully added user", data: user });
      return;
    } catch (err) {
      next(err);
    }
  }
}

export default AdminControl;
