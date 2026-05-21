export type Sport =
  | 'soccer'
  | 'formula_1'
  | 'basketball'
  | 'football'
  | 'baseball'
  | 'hockey'
  | 'tennis'
  | 'golf'
  | 'rugby'
  | 'cricket'
  | 'cycling'
  | 'other';

export type SportsEntityType = 'team' | 'individual';

export type SportsResultOutcome = 'win' | 'loss' | 'draw' | 'dnf' | 'other';

export type HomeAwayNeutral = 'home' | 'away' | 'neutral';

export interface SportsEntity {
  id: number;
  userId: string;
  slug: string;
  name: string;
  entity_type: SportsEntityType;
  sport: Sport;
  league: string | null;
  country: string | null;
  city: string | null;
  logo_url: string | null;
  content: string | null;
  favorite: boolean;
  featured: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface SportsEntityWithStats extends SportsEntity {
  wins: number;
  losses: number;
  draws: number;
  totalResults: number;
  lastResultDate: string | null;
}

export interface SportsResult {
  id: number;
  userId: string;
  entity_id: number;
  result_date: string;
  season: string | null;
  competition: string | null;
  opponent: string | null;
  score_for: number | null;
  score_against: number | null;
  position: number | null;
  result: SportsResultOutcome;
  home_away: HomeAwayNeutral | null;
  attended: boolean;
  event_id: number | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface SportsResultWithEvent extends SportsResult {
  eventTitle?: string | null;
  eventSlug?: string | null;
}

export interface SportsEntityWithResults extends SportsEntityWithStats {
  results: SportsResultWithEvent[];
}
