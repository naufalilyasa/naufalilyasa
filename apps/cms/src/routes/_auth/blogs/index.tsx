/* eslint-disable @typescript-eslint/no-unused-vars */
import { createFileRoute, Link } from "@tanstack/react-router";
import { BlogForm } from "../../../components/dashboard/blogs/BlogForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Badge } from "@repo/ui/components/badge";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui/components/dropdown-menu";
import { toast } from "sonner";
import {
  Search,
  Filter,
  Calendar,
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  Copy,
  Eye,
  FileText,
  Clock,
  User,
  Tag,
  ExternalLink,
} from "lucide-react";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { BlogResponse } from "@repo/types";
import { BlogFormDTO } from "@repo/zod-schemas";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createBlogFn,
  deleteBlogFn,
  editBlogFn,
  getAllBlogsFn,
} from "../../../api/blog";
import { categories } from "../../../utils/dummy";

export const Route = createFileRoute("/_auth/blogs/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [blogs, setBlogs] = useState<BlogResponse[]>();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogResponse | null>(null);

  const queryClient = useQueryClient();

  const statuses = ["all", "published", "draft"];

  const { data: getAllBlogs, isLoading: loadingGetAllBlogs } = useQuery({
    queryKey: ["getAllBlogs"],
    queryFn: getAllBlogsFn,
  });

  useEffect(() => {
    if (!loadingGetAllBlogs) {
      setBlogs(getAllBlogs);
    }
  }, [getAllBlogs, loadingGetAllBlogs]);

  const filteredBlogs = blogs?.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.tags.some((tag) =>
        tag.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "all" || blog.category?.id === selectedCategory;
    const matchesStatus =
      selectedStatus === "all" ||
      (selectedStatus === "published" && blog.published) ||
      (selectedStatus === "draft" && !blog.published);

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const publishedBlogs = blogs?.filter((blog) => blog.published);
  const draftBlogs = blogs?.filter((blog) => !blog.published);

  const { mutateAsync: createBlog, isPending: loadingCreateBlog } = useMutation(
    {
      mutationKey: ["createBlog"],
      mutationFn: createBlogFn,
      onMutate: () => {
        toast.loading("Loading...", { id: "create-blog" });
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["getAllblogs"] });
        toast.success("Successfully create blog", { id: "create-blog" });
      },
      onError: () => {
        toast.error("Failed create blog", { id: "create-blog" });
      },
    }
  );

  const { mutateAsync: editBlog, isPending: loadingEditBlog } = useMutation({
    mutationKey: ["editBlog"],
    mutationFn: editBlogFn,
    onMutate: () => {
      toast.loading("Loading...", { id: "edit-blog" });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllblogs"] });
      toast.success("Successfully edit blog", { id: "edit-blog" });
    },
    onError: () => {
      toast.error("Failed edit blog", { id: "edit-blog" });
    },
  });

  const { mutateAsync: deleteBlog, isPending: loadingDeleteBlog } = useMutation(
    {
      mutationKey: ["deleteBlog"],
      mutationFn: deleteBlogFn,
      onMutate: () => {
        toast.loading("Loading...", { id: "delete-blog" });
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["getAllblogs"] });
        toast.success("Successfully delete blog", { id: "delete-blog" });
      },
      onError: () => {
        toast.error("Failed delete blog", { id: "delete-blog" });
      },
    }
  );

  const handleCreateBlog = async (payload: {
    blogId?: string;
    data: BlogFormDTO;
  }) => {
    createBlog(payload.data);
    setShowBlogForm(false);
  };

  const handleEditBlog = async (payload: {
    blogId?: string;
    data: BlogFormDTO;
  }) => {
    if (!editingBlog) return;
    editBlog({ ...payload });
    setEditingBlog(null);
    setShowBlogForm(false);
  };

  const handleDeleteBlog = async (blogId: string) => {
    deleteBlog(blogId);
  };

  const handleTogglePublished = async (blog: BlogResponse) => {
    try {
      editBlog({
        data: {
          title: blog.title,
          slug: blog.slug,
          content: {
            time: Date.now(),
            blocks: blog.content.blocks
              ? blog.content.blocks
              : [
                {
                  id: "1",
                  type: "paragraph",
                  data: {
                    text: "This is a project description",
                  },
                },
              ],
            version: "2.30.8",
          },
          tags: blog.tags,
          excerpt: blog.excerpt ? blog.excerpt : "",
          thumbnail: undefined,
          published: !blog.published,
          publishedAt: new Date(),
          categorySlug: blog.category?.slug,
        },
      });

      toast.success(
        `Blog post ${blog.published ? "published" : "unpublished"}!`
      );
    } catch (error) {
      toast.error("Failed to update blog post status.");
    }
  };

  const handleDuplicateBlog = (blog: BlogResponse) => {
    const duplicatedBlog: BlogFormDTO = {
      title: `${blog.title} (Copy)`,
      slug: `${blog.slug}-copy`,
      published: false,
      content: {
        time: Date.now(),
        blocks: blog.content.blocks
          ? blog.content.blocks
          : [
            {
              id: "1",
              type: "paragraph",
              data: {
                text: "This is a project description",
              },
            },
          ],
        version: "2.30.8",
      },
      tags: blog.tags,
      excerpt: blog.excerpt ? blog.excerpt : "",
      thumbnail: undefined,
      publishedAt: undefined,
      categorySlug: blog.category?.slug,
    };

    createBlog(duplicatedBlog);
    toast.success("Blog post duplicated successfully!");
  };

  const getCategoryName = (categorySlug?: string) => {
    return (
      categories.find((cat) => cat.slug === categorySlug)?.name ||
      "Uncategorized"
    );
  };

  const BlogCard = ({ blog }: { blog: BlogResponse }) => (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <div className="aspect-video overflow-hidden rounded-t-lg relative">
        {blog.thumbnail ? (
          <img
            src={blog.thumbnail.url || "/placeholder.svg"}
            alt={blog.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-muted flex items-center justify-center">
            <FileText className="h-16 w-16 text-muted-foreground" />
          </div>
        )}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <Link to={"/blogs/detail/$slug"} params={{ slug: blog.slug }}>
                <DropdownMenuItem>
                  <Eye className="mr-2 h-4 w-4" />
                  View Post
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem
                onClick={() => {
                  setEditingBlog(blog);
                  setShowBlogForm(true);
                }}
              >
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDuplicateBlog(blog)}>
                <Copy className="mr-2 h-4 w-4" />
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleTogglePublished(blog)}>
                <ExternalLink className="mr-2 h-4 w-4" />
                {blog.published ? "Unpublish" : "Publish"}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleDeleteBlog(blog.id)}
                className="text-red-600"
                disabled={loadingDeleteBlog}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="absolute top-2 left-2">
          <Badge variant={blog.published ? "default" : "secondary"}>
            {blog.published ? "Published" : "Draft"}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1 flex-1">
            <CardTitle className="text-lg line-clamp-2">{blog.title}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {blog.createdAt ? format(new Date(blog.createdAt), "MMM dd, yyyy") : "Unknown Date"}
              <User className="h-4 w-4 ml-2" />
              {blog.author.name}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4 line-clamp-3">
          {blog.excerpt}
        </CardDescription>

        {blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            <Tag className="h-3 w-3 text-muted-foreground mr-1 mt-0.5" />
            {blog.tags.slice(0, 3).map((tag) => (
              <Badge key={tag.name} variant="outline" className="text-xs">
                {tag.name}
              </Badge>
            ))}
            {blog.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{blog.tags.length - 3}
              </Badge>
            )}
          </div>
        )}

        <div className="flex items-center justify-between">
          <Badge variant="secondary">
            {getCategoryName(blog.category?.slug)}
          </Badge>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {blog.updatedAt ? format(new Date(blog.updatedAt), "MMM dd") : "Unknown Date"}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  if (loadingGetAllBlogs) return <p>Loading...</p>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Blog</h1>
          <p className="text-muted-foreground">
            Manage your blog posts and articles
          </p>
        </div>
        <Button onClick={() => setShowBlogForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          New Post
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Posts ({blogs?.length})</TabsTrigger>
          <TabsTrigger value="published">
            Published ({publishedBlogs?.length})
          </TabsTrigger>
          <TabsTrigger value="drafts">
            Drafts ({draftBlogs?.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search blog posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category.slug} value={category.slug}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  value={selectedStatus}
                  onValueChange={setSelectedStatus}
                >
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statuses.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status === "all"
                          ? "All Status"
                          : status.charAt(0).toUpperCase() + status.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Blog Posts Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs?.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {filteredBlogs?.length === 0 && (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  No blog posts found
                </h3>
                <p className="text-muted-foreground text-center mb-4">
                  Try adjusting your search terms or filters
                </p>
                <Button onClick={() => setShowBlogForm(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Post
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="published" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {publishedBlogs?.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="drafts" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {draftBlogs?.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Blog Form Dialog */}
      <BlogForm
        open={showBlogForm}
        onOpenChange={(open) => {
          setShowBlogForm(open);
          if (!open) {
            setEditingBlog(null);
          }
        }}
        blog={editingBlog}
        onSubmit={editingBlog ? handleEditBlog : handleCreateBlog}
        isLoading={editingBlog ? loadingEditBlog : loadingCreateBlog}
      />
    </div>
  );
}
