import { Router } from "express";

import {
  getAllPublicProjectsHandler,
  getAllTechnologiesHandler,
  getPublicProjectByIdHandler,
  getPublicUserProfile,
} from "~/controllers/public-controller.js";

const router: Router = Router();

// Public route to get all technologies
router.get("/technologies", getAllTechnologiesHandler);

// Public route to get all projects
router.get("/projects", getAllPublicProjectsHandler);
router.get("/projects/:projectId", getPublicProjectByIdHandler);

// Public route to get user
router.get("/user", getPublicUserProfile);

export { router as publicRoute };
