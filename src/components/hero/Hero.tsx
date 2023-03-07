import React from 'react';
import { Grid } from 'react-flexbox-grid';
import ReactPlayer from 'react-player';

import Button from '@/components/button/Button';
import Markdown from '@/components/markdown/Markdown';
import Navigation from '@/components/navigation/Navigation';
import { Props } from './Hero.interface';

import styles from './Hero.module.scss';

export default ({ hero }: Props): JSX.Element => {
    const { heading, content, button_link, button_text } = hero;

    return (
        <section className={styles.hero}>
            <Navigation home />
            <div className={styles.hero__inner}>
                <Grid>
                    <div className={styles.hero__main}>
                        <h1>
                            <Markdown children={heading} />
                        </h1>
                        <Markdown children={content} container />
                        <Button to={button_link} role="primary" className={styles.hero__button}>
                            {button_text}
                        </Button>
                    </div>
                </Grid>
            </div>
            <ReactPlayer className={styles.hero__video} url="building.mp4" playing loop muted width="100%" height="100%" />
        </section>
    );
};
