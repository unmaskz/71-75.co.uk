import React from 'react';

import SectionHeading from '@/components/section-heading/SectionHeading';
import { Props } from './HowItWorks.interface';
import styles from './HowItWorks.module.scss';

const HowItWorks = ({ items }: Props): JSX.Element => {
  return (
    <div className={styles.howItWorks}>
      <SectionHeading heading="How it works" />
      <div className={styles.howItWorks__items}>
        {items.map(({ id, heading, content, number, icon }) => (
          <div className={styles.howItWorks__item}></div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
