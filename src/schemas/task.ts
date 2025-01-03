import { PointEstimate, TaskTag } from "@/gql/graphql";
import { z } from "zod";

export const taskSchema = z.object({
  assignee: z.string().uuid(),
  dueDate: z.string().datetime({ message: "Due date must be a valid date" }),
  name: z.string().min(1, { message: "Task name is required" }),
  pointEstimate: z.nativeEnum(PointEstimate),
  tags: z.array(z.nativeEnum(TaskTag)),
});
