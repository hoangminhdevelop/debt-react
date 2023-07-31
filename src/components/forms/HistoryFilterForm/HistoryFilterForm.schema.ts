import { HistoryType } from '@/types/history';
import z from 'zod';

export const historyFilterFormSchema = z.object({
  debtId: z.number().optional(),
  type: z.nativeEnum(HistoryType).optional(),
  range: z.object({
    from: z.date(),
    to: z.date(),
  }),
});

export type HistoryFilterDataForm = z.infer<typeof historyFilterFormSchema>;
