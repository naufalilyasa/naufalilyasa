import { rateLimit } from "express-rate-limit";

// General rate limiting
export const generalLimit = rateLimit({
  legacyHeaders: false,
  max: 1000, // limit each IP to 1000 requests per windowMs
  message: {
    message: "Too many Requests, please try again later",
    status: "error",
    statusCode: 429,
  },
  standardHeaders: true,
  windowMs: 15 * 60 * 1000, // 15 minutes
});

// Strict rate limiting for auth endpoints
export const authLimiter = rateLimit({
  max: 5, // limit each IP to 5 auth request per windowMs,
  message: {
    message: "Too many authentication attempts, please try again later",
    status: "error",
    statusCode: 429,
  },
  skipSuccessfulRequests: true, // Don't count successful requests
  windowMs: 15 * 60 * 1000, // 15 minutes,
});

export const projectLimiter = rateLimit({
  max: 100,
  message: {
    message: "Too many request attempts, please try again later",
    status: "error",
    statusCode: 429,
  },
  skipSuccessfulRequests: true,
  windowMs: 15 * 60 * 1000,
});

export const blogLimiter = rateLimit({
  max: 100,
  message: {
    message: "Too many request attempts, please try again later",
    status: "error",
    statusCode: 429,
  },
  skipSuccessfulRequests: true,
  windowMs: 15 * 60 * 1000,
});
