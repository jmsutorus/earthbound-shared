export interface QuickLinkCategory {
  id: number;
  userId: string;
  name: string;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface QuickLink {
  id: number;
  userId: string;
  category_id: number;
  title: string;
  url: string;
  icon: string;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface QuickLinkCategoryWithLinks extends QuickLinkCategory {
  links: QuickLink[];
}
