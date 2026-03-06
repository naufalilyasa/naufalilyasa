import { Router } from "express";
import {
    createExperienceHandler,
    deleteExperienceHandler,
    getAllExperiencesHandler,
    getExperienceByIdHandler,
    updateExperienceHandler,
} from "../controllers/experience.controller.js";
import {
    deserializeUser,
    requireUser,
} from "../middleware/authenticated.middleware.js";
import { authorizeRole } from "../middleware/authorizeRole.middleware.js";
import { upload } from "../middleware/multer.middleware.js";
import { handleMulterError } from "../utils/multerError.js";

const router: Router = Router();

router.use(deserializeUser, requireUser);

router.get("/", authorizeRole("ADMIN"), getAllExperiencesHandler);
router.get("/:experienceId", authorizeRole("ADMIN"), getExperienceByIdHandler);

router.post(
    "/",
    authorizeRole("ADMIN"),
    upload.single("logo"),
    handleMulterError,
    createExperienceHandler
);

router.put(
    "/:experienceId",
    authorizeRole("ADMIN"),
    upload.single("logo"),
    handleMulterError,
    updateExperienceHandler
);

router.delete("/:experienceId", authorizeRole("ADMIN"), deleteExperienceHandler);

export { router as experienceRoute };
