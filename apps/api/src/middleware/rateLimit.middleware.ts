import rateLimit from "express-rate-limit";

// General rate limiting
export const generalLimit = rateLimit({
  legacyHeaders: false,
  limit: 1000, // limit each IP to 100 requests per windowMs
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
  limit: 5, // limit each IP to 5 auth request per windowMs,
  message: {
    message: "Too many authentication attempts, please try again later",
    status: "error",
    statusCode: 429,
  },
  skipSuccessfulRequests: true, // Don't count successful requests
  windowMs: 15 * 60 * 1000, // 15 minutes,
});

// Strict rate limiting for auth endpoints
export const projectLimiter = rateLimit({
  limit: 100,
  message: {
    message: "Too many request attempts, please try again later",
    status: "error",
    statusCode: 429,
  },
  skipSuccessfulRequests: true, // Don't count successful requests
  windowMs: 15 * 60 * 1000, // 15 minutes,
});
