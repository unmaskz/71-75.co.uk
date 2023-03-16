import { useForm } from 'react-hook-form';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';

import MyAccount from '@/components/account/my-account/MyAccount';
import PageHeading from '@/components/page-heading/PageHeading';
import { MyPage } from '@/interfaces/page.interface';

const Account: MyPage = (props: any) => {
    return (
        <>
            <PageHeading heading="Account" />
            <MyAccount />
        </>
    );
};

export default Account;

Account.Layout = 'Account';
