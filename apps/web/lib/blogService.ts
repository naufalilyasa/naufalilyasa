import type { GenericResponseType, BlogResponse } from "@repo/types";

export async function fetchBlogs(): Promise<BlogResponse[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/public/blogs`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const data: GenericResponseType & { data: BlogResponse[] } =
      await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export async function fetchBlogBySlug(
  slug: string
): Promise<BlogResponse | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/public/blogs/${slug}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}
