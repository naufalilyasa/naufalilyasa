import { GenericResponseType } from "@repo/types/project";
import { ProfileResponse } from "@repo/types/user";

export async function fetchUser(): Promise<ProfileResponse | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/public/user`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }

    const data: {
      data: ProfileResponse;
    } & GenericResponseType = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return undefined;
  }
}
