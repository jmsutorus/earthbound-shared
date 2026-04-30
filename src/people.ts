export type RelationshipCategory = 'family' | 'friends' | 'work' | 'other';

export interface Person {
  id: number;
  userId: string;
  name: string;
  birthday: string; // YYYY-MM-DD or 0000-MM-DD
  relationship: RelationshipCategory;
  photo: string | null;
  email: string | null;
  phone: string | null;
  notes: string | null;
  gift_ideas: string | null;
  anniversary: string | null;
  relationship_type_id: number | null;
  relationshipTypeName?: string | null;
  is_partner: boolean;
  slug: string;
  address: string | null;
  created_at: string;
  updated_at: string;
}

export interface PersonWithAge extends Person {
  age: number | null;
  nextBirthday: string;
  daysUntilBirthday: number;
}

export interface PersonWithAnniversary extends Person {
  yearsTogether: number | null;
  nextAnniversary: string;
  daysUntilAnniversary: number;
}

export interface RelationshipType {
  id: number;
  userId: string;
  name: string;
  created_at: string;
}
