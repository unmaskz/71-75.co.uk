import React from 'react';
import Image from 'next/image';

import SectionHeading from '@/components/section-heading/SectionHeading';
import { getDirectusImage } from '@/utils/directus';
import { Props, Staff } from './MeetTeam.interface';
import styles from './MeetTeam.module.scss';

const MeetTeam = ({ staff }: Props): JSX.Element => {
    return (
        <div className={styles.meetTeam}>
            <SectionHeading heading="Our Team" />
            <div className={styles.meetTeam__team}>
                {staff.map(({ id, name, job_title, biography, image }: Staff) => {
                    const imageUrl = getDirectusImage(image.id);

                    return (
                        <div key={`staff-${id}`} className={styles.meetTeam__staff}>
                            <div className={styles.meetTeam__top}>
                                <Image src={imageUrl} className={styles.meetTeam__image} alt={`${name} image`} width={300} height={300} />
                            </div>
                            <div className={styles.meetTeam__bottom}>
                                <h3 className={styles.meetTeam__name}>{name}</h3>
                                <span className={styles.meetTeam__jobTitle}>{job_title}</span>
                                <p className={styles.meetTeam__biography}>{biography}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MeetTeam;
