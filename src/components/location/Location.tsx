import React from 'react';
import Image from 'next/image';

import Markdown from '@/components/markdown/Markdown';
import { Props } from './Location.interface';
import styles from './Location.module.scss';

const Location = ({ location }: Props): JSX.Element => {
    const { heading, content, image } = location;

    return (
        <div className={styles.location}>
            <div className={styles.location__content}>
                <h2><Markdown children={heading} /></h2>
                <Markdown children={content} container />
            </div>
            <div className={styles.location__image}>
                <Image src={image.id} alt={`${heading} image.`} />
            </div>
        </div>
    );
};

export default Location;