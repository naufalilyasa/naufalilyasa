import api from "../lib/axios";
import { GenericResponseType } from "@repo/types/project";
import { BlogFormDTO } from "@repo/zod-schemas";
import { BlogResponse } from "@repo/types";

export const getAllBlogsFn = async () => {
  const response = await api.get<
    {
      data: BlogResponse[];
    } & GenericResponseType
  >("/blogs");
  return response.data.data;
};

export const getBlogByIdFn = async (slug: string) => {
  const response = await api.get<
    {
      data: BlogResponse;
    } & GenericResponseType
  >(`/blogs/${slug}`);
  return response.data.data;
};

export const createBlogFn = async (data: BlogFormDTO) => {
  const response = await api.post<GenericResponseType>("/blogs", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const editBlogFn = async ({
  blogId,
  data,
}: {
  blogId?: string;
  data: BlogFormDTO;
}) => {
  const response = await api.put<GenericResponseType>(
    `/blogs/${blogId}`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

export const deleteBlogFn = async (blogId: string) => {
  const response = await api.delete<GenericResponseType>(`/blogs/${blogId}`);
  return response.data;
};
