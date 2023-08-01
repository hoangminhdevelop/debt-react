import { HistoryType } from '@/types/history';
import z from 'zod';

export const createHistorySchema = z.object({
  reason: z
    .string()
    .min(1, {
      message: 'Please enter the reason',
    })
    .max(50),
  amount: z
    .number()
    .min(1000, { message: 'Please enter amount more than 1.000đ' }),
  type: z.nativeEnum(HistoryType),
});

export type CreateHistorySchema = z.infer<typeof createHistorySchema>;
