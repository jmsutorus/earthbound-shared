export type VacationStatus = 'planning' | 'booked' | 'in-progress' | 'completed' | 'cancelled';
export type VacationType = 'beach' | 'ski' | 'cruise' | 'road-trip' | 'city' | 'camping' | 'adventure' | 'cultural' | 'theme-park' | 'festival' | 'business' | 'staycation' | 'other';
export type BookingType = 'flight' | 'hotel' | 'activity' | 'car' | 'train' | 'other';
export type BookingStatus = 'pending' | 'confirmed' | 'cancelled';

export const VACATION_STATUSES: VacationStatus[] = ['planning', 'booked', 'in-progress', 'completed', 'cancelled'];
export const VACATION_TYPES: VacationType[] = ['beach', 'ski', 'cruise', 'road-trip', 'city', 'camping', 'adventure', 'cultural', 'theme-park', 'festival', 'business', 'staycation', 'other'];
export const BOOKING_TYPES: BookingType[] = ['flight', 'hotel', 'activity', 'car', 'train', 'other'];
export const BOOKING_STATUSES: BookingStatus[] = ['pending', 'confirmed', 'cancelled'];

export interface Vacation {
  id: number;
  userId: string;
  slug: string;
  title: string;
  destination: string;
  type: VacationType;
  start_date: string; // YYYY-MM-DD
  end_date: string;   // YYYY-MM-DD
  description: string | null;
  poster: string | null;
  status: VacationStatus;
  budget_planned: number | null;
  budget_actual: number | null;
  budget_currency: string;
  tags: string[];
  rating: number | null;
  featured: boolean;
  published: boolean;
  content: string | null;
  created_at: string;
  updated_at: string;
}

export interface VacationInput {
  slug: string;
  title: string;
  destination: string;
  type?: VacationType;
  start_date: string;
  end_date: string;
  description?: string;
  poster?: string;
  status?: VacationStatus;
  budget_planned?: number;
  budget_actual?: number;
  budget_currency?: string;
  tags?: string[];
  rating?: number;
  featured?: boolean;
  published?: boolean;
  content?: string;
}

export interface ItineraryDay {
  id: number;
  vacationId: number;
  date: string; // YYYY-MM-DD
  day_number: number;
  title: string | null;
  location: string | null;
  activities: string[];
  notes: string | null;
  photo: string | null;
  budget_planned: number | null;
  budget_actual: number | null;
  notification_setting: string | null;
  created_at: string;
  updated_at: string;
}

export interface ItineraryDayInput {
  date: string;
  day_number: number;
  title?: string;
  location?: string;
  activities?: string[];
  notes?: string;
  photo?: string;
  budget_planned?: number;
  budget_actual?: number;
  notification_setting?: string;
}

export interface Booking {
  id: number;
  vacationId: number;
  type: BookingType;
  title: string;
  date: string | null;
  start_time: string | null;
  end_time: string | null;
  confirmation_number: string | null;
  provider: string | null;
  location: string | null;
  cost: number | null;
  status: BookingStatus;
  notes: string | null;
  url: string | null;
  notification_setting: string | null;
  origin: string | null;
  destination: string | null;
  created_at: string;
  updated_at: string;
}

export interface BookingInput {
  type: BookingType;
  title: string;
  date?: string;
  start_time?: string;
  end_time?: string;
  confirmation_number?: string;
  provider?: string;
  location?: string;
  cost?: number;
  status?: BookingStatus;
  notes?: string;
  url?: string;
  notification_setting?: string;
  origin?: string;
  destination?: string;
}

export interface VacationPhoto {
  id: number;
  vacationId: number;
  url: string;
  caption: string | null;
  date_taken: string | null; // YYYY-MM-DD
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface VacationPhotoInput {
  url: string;
  caption?: string;
  date_taken?: string;
  order_index?: number;
}

export interface VacationPerson {
  id: number;
  vacationId: number;
  personId: number;
  name: string;
  photo: string | null;
  relationship: 'family' | 'friends' | 'work' | 'other';
  relationshipTypeName?: string | null;
  created_at: string;
}

export interface VacationWithDetails {
  vacation: Vacation;
  itinerary: ItineraryDay[];
  bookings: Booking[];
  photos: VacationPhoto[];
  people: VacationPerson[];
}
