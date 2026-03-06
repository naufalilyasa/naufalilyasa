import { Technologies } from "./project-type.js";

export type NotableProject = {
    name: string;
    description: string;
    impact: string;
};

export type ExperienceResponse = {
    id: string;
    userId: string;
    companyName: string;
    logoUrl: string | null;
    position: string;
    location: string;
    type: string;
    startDate: Date;
    endDate: Date | null;
    description: string;
    achievements: string[];
    notableProjects: NotableProject[] | null;
    technologies: { technology: Technologies }[];
    createdAt: Date;
    updatedAt: Date;
};
