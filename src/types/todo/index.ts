import { z } from "zod";

export const TodoSchema = z.object({
    id: z.number(),
    title: z.string(),
    content: z.string(),
    status: z.enum(["Todo, In Progress, Done"]),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true })
})