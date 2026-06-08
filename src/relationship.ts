export interface RelationshipDate {
  id: number;
  userId: string;
  date: string; // YYYY-MM-DD
  time: string | null;
  type: string;
  location: string | null;
  venue: string | null;
  rating: number | null;
  cost: number | null;
  photos: string | null; // JSON array
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface IntimacyEntry {
  id: number;
  userId: string;
  date: string; // YYYY-MM-DD
  time: string | null;
  duration: number | null;
  satisfaction_rating: number | null;
  initiation: string | null;
  type: string | null;
  location: string | null;
  mood_before: string | null;
  mood_after: string | null;
  positions: string | null; // JSON array
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface RelationshipMilestone {
  id: number;
  userId: string;
  title: string;
  date: string; // YYYY-MM-DD
  category: string;
  description: string | null;
  photos: string | null; // JSON array
  created_at: string;
  updated_at: string;
}

export interface RelationshipPosition {
  id: number;
  userId: string;
  name: string;
  is_default: boolean;
  created_at: string;
}

export interface RelationshipStats {
  totalDates: number;
  totalIntimacy: number;
  totalMilestones: number;
  avgDateRating: number;
  avgSatisfaction: number;
  dateFrequency: { month: string; count: number }[];
  intimacyFrequency: { month: string; count: number }[];
}

export interface RelationshipProfile {
  id: number;
  userId: string;
  partner_id: number | null;
  start_date: string | null; // YYYY-MM-DD
  health_rating: number | null; // 1-5
  love_languages: string[];
  goals: string[];
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface UpsertRelationshipProfileInput {
  partner_id?: number | null;
  start_date?: string | null;
  health_rating?: number | null;
  love_languages?: string[];
  goals?: string[];
  notes?: string | null;
}
