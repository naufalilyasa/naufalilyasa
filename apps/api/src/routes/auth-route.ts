import { Router } from "express";

import {
  getMeHandler,
  loginHandler,
  logoutHandler,
  refreshHandler,
  registerHandler,
} from "~/controllers/auth-controller.js";
import { deserizalizeUser, requireUser } from "~/middleware/authenticated-middleware.js";
import { authLimiter } from "~/middleware/rate-limit-middleware.js";

const router: Router = Router();

router.post("/login", authLimiter, loginHandler);
router.post("/register", authLimiter, registerHandler);
router.post("/logout", authLimiter, deserizalizeUser, requireUser, logoutHandler);
router.get("/refresh", authLimiter, refreshHandler);
router.get("/me", deserizalizeUser, requireUser, getMeHandler);

export { router };
