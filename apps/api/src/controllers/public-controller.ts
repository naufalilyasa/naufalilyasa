import { paramsProjectSlugSchema, paramsSlugBlogSchema } from "@repo/zod-schemas";
import config from "../config/config.js";
import { NextFunction, Request, Response } from "express";
import { Prisma } from "../generated/prisma/index.js";
import { ZodError } from "zod";

import { prisma } from "../prisma/prisma.js";
import { AppError } from "../utils/appError.js";
import { getAllBlogs, getBlogById } from "../services/blog.service.js";

import { getCategoryLabels } from "../utils/category.js";

export const getAllTechnologiesHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const technologies = await prisma.technology.findMany({});
    const categoryLabels = getCategoryLabels();

    const result = technologies.map((tech) => ({
      ...tech,
      categoryLabel: categoryLabels[tech.category] || tech.category.replace(/_/g, " ").toLowerCase()
        .replace(/\b\w/g, (c) => c.toUpperCase())
    }));

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully retrieved all technologies",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllPublicProjectsHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const projects = await prisma.project.findMany({
      where: { user: { username: "admin" } },
      orderBy: { createdAt: "desc" },
      include: {
        projectDetail: true,
        technologies: {
          include: {
            technology: true,
          },
        },
        thumbnail: true,
      },
    });

    const categoryLabels = getCategoryLabels();

    const enrichedProjects = projects.map((project) => ({
      ...project,
      technologies: project.technologies.map((tech) => ({
        ...tech,
        technology: {
          ...tech.technology,
          categoryLabel: categoryLabels[tech.technology.category] || tech.technology.category.replace(/_/g, " ").toLowerCase()
            .replace(/\b\w/g, (c) => c.toUpperCase()),
        },
      })),
    }));

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully retrieved all public projects",
      data: enrichedProjects,
    });
  } catch (error) {
    next(error);
  }
};

export const getPublicProjectBySlugHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const parsedParams = paramsProjectSlugSchema.parse(req.params);

    const project = await prisma.project.findFirstOrThrow({
      where: {
        slug: parsedParams.slug,
        user: { username: "admin" },
      },
      include: {
        technologies: {
          include: {
            technology: true,
          },
        },
        projectDetail: true,
        thumbnail: true,
      },
    });

    const categoryLabels = getCategoryLabels();

    const enrichedProject = {
      ...project,
      technologies: project.technologies.map((tech) => ({
        ...tech,
        technology: {
          ...tech.technology,
          categoryLabel: categoryLabels[tech.technology.category] || tech.technology.category.replace(/_/g, " ").toLowerCase()
            .replace(/\b\w/g, (c) => c.toUpperCase()),
        },
      })),
    };

    // Background tracking (no await to avoid slowing down response)
    prisma.projectView.create({
      data: {
        projectId: project.id,
        ip: req.ip || "unknown",
        userAgent: req.headers["user-agent"] as string,
      }
    }).catch(err => console.error("Failed to track project view:", err));

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully retrieved public project",
      data: enrichedProject,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      const formattedErrors = error.issues.map((i) => ({ field: i.path.join("."), message: i.message }));
      return next(new AppError(400, "Validation failed", formattedErrors));
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return next(new AppError(404, "Project not found"));
    }
    next(error);
  }
};

export const getPublicUserProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const profile = await prisma.user.findFirstOrThrow({
      where: {
        username: "admin",
      },
      omit: {
        password: true,
        photoId: true,
      },
      include: {
        userTechnologies: {
          select: {
            technology: true,
          },
        },
        workExperiences: {
          orderBy: {
            startDate: "desc",
          },
          include: {
            technologies: {
              include: {
                technology: true,
              },
            },
          },
        },
        educations: {
          orderBy: {
            startDate: "desc",
          },
        },
      },
    });

    const categoryLabels = getCategoryLabels();

    const enrichedProfile = {
      ...profile,
      userTechnologies: profile.userTechnologies.map((ut) => ({
        ...ut,
        technology: {
          ...ut.technology,
          categoryLabel: categoryLabels[ut.technology.category] || ut.technology.category.replace(/_/g, " ").toLowerCase()
            .replace(/\b\w/g, (c) => c.toUpperCase()),
        },
      })),
      workExperiences: profile.workExperiences.map((exp) => ({
        ...exp,
        technologies: exp.technologies.map((et) => ({
          ...et,
          technology: {
            ...et.technology,
            categoryLabel: categoryLabels[et.technology.category] || et.technology.category.replace(/_/g, " ").toLowerCase()
              .replace(/\b\w/g, (c) => c.toUpperCase()),
          },
        })),
      })),
    };

    // Background tracking (no await to avoid slowing down response)
    prisma.profileView.create({
      data: {
        userId: profile.id,
        ip: req.ip || "unknown",
        userAgent: req.headers["user-agent"] as string,
      }
    }).catch(err => console.error("Failed to track profile view:", err));

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully retrieved public profile",
      data: enrichedProfile,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return next(new AppError(404, "Profile not found"));
    }
    next(error);
  }
};

export const getPublicAllBlogsHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const admin = await prisma.user.findUniqueOrThrow({ where: { username: "admin" } });
    const blogs = await getAllBlogs(admin.id);

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully retrieved all public blogs",
      data: blogs,
    });
  } catch (error) {
    next(error);
  }
};

export const getPublicBlogBySlugHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const parsedParams = paramsSlugBlogSchema.parse(req.params);
    const admin = await prisma.user.findUniqueOrThrow({ where: { username: "admin" } });
    const blog = await getBlogById(parsedParams.slug, admin.id);

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully retrieved public blog",
      data: blog,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      const formattedErrors = error.issues.map((i) => ({ field: i.path.join("."), message: i.message }));
      return next(new AppError(400, "Validation failed", formattedErrors));
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return next(new AppError(404, "Blog not found"));
    }
    next(error);
  }
};

export const trackResumeDownloadHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const admin = await prisma.user.findFirstOrThrow({ where: { username: "admin" } });

    await prisma.resumeDownload.create({
      data: {
        userId: admin.id,
        ip: req.ip || "unknown",
        userAgent: req.headers["user-agent"] as string,
      }
    });

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully tracked resume download",
    });
  } catch (error) {
    next(error);
  }
};
