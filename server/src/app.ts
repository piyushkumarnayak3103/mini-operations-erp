import authRoutes from "./routes/auth.routes.js";
import express, { Request, Response } from "express";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors());

app.use(express.json());

// Health check
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy",
  });
});

// API home
app.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Mini Operations ERP API is running",
  });
});
app.use("/api/auth", authRoutes);
// Error handler
app.use(errorHandler);

export default app;