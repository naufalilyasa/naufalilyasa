import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProfileFn } from "../api/user";
import { toast } from "sonner";

function useEditProfile() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["editProfile"],
        mutationFn: editProfileFn,
        onMutate: () => {
            toast.loading("Saving profile changes...", { id: "edit-profile" });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getUserById"] });
            toast.success("Profile updated successfully!", { id: "edit-profile" });
        },
        onError: (error: any) => {
            toast.error(error.message || "Failed to update profile", { id: "edit-profile" });
        },
    });
}

export default useEditProfile;
