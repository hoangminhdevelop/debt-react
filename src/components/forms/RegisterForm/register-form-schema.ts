import z from 'zod';

export const registerFormSchema = z.object({
  username: z.string().min(5),
  name: z.string().min(10),
  password: z.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message: 'Minimum eight characters, at least one letter and one number:',
  }),
  email: z.string().email(),
});

export type RegisterFormData = z.infer<typeof registerFormSchema>;
