import cookieParser from "cookie-parser";
import express, { Application, Request, Response } from "express";
import "dotenv/config";
import morgan from "morgan";

import corsMiddleware from "./middleware/cors-middleware.js";
import { errorHandler } from "./middleware/error-middleware.js";
import { generalLimit } from "./middleware/rate-limit-middleware.js";
import { router as authRoute } from "./routes/auth-route.js";
import { router as projectRoute } from "./routes/project-route.js";
import { router as technologiesRoute } from "./routes/technology-route.js";

const app: Application = express();

app.use(corsMiddleware);
app.use(express.json());
app.use(cookieParser());
app.use(generalLimit);

// Logger
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// Health check
app.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

// Route
app.use("/api/auth", authRoute);
app.use("/api/projects", projectRoute);
app.use("/api/technologies", technologiesRoute);

// Global error
app.use(errorHandler);

export default app;
