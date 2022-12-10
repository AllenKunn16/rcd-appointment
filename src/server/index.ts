import { router } from '~/rpc';
import { appointment } from './appointment';
import { user } from './user';

export const appRouter = router({
  user,
  appointment,
});

export type AppRouter = typeof appRouter;
