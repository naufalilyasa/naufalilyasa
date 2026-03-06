import api from "../lib/axios";
import { GenericResponseType } from "@repo/types/project";
import { ExperienceResponse } from "@repo/types/experience";
import { ExperienceFormDTO } from "@repo/zod-schemas";

export const getExperiencesFn = async () => {
    const response = await api.get<{ data: ExperienceResponse[] } & GenericResponseType>("/experiences");
    return response.data;
};

export const getExperienceByIdFn = async (id: string) => {
    const response = await api.get<{ data: ExperienceResponse } & GenericResponseType>(`/experiences/${id}`);
    return response.data;
};

export const createExperienceFn = async (payload: ExperienceFormDTO) => {
    const formData = new FormData();

    // Format based on what backend controller expects `req.body.data` vs normal fields
    const { logo, ...rest } = payload;
    formData.append("data", JSON.stringify(rest));

    if (logo && logo instanceof File) {
        formData.append("logo", logo);
    }

    const response = await api.post<GenericResponseType>("/experiences", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
};

export const updateExperienceFn = async ({
    id,
    data,
}: {
    id: string;
    data: ExperienceFormDTO;
}) => {
    const formData = new FormData();

    const { logo, ...rest } = data;
    formData.append("data", JSON.stringify(rest));

    if (logo && logo instanceof File) {
        formData.append("logo", logo);
    }

    const response = await api.put<GenericResponseType>(`/experiences/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
};

export const deleteExperienceFn = async (id: string) => {
    const response = await api.delete<GenericResponseType>(`/experiences/${id}`);
    return response.data;
};
