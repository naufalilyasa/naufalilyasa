import { Technologies } from "./project-type.js";
import { ExperienceResponse } from "./experience-type.js";
import { EducationResponse } from "./education-type.js";

export type ProfileResponse = {
  id: string;
  name: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
  role: Role;
  description: string | null;
  email: string | null;
  github: string | null;
  linkedin: string | null;
  phoneNumber: string | null;
  photoUrl: string | null;
  website: string | null;
  resume: string | null;
  userTechnologies: { technology: Technologies }[];
  workExperiences: ExperienceResponse[];
  educations: EducationResponse[];
};

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}
