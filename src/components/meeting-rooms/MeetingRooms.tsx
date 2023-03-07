import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Button from '@/components/button/Button';
import Markdown from '@/components/markdown/Markdown';
import SectionHeading from '@/components/section-heading/SectionHeading';
import { slug } from '@/utils/slug';
import { MeetingRoom, Props } from './MeetingRooms.interface';
import styles from './MeetingRooms.module.scss';

const MeetingRooms = ({ rooms }: Props): JSX.Element => {
    return (
        <div className={styles.meetingRooms}>
            <SectionHeading heading="Available meeting rooms" />
            <div className={styles.meetingRooms__rooms}>
                {rooms.map(({ id, name, location, prices, image, room_size, seats }: MeetingRoom) => (
                    <div key={`meeting-room-${id}`} className={styles.meetingRooms__room}>
                        <div>
                            <h3 className={styles.meetingRooms__name}>
                                <Link href={`/meeting-rooms/${slug(name)}/`}>{name}</Link>
                            </h3>
                            <h4 className={styles.meetingRooms__location}>
                                <Markdown children={location} />
                            </h4>
                            <Button to={`/meeting-rooms/${slug(name)}/`} role="primary">Enquire</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MeetingRooms;