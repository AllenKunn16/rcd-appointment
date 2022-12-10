import { z } from 'zod';

export const signUpSchema = z
  .object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
    gender: z.string(),
    address: z.string(),
  })
  .required();
