export type DrinkType = 'beer' | 'wine' | 'cocktail' | 'spirit' | 'other' | 'coffee' | 'tea';
export type DrinkStatus = 'tasted' | 'want_to_try' | 'stocked';

export interface Drink {
  id: number;
  userId: string;
  slug: string;
  name: string;
  type: DrinkType | null;
  producer: string | null;
  year: number | null;
  abv: number | null;
  rating: number | null; // 1-10
  notes: string | null;
  image_url: string | null;
  favorite: boolean;
  status: DrinkStatus;
  body_feel: string | null;
  serving_temp: string | null;
  pairings: string | null;
  created_at: string;
  updated_at: string;
}

export interface DrinkLog {
  id: number;
  userId: string;
  drinkId: number;
  date: string; // YYYY-MM-DD
  location: string | null;
  notes: string | null;
  rating: number | null; // 1-10
  created_at: string;
}

export interface DrinkWithLogs extends Drink {
  logs: DrinkLog[];
  logCount: number;
}


export interface CreateDrinkInput {
  slug: string;
  name: string;
  type?: DrinkType;
  producer?: string;
  year?: number;
  abv?: number;
  rating?: number;
  notes?: string;
  image_url?: string;
  favorite?: boolean;
  status?: DrinkStatus;
  body_feel?: string;
  serving_temp?: string;
  pairings?: string;
}

export interface UpdateDrinkInput {
  slug?: string;
  name?: string;
  type?: DrinkType;
  producer?: string;
  year?: number;
  abv?: number;
  rating?: number;
  notes?: string;
  image_url?: string;
  favorite?: boolean;
  status?: DrinkStatus;
  body_feel?: string;
  serving_temp?: string;
  pairings?: string;
}

export interface CreateDrinkLogInput {
  drinkId: number;
  date: string;
  location?: string;
  notes?: string;
  rating?: number;
}

// ==================== DB Row Types ====================

export interface DBDrink {
  id: number;
  userId: string;
  slug: string;
  name: string;
  type: string | null;
  producer: string | null;
  year: number | null;
  abv: number | null;
  rating: number | null;
  notes: string | null;
  image_url: string | null;
  favorite: number;
  status: string;
  body_feel: string | null;
  serving_temp: string | null;
  pairings: string | null;
  created_at: string;
  updated_at: string;
}

export interface DBDrinkLog {
  id: number;
  userId: string;
  drinkId: number;
  date: string;
  location: string | null;
  notes: string | null;
  rating: number | null;
  created_at: string;
}