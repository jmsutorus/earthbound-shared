// ============================================================
// Materials — inventory of supplies the user owns, so they
// don't overbuy or run out. Each material can be linked to the
// creations that use it (see MaterialUsage). Lives as a tab
// inside the Creations feature.
// ============================================================

/** Derived stock state — never stored, computed from quantity vs threshold. */
export type MaterialStockStatus = "in_stock" | "low" | "out";

export interface MaterialContent {
  id: number;
  userId: string;
  slug: string;
  name: string;
  /** Free-text category — no enum constraint (Paint, Filament, Wood…) */
  type: string | null;
  /** Brand / who made it (e.g. "Liquitex", "Prusament") */
  maker: string | null;
  description: string | null;
  /** URL of the hero / featured image (Firebase Storage) */
  featured_photo: string | null;
  rating: number | null; // 0–10
  /** How much is on hand */
  quantity: number | null;
  /** Unit of measure (spools, g, sheets, ml…) */
  unit: string | null;
  /** Reorder point — stock status is derived from quantity vs this */
  low_stock_threshold: number | null;
  /** Price per unit */
  cost: number | null;
  currency: string | null;
  /** Where to buy / reorder link */
  purchase_url: string | null;
  /** Store / vendor name */
  supplier: string | null;
  /** Model / product code */
  sku: string | null;
  /** Color / finish / size */
  variant: string | null;
  /** Where the material physically lives (e.g. "Garage bin 3") */
  storage_location: string | null;
  notes: string | null;
  /** JSON array of tag strings */
  tags: string | null;
  /** Whether to show on the public profile showcase */
  featured: number; // 0 or 1
  /** Whether visible publicly */
  published: number; // 0 or 1
  created_at: string;
  updated_at: string;
}

export interface MaterialInput {
  name: string;
  type?: string | null;
  maker?: string | null;
  description?: string | null;
  featured_photo?: string | null;
  rating?: number | null;
  quantity?: number | null;
  unit?: string | null;
  low_stock_threshold?: number | null;
  cost?: number | null;
  currency?: string | null;
  purchase_url?: string | null;
  supplier?: string | null;
  sku?: string | null;
  variant?: string | null;
  storage_location?: string | null;
  notes?: string | null;
  tags?: string[];
  featured?: boolean;
  published?: boolean;
}

/** A link from a material to a creation that uses it (material → creations). */
export interface MaterialUsage {
  id: number;
  userId: string;
  materialId: number;
  creationId: number;
  /** How this material is used in the creation */
  description: string | null;
  /** Optional amount consumed by the creation */
  quantity_used: number | null;
  created_at: string;
  /** Joined from the creations table */
  creationTitle: string;
  creationSlug: string;
  creationFeaturedPhoto: string | null;
}

export interface MaterialUsageInput {
  creationId: number;
  description?: string | null;
  quantity_used?: number | null;
}

/** A link from a creation back to a material it uses (creation → materials, reverse view). */
export interface CreationMaterialLink {
  id: number;
  userId: string;
  materialId: number;
  creationId: number;
  description: string | null;
  quantity_used: number | null;
  created_at: string;
  /** Joined from the materials table */
  materialName: string;
  materialSlug: string;
  materialFeaturedPhoto: string | null;
}

export interface PaginatedMaterialsResult {
  items: MaterialContent[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

/**
 * Derive a material's stock status from its quantity and low-stock threshold.
 * Shared so the UI and stats stay in agreement.
 * - `out`      when a quantity is tracked and has dropped to 0 or below
 * - `low`      when a quantity is tracked and is at/below the threshold
 * - `in_stock` otherwise (including when no quantity is tracked)
 */
export function getMaterialStockStatus(
  quantity: number | null | undefined,
  lowStockThreshold: number | null | undefined
): MaterialStockStatus {
  if (quantity === null || quantity === undefined) return "in_stock";
  if (quantity <= 0) return "out";
  if (
    lowStockThreshold !== null &&
    lowStockThreshold !== undefined &&
    quantity <= lowStockThreshold
  ) {
    return "low";
  }
  return "in_stock";
}
