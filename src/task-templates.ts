import type { TaskPriority } from "./tasks.ts";

export interface TaskTemplate {
  id: number;
  userId: string;
  name: string;
  title: string;
  priority: TaskPriority;
  category: string | null;
  dueDate: string | null;
  createdAt: string;
  updatedAt: string;
}
