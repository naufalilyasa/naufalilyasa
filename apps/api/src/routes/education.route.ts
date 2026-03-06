import { Router } from "express";
import {
    deserializeUser,
    requireUser,
} from "../middleware/authenticated.middleware.js";
import { authorizeRole } from "../middleware/authorizeRole.middleware.js";
import {
    createEducationHandler,
    deleteEducationHandler,
    getAllEducationsHandler,
    getEducationByIdHandler,
    updateEducationHandler,
} from "../controllers/education.controller.js";

const router: Router = Router();

router.use(deserializeUser, requireUser);

router.get("/", getAllEducationsHandler);
router.get("/:id", getEducationByIdHandler);

router.post("/", authorizeRole("ADMIN"), createEducationHandler);
router.put("/:id", authorizeRole("ADMIN"), updateEducationHandler);
router.delete("/:id", authorizeRole("ADMIN"), deleteEducationHandler);

export { router as educationRoute };
