import { GenericResponseType, Technologies } from "@repo/types/project";

export async function fetchTechnologies(): Promise<Technologies[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/public/technologies`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }

    const data: GenericResponseType & { data: Technologies[] } =
      await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}
