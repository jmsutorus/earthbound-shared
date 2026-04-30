export interface Habit {
  id: number;
  userId: string;
  title: string;
  description: string | null;
  frequency: string;
  target: number;
  is_infinite: boolean;
  active: boolean;
  completed: boolean;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface HabitCompletion {
  id: number;
  habit_id: number;
  userId: string;
  date: string;
  completed_at: string;
  value: number;
}

export interface HabitStats {
  daysExisted: number;
  currentStreak: number;
  longestStreak: number;
  totalCompletions: number;
}

export interface HabitCompletionChartData {
  habitId: number;
  habitTitle: string;
  weeklyData: {
    week: string;
    weekLabel: string;
    completions: number;
    target: number;
    rate: number;
  }[];
  stats: HabitStats;
}
