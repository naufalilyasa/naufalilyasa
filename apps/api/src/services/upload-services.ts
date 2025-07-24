import cloudinary from "~/utils/cloudinary.js";

export const uploadImages = async (files: Buffer[]) => {
  try {
    const uploads = await Promise.all(
      files.map((file) => {
        cloudinary.uploader
          .upload_stream({ resource_type: "image" }, (err, result) => {
            if (err || !result) throw err;
          })
          .end(file.buffer);
      }),
    );
    return uploads;
  } catch (error) {
    return error;
  }
};
