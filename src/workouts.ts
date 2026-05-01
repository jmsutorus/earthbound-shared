export interface Exercise {
  name: string;
  sets?: number;
  reps?: string;
  weight?: string;
  duration?: string;
  distance?: string;
  notes?: string;
}

export interface WorkoutActivity {
  id: number;
  userId: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  length: number; // Total duration in minutes
  distance?: number | null; // Distance in miles
  difficulty: "easy" | "moderate" | "hard" | "very hard";
  type: "run" | "cardio" | "strength" | "flexibility" | "sports" | "mixed" | "other" | "swim" | "yoga" | "pilates";
  exercises: Exercise[];
  notes?: string | null;
  completed: boolean;
  completed_at?: string | null;
  completion_notes?: string | null;
  featured: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
  pace?: number | null;
}

export interface CreateWorkoutActivity {
  date: string;
  time: string;
  length: number;
  distance?: number;
  difficulty: "easy" | "moderate" | "hard" | "very hard";
  type: "run" | "cardio" | "strength" | "flexibility" | "sports" | "mixed" | "other";
  exercises: Exercise[];
  notes?: string;
  completed?: boolean;
  completed_at?: string | null;
  featured?: boolean;
  published?: boolean;
}

export interface WorkoutActivityStats {
  total_activities: number;
  completed_activities: number;
  completion_rate: number;
  total_duration: number;
  total_distance: number;
  avg_duration: number;
  by_type: {
    type: string;
    count: number;
    total_duration: number;
  }[];
  by_difficulty: {
    difficulty: string;
    count: number;
  }[];
}

export interface WorkoutGoal {
  id: number;
  userId: string;
  goal: string;
  met: boolean;
  created_at: string;
  updated_at: string;
}

export interface WorkoutPlan {
  id: number;
  user_id: string;
  name: string;
  description?: string | null;
  exercises?: string | null; // JSON string
  duration: number;
  intensity: "low" | "medium" | "high";
  type: "cardio" | "strength" | "flexibility" | "sports" | "other";
  created_at: string;
  updated_at: string;
}

export interface ScheduledWorkout {
  id: number;
  user_id: string;
  workout_plan_id?: number | null;
  calendar_event_id?: string | null;
  scheduled_date: string; // YYYY-MM-DD
  scheduled_time: string; // HH:MM
  duration: number;
  reminder_minutes: number;
  completed: boolean;
  completed_at?: string | null;
  notes?: string | null;
  created_at: string;
  updated_at: string;
}
