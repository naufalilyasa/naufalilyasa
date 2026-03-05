import React, { useEffect, useRef } from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Badge } from "@repo/ui/components/badge";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Textarea } from "@repo/ui/components/textarea";
import { Switch } from "@repo/ui/components/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/select";
import {
  Edit,
  Save,
  X,
  ArrowLeft,
  Calendar,
  User,
  Tag,
  Clock,
  Loader2,
  ExternalLink,
  ImageIcon,
  Upload,
} from "lucide-react";
import { format } from "date-fns";
import { BlogResponse } from "@repo/types";
import { BlogFormDTO, blogFormSchema } from "@repo/zod-schemas";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createId } from "@paralleldrive/cuid2";
import { categories } from "../../../utils/dummy";
import { Link } from "@tanstack/react-router";
import { EditorHandle } from "../../Editor";
import edjsHTML from "editorjs-html";
import EditorPreview from "@repo/ui/components/editor-preview";
import EditorBlog from "./EditorBlog";
import { OutputData } from "@editorjs/editorjs";
import { Skeleton } from "@repo/ui/components/skeleton";

interface BlogDetailPageProps {
  blog: BlogResponse | undefined;
  onUpdateBlog: (payload: { blogId?: string; data: BlogFormDTO }) => void;
  isLoading: boolean;
}

function DetailBlog({ blog, onUpdateBlog, isLoading }: BlogDetailPageProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(
    blog?.thumbnail?.url || null
  );
  const [fileThumbnail, setFileThumbnail] = useState<File | undefined>(
    undefined
  );
  const [blogContent, setblogContent] = useState<OutputData>({
    time: Date.now(),
    blocks: [],
    version: "2.30.8",
  });

  const editorRef = useRef<EditorHandle>(null);

  const edjsParser = edjsHTML();
  const htmlBlocks = blog?.content
    ? edjsParser.parse(blog?.content)
    : undefined;

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

  const { watch, setValue } = form;
  // const watchedTitle = watch("title");
  const watchedTags = watch("tags");
  const watchedExcerpt = watch("excerpt");

  // Auto-generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (title: string) => {
    setValue("title", title);
    if (!isEditing) return;
    const slug = generateSlug(title);
    setValue("slug", slug);
  };

  const handleAddTag = () => {
    const trimmedTag = tagInput.trim();
    if (trimmedTag && !watchedTags?.some((tag) => tag.name === trimmedTag)) {
      setValue("tags", [
        ...(watchedTags ?? []),
        { id: createId(), name: trimmedTag },
      ]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string | undefined) => {
    setValue(
      "tags",
      watchedTags?.filter((tag) => tag.name !== tagToRemove)
    );
  };

  const handleThumbnailUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const url = e.target?.result as string;
        setFileThumbnail(file);
        setThumbnailPreview(url);
        setValue("thumbnail", file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveThumbnail = () => {
    setThumbnailPreview(null);
    setValue("thumbnail", undefined);
  };

  const onSubmit = async ({
    blogId,
    data,
  }: {
    blogId?: string;
    data: BlogFormDTO;
  }) => {
    const updatedBlog: BlogFormDTO = {
      ...data,
      content: {
        time: blogContent.time ? blogContent.time : Date.now(),
        blocks: blogContent.blocks ? blogContent.blocks : [],
        version: blogContent.version ? blogContent.version : "2.30.8",
      },
    };
    onUpdateBlog({ data: updatedBlog, blogId });
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    form.reset({
      title: blog?.title,
      slug: blog?.slug,
      excerpt: blog?.excerpt ?? undefined,
      content: blog?.content,
      categorySlug: blog?.category?.slug ?? undefined,
      tags: blog?.tags,
      thumbnail: fileThumbnail,
      published: blog?.published,
    });
    setThumbnailPreview(blog?.thumbnail?.url || null);
    setTagInput("");
    setIsEditing(false);
  };

  const getCategoryName = (categorySlug?: string) => {
    return (
      categories.find((cat) => cat.slug === categorySlug)?.name ||
      "Uncategorized"
    );
  };

  const getContentText = () => {
    return blog?.content?.blocks?.[0]?.data?.text || "";
  };

  const getReadingTime = () => {
    const text = getContentText();
    const wordsPerMinute = 200;
    const wordCount = text.split(" ").length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  useEffect(() => {
    if (blog?.content) {
      setblogContent(blog.content);
    }
  }, [blog?.content?.blocks, blog?.content]);

  return (
    <>
      {blog ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Link to={"/blogs"}>
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog Posts
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              {!isEditing && blog?.published && (
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Live
                </Button>
              )}
              {!isEditing && (
                <Button onClick={() => setIsEditing(true)}>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Post
                </Button>
              )}
            </div>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((data) =>
                onSubmit({ data, blogId: blog?.id })
              )}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-2">
                      {isEditing ? (
                        <FormField
                          control={form.control}
                          name="title"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="text-3xl font-bold border-0 p-0 h-auto focus-visible:ring-0"
                                  placeholder="Blog post title..."
                                  onChange={(e) => {
                                    field.onChange(e);
                                    handleTitleChange(e.target.value);
                                  }}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      ) : (
                        <CardTitle className="text-3xl font-bold">
                          {blog?.title}
                        </CardTitle>
                      )}

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Created:{" "}
                          {blog?.createdAt
                            ? format(new Date(blog.createdAt), "PPP")
                            : "Unknown"}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          Updated:{" "}
                          {blog?.updatedAt
                            ? format(new Date(blog.updatedAt), "PPP")
                            : "Unknown"}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {blog.author.name}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge
                        variant={blog?.published ? "default" : "secondary"}
                      >
                        {blog?.published ? "Published" : "Draft"}
                      </Badge>
                      {isEditing && (
                        <FormField
                          control={form.control}
                          name="published"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-2">
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <FormLabel className="text-sm">
                                Published
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Thumbnail */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Thumbnail</h3>
                    {isEditing ? (
                      <div className="space-y-4">
                        {thumbnailPreview ? (
                          <div className="relative aspect-video overflow-hidden rounded-lg border">
                            <img
                              src={thumbnailPreview || "/placeholder.svg"}
                              alt="Thumbnail preview"
                              className="h-full w-full object-cover"
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="sm"
                              className="absolute top-2 right-2"
                              onClick={handleRemoveThumbnail}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ) : (
                          <div className="aspect-video border-2 border-dashed border-muted-foreground/25 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                              <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground/50 mb-2" />
                              <p className="text-sm text-muted-foreground">
                                No thumbnail uploaded
                              </p>
                            </div>
                          </div>
                        )}
                        <div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleThumbnailUpload}
                            className="hidden"
                            id="thumbnail-upload"
                          />
                          <Button type="button" variant="outline" asChild>
                            <label
                              htmlFor="thumbnail-upload"
                              className="cursor-pointer"
                            >
                              <Upload className="h-4 w-4 mr-2" />
                              Upload Thumbnail
                            </label>
                          </Button>
                        </div>
                      </div>
                    ) : blog?.thumbnail ? (
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <img
                          src={blog.thumbnail.url || "/placeholder.svg"}
                          alt={blog.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video border-2 border-dashed border-muted-foreground/25 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground/50 mb-2" />
                          <p className="text-sm text-muted-foreground">
                            No thumbnail
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Slug */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">URL Slug</h3>
                    {isEditing ? (
                      <FormField
                        control={form.control}
                        name="slug"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input {...field} placeholder="blog-post-slug" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ) : (
                      <div className="p-2 bg-muted/20 rounded text-sm font-mono">
                        /{blog?.slug}
                      </div>
                    )}
                  </div>

                  {/* Excerpt */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Excerpt</h3>
                    {isEditing ? (
                      <FormField
                        control={form.control}
                        name="excerpt"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea
                                {...field}
                                className="min-h-[80px]"
                                placeholder="Brief summary of your blog post..."
                              />
                            </FormControl>
                            <div className="flex justify-between items-center">
                              <FormMessage />
                              <p className="text-xs text-muted-foreground">
                                {watchedExcerpt?.length || 0}/500 characters
                              </p>
                            </div>
                          </FormItem>
                        )}
                      />
                    ) : (
                      <p className="text-muted-foreground">{blog?.excerpt}</p>
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Content</h3>
                    {isEditing ? (
                      <div className="border rounded-md p-4 min-h-[400px] bg-muted/20">
                        {isLoading ? (
                          <Skeleton className="h-[300px] rounded" />
                        ) : (
                          <EditorBlog
                            ref={editorRef}
                            data={blogContent}
                            setData={setblogContent}
                            isLoading={isLoading}
                            isEditing={isEditing}
                          />
                        )}
                      </div>
                    ) : (
                      <div className="prose max-w-none">
                        <div className="p-4 border rounded-lg bg-muted/10">
                          {typeof htmlBlocks === "string" ? (
                            <EditorPreview html={htmlBlocks} />
                          ) : (
                            <p className="whitespace-pre-wrap">
                              No content available
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Category and Reading Time */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Category</h3>
                      {isEditing ? (
                        <FormField
                          control={form.control}
                          name="categorySlug"
                          render={({ field }) => (
                            <FormItem>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a category" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="cat1">
                                    No Category
                                  </SelectItem>
                                  {categories.map((category) => (
                                    <SelectItem
                                      key={category.slug}
                                      value={category.slug}
                                    >
                                      {category.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      ) : (
                        <Badge variant="secondary" className="text-sm">
                          {getCategoryName(blog?.category?.slug)}
                        </Badge>
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Reading Time
                      </h3>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {getReadingTime()} min read
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Tags</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {watchedTags?.map((tag) => (
                        <Badge
                          key={tag.name}
                          variant="outline"
                          className="text-sm"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag.name}
                          {isEditing && (
                            <X
                              className="h-3 w-3 ml-1 cursor-pointer hover:text-red-500"
                              onClick={() => handleRemoveTag(tag?.name)}
                            />
                          )}
                        </Badge>
                      ))}
                      {watchedTags?.length === 0 && (
                        <span className="text-sm text-muted-foreground">
                          No tags added
                        </span>
                      )}
                    </div>
                    {isEditing && (
                      <div className="flex gap-2 max-w-sm">
                        <Input
                          placeholder="Add a tag..."
                          value={tagInput}
                          onChange={(e) => setTagInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              handleAddTag();
                            }
                          }}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleAddTag}
                          disabled={!tagInput.trim()}
                        >
                          Add
                        </Button>
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground mt-1">
                      {watchedTags?.length}/10 tags • Press Enter or click Add
                      to add tags
                    </p>
                  </div>

                  {/* Blog Stats */}
                  <div className="grid gap-4 md:grid-cols-3 pt-4 border-t">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-primary">
                        1,234
                      </div>
                      <div className="text-sm text-muted-foreground">Views</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-primary">89</div>
                      <div className="text-sm text-muted-foreground">Likes</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-primary">23</div>
                      <div className="text-sm text-muted-foreground">
                        Comments
                      </div>
                    </div>
                  </div>

                  {isEditing && (
                    <div className="flex justify-end gap-3 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleCancelEdit}
                        disabled={isLoading}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" disabled={isLoading}>
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          <>
                            <Save className="h-4 w-4 mr-2" />
                            Save Changes
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </form>
          </Form>
        </div>
      ) : (
        <p>Tidak ada blog</p>
      )}
    </>
  );
}

export default DetailBlog;
