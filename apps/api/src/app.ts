import cookieParser from "cookie-parser";
import express, { Application, Request, Response } from "express";
import "dotenv/config";
import morgan from "morgan";

import corsMiddleware from "./middleware/cors.js";
import { errorHandler } from "./middleware/error-middleware.js";
import { router as authRoute } from "./routes/auth-route.js";

const app: Application = express();

app.use(corsMiddleware);
app.use(express.json());
app.use(cookieParser());

// Logger
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

// Route
app.use("/api/auth", authRoute);

// Global error
app.use(errorHandler);

export default app;
