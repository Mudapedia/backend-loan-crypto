import { Request, Response, NextFunction } from "express";
import ResponseError from "./responseError";
import { isValidObjectId } from "mongoose";
import jwt from "jsonwebtoken";
import AdminCol from "../model/admin";
import { EntityAdmin } from "../entity/admin";

const onlyLogin = async (req: Request, res: Response, next: NextFunction) => {
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

    next();
    return;
  } catch (err) {
    next(err);
  }
};

export default onlyLogin;
