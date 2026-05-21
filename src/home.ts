export type HomeScheduleType = 'interval' | 'specific_date';
export type HomeNotificationTiming = 'week_before' | 'day_before' | 'day_of';

export interface HomeEntry {
  id: number;
  userId: string;
  slug: string;
  name: string;
  category: string;
  location: string | null;
  notes: string | null;
  image_url: string | null;
  has_schedule: boolean;
  schedule_type: HomeScheduleType | null;
  interval_days: number | null;
  next_due: string | null;             // YYYY-MM-DD
  last_completed: string | null;       // YYYY-MM-DD
  notification_enabled: boolean;
  notification_timing: HomeNotificationTiming | null;
  created_at: string;
  updated_at: string;
}

export interface HomeEntryLog {
  id: number;
  entry_id: number;
  userId: string;
  completed_at: string; // YYYY-MM-DD
  notes: string | null;
  created_at: string;
}

export interface CreateHomeEntryInput {
  name: string;
  category: string;
  location?: string | null;
  notes?: string | null;
  has_schedule?: boolean;
  schedule_type?: HomeScheduleType | null;
  interval_days?: number | null;
  next_due?: string | null;
  notification_enabled?: boolean;
  notification_timing?: HomeNotificationTiming | null;
}

export interface UpdateHomeEntryInput {
  name?: string;
  category?: string;
  location?: string | null;
  notes?: string | null;
  image_url?: string | null;
  has_schedule?: boolean;
  schedule_type?: HomeScheduleType | null;
  interval_days?: number | null;
  next_due?: string | null;
  notification_enabled?: boolean;
  notification_timing?: HomeNotificationTiming | null;
}
