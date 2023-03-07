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
            <MyBookings user={user} bookings={bookings} />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const directus = await getDirectusClient();
    const { userId } = getAuth(req);
    const user = userId ? await clerkClient.users.getUser(userId) : null;

    const bookings = await directus.items('bookings').readByQuery({
        limit: -1,
        fields: ['date', 'start_time', 'finish_time'],
        filter: {
            user_id: {
                _eq: userId,
            },
        },
    });

    return {
        props: {
            ...buildClerkProps(req, { user }),
            bookings,
        },
    };
};

export default Bookings;

Bookings.Layout = 'Account';
