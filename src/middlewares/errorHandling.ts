import { Request, Response, NextFunction } from "express";
import Joi from "joi";

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
  }

  return res.status(500).json({
    errors: [err.message],
  });
};

export default errorHandling;
