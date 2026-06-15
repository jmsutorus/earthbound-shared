export type CityStatus = 'visited' | 'want_to_visit' | 'lived';

export type CityVisitLinkItemType =
  | 'park'
  | 'event'
  | 'sports_result'
  | 'restaurant_visit'
  | 'drink_log';

export type CityVisitLinkMode = 'pin' | 'hide';

export interface City {
  id: number;
  userId: string;
  slug: string;
  name: string;
  region: string | null;
  country: string | null;
  country_code: string | null;
  continent: string | null;
  latitude: number | null;
  longitude: number | null;
  status: CityStatus;
  notes: string | null;
  image_url: string | null;
  favorite: boolean;
  featured: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface CityVisit {
  id: number;
  userId: string;
  cityId: number;
  start_date: string; // YYYY-MM-DD
  end_date: string | null; // YYYY-MM-DD, null = single day
  vacationId: number | null;
  title: string | null;
  notes: string | null;
  rating: number | null; // 1-10
  created_at: string;
}

export interface CityVisitPerson {
  id: number;
  userId: string;
  cityVisitId: number;
  personId: number;
  name: string;
  photo: string | null;
  relationship: string | null;
  created_at: string;
}

export interface CityVisitLink {
  id: number;
  userId: string;
  cityVisitId: number;
  item_type: CityVisitLinkItemType;
  item_id: number;
  mode: CityVisitLinkMode;
  created_at: string;
}

/** A single related item surfaced for a visit (auto-suggested or pinned). */
export interface CityVisitRelatedItem {
  item_type: CityVisitLinkItemType;
  item_id: number;
  title: string;
  slug: string | null;
  date: string | null;
  poster: string | null;
  pinned: boolean; // true if manually pinned, false if auto-suggested by date overlap
}

export interface CityVisitWithDetails extends CityVisit {
  people: CityVisitPerson[];
  relatedItems: CityVisitRelatedItem[];
}

export interface CityWithVisits extends City {
  visits: CityVisit[];
  visitCount: number;
  lastVisitDate: string | null;
}

export interface CityPassportStats {
  cityCount: number;
  countryCount: number;
  continentCount: number;
}

export interface CreateCityInput {
  slug: string;
  name: string;
  region?: string;
  country?: string;
  country_code?: string;
  continent?: string;
  latitude?: number;
  longitude?: number;
  status?: CityStatus;
  notes?: string;
  image_url?: string;
  favorite?: boolean;
  featured?: boolean;
  published?: boolean;
}

export interface UpdateCityInput {
  slug?: string;
  name?: string;
  region?: string;
  country?: string;
  country_code?: string;
  continent?: string;
  latitude?: number;
  longitude?: number;
  status?: CityStatus;
  notes?: string;
  image_url?: string;
  favorite?: boolean;
  featured?: boolean;
  published?: boolean;
}

export interface CreateCityVisitInput {
  cityId: number;
  start_date: string;
  end_date?: string;
  vacationId?: number;
  title?: string;
  notes?: string;
  rating?: number;
}

export interface UpdateCityVisitInput {
  start_date?: string;
  end_date?: string;
  vacationId?: number | null;
  title?: string;
  notes?: string;
  rating?: number;
}

// ==================== DB Row Types ====================

export interface DBCity {
  id: number;
  userId: string;
  slug: string;
  name: string;
  region: string | null;
  country: string | null;
  country_code: string | null;
  continent: string | null;
  latitude: number | null;
  longitude: number | null;
  status: string;
  notes: string | null;
  image_url: string | null;
  favorite: number;
  featured: number;
  published: number;
  created_at: string;
  updated_at: string;
}

export interface DBCityVisit {
  id: number;
  userId: string;
  cityId: number;
  start_date: string;
  end_date: string | null;
  vacationId: number | null;
  title: string | null;
  notes: string | null;
  rating: number | null;
  created_at: string;
}
