export interface MediaContent {
  id: number;
  userId: string;
  slug: string;
  title: string;
  type: "movie" | "tv" | "book" | "game" | "album";
  status: "in-progress" | "completed" | "planned";
  rating: number | null;
  started: string | null; // YYYY-MM-DD
  completed: string | null; // YYYY-MM-DD
  released: string | null; // YYYY-MM-DD
  genres: string | null; // JSON array
  poster: string | null;
  tags: string | null; // JSON array
  description: string | null;
  length: string | null;
  creator: string | null; // JSON array
  featured: boolean;
  published: boolean;
  time_spent: number;
  content?: string;
  progress: number;
  achievement_percentage: number | null; // Games only: 0-100, null = not tracking
  created_at: string;
  updated_at: string;
}

export interface MediaPerson {
  id: number;
  mediaId: number;
  personId: number;
  name: string;
  photo: string | null;
  relationship: 'family' | 'friends' | 'work' | 'other';
  relationshipTypeName?: string | null;
  created_at: string;
}

export interface MediaContentInput {
  slug: string;
  title: string;
  type: "movie" | "tv" | "book" | "game" | "album";
  status: "in-progress" | "completed" | "planned";
  rating?: number;
  started?: string;
  completed?: string;
  released?: string;
  genres?: string[];
  poster?: string;
  tags?: string[];
  description?: string;
  length?: string;
  creator?: string[];
  featured?: boolean;
  published?: boolean;
  timeSpent?: number;
  content: string;
  progress?: number;
  achievementPercentage?: number | null; // Games only: 0-100, null = not tracking
}

export interface PaginatedMediaResult {
  items: MediaContent[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export type TimelinePeriod = "week" | "month" | "year";

export interface MediaTimelineItem {
  id: number;
  title: string;
  type: "movie" | "tv" | "book" | "game" | "album";
  rating: number | null;
  completed: string;
  poster: string | null;
}

export interface MediaTimelineDataPoint {
  label: string;
  startDate: string;
  endDate: string;
  count: number;
  movies: number;
  tv: number;
  books: number;
  games: number;
  items: MediaTimelineItem[];
  avgRating: number | null;
}

export interface MediaTimelineStats {
  totalCompleted: number;
  avgPerPeriod: number;
  mostActiveMonth: string;
  mostActiveMonthCount: number;
  avgRating: number;
  topType: string;
  trend: number;
}

export interface MediaTimelineData {
  dataPoints: MediaTimelineDataPoint[];
  stats: MediaTimelineStats;
  period: TimelinePeriod;
}

export interface MediaRankingType {
  id: number;
  mediaId: number;
  name: string;
  description: string | null;
  created_at: string;
}

export interface MediaRankingTypeInput {
  name: string;
  description?: string;
}

export interface MediaRankingHistory {
  id: number;
  typeId: number;
  season_tag: string | null;
  tier: string | null;
  numeric_value: number | null;
  date_achieved: string;
  notes: string | null;
  created_at: string;
}

export interface MediaRankingHistoryInput {
  season_tag?: string;
  tier?: string;
  numeric_value?: number;
  date_achieved: string;
  notes?: string;
}

export interface MediaRankingsResponse {
  types: (MediaRankingType & {
    latestHistory: MediaRankingHistory | null;
  })[];
}
