import { Router } from "express";

import {
  getAllPublicProjectsHandler,
  getAllTechnologiesHandler,
  getPublicProjectByIdHandler,
} from "~/controllers/public-controller.js";

const router: Router = Router();

// Public route to get all technologies
router.get("/technologies", getAllTechnologiesHandler);

// Public route to get all projects
router.get("/projects", getAllPublicProjectsHandler);
router.get("/projects/:projectId", getPublicProjectByIdHandler);

export { router as publicRoute };
