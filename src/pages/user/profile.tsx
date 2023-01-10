import { UserLayout } from '~/layouts';
import { trpc } from '~/utils';

export default function Profile() {
  const { data } = trpc.user.getUser.useQuery();

  if (!data) return null;

  const { user } = data;

  return (
    <UserLayout>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <header className="flex justify-between">
            <div>
              <div className="card-title">{user?.name}</div>
              <small className="block">{user?.email}</small>
            </div>
            <div>
              <button type="button" className="btn btn-sm text-white btn-error">
                <i className="material-icons">edit</i>
                <div>Edit Profile</div>
              </button>
            </div>
          </header>
          <div>
            <div className="font-bold">Full Name:</div>
            <div>{user?.name}</div>
          </div>
          <div>
            <div className="font-bold">Email:</div>
            <div>{user?.email}</div>
          </div>
          <div>
            <div className="font-bold">Address:</div>
            <div>{user?.address}</div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
