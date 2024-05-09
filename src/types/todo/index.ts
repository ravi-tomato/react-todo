import { z } from "zod";

export const TodoSchema = z.object({
    id: z.number(),
    title: z.string(),
    content: z.string(),
    status: z.union([z.literal("Todo"), z.literal("In Progress"), z.literal("Done")]),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true })
})

export interface Todo extends z.infer<typeof TodoSchema> {}