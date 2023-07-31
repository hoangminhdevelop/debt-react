import * as z from 'zod';

export const loginSchema = z.object({
  username: z.string({ required_error: 'Username is required' }).min(5, {
    message: 'Username min length is 5',
  }),
  password: z.string({ required_error: 'Password is required' }).min(5, {
    message: 'Password min length is 5',
  }),
});

export type LoginFormSchema = z.infer<typeof loginSchema>;
