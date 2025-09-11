import { Router } from "express";

import {
  createBlogHandler,
  deleteBlogHandler,
  editBlogHandler,
  getAllBlogsHandler,
  getBlogBySlugHandler,
} from "#/controllers/blog.controller.js";
import { deserializeUser, requireUser } from "#/middleware/authenticated.middleware.js";
import { authorizeRole } from "#/middleware/authorizeRole.middleware.js";
import { upload } from "#/middleware/multer.middleware.js";
import { blogLimiter, projectLimiter } from "#/middleware/rateLimit.middleware.js";
import { handleMulterError } from "#/utils/multerError.js";

const router: Router = Router();

router.use(deserializeUser, requireUser);

router.get("/", getAllBlogsHandler);
router.get("/:slug", getBlogBySlugHandler);

router.post(
  "/",
  blogLimiter,
  authorizeRole("ADMIN"),
  upload.single("thumbnail"),
  handleMulterError,
  createBlogHandler,
);

router.put(
  "/:blogId",
  blogLimiter,
  authorizeRole("ADMIN"),
  upload.single("thumbnail"),
  editBlogHandler,
);

router.delete("/:blogId", authorizeRole("ADMIN"), deleteBlogHandler);

export { router as blogRoute };
