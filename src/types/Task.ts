import { taskSchema } from "@/schemas/task";

export type TaskInputs = Zod.infer<typeof taskSchema>;
