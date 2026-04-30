export interface MoodEntry {
  id: number;
  userId: string;
  date: string; // YYYY-MM-DD format
  rating: number; // 1-5
  note: string | null;
  created_at: string;
  updated_at: string;
}
