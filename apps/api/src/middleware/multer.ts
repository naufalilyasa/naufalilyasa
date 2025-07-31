import { Request } from "express";
import multer from "multer";

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  callback: multer.FileFilterCallback,
) => {
  if (file.mimetype.startsWith("image/")) {
    callback(null, true);
  } else {
    callback(new Error("Only image files are allowed (JPEG, PNG, GIF, WEBP)"));
  }
};

export const upload = multer({
  fileFilter,
  limits: {
    files: 20,
    fileSize: 5 * 1024 * 1024, // max 5 MB
  },
  storage: multer.memoryStorage(),
});
