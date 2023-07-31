import { HistoryType } from '@/types/history';

export const historyTypeOptions = [
  { label: 'Add', value: HistoryType.Increment },
  {
    label: 'Subtract',
    value: HistoryType.Decrement,
  },
];

export const historyTypeFullOptions = [
  { label: 'All', value: HistoryType.All },
  { label: 'Add', value: HistoryType.Increment },
  {
    label: 'Subtract',
    value: HistoryType.Decrement,
  },
];
