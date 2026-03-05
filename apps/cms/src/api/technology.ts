import { GenericResponseType, Technologies } from "@repo/types/project";
import api from "../lib/axios";
export const getAllTechnologiesFn = async () => {
  const response = await api.get<
    GenericResponseType & { data: Technologies[] }
  >("/public/technologies");

  return response.data;
};
