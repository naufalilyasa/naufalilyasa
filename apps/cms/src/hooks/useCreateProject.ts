import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectFn } from "../api/project";
import { toast } from "sonner";

function useCreateProject() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["createProject"],
        mutationFn: createProjectFn,
        onMutate: () => {
            toast.loading("Creating project...", { id: "create-project" });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllProjects"] });
            toast.success("Project created successfully!", { id: "create-project" });
        },
        onError: (error: any) => {
            toast.error(error.message || "Failed to create project", { id: "create-project" });
        },
    });
}

export default useCreateProject;
