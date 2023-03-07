import { Grid } from 'react-flexbox-grid';

import { Props } from './Section.interface';
import styles from './Section.module.scss';

export default ({ id, className, children, colour, style }: Props): JSX.Element => {
    const getColourStyle = (colour: string) => {
        switch (colour) {
            case 'grey':
                return styles.section___grey;
            case 'pink':
                return styles.section___pink;
            case 'white':
                return styles.section___white;
            default:
                '';
        }
    };

    return (
        <section id={id} style={style} className={[styles.section, className, colour && getColourStyle(colour)].join(' ')}>
            <Grid className={styles.section__grid}>{children}</Grid>
        </section>
    );
};
