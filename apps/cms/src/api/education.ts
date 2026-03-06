import api from "../lib/axios";
import { EducationFormDTO } from "@repo/zod-schemas";
import { EducationResponse } from "@repo/types";

export const getEducationsFn = async (): Promise<{ data: EducationResponse[] }> => {
    const response = await api.get("/educations");
    return response.data;
};

export const getEducationByIdFn = async (id: string): Promise<{ data: EducationResponse }> => {
    const response = await api.get(`/educations/${id}`);
    return response.data;
};

export const createEducationFn = async (payload: EducationFormDTO): Promise<any> => {
    const response = await api.post("/educations", payload);
    return response.data;
};

export const updateEducationFn = async ({
    id,
    data,
}: {
    id: string;
    data: EducationFormDTO;
}): Promise<any> => {
    if (!id) throw new Error("Education ID is missing for update");
    const response = await api.put(`/educations/${id}`, data);
    return response.data;
};

export const deleteEducationFn = async (id: string): Promise<any> => {
    const response = await api.delete(`/educations/${id}`);
    return response.data;
};
