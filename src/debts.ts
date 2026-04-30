export type DebtCategory = 'mortgage' | 'car' | 'student_loan' | 'credit_card' | 'personal' | 'medical' | 'other';

export interface Debt {
  id: number;
  userId: string;
  name: string;
  category: DebtCategory;
  original_amount: number;
  current_balance: number;
  interest_rate: number;
  monthly_payment: number;
  extra_payment: number;
  start_date: string | null;
  currency: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface DebtPayment {
  id: number;
  debtId: number;
  userId: string;
  amount: number;
  date: string;
  notes: string | null;
  created_at: string;
}

export interface DebtWithPayments extends Debt {
  payments: DebtPayment[];
  totalPaid: number;
  percentPaid: number;
  projectedPayoffMonths: number | null;
}


export interface CreateDebtInput {
  name: string;
  category?: DebtCategory;
  original_amount: number;
  current_balance: number;
  interest_rate?: number;
  monthly_payment: number;
  extra_payment?: number;
  start_date?: string;
  currency?: string;
  notes?: string;
}

export interface UpdateDebtInput {
  name?: string;
  category?: DebtCategory;
  original_amount?: number;
  current_balance?: number;
  interest_rate?: number;
  monthly_payment?: number;
  extra_payment?: number;
  start_date?: string;
  currency?: string;
  notes?: string;
}

export interface CreatePaymentInput {
  debtId: number;
  amount: number;
  date: string;
  notes?: string;
}

// ==================== DB Row Types ====================

export interface DBDebt {
  id: number;
  userId: string;
  name: string;
  category: string;
  original_amount: number;
  current_balance: number;
  interest_rate: number;
  monthly_payment: number;
  extra_payment: number;
  start_date: string | null;
  currency: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface DBDebtPayment {
  id: number;
  debtId: number;
  userId: string;
  amount: number;
  date: string;
  notes: string | null;
  created_at: string;
}
