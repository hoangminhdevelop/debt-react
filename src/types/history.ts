import { TDebt } from './debt';

export enum HistoryType {
  All = 'All',
  Decrement = 'DECREMENT',
  Increment = 'INCREMENT',
}

export interface IHistory {
  id: number;
  reason: string;
  type: HistoryType;
  amount: number;
  createdAt: string;
  debtId: number;
  userId: number;
  debt: TDebt;
}
