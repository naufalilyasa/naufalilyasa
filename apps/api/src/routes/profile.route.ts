import { Router } from "express";

import {
  createProfileHandler,
  deleteProfileHandler,
  getAllProfilesHandler,
  getProfileByIdHandler,
  updateProfileHandler,
} from "#/controllers/profile.controller.js";
import { deserializeUser, requireUser } from "#/middleware/authenticated.middleware.js";
import { authorizeRole } from "#/middleware/authorizeRole.middleware.js";
import { upload } from "#/middleware/multer.middleware.js";

const router: Router = Router();

router.use(deserializeUser, requireUser);

router.get("/", authorizeRole("ADMIN"), getAllProfilesHandler);
router.get("/:userId", authorizeRole("ADMIN", "USER"), getProfileByIdHandler);
router.post("/", authorizeRole("ADMIN"), createProfileHandler);
router.put(
  "/:userId",
  authorizeRole("ADMIN"),
  upload.single("photo"),
  updateProfileHandler,
);
router.delete("/:userId", authorizeRole("ADMIN"), deleteProfileHandler);

export { router as ProfileRoute };
