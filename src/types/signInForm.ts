import type { User } from '@prisma/client';

export type SignInForm = Pick<User, 'email' | 'password'>;
