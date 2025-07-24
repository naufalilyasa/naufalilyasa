import { paramsProjectSchema } from "@repo/zod-schemas/shared/project-schema";
import { Router } from "express";

import {
  createProjectHandler,
  deleteProjectHandler,
  editProjectHandler,
  getAllProjectsHandler,
  getProjectByIdHandler,
} from "~/controllers/project-controller.js";
import { upload } from "~/middleware/multer.js";
import { validateParams } from "~/middleware/validate-params-middleware.js";

const router: Router = Router();

router.get("/projects", getAllProjectsHandler);
router.get("/projects/:id", validateParams(paramsProjectSchema), getProjectByIdHandler);
router.post("/projects", upload.array("images", 20), createProjectHandler);
router.patch("/projects/:id", validateParams(paramsProjectSchema), editProjectHandler);
router.delete("/projects/:id", validateParams(paramsProjectSchema), deleteProjectHandler);

export { router };
