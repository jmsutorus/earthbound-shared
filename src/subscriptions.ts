export type SubscriptionCycle = 'weekly' | 'monthly' | 'quarterly' | 'yearly';

export interface Subscription {
  id: number;
  userId: string;
  name: string;
  website: string | null;
  icon_url: string | null;
  price: number;
  cycle: SubscriptionCycle;
  currency: string;
  active: boolean;
  category: string | null;
  billing_day: number | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface SubscriptionTotals {
  currency: string;
  monthly: number;
  yearly: number;
  count: number;
}
