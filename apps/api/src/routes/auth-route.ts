import { Router } from "express";

import {
  getMeHandler,
  loginHandler,
  logoutHandler,
  refreshHandler,
  registerHandler,
} from "~/controllers/auth-controller.js";
import { deserizalizeUser, requireUser } from "~/middleware/authenticated-middleware.js";
import { validateBody } from "~/middleware/validate-body-middleware.js";
import { loginUserSchema, registerUserSchema } from "~/schemas/auth-schema.js";

const router = Router();

router.post("/login", validateBody(loginUserSchema), loginHandler);
router.post("/register", validateBody(registerUserSchema), registerHandler);
router.post("/logout", deserizalizeUser, requireUser, logoutHandler);
router.post("/refresh", refreshHandler);
router.get("/me", deserizalizeUser, requireUser, getMeHandler);

export { router };
