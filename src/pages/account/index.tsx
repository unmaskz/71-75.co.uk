import { useUser } from '@clerk/nextjs';

import MyDetails from '@/components/account/my-details/MyDetails';
import PageHeading from '@/components/page-heading/PageHeading';
import { MyPage } from '@/interfaces/page.interface';

const Account: MyPage = (props: any) => {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) return null;

  return (
    <>
      <PageHeading heading="Account" />
      <MyDetails user={user} />
    </>
  );
};

export default Account;

Account.Layout = 'Account';
