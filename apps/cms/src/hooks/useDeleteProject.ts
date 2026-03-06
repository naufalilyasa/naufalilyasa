import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProjectFn } from "../api/project";
import { toast } from "sonner";

function useDeleteProject() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["deleteProject"],
        mutationFn: deleteProjectFn,
        onMutate: () => {
            toast.loading("Deleting project...", { id: "delete-project" });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllProjects"] });
            toast.success("Project deleted successfully!", { id: "delete-project" });
        },
        onError: (error: any) => {
            toast.error(error.message || "Failed to delete project", { id: "delete-project" });
        },
    });
}

export default useDeleteProject;
