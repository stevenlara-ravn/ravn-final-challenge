import { PointEstimate, TaskTag } from "@/gql/graphql";
import { z } from "zod";

export const taskSchema = z.object({
  id: z.string().uuid().optional(),
  assigneeId: z.string().uuid(),
  dueDate: z.string().datetime({ message: "Due date must be a valid date" }),
  name: z
    .string()
    .min(1, { message: "Task name is required" })
    .max(100, { message: "Task name must be less than 100 characters" })
    .transform((value) => value.trim()) // Remove leading/trailing spaces
    .refine((value) => !/<[^>]*>/g.test(value), {
      message: "HTML tags are not allowed",
    }),
  pointEstimate: z.nativeEnum(PointEstimate),
  tags: z
    .array(z.nativeEnum(TaskTag))
    .min(1, { message: "At least one tag is required" }),
});
