import api from "../lib/axios";
import { GenericResponseType, Project } from "@repo/types/project";
import { CreateProjectFormDTO, EditProjectFormDTO } from "@repo/zod-schemas";

export const getAllProjectsFn = async () => {
  const response = await api.get<
    {
      data: Project[];
    } & GenericResponseType
  >("/projects");
  return response.data.data;
};

export const getProjectByIdFn = async (projectId: string) => {
  const response = await api.get<
    {
      data: Project;
    } & GenericResponseType
  >(`/projects/${projectId}`);
  return response.data.data;
};

export const createProjectFn = async (data: CreateProjectFormDTO) => {
  const response = await api.post<GenericResponseType>("/projects", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const editProjectFn = async ({
  projectId,
  data,
}: {
  projectId?: string;
  data: EditProjectFormDTO;
}) => {
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
};

export const deleteProjectFn = async (projectId: string) => {
  const response = await api.delete<GenericResponseType>(
    `/projects/${projectId}`
  );
  return response.data;
};
