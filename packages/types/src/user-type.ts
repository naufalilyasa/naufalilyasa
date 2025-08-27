import { Technologies } from "./project-type.js";

export type ProfileResponse = {
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
  userTechnologies: { technology: Technologies }[];
};

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}
