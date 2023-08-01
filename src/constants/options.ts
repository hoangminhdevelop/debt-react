import { Order } from '@/types/common';
import { HistoryType } from '@/types/history';

export const ORDER_OPTIONS = [
  {
    label: 'Desc',
    value: Order.Desc,
  },
  {
    label: 'Asc',
    value: Order.Asc,
  },
];

export const HISTORY_TYPE_OPTIONS = [
  { label: 'Add', value: HistoryType.Increment },
  {
    label: 'Subtract',
    value: HistoryType.Decrement,
  },
];

export const HISTORY_TYPE_ALL_OPTIONS = [
  { label: 'All', value: HistoryType.All },
  { label: 'Add', value: HistoryType.Increment },
  {
    label: 'Subtract',
    value: HistoryType.Decrement,
  },
];
