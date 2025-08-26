import { OutputData } from "@editorjs/editorjs";

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
  publicId: string;
};

export type Technologies = {
  id: string;
  name: string;
  iconUrl: string;
  category: CategoryTech;
};

export enum CategoryTech {
  COMMUNICATION = "COMMUNICATION",
  VERSION_CONTROL = "VERSION_CONTROL",
  TOOLS = "TOOLS",
  WEB_DEV = "WEB_DEV",
  UI_UX = "UI_UX",
  JAVASCRIPT = "JAVASCRIPT",
  JAVA = "JAVA",
  C_CPP = "C_CPP",
  C_SHARP = "C_SHARP",
  LUA = "LUA",
  PYTHON = "PYTHON",
  PHP = "PHP",
  RUBY = "RUBY",
  ZIG = "ZIG",
  RUST = "RUST",
  FORTRAN = "FORTRAN",
  GO = "GO",
  ERLANG_ELIXIR = "ERLANG_ELIXIR",
  APACHE = "APACHE",
  MOBILE_DEV = "MOBILE_DEV",
  DATABASE = "DATABASE",
  DEVOPS = "DEVOPS",
  CLOUD = "CLOUD",
  AI = "AI",
  ANALYTICS = "ANALYTICS",
  TESTING = "TESTING",
  GAME_DEVELOPMENT = "GAME_DEVELOPMENT",
  OPERATING_SYSTEM = "OPERATING_SYSTEM",
  MICROCONTROLLER = "MICROCONTROLLER",
  MQTT_TECHNOLOGIES = "MQTT_TECHNOLOGIES",
  BLOCKCHAIN = "BLOCKCHAIN",
}
