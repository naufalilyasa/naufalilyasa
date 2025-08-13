import type { GenericResponseType, Project } from "@repo/types/project";

export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/public/projects`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }

    const data: GenericResponseType & { data: Project[] } =
      await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function fetchProjectById(id: string): Promise<Project | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/public/projects/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}
