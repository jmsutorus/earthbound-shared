export interface EventNotification {
  type: string;
  time: number;
  timeObject: string;
}

export interface EventCategory {
  id: number;
  userId: string;
  name: string;
  created_at: string;
}

export interface Event {
  id: number;
  userId: string;
  slug: string;
  title: string;
  description: string | null;
  location: string | null;
  date: string; // YYYY-MM-DD
  start_time: string | null; // HH:MM
  end_time: string | null; // HH:MM
  all_day: boolean;
  end_date: string | null; // YYYY-MM-DD
  category: string | null;
  notifications: EventNotification[];
  notification_setting: string | null;
  content: string | null;
  created_at: string;
  updated_at: string;
}

export interface CreateEventInput {
  slug: string;
  title: string;
  description?: string;
  location?: string;
  date: string;
  start_time?: string;
  end_time?: string;
  all_day?: boolean;
  end_date?: string;
  category?: string;
  notifications?: EventNotification[];
  notification_setting?: string;
  content?: string;
}

export interface EventPhoto {
  id: number;
  eventId: number;
  url: string;
  caption: string | null;
  date_taken: string | null; // YYYY-MM-DD
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface EventPerson {
  id: number;
  eventId: number;
  personId: number;
  name: string;
  photo: string | null;
  relationship: 'family' | 'friends' | 'work' | 'other';
  relationshipTypeName?: string | null;
  created_at: string;
}

export interface EventWithDetails {
  event: Event;
  photos: EventPhoto[];
  people: EventPerson[];
}

export interface EventWithCoverPhoto extends Event {
  cover_photo: string | null;
}

export interface TimelineEvent extends EventWithCoverPhoto {
  people: EventPerson[];
}
