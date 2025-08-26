import { isAxiosError } from "axios";
import api from "../lib/axios";
import { GenericResponseType } from "@repo/types/project";
import { ProfileFormDTO } from "@repo/zod-schemas";
import { ProfileResponse } from "@repo/types/user";

export const getUserByIdFn = async (userId: string) => {
  try {
    const response = await api.get<
      {
        data: ProfileResponse;
      } & GenericResponseType
    >(`/profiles/${userId}`);
    return response.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    }
    throw error;
  }
};

export const editProfileFn = async ({
  userId,
  data,
}: {
  userId: string;
  data: { name: string } & ProfileFormDTO;
}) => {
  try {
    const response = await api.put<GenericResponseType>(
      `/profiles/${userId}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    }
    throw error;
  }
};
