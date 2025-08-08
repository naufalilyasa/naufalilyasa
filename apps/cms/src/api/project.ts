import { isAxiosError } from "axios";
import api from "../lib/axios";
import { GenericResponseType, Project } from "@repo/types/project";
import { CreateProjectFormDTO, EditProjectFormDTO } from "@repo/zod-schemas";

export const getAllProjectsFn = async () => {
  try {
    const response = await api.get<
      {
        data: Project[];
      } & GenericResponseType
    >("/projects");
    return response.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    }
    throw error;
  }
};

export const getProjectByIdFn = async (projectId: string) => {
  try {
    const response = await api.get<
      {
        data: Project;
      } & GenericResponseType
    >(`/projects/${projectId}`);
    return response.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    }
    throw error;
  }
};

export const createProjectFn = async (data: CreateProjectFormDTO) => {
  try {
    const response = await api.post<GenericResponseType>("/projects", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    }
    throw error;
  }
};

export const editProjectFn = async ({
  projectId,
  data,
}: {
  projectId?: string;
  data: EditProjectFormDTO;
}) => {
  try {
    const response = await api.put<GenericResponseType>(
      `/projects/${projectId}`,
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

export const deleteProjectFn = async (projectId: string) => {
  try {
    const response = await api.delete<GenericResponseType>(
      `/projects/${projectId}`
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    }
    throw error;
  }
};
