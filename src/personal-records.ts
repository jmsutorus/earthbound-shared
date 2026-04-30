export interface ExerciseSettings {
  userId: string;
  enable_running_prs: boolean;
  enable_weights_prs: boolean;
  created_at: string;
  updated_at: string;
}

export interface PersonalRecord {
  id: number;
  userId: string;
  type: "running" | "weights";
  date: string;
  notes?: string | null;
  // Running fields
  distance?: number | null;
  total_seconds?: number | null;
  // Weights fields
  exercise?: string | null;
  weight?: number | null;
  reps?: number | null;
  created_at: string;
  updated_at: string;
}

export interface CreatePersonalRecord {
  type: "running" | "weights";
  date: string;
  notes?: string;
  distance?: number;
  total_seconds?: number;
  exercise?: string;
  weight?: number;
  reps?: number;
}
