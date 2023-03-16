import { useForm } from 'react-hook-form';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';

import MyProfile from '@/components/account/my-profile/MyProfile';
import PageHeading from '@/components/page-heading/PageHeading';
import { MyPage } from '@/interfaces/page.interface';

const Profile: MyPage = (props: any) => {
    return (
        <>
            <PageHeading heading="Profile" />
            <MyProfile />
        </>
    );
};

export default Profile;

Profile.Layout = 'Account';
