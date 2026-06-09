export interface Relationship {
  id: number;
  userId: string;
  partner_id: number | null;
  partner_name: string | null;
  started_at: string; // YYYY-MM-DD
  ended_at: string | null; // YYYY-MM-DD
  created_at: string;
}

export interface RelationshipDate {
  id: number;
  userId: string;
  relationship_id: number | null;
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
  relationship_id: number | null;
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
  relationship_id: number | null;
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
  active_relationship_id: number | null;
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

export interface RelationshipHealthLog {
  id: number;
  userId: string;
  relationship_id: number | null;
  date: string; // YYYY-MM-DD — the day this check-in represents
  rating: number; // 1-5
  notes: string | null;
  created_at: string;
}

export interface RelationshipStatusLog {
  id: number;
  userId: string;
  date: string; // YYYY-MM-DD
  status: "started" | "ended";
  partner_name: string | null; // name snapshot at time of event
  partner_id: number | null;
  notes: string | null;
  created_at: string;
}

export interface RelationshipArchive {
  relationship: Relationship;
  dates: RelationshipDate[];
  milestones: RelationshipMilestone[];
  intimacyCount: number;
  intimacyAvgRating: number | null;
}

export interface ConnectionCheckin {
  id: number;
  userId: string;
  relationship_id: number | null;
  date: string; // YYYY-MM-DD
  communication_rating: number; // 1-5
  intimacy_rating: number; // 1-5
  support_rating: number; // 1-5
  time_rating: number; // 1-5
  prompt_question: string | null;
  prompt_answer: string | null;
  notes: string | null;
  created_at: string;
}
