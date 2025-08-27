import { Router } from "express";

import {
  createProjectHandler,
  deleteProjectHandler,
  editProjectHandler,
  getAllProjectsHandler,
  getProjectByIdHandler,
} from "#/controllers/project.controller.js";
import { deserializeUser, requireUser } from "#/middleware/authenticated.middleware.js";
import { authorizeRole } from "#/middleware/authorizeRole.middleware.js";
import { upload } from "#/middleware/multer.middleware.js";
import { projectLimiter } from "#/middleware/rateLimit.middleware.js";
import { handleMulterError } from "#/utils/multerError.js";

const router: Router = Router();

router.use(deserializeUser, requireUser);

router.get("/", getAllProjectsHandler);
router.get("/:projectId", getProjectByIdHandler);

router.post(
  "/",
  projectLimiter,
  authorizeRole("ADMIN"),
  upload.single("thumbnail"),
  handleMulterError,
  createProjectHandler,
);

router.put(
  "/:projectId",
  projectLimiter,
  authorizeRole("ADMIN"),
  upload.single("thumbnail"),
  editProjectHandler,
);

router.delete("/:projectId", authorizeRole("ADMIN"), deleteProjectHandler);

export { router as projectRoute };
