import { trpc } from '~/utils';

function IndexPage() {
  const { data } = trpc.user.hello.useQuery();

  return <>{data}</>;
}

export default IndexPage;
