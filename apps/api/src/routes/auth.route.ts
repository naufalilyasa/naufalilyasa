import { Router } from "express";

import {
  getMeHandler,
  loginHandler,
  logoutHandler,
  refreshHandler,
  registerHandler,
} from "~/controllers/auth.controller.js";
import { deserializeUser, requireUser } from "~/middleware/authenticated.middleware.js";
import { authLimiter } from "~/middleware/rateLimit.middleware.js";

const router: Router = Router();

router.post("/login", authLimiter, loginHandler);
router.post("/register", authLimiter, registerHandler);
router.post("/logout", deserializeUser, requireUser, logoutHandler);
router.get("/refresh", refreshHandler);
router.get("/me", deserializeUser, requireUser, getMeHandler);

export { router as authRoute };
