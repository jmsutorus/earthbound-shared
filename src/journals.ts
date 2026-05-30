export interface DBJournal {
  id: number;
  userId: string;
  slug: string;
  title: string;
  journal_type: "daily" | "general";
  daily_date: string | null; // YYYY-MM-DD
  mood: number | null;
  tags: string | null; // JSON string
  featured: number; // SQLite boolean (0 or 1)
  published: number; // SQLite boolean (0 or 1)
  content: string;
  image_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface JournalContent {
  id: number;
  userId: string;
  slug: string;
  title: string;
  journal_type: "daily" | "general";
  daily_date: string | null; // YYYY-MM-DD
  mood: number | null;
  tags: string[];
  featured: boolean;
  published: boolean;
  content: string;
  image_url: string | null;
  created_at: string;
  updated_at: string;
}

export type JournalLinkType =
  | "media"
  | "park"
  | "journal"
  | "activity"
  | "person"
  | "event"
  | "habit"
  | "task"
  | "vacation"
  | "goal"
  | "creator"
  | "restaurant";

export interface JournalLink {
  id: number;
  journal_id: number;
  linked_type: JournalLinkType;
  linked_id: number;
  linked_slug: string | null;
  created_at: string;
}

export interface InlineLink {
  type: string;
  slug: string;
  label: string;
}

export interface DBJournalLink {
  id: number;
  journal_id: number;
  linked_type: string;
  linked_id: number;
  linked_slug: string | null;
  created_at: string;
}
