import type { User } from '@prisma/client';

export type SignUpForm = Omit<User, 'id' | 'createdAt' | 'role'>;
