export interface Holiday {
  id: number;
  name: string;
  month: number;
  day: number;
  year: number | null;
  created_at: string;
  updated_at: string;
}
