import { createFileRoute } from "@tanstack/react-router";
import DetailBlog from "../../../components/dashboard/blogs/DetailBlog";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { editBlogFn, getBlogByIdFn } from "../../../api/blog";
import { toast } from "sonner";
import { BlogFormDTO } from "@repo/zod-schemas";

export const Route = createFileRoute("/_auth/blogs/detail/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const params = useParams({ from: "/_auth/blogs/detail/$slug" });
  const queryClient = useQueryClient();

  const { data: dataBlogDetail, isLoading } = useQuery({
    queryKey: ["blogDetail", params.slug],
    queryFn: async () => await getBlogByIdFn(params.slug),
    // initialData: defaultProject,
  });

  const { mutateAsync: editBlog, isPending: loadingEditBlog } = useMutation({
    mutationKey: ["editBlog"],
    mutationFn: editBlogFn,
    onMutate: () => {
      toast.loading("Loading...", { id: "edit-blog" });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllblogs"] });
      toast.success("Blog post updated successfully!", { id: "edit-blog" });
    },
    onError: () => {
      toast.error("Failed to update blog post. Please try again.", {
        id: "edit-blog",
      });
    },
  });

  const handleEditBlog = async (payload: {
    blogId?: string;
    data: BlogFormDTO;
  }) => {
    editBlog({ ...payload });
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <DetailBlog
      blog={dataBlogDetail}
      onUpdateBlog={handleEditBlog}
      isLoading={loadingEditBlog}
    />
  );
}
