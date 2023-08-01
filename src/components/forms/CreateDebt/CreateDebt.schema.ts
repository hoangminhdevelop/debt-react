import * as z from 'zod';

export const createDebtSchema = z.object({
  debtName: z.string().min(1, { message: 'This field cannot empty' }).max(10),
  icon: z.string(),
});

export type CreateDebtSchema = z.infer<typeof createDebtSchema>;
