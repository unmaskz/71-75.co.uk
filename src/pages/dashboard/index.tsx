import { GetServerSideProps } from 'next';
import { clerkClient, getAuth, buildClerkProps } from '@clerk/nextjs/server';
import { useUser } from '@clerk/nextjs';

import PageHeading from '@/components/page-heading/PageHeading';
import { MyPage } from '@/interfaces/page.interface';
import { getDirectusClient } from '@/lib/directus';

const Dashboard: MyPage = ({ bookings }: any) => {
    const { isLoaded, isSignedIn, user } = useUser();
    if (!isLoaded || !isSignedIn) return null;

    return (
        <>
            <PageHeading heading="Dashboard" />
        </>
    );
};

export default Dashboard;

Dashboard.Layout = 'Account';
