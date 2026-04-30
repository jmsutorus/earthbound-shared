export type RestaurantStatus = 'visited' | 'want_to_try' | 'closed';

export interface Restaurant {
  id: number;
  userId: string;
  slug: string;
  name: string;
  cuisine: string | null;
  price_range: number | null; // 1-4 ($-$$$$)
  address: string | null;
  city: string | null;
  state: string | null;
  phone: string | null;
  website: string | null;
  poster: string | null;
  rating: number | null; // 1-10
  notes: string | null;
  favorite: boolean;
  status: RestaurantStatus;
  created_at: string;
  updated_at: string;
}

export interface RestaurantVisit {
  id: number;
  userId: string;
  restaurantId: number;
  eventId: number | null;
  visit_date: string; // YYYY-MM-DD
  notes: string | null;
  rating: number | null; // 1-10
  created_at: string;
  eventTitle?: string | null;
  eventSlug?: string | null;
}

export interface RestaurantWithVisits extends Restaurant {
  visits: RestaurantVisit[];
  visitCount: number;
}
