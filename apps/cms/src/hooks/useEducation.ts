import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
    createEducationFn,
    deleteEducationFn,
    getEducationByIdFn,
    getEducationsFn,
    updateEducationFn,
} from "../api/education";

export const useGetEducations = () => {
    return useQuery({
        queryKey: ["educations"],
        queryFn: getEducationsFn,
    });
};

export const useGetEducationById = (id: string) => {
    return useQuery({
        queryKey: ["educations", id],
        queryFn: () => getEducationByIdFn(id),
        enabled: !!id,
    });
};

export const useCreateEducation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createEducationFn,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["educations"] });
            toast.success("Education created successfully");
        },
        onError: (error: any) => {
            const message = error.response?.data?.message || "Failed to create education";
            toast.error(message);
        },
    });
};

export const useUpdateEducation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateEducationFn,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["educations"] });
            toast.success("Education updated successfully");
        },
        onError: (error: any) => {
            const message = error.response?.data?.message || "Failed to update education";
            toast.error(message);
        },
    });
};

export const useDeleteEducation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteEducationFn,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["educations"] });
            toast.success("Education deleted successfully");
        },
        onError: (error: any) => {
            const message = error.response?.data?.message || "Failed to delete education";
            toast.error(message);
        },
    });
};
