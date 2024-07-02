import { Request, Response, NextFunction } from "express";
import RequestBodyUsers from "../requestbody/users";
import UserValidation from "../validation/users";
import UsersCol from "../model/users";

class UsersControl {
  static async add(req: Request, res: Response, next: NextFunction) {
    try {
      const body: RequestBodyUsers = req.body;
      await UserValidation.add(body);

      const user = new UsersCol(body);
      await user.save();

      res.status(201).json({ message: "Successfully added user" });
      return;
    } catch (err) {
      next(err);
    }
  }
}

export default UsersControl;
