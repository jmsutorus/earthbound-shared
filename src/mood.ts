export interface MoodEntry {
  id: number;
  userId: string;
  date: string; // YYYY-MM-DD format
  rating: number; // 1-5
  note: string | null;
  sick: boolean | null;
  wake_up_time: string | null;
  bed_time: string | null;
  sleep_score: number | null;
  created_at: string;
  updated_at: string;
}
