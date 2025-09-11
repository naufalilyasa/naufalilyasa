import {
  CategoryProject,
  CategoryTech,
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
  blocks: [
    {
      id: "1",
      type: "paragraph",
      data: {
        text: "Start writing your project post...",
      },
    },
  ],

  version: "2.30.8",
};

export const defaultProjectThumbnail: ProjectThumbnailType = {
  id: "",
  projectId: "",
  url: "",
  publicId: "",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const defaultTechnology: Technologies = {
  id: "",
  name: "",
  iconUrl: "",
  category: CategoryTech.AI,
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
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const defaultProject: Project = {
  id: "",
  userId: "",
  title: "",
  description: "",
  startDate: new Date(),
  endDate: new Date(),
  githubUrl: "",
  liveUrl: "",
  featured: false,
  category: "FULLSTACK" as CategoryProject,
  createdAt: new Date(),
  updatedAt: new Date(),
  thumbnail: undefined,
  projectDetail: [],
  technologies: [],
};

export const defaultResponse: GenericResponseType = {
  statusCode: 200,
  status: "success",
  message: "",
};

export const categories: {
  name: string;
  slug: string;
}[] = [
  {
    name: "Technology",
    slug: "technology",
  },
  {
    name: "Programming",
    slug: "programming",
  },
  {
    name: "Web Development",
    slug: "web-development",
  },
  {
    name: "Mobile Development",
    slug: "mobile-development",
  },
  {
    name: "DevOps",
    slug: "devops",
  },
  {
    name: "Career",
    slug: "career",
  },
];
