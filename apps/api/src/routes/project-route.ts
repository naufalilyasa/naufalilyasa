import { Router } from "express";

import {
  createProjectHandler,
  deleteProjectHandler,
  editProjectHandler,
  getAllProjectsHandler,
  getProjectByIdHandler,
} from "~/controllers/project-controller.js";
import { deserializeUser, requireUser } from "~/middleware/authenticated-middleware.js";
import { upload } from "~/middleware/multer.js";
import { projectLimiter } from "~/middleware/rate-limit-middleware.js";
import { handleMulterError } from "~/utils/multerError.js";

const router: Router = Router();

router.use(deserializeUser, requireUser);

router.get("/", getAllProjectsHandler);
router.get("/:projectId", getProjectByIdHandler);

router.post(
  "/",
  projectLimiter,
  upload.single("thumbnail"),
  handleMulterError,
  createProjectHandler,
);

router.put("/:projectId", projectLimiter, upload.single("thumbnail"), editProjectHandler);

router.delete("/:projectId", deleteProjectHandler);

export { router as projectRoute };
