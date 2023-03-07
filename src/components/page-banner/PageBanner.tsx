import { Grid } from 'react-flexbox-grid';

import { Props } from './PageBanner.interface';
import styles from './PageBanner.module.scss';

const PageBanner = ({ children, colour = 'white' }: Props): JSX.Element => {
    const getColourStyle = (colour: string) => {
        switch(colour) {
            case 'red': return styles.pageBanner___red;
            case 'grey': return styles.pageBanner___grey;
            case 'pink': return styles.pageBanner___pink;
            case 'white': return styles.pageBanner___white;
            default: '';
        }
    }

    return (
        <div className={[styles.pageBanner, colour && getColourStyle(colour)].join(' ')}>
            <Grid>
                {children}
            </Grid>
        </div>
    )
}

export default PageBanner;