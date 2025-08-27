import api from "../lib/axios";
import { GenericResponseType } from "@repo/types/project";
import { Upload } from "@repo/types/upload";

export const uploadImagetoCloudinary = async (
  projectId: string,
  file: File
) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await api.post<GenericResponseType & { data: Upload }>(
      `/upload/${projectId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to upload image");
    }
    if (!response.data || !response.data.data.secure_url) {
      throw new Error("Invalid response from Cloudinary");
    }
    return {
      success: 1,
      message: response.data.message || "Image uploaded successfully",
      file: {
        url: response.data.data.secure_url,
      },
    };
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    return {
      success: 0,
      message: "Failed to upload image",
      file: undefined,
    };
  }
};
