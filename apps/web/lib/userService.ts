import { GenericResponseType } from "@repo/types/project";
import { ProfileResponse } from "@repo/types/user";

export async function fetchUser(): Promise<ProfileResponse | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/public/user`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch user profile");
    }

    const data: {
      data: ProfileResponse;
    } & GenericResponseType = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return undefined;
  }
}
