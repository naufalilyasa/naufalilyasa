import { OutputData } from "@editorjs/editorjs";
import { ProfileResponse } from "./user-type";

// response untuk category
export type CategoryResponse = {
  id: string;
  name: string;
  slug: string;
};

// response untuk tag
export type TagResponse = {
  id: string;
  name: string;
};

// response untuk thumbnail
export type BlogThumbnailResponse = {
  id: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
};

// response untuk blog post
export type BlogResponse = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  content: OutputData;
  published: boolean;
  publishedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;

  category?: CategoryResponse | null;
  author: {
    name: string;
  };
  tags: TagResponse[];
  thumbnail?: BlogThumbnailResponse | null;
};

export type BlogCategory = {
  id: string;
  name: string;
  slug: string;
};
