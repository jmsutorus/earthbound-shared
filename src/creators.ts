export interface CreationContent {
  id: number;
  userId: string;
  slug: string;
  title: string;
  /** Free-text category — no enum constraint */
  type: string | null;
  description: string | null;
  /** Markdown long-form notes / retrospective */
  notes: string | null;
  rating: number | null; // 0–10
  status: "in-progress" | "completed" | "idea" | "abandoned" | null;
  /** URL of the hero / featured image (Firebase Storage) */
  featured_photo: string | null;
  /** JSON array of tag strings */
  tags: string | null;
  /** Whether to show on the public profile showcase */
  featured: number; // 0 or 1
  /** Whether visible publicly */
  published: number; // 0 or 1
  started_date: string | null; // YYYY-MM-DD
  completed_date: string | null; // YYYY-MM-DD
  /** Link to the creation if it lives online */
  url: string | null;
  created_at: string;
  updated_at: string;
}

export interface CreationInput {
  slug: string;
  title: string;
  type?: string | null;
  description?: string | null;
  notes?: string | null;
  rating?: number | null;
  status?: "in-progress" | "completed" | "idea" | "abandoned";
  featured_photo?: string | null;
  tags?: string[];
  featured?: boolean;
  published?: boolean;
  started_date?: string | null;
  completed_date?: string | null;
  url?: string | null;
}

export interface CreationPhoto {
  id: number;
  creationId: number;
  url: string;
  caption: string | null;
  date_taken: string | null; // YYYY-MM-DD
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface CreationCollaborator {
  id: number;
  creationId: number;
  personId: number;
  userId: string;
  role: string | null;
  /** Joined from the people table */
  name: string;
  photo: string | null;
  relationship: string | null;
  created_at: string;
}

export interface PaginatedCreationsResult {
  items: CreationContent[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
