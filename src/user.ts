export interface LocationState {
  country: string;
  timezone: string;
}

export interface UserActivityState {
  id: string;
  lastLoginAt: Date | string;
  lastActiveAt: Date | string;
  location: LocationState;
  preferredLanguage: string;
  activityStreak?: number;
}

export interface UserActivityUpdatePayload {
  country?: string;
  timezone?: string;
  preferredLanguage?: string;
  isLogin?: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string | null;
  image: string | null;
  publishedPhoto: string | null;
  showProfile: boolean;
  haptic: boolean;
  public_slug: string | null;
  createdAt: number;
  updatedAt: number;
}

export interface UserRow {
  id: string;
  email: string;
  emailVerified: number | null;
  name: string | null;
  image: string | null;
  publishedPhoto: string | null;
  showProfile: number;
  haptic: number;
  public_slug: string | null;
  createdAt: number;
  updatedAt: number;
}
