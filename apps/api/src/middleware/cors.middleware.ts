import config from "config/config.js";
import "dotenv/config";
import cors from "cors";

const corsMiddleware = cors({
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  origin: config.frontendUrl,
});

export default corsMiddleware;
