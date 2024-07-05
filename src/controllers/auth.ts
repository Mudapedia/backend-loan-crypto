import { Request, Response, NextFunction, json } from "express";
import bcrypt from "bcrypt";
import { RequestBodyUsersLogin } from "../requestbody/auth";
import AuthValidation from "../validation/auth";
import AdminCol from "../model/admin";
import ResponseError from "../middlewares/responseError";
import { EntityAdmin } from "../entity/admin";
import jwt from "jsonwebtoken";
import { isValidObjectId } from "mongoose";

class Auth {
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const body: RequestBodyUsersLogin = req.body;
      await AuthValidation.login(body);

      const admin: EntityAdmin | null = await AdminCol.findOne({
        username: body.username,
      });

      if (!admin) {
        throw new ResponseError(404, "periksa username dan password anda");
      }

      const check = await bcrypt.compare(body.password, admin.password);

      if (!check) {
        throw new ResponseError(404, "periksa username dan password anda");
      }

      if (!process.env.SECRET_KEY) {
        throw new ResponseError(500, "Invalid");
      }

      const token = jwt.sign({ _id: admin._id }, process.env.SECRET_KEY, {
        expiresIn: "1d",
      });

      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 86400 * 1000,
        priority: "high",
        secure: true,
        signed: true,
      });

      res.status(200).json({ message: "berhasil login" });
      return;
    } catch (err) {
      next(err);
    }
  }

  static async isLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const token: string | null = req.signedCookies.token;
      if (!token) {
        throw new ResponseError(403, "Forbidden");
      }
      if (!process.env.SECRET_KEY) {
        throw new ResponseError(500, "Invalid");
      }

      interface DecodedToken extends jwt.JwtPayload {
        _id: string;
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY) as DecodedToken;

      if (!isValidObjectId(decoded._id)) {
        res.cookie("token", "", {
          httpOnly: true,
          maxAge: 0,
          priority: "high",
          secure: true,
          signed: true,
        });
        throw new ResponseError(403, "Forbidden");
      }

      const admin: EntityAdmin | null = await AdminCol.findOne({
        _id: decoded._id,
      });

      if (!admin) {
        res.cookie("token", "", {
          httpOnly: true,
          maxAge: 0,
          priority: "high",
          secure: true,
          signed: true,
        });
        throw new ResponseError(403, "Forbidden");
      }

      res.status(200).json({ message: "user has logged in" });
      return;
    } catch (err) {
      next(err);
    }
  }
}

export default Auth;
