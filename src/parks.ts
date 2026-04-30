export enum DBParkCategory {
  NationalPark = 'National Park',
  StatePark = 'State Park',
  Wilderness = 'Wilderness',
  Monument = 'Monument',
  RecreationArea = 'Recreation Area',
  CityPark = 'City Park',
  NationalSeashore = 'National Seashore',
  NationalForest = 'National Forest',
  Other = 'Other'
}

export type ParkCategoryValue = `${DBParkCategory}`;

export interface DBPark {
  id: number;
  userId: string;
  slug: string;
  title: string;
  category: ParkCategoryValue;
  state: string | null;
  poster: string | null;
  description: string | null;
  visited: string | null; // YYYY-MM-DD
  tags: string | null; // JSON string
  rating: number | null;
  featured: number; // 0 or 1
  published: number; // 0 or 1
  content: string;
  quote: string | null;
  created_at: string;
  updated_at: string;
}

export interface ParkContent {
  id: number;
  userId: string;
  slug: string;
  title: string;
  category: ParkCategoryValue;
  state: string | null;
  poster: string | null;
  description: string | null;
  visited: string | null;
  tags: string[];
  rating: number | null;
  featured: boolean;
  published: boolean;
  content: string;
  quote: string | null;
  created_at: string;
  updated_at: string;
}

export interface ParkPerson {
  id: number;
  parkId: number;
  personId: number;
  name: string;
  photo: string | null;
  relationship: 'family' | 'friends' | 'work' | 'other';
  relationshipTypeName?: string | null;
  created_at: string;
}

export interface ParkPhoto {
  id: number;
  parkId: number;
  url: string;
  caption: string | null;
  date_taken: string | null;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface ParkTrail {
  id: number;
  parkId: number;
  name: string;
  distance: number | null;
  elevation_gain: number | null;
  difficulty: string | null;
  rating: number | null;
  date_hiked: string | null;
  notes: string | null;
  alltrails_url: string | null;
  photo_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface DBPark {
  id: number;
  userId: string;
  slug: string;
  title: string;
  category: ParkCategoryValue;
  state: string | null;
  poster: string | null;
  description: string | null;
  visited: string | null; // YYYY-MM-DD
  tags: string | null; // JSON string
  rating: number | null;
  featured: number; // SQLite boolean (0 or 1)
  published: number; // SQLite boolean (0 or 1)
  content: string;
  quote: string | null;
  created_at: string;
  updated_at: string;
}