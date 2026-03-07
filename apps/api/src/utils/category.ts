import fs from "fs";
import path from "path";

let categoryMap: Record<string, string> | null = null;

export const getCategoryLabels = (): Record<string, string> => {
    if (categoryMap) return categoryMap;

    categoryMap = {};
    const csvPath = path.join(process.cwd(), "data", "category.csv");

    if (fs.existsSync(csvPath)) {
        const content = fs.readFileSync(csvPath, "utf-8");
        const lines = content.split("\n").filter((line) => line.trim() !== "");

        // Skip header
        for (let i = 1; i < lines.length; i++) {
            // Split by comma, but handle quoted strings if needed.
            // E.g., FRONTEND_DEV,"Frontend Development (Frameworks & Libraries)"
            const match = lines[i]?.match(/^([^,]+),"?([^"]+)"?$/);
            if (match) {
                const [, key, label] = match;
                categoryMap[key!.trim()] = label!.trim();
            } else {
                const parts = lines[i]?.split(",");
                if (parts!.length >= 2) {
                    const key = parts![0];
                    const label = parts!.slice(1).join(",").replace(/^"|"$/g, "");
                    categoryMap[key!.trim()] = label!.trim();
                }
            }
        }
    }

    return categoryMap;
};
