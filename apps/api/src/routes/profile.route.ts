import { Router } from "express";

import {
  createProfileHandler,
  deleteProfileHandler,
  getAllProfilesHandler,
  getProfileByIdHandler,
  updateProfileHandler,
} from "~/controllers/profile.controller.js";
import { deserializeUser, requireUser } from "~/middleware/authenticated.middleware.js";
import { upload } from "~/middleware/multer.middleware.js";

const router: Router = Router();

router.use(deserializeUser, requireUser);

router.get("/", getAllProfilesHandler);
router.get("/:userId", getProfileByIdHandler);
router.post("/", upload.single("photo"), createProfileHandler);
router.patch("/:userId", updateProfileHandler);
router.delete("/:userId", deleteProfileHandler);

export { router as ProfileRoute };
