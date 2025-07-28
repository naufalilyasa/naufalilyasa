import { paramsProjectSchema } from "@repo/zod-schemas";
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
import { validateParams } from "~/middleware/validate-params-middleware.js";
import { handleMulterError } from "~/utils/multerError.js";

const router: Router = Router();

router.use(deserializeUser, requireUser);

router.get("/", getAllProjectsHandler);
router.get("/:id", validateParams(paramsProjectSchema), getProjectByIdHandler);
router.post("/", upload.array("images", 20), handleMulterError, createProjectHandler);
router.patch("/:id", validateParams(paramsProjectSchema), editProjectHandler);
router.delete("/:id", validateParams(paramsProjectSchema), deleteProjectHandler);

export { router };
