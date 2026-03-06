import { z } from "zod";
import { baseEducationSchema } from "../shared/education-schema.js";

export const educationFormSchema = baseEducationSchema;

export type EducationFormDTO = z.infer<typeof educationFormSchema>;
