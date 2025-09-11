import { isAxiosError } from "axios";
import api from "../lib/axios";
import { GenericResponseType } from "@repo/types/project";
import { BlogFormDTO } from "@repo/zod-schemas";
import { BlogResponse } from "@repo/types";

export const getAllBlogsFn = async () => {
  try {
    const response = await api.get<
      {
        data: BlogResponse[];
      } & GenericResponseType
    >("/blogs");
    return response.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    }
    throw error;
  }
};

export const getBlogByIdFn = async (slug: string) => {
  try {
    const response = await api.get<
      {
        data: BlogResponse;
      } & GenericResponseType
    >(`/blogs/${slug}`);
    return response.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    }
    throw error;
  }
};

export const createBlogFn = async (data: BlogFormDTO) => {
  try {
    const response = await api.post<GenericResponseType>("/blogs", data, {
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

export const editBlogFn = async ({
  blogId,
  data,
}: {
  blogId?: string;
  data: BlogFormDTO;
}) => {
  try {
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
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    }
    throw error;
  }
};

export const deleteBlogFn = async (blogId: string) => {
  try {
    const response = await api.delete<GenericResponseType>(`/blogs/${blogId}`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    }
    throw error;
  }
};
