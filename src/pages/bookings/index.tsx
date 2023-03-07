import { GetServerSideProps } from 'next';
import { clerkClient, getAuth, buildClerkProps } from '@clerk/nextjs/server';
import { useUser } from '@clerk/nextjs';

import MyBookings from '@/components/account/my-bookings/MyBookings';
import PageHeading from '@/components/page-heading/PageHeading';
import { MyPage } from '@/interfaces/page.interface';
import { getDirectusClient } from '@/lib/directus';

const Bookings: MyPage = ({ bookings }: any) => {
    const { isLoaded, isSignedIn, user } = useUser();
    if (!isLoaded || !isSignedIn) return null;

    console.log(bookings);

    return (
        <>
            <PageHeading heading="Bookings" />
            <MyBookings user={user} bookings={[]} />
        </>
    );
};

export default Bookings;

Bookings.Layout = 'Account';
