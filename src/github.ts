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

export interface DBGithubSyncStatus {
  id: number;
  userId: string;
  last_sync: string | null;
  last_sync_events_count: number;
  created_at: string;
  updated_at: string;
}

export interface GithubEvent {
  id: string;
  type: string;
  actor: {
    id: number;
    login: string;
    display_login?: string;
    gravatar_id?: string;
    url?: string;
    avatar_url: string;
  };
  repo: {
    id: number;
    name: string;
    url?: string;
  };
  payload: unknown;
  public: boolean;
  created_at: string;
}
