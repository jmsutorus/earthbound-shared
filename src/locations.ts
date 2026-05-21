export type LocationCategory =
  | 'home'
  | 'work'
  | 'gym'
  | 'restaurant'
  | 'venue'
  | 'family'
  | 'friend'
  | 'other';

export interface Location {
  id: number;
  userId: string;
  slug: string;
  name: string;
  address: string;
  category: LocationCategory;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface CreateLocationInput {
  name: string;
  address: string;
  category?: LocationCategory;
  notes?: string;
}

export interface UpdateLocationInput {
  name?: string;
  address?: string;
  category?: LocationCategory;
  notes?: string;
}
