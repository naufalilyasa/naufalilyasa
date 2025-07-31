import { UploadApiResponse, UploadStream } from "cloudinary";
import { Readable } from "stream";

import cloudinary from "~/utils/cloudinary.js";

export const uploadImages = async (
  files: Express.Multer.File[],
): Promise<UploadApiResponse[]> => {
  const uploads = await Promise.all(
    files.map((file) => {
      return new Promise<UploadApiResponse>((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ resource_type: "image" }, (err, result) => {
            if (err) {
              reject(err);
            } else if (result) {
              resolve(result);
            } else {
              reject(new Error("Upload failed - no result returned"));
            }
          })
          .end(file.buffer);
      });
    }),
  );
  return uploads;
};

export const uploadSingleImage = (
  file: Express.Multer.File,
  folder: string,
): Promise<{ public_id: string; secure_url: string }> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream({ folder }, (err, result) => {
      if (err || !result) return reject(err);
      resolve({
        secure_url: result.secure_url,
        public_id: result.public_id,
      });
    });

    Readable.from(file.buffer).pipe(uploadStream);
  });
};
