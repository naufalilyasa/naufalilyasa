import { NextFunction, Request, Response } from "express";
import { prisma } from "../prisma/prisma.js";

export const getDashboardStatsHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = res.locals.user;
        if (!user) throw new Error("User not found in context");
        const userId = user.id;

        // 1. Total Projects
        const totalProjects = await prisma.project.count({
            where: { userId }
        });

        // 2. Total Profile Views
        const totalProfileViews = await prisma.profileView.count({
            where: { userId }
        });

        // 3. Project Views Breakdown
        const projectViews = await prisma.project.findMany({
            where: { userId },
            select: {
                id: true,
                title: true,
                slug: true,
                _count: {
                    select: { views: true }
                }
            }
        });

        const totalProjectViews = projectViews.reduce((acc, p) => acc + p._count.views, 0);

        // 4. Resume Downloads (Unique IP counts per User)
        // Using group by for unique IPs if needed, but per request "downloads per ip" 
        // usually means total download events, but for "total downloads" stat it's better to show unique or total.
        // Let's show total downloads first.
        const totalDownloads = await prisma.resumeDownload.count({
            where: { userId }
        });

        res.status(200).json({
            statusCode: 200,
            status: "success",
            message: "Successfully retrieved dashboard stats",
            data: {
                totalProjects,
                totalProfileViews,
                totalProjectViews,
                totalDownloads,
                projectViews: projectViews.map(p => ({
                    id: p.id,
                    title: p.title,
                    slug: p.slug,
                    views: p._count.views
                }))
            },
        });
    } catch (error) {
        next(error);
    }
};
