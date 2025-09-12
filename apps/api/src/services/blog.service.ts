import { RequestBlogBackendDTO } from "@repo/zod-schemas";
import { Prisma } from "../generated/prisma/index.js";

import { prisma } from "../prisma/prisma.js";

export const getAllBlogs = async (userId: string) => {
  return await prisma.blogPost.findMany({
    // skip: 0,
    // take: 10,
    where: {
      authorId: userId,
    },
    include: {
      tags: true,
      category: true,
      author: {
        select: {
          name: true,
        },
      },
      thumbnail: {
        omit: {
          publicId: true,
        },
      },
    },

    orderBy: { createdAt: "desc" },
  });
};

export const getBlogById = async (slug: string, userId: string) => {
  return await prisma.blogPost.findFirstOrThrow({
    where: {
      slug,
      AND: {
        authorId: userId,
      },
    },
    include: {
      category: true,
      tags: true,
      author: {
        select: {
          name: true,
        },
      },
      thumbnail: {
        omit: {
          publicId: true,
        },
      },
    },
  });
};

export const createBlog = async (payload: RequestBlogBackendDTO, userId: string) => {
  const {
    title,
    slug,
    excerpt,
    publishedAt,
    tags,
    content,
    published,
    categorySlug,
    thumbnail,
  } = payload;

  const connectTags = (tags as Array<{ id?: string; name?: string }>)
    ?.map((t) => {
      if (t.id) return { id: t.id };
      return undefined;
    })
    .filter(Boolean) as Array<{ id: string }>;

  const connectOrCreateTags = (tags as Array<{ id?: string; name?: string }>)
    ?.filter((t) => !t.id && t.name)
    .map((t) => ({
      where: { name: t.name! },
      create: { name: t.name! },
    }));

  return await prisma.blogPost.create({
    data: {
      title,
      slug,
      excerpt,
      content: content
        ? (content as Prisma.InputJsonValue)
        : {
            time: Date.now(),
            blocks: [
              {
                id: "1",
                type: "paragraph",
                data: {
                  text: "This is example a project description",
                },
              },
            ],
            version: "2.30.8",
          },

      author: { connect: { id: userId } },
      category: categorySlug ? { connect: { slug: categorySlug } } : undefined,
      tags: {
        connect: connectTags && connectTags.length ? connectTags : undefined,
        connectOrCreate:
          connectOrCreateTags && connectOrCreateTags.length
            ? connectOrCreateTags
            : undefined,
      },
      thumbnail: thumbnail
        ? {
            create: {
              url: thumbnail.url,
              publicId: thumbnail.publicId,
            },
          }
        : undefined,
      published: !!published,
      publishedAt: publishedAt ? new Date(publishedAt) : null,
    },
    include: {
      category: true,
      tags: true,
      thumbnail: true,
      author: { select: { id: true, name: true, username: true } },
    },
  });
};

export const updateBlog = async (
  blogId: string,
  payload: RequestBlogBackendDTO,
  userId: string,
) => {
  const {
    slug,
    tags,
    title,
    categorySlug,
    content,
    excerpt,
    published,
    publishedAt,
    thumbnail,
  } = payload;

  const connectTags = (tags as Array<{ id?: string; name?: string }> | undefined)
    ?.map((t) => (t.id ? { id: t.id } : undefined))
    .filter(Boolean) as Array<{ id: string }>;

  const connectOrCreateTags = (tags as Array<{ id?: string; name?: string }> | undefined)
    ?.filter((t) => !t.id && t.name)
    .map((t) => ({
      where: { name: t.name! },
      create: { name: t.name! },
    }));

  return await prisma.blogPost.update({
    where: {
      id: blogId,
      AND: {
        authorId: userId,
      },
    },
    data: {
      title,
      slug,
      excerpt,
      content: content ? (content as Prisma.InputJsonValue) : undefined,
      author: { connect: { id: userId } },
      category: categorySlug ? { connect: { slug: categorySlug } } : undefined,
      tags: tags
        ? {
            set: [],
            connect: connectTags && connectTags.length ? connectTags : undefined,
            connectOrCreate:
              connectOrCreateTags && connectOrCreateTags.length
                ? connectOrCreateTags
                : undefined,
          }
        : undefined,
      published: published !== undefined ? !!published : undefined,
      publishedAt: publishedAt,
      thumbnail: thumbnail
        ? {
            upsert: {
              create: {
                url: thumbnail.url,
                publicId: thumbnail.publicId,
              },
              update: {
                url: thumbnail.url,
                publicId: thumbnail.publicId,
              },
            },
          }
        : undefined,
    },
    include: {
      category: true,
      tags: true,
      thumbnail: true,
      author: { select: { id: true, name: true, username: true } },
    },
  });
};
