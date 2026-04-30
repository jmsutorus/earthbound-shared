export const PREDEFINED_TASK_STATUSES = [
  'active',
  'in_progress',
  'blocked',
  'on_hold',
  'cancelled',
  'completed'
] as const;

export type PredefinedTaskStatus = typeof PREDEFINED_TASK_STATUSES[number];
export type TaskStatus = PredefinedTaskStatus | string;

export type TaskPriority = "low" | "medium" | "high";

export interface Task {
  id: number;
  title: string;
  description: string | null;
  completed: boolean;
  completed_date: string | null;
  due_date: string | null;
  priority: TaskPriority;
  category: string | null;
  status: TaskStatus;
  userId: string | null;
  notification_setting: string | null;
  created_at: string;
  updated_at: string;
}

export interface TaskFilter {
  completed?: boolean;
  status?: TaskStatus | TaskStatus[];
  priority?: TaskPriority;
  category?: string;
  search?: string;
}

export interface TaskCategory {
  id: number;
  userId: string;
  name: string;
  created_at: string;
}

export interface TaskStatusRecord {
  id: number;
  userId: string;
  name: string;
  color: string | null;
  created_at: string;
  updated_at: string;
}

export type VelocityPeriod = "day" | "week" | "month";

export interface TaskVelocityDataPoint {
  label: string;
  startDate: string;
  endDate: string;
  planned: number;
  completed: number;
  completionRate: number;
}

export interface TaskVelocityStats {
  avgCompleted: number;
  avgPlanned: number;
  totalCompleted: number;
  totalPlanned: number;
  trend: number;
  bestPeriod: string;
  bestPeriodCount: number;
}

export interface TaskVelocityData {
  dataPoints: TaskVelocityDataPoint[];
  stats: TaskVelocityStats;
  period: VelocityPeriod;
}
