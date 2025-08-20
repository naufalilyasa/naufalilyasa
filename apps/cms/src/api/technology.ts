import { GenericResponseType, Technologies } from "@repo/types/project";
import api from "../lib/axios";
import { isAxiosError } from "axios";

export const getAllTechnologiesFn = async () => {
  try {
    const response = await api.get<
      GenericResponseType & { data: Technologies[] }
    >("/public/technologies");

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    }
    throw error;
  }
};
