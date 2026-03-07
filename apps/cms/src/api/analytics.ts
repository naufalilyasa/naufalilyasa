import api from "../lib/axios";
import { GenericResponseType } from "@repo/types/project";

export interface DashboardStats {
    totalProjects: number;
    totalProfileViews: number;
    totalProjectViews: number;
    totalDownloads: number;
    projectViews: {
        id: string;
        title: string;
        slug: string;
        views: number;
    }[];
}

export const getDashboardStatsFn = async () => {
    const response = await api.get<
        {
            data: DashboardStats;
        } & GenericResponseType
    >("/analytics/stats");
    return response.data.data;
};
