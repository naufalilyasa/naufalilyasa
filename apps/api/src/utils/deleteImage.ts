import cloudinary from "./cloudinary.js";

export const deleteSingleImage = async (publicId: string): Promise<void> => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    if (result.result !== "ok" && result.result !== "not found") {
      throw new Error("Failed to delete image");
    }
  } catch (error) {
    console.error("Cloudinary deletion error:", error);
    throw error;
  }
};
