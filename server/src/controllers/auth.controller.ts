import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/auth.service.js";
import {
  registerSchema,
  loginSchema,
} from "../validators/auth.validator.js";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = registerSchema.parse(req.body);

    const user = await AuthService.register(
      data.name,
      data.email,
      data.password,
      data.role
    );

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = loginSchema.parse(req.body);

    const result = await AuthService.login(
      data.email,
      data.password
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};