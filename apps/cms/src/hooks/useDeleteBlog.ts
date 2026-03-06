import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBlogFn } from "../api/blog";
import { toast } from "sonner";

function useDeleteBlog() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["deleteBlog"],
        mutationFn: deleteBlogFn,
        onMutate: () => {
            toast.loading("Deleting blog post...", { id: "delete-blog" });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllBlogs"] });
            toast.success("Blog post deleted successfully!", { id: "delete-blog" });
        },
        onError: (error: any) => {
            toast.error(error.message || "Failed to delete blog post", { id: "delete-blog" });
        },
    });
}

export default useDeleteBlog;
