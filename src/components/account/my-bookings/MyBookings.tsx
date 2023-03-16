import { TabPanel } from 'react-tabs';

import Bookings from '@/components/bookings/Bookings';
import Tabs from '@/components/tabs/Tabs';
import { Props } from './MyBookings.interface';
import styles from './MyBookings.module.scss';

const MyBookings = ({ user, bookings }: Props) => {
    const tabs = [
        {
            slug: 'upcoming',
            name: 'Upcoming',
        },
        {
            slug: 'older',
            name: 'Older',
        },
    ];

    return (
        <div className={styles.myBookings}>
            <Tabs tabs={tabs}>
                <TabPanel>
                    <Bookings bookings={bookings} />
                </TabPanel>
                <TabPanel>
                    <p>Older</p>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default MyBookings;
