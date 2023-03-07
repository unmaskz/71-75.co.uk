import React from 'react';
import { Grid } from 'react-flexbox-grid';

import Markdown from '@/components/markdown/Markdown';
import { Props, Statistic } from './Statistics.interface';
import styles from './Statistics.module.scss';

const Statistics = ({ stats }: Props): JSX.Element => {
  return (
    <div className={styles.statistics}>
      <Grid>
        <div className={styles.statistics__stats}>
          {stats.map(({ id, heading, value }: Statistic) => (
            <div key={`stats-${id}`} className={styles.statistics__stat}>
              <span className={styles.statistics__figure}>{value}</span>
              <h3 className={styles.statistics__heading}>
                <Markdown children={heading} />
              </h3>
            </div>
          ))}
        </div>
      </Grid>
    </div>
  );
};

export default Statistics;
