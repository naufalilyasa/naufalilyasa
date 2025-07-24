import { UploadApiResponse } from "cloudinary";

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
