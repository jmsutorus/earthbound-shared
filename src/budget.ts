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

// ==================== Financial Profile ====================

export type FinancialGoal =
  | 'build_savings'
  | 'pay_off_debt'
  | 'emergency_fund'
  | 'retirement'
  | 'staying_on_top';

export interface FinancialProfile {
  id: number;
  userId: string;
  primary_goal: FinancialGoal | null;
  health_rating: number | null; // 1-5
  financial_values: string[];
  emergency_fund_months: number | null;
  has_existing_debt: boolean;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface UpsertFinancialProfileInput {
  primary_goal?: FinancialGoal | null;
  health_rating?: number | null;
  financial_values?: string[];
  emergency_fund_months?: number | null;
  has_existing_debt?: boolean;
  notes?: string | null;
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
