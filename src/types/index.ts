
export interface User {
  id: string;
  email?: string;
  phone?: string;
  full_name?: string;
  username?: string;
  avatar_url?: string;
  referral_code: string;
  referred_by?: string;
  created_at: string;
  updated_at: string;
}

export interface Wallet {
  id: string;
  user_id: string;
  real_money_balance: number;
  coin_balance: number;
  created_at: string;
  updated_at: string;
}

export type TransactionType = 
  | 'deposit'
  | 'withdrawal'
  | 'win'
  | 'loss'
  | 'bonus'
  | 'referral_bonus'
  | 'coin_purchase'
  | 'coin_conversion';

export type TransactionStatus = 'pending' | 'completed' | 'failed' | 'cancelled';

export interface Transaction {
  id: string;
  user_id: string;
  type: TransactionType;
  status: TransactionStatus;
  amount: number;
  currency: string;
  coins_amount?: number;
  description?: string;
  payment_method?: string;
  external_transaction_id?: string;
  metadata?: any;
  created_at: string;
  updated_at: string;
}

export type BonusType = 'welcome' | 'daily_login' | 'achievement' | 'promotional' | 'referral';

export interface Bonus {
  id: string;
  user_id: string;
  type: BonusType;
  amount: number;
  currency: string;
  description?: string;
  claimed_at?: string;
  expires_at?: string;
  is_claimed: boolean;
  created_at: string;
}

export interface Referral {
  id: string;
  referrer_id: string;
  referred_id: string;
  level: number;
  bonus_earned: number;
  created_at: string;
}

export interface GameSession {
  id: string;
  user_id: string;
  game_type: string;
  bet_amount: number;
  win_amount: number;
  result: 'win' | 'loss' | 'draw';
  session_data?: any;
  started_at: string;
  ended_at?: string;
}
