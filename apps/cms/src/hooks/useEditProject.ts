import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProjectFn } from "../api/project";
import { toast } from "sonner";

function useEditProject() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["editProject"],
        mutationFn: editProjectFn,
        onMutate: () => {
            toast.loading("Saving project changes...", { id: "edit-project" });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllProjects"] });
            toast.success("Project updated successfully!", { id: "edit-project" });
        },
        onError: (error: any) => {
            toast.error(error.message || "Failed to update project", { id: "edit-project" });
        },
    });
}

export default useEditProject;
