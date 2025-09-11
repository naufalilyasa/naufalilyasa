import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@repo/ui/components/dialog";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Textarea } from "@repo/ui/components/textarea";
import { Badge } from "@repo/ui/components/badge";
import { Switch } from "@repo/ui/components/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@repo/ui/components/form";
import {
  X,
  Save,
  Loader2,
  Upload,
  Link2,
  FileText,
  ImageIcon,
} from "lucide-react";
import { BlogFormDTO, blogFormSchema } from "@repo/zod-schemas";
import { BlogResponse } from "@repo/types";
import { categories } from "../../../utils/dummy";

interface BlogFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  blog?: BlogResponse | null;
  onSubmit: (payload: { blogId?: string; data: BlogFormDTO }) => void;
  isLoading?: boolean;
}

export function BlogForm({
  open,
  onOpenChange,
  blog,
  onSubmit,
  isLoading = false,
}: BlogFormProps) {
  const [selectedTags, setSelectedTags] = useState<
    Array<{ id?: string; name: string }>
  >(blog?.tags || []);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(
    blog?.thumbnail?.url || null
  );

  const form = useForm<BlogFormDTO>({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: blog?.title ?? "",
      slug: blog?.slug ?? "",
      excerpt: blog?.excerpt ?? "",
      content: blog?.content ?? {
        time: Date.now(),
        blocks: [
          {
            id: "1",
            type: "paragraph",
            data: { text: "Start writing your blog post..." },
          },
        ],
        version: "2.30.8",
      },
      categorySlug: blog?.category?.slug ?? undefined,
      tags: blog?.tags ?? [],
      thumbnail: undefined,
      published: blog?.published ?? false,
    },
  });

  const watchTitle = form.watch("title");

  // Auto-generate slug from title
  useEffect(() => {
    if (watchTitle && !blog) {
      // Only auto-generate for new blogs
      const slug = watchTitle
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
      form.setValue("slug", slug);
    }
  }, [watchTitle, form, blog]);

  const handleSubmit = ({
    blogId,
    data,
  }: {
    blogId?: string;
    data: BlogFormDTO;
  }) => {
    onSubmit({
      data: { ...data, tags: selectedTags },
      blogId,
    });
  };

  const addTag = (tagName: string) => {
    if (tagName && !selectedTags.some((tag) => tag.name === tagName)) {
      const newTag = { name: tagName };
      const newTags = [...selectedTags, newTag];
      setSelectedTags(newTags);
      form.setValue("tags", newTags);
    }
  };

  const removeTag = (tagToRemove: { id?: string; name: string }) => {
    const newTags = selectedTags.filter((tag) => {
      // If both have IDs, compare by ID
      if (tag.id && tagToRemove.id) {
        return tag.id !== tagToRemove.id;
      }
      // Otherwise, compare by name
      return tag.name !== tagToRemove.name;
    });
    setSelectedTags(newTags);
    form.setValue("tags", newTags);
  };

  const handleClose = () => {
    form.reset();
    setSelectedTags([]);
    setThumbnailPreview(null);
    onOpenChange(false);
  };

  const handleThumbnailUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const url = e.target?.result as string;
        setThumbnailPreview(url);
        // In a real app, you would upload to your storage service here
        form.setValue("thumbnail", file);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (blog) {
      form.setValue("title", blog.title);
      form.setValue("excerpt", blog.excerpt ?? undefined);
      form.setValue("published", blog.published);
      form.setValue("categorySlug", blog.category?.slug);
      form.setValue("slug", blog.slug);
      setSelectedTags(blog.tags);
      setThumbnailPreview(blog.thumbnail?.url ?? null);
    }
  }, [blog, form]);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            {blog ? "Edit Blog Post" : "Create New Blog Post"}
          </DialogTitle>
          <DialogDescription>
            {blog
              ? "Update your blog post information"
              : "Create a new blog post for your audience"}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) =>
              handleSubmit({ blogId: blog?.id, data })
            )}
            className="space-y-6"
          >
            {/* Title and Slug */}
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title *</FormLabel>
                    <FormControl>
                      <Input placeholder="My Awesome Blog Post" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug *</FormLabel>
                    <FormControl>
                      <div className="flex gap-2">
                        <Input placeholder="my-awesome-blog-post" {...field} />
                        <Link2 className="h-4 w-4 mt-3 text-muted-foreground" />
                      </div>
                    </FormControl>
                    <FormDescription>
                      URL-friendly version of the title
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Excerpt */}
            <FormField
              control={form.control}
              name="excerpt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Excerpt *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="A brief summary of your blog post that will appear in previews..."
                      className="min-h-[80px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {field.value?.length || 0}/500 characters
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Category and Published */}
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="categorySlug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="defaultCategoryId">
                          No Category
                        </SelectItem>{" "}
                        {/* Updated value prop to be a non-empty string */}
                        {categories.map((category) => (
                          <SelectItem key={category.slug} value={category.slug}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="published"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Published</FormLabel>
                      <FormDescription>
                        Make this blog post visible to the public
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Tags */}
            <div className="space-y-3">
              <FormField
                control={form.control}
                name="tags"
                render={() => (
                  <FormItem>
                    <FormLabel>Tags</FormLabel>
                    <FormControl>
                      <div className="space-y-3">
                        <Input
                          placeholder="Type a tag and press Enter to add..."
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              const value = e.currentTarget.value.trim();
                              if (
                                value &&
                                !selectedTags.some((tag) => tag.name === value)
                              ) {
                                addTag(value);
                                e.currentTarget.value = "";
                              }
                            }
                          }}
                        />
                      </div>
                    </FormControl>
                    <FormDescription>
                      Type a tag name and press Enter to add it
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Selected Tags Display */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Selected Tags</label>
                  {selectedTags.length > 0 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSelectedTags([]);
                        form.setValue("tags", []);
                      }}
                      className="h-auto p-1 text-xs text-muted-foreground hover:text-red-500"
                    >
                      Clear all
                    </Button>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 min-h-[40px] p-3 border rounded-md bg-muted/20">
                  {selectedTags.length > 0 ? (
                    selectedTags.map((tag) => (
                      <Badge
                        key={tag.name}
                        variant="secondary"
                        className="flex items-center gap-1 px-2 py-1 bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        <span className="text-xs font-medium">{tag.name}</span>
                        <button onClick={() => removeTag(tag)}>
                          <X className="h-3 w-3 cursor-pointer hover:text-red-500 transition-colors" />
                        </button>
                      </Badge>
                    ))
                  ) : (
                    <div className="flex items-center justify-center w-full h-full">
                      <span className="text-sm text-muted-foreground">
                        No tags added. Type a tag name above and press Enter to
                        add.
                      </span>
                    </div>
                  )}
                </div>

                {selectedTags.length > 0 && (
                  <div className="text-xs text-muted-foreground">
                    {selectedTags.length} tag
                    {selectedTags.length === 1 ? "" : "s"} added
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnail Upload */}
            <FormField
              control={form.control}
              name="thumbnail"
              render={() => (
                <FormItem>
                  <FormLabel>Thumbnail Image</FormLabel>
                  <FormControl>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Button type="button" variant="outline" asChild>
                          <label className="cursor-pointer">
                            <Upload className="h-4 w-4 mr-2" />
                            Upload Thumbnail
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={handleThumbnailUpload}
                            />
                          </label>
                        </Button>
                        {thumbnailPreview && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setThumbnailPreview(null);
                              form.setValue("thumbnail", undefined);
                            }}
                            className="text-red-500 hover:text-red-700"
                          >
                            Remove
                          </Button>
                        )}
                      </div>

                      {thumbnailPreview && (
                        <div className="relative w-full max-w-md">
                          <img
                            src={thumbnailPreview || "/placeholder.svg"}
                            alt="Thumbnail preview"
                            className="w-full h-48 object-cover rounded-lg border"
                          />
                          <div className="absolute top-2 right-2">
                            <Badge
                              variant="secondary"
                              className="bg-black/50 text-white"
                            >
                              <ImageIcon className="h-3 w-3 mr-1" />{" "}
                              {/* Updated Image to ImageIcon */}
                              Preview
                            </Badge>
                          </div>
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormDescription>
                    Upload a thumbnail image for your blog post (optional)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {blog ? "Updating..." : "Creating..."}
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    {blog ? "Update Post" : "Create Post"}
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
