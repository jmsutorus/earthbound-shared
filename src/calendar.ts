export interface CalendarColor {
  id?: number;
  userId: string;
  category: string;
  bg_color: string;
  text_color: string;
  created_at?: string;
  updated_at?: string;
}

export interface CalendarColorUpdate {
  bg_color: string;
  text_color: string;
}
