import { OutputData } from "@editorjs/editorjs";

export type GenericResponseType = {
  statusCode: number;
  status: string;
  message: string;
};

export type Project = {
  id: string;
  userId: string;
  slug: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date | undefined;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  category: CategoryProject;
  createdAt: Date;
  updatedAt: Date;
  thumbnail?: ProjectThumbnailType;
  projectDetail: ProjectDetail[];
  technologies: ProjectTechnology[];
};

export enum CategoryProject {
  FULLSTACK = "FULLSTACK",
  FRONTEND = "FRONTEND",
  BACKEND = "BACKEND",
  MOBILE = "MOBILE",
  DESKTOP = "DESKTOP",
  AIML = "AIML",
  DEVOPS = "DEVOPS",
}

export type ProjectThumbnailType = {
  id: string;
  projectId: string;
  url: string;
  publicId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ProjectTechnology = {
  id: string;
  projectId: string;
  technologyId: string;
  technology: Technologies;
};

export type ProjectDetail = {
  id: string;
  projectId: string;
  content: ProjectDetailBlock;
  createdAt: Date;
  updatedAt: Date;
};

export type ProjectDetailBlock = OutputData;

export type ProjectThumbnail = {
  id: string;
  url: string;
};

export type Technologies = {
  id: string;
  code?: string;
  name: string;
  iconUrl: string;
  category: CategoryTech;
  categoryLabel?: string;
};

export enum CategoryTech {
  PROGRAMMING_LANGUAGE = "PROGRAMMING_LANGUAGE",
  FRONTEND_DEV = "FRONTEND_DEV",
  STYLING = "STYLING",
  BACKEND_DEV = "BACKEND_DEV",
  DATABASE = "DATABASE",
  ORM_ODM = "ORM_ODM",
  CLOUD_PLATFORM = "CLOUD_PLATFORM",
  DEVOPS_TOOL = "DEVOPS_TOOL",
  DESIGN_UI_UX = "DESIGN_UI_UX",
  MULTIMEDIA_PRODUCTION = "MULTIMEDIA_PRODUCTION",
  OPERATING_SYSTEM = "OPERATING_SYSTEM",
  DEVELOPER_TOOL = "DEVELOPER_TOOL",
  MOBILE_DEV = "MOBILE_DEV",
  DESKTOP_DEV = "DESKTOP_DEV",
  AI_MACHINE_LEARNING = "AI_MACHINE_LEARNING",
  DATA_SCIENCE = "DATA_SCIENCE",
  GAME_DEV = "GAME_DEV",
  GRAPHICS_ART = "GRAPHICS_ART",
  COMMUNICATION_COLLABORATION = "COMMUNICATION_COLLABORATION",
  TESTING_QA = "TESTING_QA",
  BLOCKCHAIN_WEB3 = "BLOCKCHAIN_WEB3",
  OTHER_UNCATEGORIZED = "OTHER_UNCATEGORIZED",
}
