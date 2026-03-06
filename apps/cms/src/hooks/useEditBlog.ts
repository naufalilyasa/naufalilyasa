import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editBlogFn } from "../api/blog";
import { toast } from "sonner";

function useEditBlog() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["editBlog"],
        mutationFn: editBlogFn,
        onMutate: () => {
            toast.loading("Saving blog post changes...", { id: "edit-blog" });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllBlogs"] });
            toast.success("Blog post updated successfully!", { id: "edit-blog" });
        },
        onError: (error: any) => {
            toast.error(error.message || "Failed to update blog post", { id: "edit-blog" });
        },
    });
}

export default useEditBlog;
