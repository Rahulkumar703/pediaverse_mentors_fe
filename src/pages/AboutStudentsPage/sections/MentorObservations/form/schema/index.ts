import { z } from "zod"

export const observationFormSchema = z.object({
    title: z.string().min(2, { message: "Title is required" }),
    description: z.string().min(1, { message: "Description is required" }),
});
