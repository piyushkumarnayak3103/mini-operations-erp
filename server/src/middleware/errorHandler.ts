import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/ApiError.js";

export const errorHandler = (
  err: Error | ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode =
    err instanceof ApiError ? err.statusCode : 500;

  const message =
    err instanceof ApiError
      ? err.message
      : "Internal Server Error";

  console.error(err);

  res.status(statusCode).json({
    success: false,
    message,
  });
};