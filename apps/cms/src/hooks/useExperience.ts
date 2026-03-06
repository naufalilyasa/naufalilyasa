import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import { toast } from "sonner";
import {
    createExperienceFn,
    deleteExperienceFn,
    getExperienceByIdFn,
    getExperiencesFn,
    updateExperienceFn,
} from "../api/experience";

export const useGetExperiences = () => {
    return useQuery({
        queryKey: ["experiences"],
        queryFn: getExperiencesFn,
    });
};

export const useGetExperienceById = (id: string) => {
    return useQuery({
        queryKey: ["experience", id],
        queryFn: () => getExperienceByIdFn(id),
        enabled: !!id,
    });
};

export const useCreateExperience = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    return useMutation({
        mutationFn: createExperienceFn,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["experiences"] });
            toast.success(data.message || "Experience created successfully");
            router.navigate({ to: "/experiences" });
        },
        onError: (error: any) => {
            const errorMessage =
                error.response?.data?.message ||
                error.message ||
                "Failed to create experience";
            toast.error(errorMessage);
        },
    });
};

export const useUpdateExperience = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    return useMutation({
        mutationFn: updateExperienceFn,
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({ queryKey: ["experiences"] });
            queryClient.invalidateQueries({ queryKey: ["experience", variables.id] });
            toast.success(data.message || "Experience updated successfully");
            router.navigate({ to: "/experiences" });
        },
        onError: (error: any) => {
            const errorMessage =
                error.response?.data?.message ||
                error.message ||
                "Failed to update experience";
            toast.error(errorMessage);
        },
    });
};

export const useDeleteExperience = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteExperienceFn,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["experiences"] });
            toast.success(data.message || "Experience deleted successfully");
        },
        onError: (error: any) => {
            const errorMessage =
                error.response?.data?.message ||
                error.message ||
                "Failed to delete experience";
            toast.error(errorMessage);
        },
    });
};
