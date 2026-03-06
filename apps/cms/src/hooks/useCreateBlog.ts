import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlogFn } from "../api/blog";
import { toast } from "sonner";

function useCreateBlog() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["createBlog"],
        mutationFn: createBlogFn,
        onMutate: () => {
            toast.loading("Creating blog post...", { id: "create-blog" });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllBlogs"] });
            toast.success("Blog post created successfully!", { id: "create-blog" });
        },
        onError: (error: any) => {
            toast.error(error.message || "Failed to create blog post", { id: "create-blog" });
        },
    });
}

export default useCreateBlog;
