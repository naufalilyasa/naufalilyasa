import { paramsProjectSchema } from "@repo/zod-schemas";
import { NextFunction, Request, Response, Router } from "express";
import { ZodError } from "zod";

import { deserializeUser, requireUser } from "~/middleware/authenticated-middleware.js";
import { upload } from "~/middleware/multer.js";
import { uploadSingleImage } from "~/services/upload-services.js";
import { AppError } from "~/utils/appError.js";

const router: Router = Router();

router.post(
  "/:projectId",
  upload.single("file"),
  deserializeUser,
  requireUser,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = res.locals.user as null | {
        createdAt: Date;
        id: string;
        name: string;
        updatedAt: Date;
        username: string;
      };

      if (!user) {
        return next(new AppError(401, "You're not logged in"));
      }
      // Parse params id
      const parsedParams = paramsProjectSchema.parse(req.params);

      const file = req.file as Express.Multer.File | undefined;
      if (!file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      let fileUrl: undefined | { public_id: string; secure_url: string } = undefined;

      const uploadResponse = await uploadSingleImage(
        file,
        `naufalilyasa/projects/${parsedParams.projectId}`,
      );

      fileUrl = uploadResponse;

      res.status(200).json({
        statusCode: 200,
        status: "success",
        message: "File uploaded successfully",
        data: fileUrl,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        }));
        return next(new AppError(400, "Validation failed", formattedErrors));
      }
      next(error);
    }
  },
);

export { router as uploadRouter };
