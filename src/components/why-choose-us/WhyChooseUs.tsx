import React from 'react';

import Markdown from '@/components/markdown/Markdown';
import SectionHeading from '@/components/section-heading/SectionHeading';
import { Props, UniqueSellingPoint } from './WhyChooseUs.interface';
import styles from './WhyChooseUs.module.scss';

const WhyChooseUs = ({ usps }: Props): JSX.Element => {
  return (
    <div className={styles.whyChooseUs}>
      <SectionHeading heading="Benefits of choosing us" />
      <div className={styles.whyChooseUs__benefits}>
        {usps.map(
          ({ slug, heading, content, icon }: UniqueSellingPoint, i: number) => (
            <div key={slug} className={styles.whyChooseUs__benefit}>
              <span className={styles.whyChooseUs__number}>0{i + 1}.</span>
              <h3>
                <Markdown children={heading} />
              </h3>
              <Markdown children={content} container />
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default WhyChooseUs;
