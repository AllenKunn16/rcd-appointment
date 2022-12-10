import { procedure, router } from '~/rpc';
import { signInSchema, signUpSchema } from '~/schema';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

export const user = router({
  hello: procedure().query(() => {
    return 'hello world~!';
  }),
  // getUser: procedure(true).query(async ({ ctx }) => {
  //   return {
  //     status: true,
  //     user: ctx.session.user!,
  //   };
  // }),
  // register: procedure()
  //   .input(signUpSchema)
  //   .mutation(async ({ input, ctx }) => {
  //     if (ctx.session.user) throw new Error('Already logged in');
  //     const user = await prisma.user.create({
  //       data: {
  //         name: input.name,
  //         email: input.email,
  //         gender: input.gender,
  //         address: input.address,
  //         password: input.password,
  //         role: 'user',
  //       },
  //     });
  //     ctx.session.user = user;
  //     await ctx.session.save();
  //     return {
  //       status: true,
  //       user,
  //     };
  //   }),
  // login: procedure()
  //   .input(signInSchema)
  //   .mutation(async ({ input, ctx }) => {
  //     if (ctx.session.user) throw new Error('Already logged in');
  //     const user = await prisma.user.findFirstOrThrow({
  //       where: { email: input.email },
  //       select: {
  //         id: true,
  //         name: true,
  //         email: true,
  //         gender: true,
  //         address: true,
  //         createdAt: true,
  //         role: true,
  //       },
  //     });
  //     ctx.session.user = user;
  //     await ctx.session.save();
  //     return {
  //       user,
  //       status: true,
  //       message: 'Sign In Successful!',
  //     };
  //   }),
  // logout: procedure(true).mutation(async ({ ctx }) => {
  //   ctx.session.destroy();
  //   return {
  //     status: true,
  //   };
  // }),
  // getAll: procedure().query(async () => {
  //   return prisma.user.findMany({
  //     select: {
  //       name: true,
  //       email: true,
  //       gender: true,
  //       address: true,
  //       createdAt: true,
  //     },
  //   });
  // }),
});
