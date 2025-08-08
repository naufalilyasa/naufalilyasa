import { Router } from "express";

import { getAllTechnologiesHandler } from "~/controllers/technology-controller.js";

const router: Router = Router();

router.get("/", getAllTechnologiesHandler);

export { router as technologiesRoute };
