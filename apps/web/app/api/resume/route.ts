import { NextRequest, NextResponse } from "next/server";
import { fetchUser } from "@/lib/userService";

export async function GET(request: NextRequest) {
    try {
        const user = await fetchUser();
        const resumeUrl = user?.resume || "https://drive.google.com/file/d/1W77M9c5HOfwUD4q3BCk_PcXex6lEnU8K/view?usp=sharing";

        // Track the download in the backend
        try {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/track-resume-download`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Forwarded-For": request.headers.get("x-forwarded-for") || "",
                    "User-Agent": request.headers.get("user-agent") || "",
                },
            });
        } catch (trackError) {
            console.error("Failed to track resume download:", trackError);
        }

        return NextResponse.redirect(resumeUrl);
    } catch (error) {
        console.error("Resume redirect error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
