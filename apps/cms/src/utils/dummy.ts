import {
  CategoryProject,
  GenericResponseType,
  Project,
  ProjectDetail,
  ProjectDetailBlock,
  ProjectTechnology,
  ProjectThumbnailType,
  Technologies,
} from "@repo/types/project";

export const defaultProjectDetailBlock: ProjectDetailBlock = {
  time: Date.now(),
  blocks: [],
  version: "2.29.0", // default Editor.js version
};

export const defaultProjectThumbnail: ProjectThumbnailType = {
  id: "",
  projectId: "",
  url: "",
  publicId: "",
  createdAt: "",
  updatedAt: "",
};

export const defaultTechnology: Technologies = {
  id: "",
  name: "",
  iconUrl: "",
};

export const defaultProjectTechnology: ProjectTechnology = {
  id: "",
  projectId: "",
  technologyId: "",
  technology: defaultTechnology,
};

export const defaultProjectDetail: ProjectDetail = {
  id: "",
  projectId: "",
  content: defaultProjectDetailBlock,
  createdAt: "",
  updatedAt: "",
};

export const defaultProject: Project = {
  id: "",
  userId: "",
  title: "",
  description: "",
  startDate: null,
  endDate: null,
  githubUrl: "",
  liveUrl: "",
  featured: false,
  category: "FULLSTACK" as CategoryProject,
  createdAt: "",
  updatedAt: "",
  thumbnail: undefined,
  projectDetail: [],
  technologies: [],
};

export const defaultResponse: GenericResponseType = {
  statusCode: 200,
  status: "success",
  message: "",
};
