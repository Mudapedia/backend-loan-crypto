import { Request, Response, NextFunction } from "express";
import { RequestBodyUsers } from "../requestbody/users";
import UserValidation from "../validation/users";
import UsersCol from "../model/users";
import { format } from "date-fns";
import codeCrypto from "../type/dec";

type CrytoLoan = keyof typeof codeCrypto;

class UsersControl {
  static async add(req: Request, res: Response, next: NextFunction) {
    try {
      const body: RequestBodyUsers = req.body;
      await UserValidation.add(body);

      const tanggal: string = format(new Date(2014, 1, 11), "ddMMyyyy");
      const codeTransaksi = Math.floor(
        10000 + Math.random() * 90000
      ).toString();

      body.codeTransaksi =
        codeCrypto[body.cryptoLoan as CrytoLoan] + tanggal + codeTransaksi;

      const user = new UsersCol(body);
      const insertedID = (await user.save())._id;

      res.status(201).json({
        message: "Successfully added user",
        insertedID,
        codeTransaksi: codeTransaksi,
      });
      return;
    } catch (err) {
      next(err);
    }
  }
}

export default UsersControl;
