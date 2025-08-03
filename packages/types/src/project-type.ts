export type GenericResponseType = {
  statusCode: number;
  status: string;
  message: string;
};

export type Project = {
  id: string;
  userId: string;
  title: string;
  description: string;
  startDate: string | null;
  endDate: string | null;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  category: CategoryProject;
  createdAt: string;
  updatedAt: string;
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
  createdAt: string;
  updatedAt: string;
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
  createdAt: string;
  updatedAt: string;
};

export type ProjectDetailBlock = {
  time: number;
  blocks: any[];
  version: string;
};

export type ProjectThumbnail = {
  id: string;
  url: string;
  publicId: string;
};

export type Technologies = {
  id: string;
  name: string;
  iconUrl: string;
};
