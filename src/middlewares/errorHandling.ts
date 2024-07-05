import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import ResponseError from "./responseError";

const errorHandling = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!err) {
    next();
    return;
  }

  if (err instanceof Joi.ValidationError) {
    res.status(400).json({ errors: [err.message.split(".")] });
    return;
  } else if (err instanceof ResponseError) {
    res.status(err.getStatus).json({ errors: [err.message] });
    return;
  }

  return res.status(500).json({
    errors: [err.message],
  });
};

export default errorHandling;
