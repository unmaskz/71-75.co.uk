import { format } from 'date-fns';
import 'react-tabs/style/react-tabs.css';

import Alert from '@/components/alert/Alert';
import { Booking } from '@/interfaces/bookings.interface';
import { Props } from './Bookings.interface';
import styles from './Bookings.module.scss';

const Bookings = ({ bookings }: Props): JSX.Element => {
    if (bookings.length < 1) {
        return <Alert text="You have no bookings" role="primary" />;
    }

    return (
        <div className={styles.bookings}>
            {bookings.map((booking: Booking) => {
                return (
                    <div key={booking.id} className={styles.bookings__booking}>
                        <div className={styles.bookings__left}>
                            <span className={styles.bookings__day}>{format(new Date(booking.date), 'EEEE')}</span>
                            <span className={styles.bookings__date}>{format(new Date(booking.date), 'd')}</span>
                            <span className={styles.bookings__monthYear}>
                                {format(new Date(booking.date), 'MMM')}/{format(new Date(booking.date), 'yy')}
                            </span>
                        </div>
                        <div className={styles.bookings__right}>
                            <h3 className={styles.bookings__roomName}>{booking.meeting_room.name}</h3>
                            <p className={styles.bookings__address}>71-75 Shelton Street, Covent Gardens, London, WC2H 9JQ</p>
                            <p className={styles.bookings__time}>
                                <span>{format(new Date(booking.start_time), 'p')}</span>
                                <span>&#8211;</span>
                                <span>{format(new Date(booking.finish_time), 'p')}</span>
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Bookings;
