import { Router } from "express";
import { getDashboardStatsHandler } from "../controllers/analytics.controller.js";
import { deserializeUser, requireUser } from "../middleware/authenticated.middleware.js";

const router: Router = Router();

router.use(deserializeUser, requireUser);

router.get("/stats", getDashboardStatsHandler);

export { router as AnalyticsRoute };
