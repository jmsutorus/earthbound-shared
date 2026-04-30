export type SavingsAccountType = 'savings' | 'checking' | 'money_market' | 'cd' | 'investment' | 'other';

export interface SavingsAccount {
  id: number;
  userId: string;
  name: string;
  institution: string | null;
  account_type: SavingsAccountType;
  currency: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface SavingsBalance {
  id: number;
  accountId: number;
  userId: string;
  balance: number;
  date: string;
  created_at: string;
}

export interface SavingsAccountWithBalance extends SavingsAccount {
  currentBalance: number | null;
  balances: SavingsBalance[];
}
