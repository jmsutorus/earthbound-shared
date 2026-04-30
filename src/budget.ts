export type FixedCostCategory =
  | 'housing' | 'utilities' | 'groceries' | 'transportation'
  | 'insurance' | 'healthcare' | 'childcare' | 'phone'
  | 'internet' | 'other';

export interface BudgetIncome {
  id: number;
  userId: string;
  amount: number;
  currency: string;
  label: string;
  effective_date: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface BudgetFixedCost {
  id: number;
  userId: string;
  name: string;
  category: FixedCostCategory;
  amount: number;
  currency: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
}


export interface CreateIncomeInput {
  amount: number;
  currency?: string;
  label?: string;
  effective_date: string;
  notes?: string;
}

export interface UpdateIncomeInput {
  amount?: number;
  currency?: string;
  label?: string;
  effective_date?: string;
  notes?: string;
}

export interface CreateFixedCostInput {
  name: string;
  category?: FixedCostCategory;
  amount: number;
  currency?: string;
  notes?: string;
}

export interface UpdateFixedCostInput {
  name?: string;
  category?: FixedCostCategory;
  amount?: number;
  currency?: string;
  notes?: string;
}

// ==================== DB Row Types ====================

export interface DBBudgetIncome {
  id: number;
  userId: string;
  amount: number;
  currency: string;
  label: string;
  effective_date: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface DBBudgetFixedCost {
  id: number;
  userId: string;
  name: string;
  category: string;
  amount: number;
  currency: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
}
