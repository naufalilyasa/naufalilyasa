import { z } from "zod";
import { baseEducationSchema } from "../shared/education-schema.js";

export const educationBackendSchema = baseEducationSchema;

export type RequestEducationBackendDTO = z.infer<typeof educationBackendSchema>;
