/**
 * Location and activity state types
 */
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

/**
 * Database representation of a GitHub event
 */
export interface DBGithubEvent {
  id: string;
  userId: string;
  type: string;
  actor_login: string;
  actor_avatar_url: string | null;
  repo_id: number;
  repo_name: string;
  payload: string | null;
  public: boolean;
  created_at: string;
  synced_at: string;
}

/**
 * Database representation of GitHub sync status
 */
export interface DBGithubSyncStatus {
  id: number;
  userId: string;
  last_sync: string | null;
  last_sync_events_count: number;
  created_at: string;
  updated_at: string;
}
