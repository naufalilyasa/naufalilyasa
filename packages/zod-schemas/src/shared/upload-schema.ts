import { z } from "zod";

export const paramsUploadSchema = z.object({
  id: z.string().min(1, "ID is required."),
});
