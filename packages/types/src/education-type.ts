export interface EducationResponse {
    id: string;
    userId: string;
    institution: string;
    location: string;
    category: "FORMAL" | "INFORMAL";
    degree: string | null;
    fieldOfStudy: string | null;
    startDate: string | Date;
    endDate: string | Date | null;
    description: string | null;
    achievements: string[];
    createdAt: string | Date;
    updatedAt: string | Date;
}
