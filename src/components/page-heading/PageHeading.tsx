import { Props } from './PageHeading.interface';
import styles from './PageHeading.module.scss';

const PageHeading = ({ heading, element = 'h1', children }: Props): JSX.Element => {
    return (
        <div className={styles.pageHeading}>
            <div className={styles.pageHeading__heading}>{element === 'h1' ? <h1>{heading}</h1> : <h2>{heading}</h2>}</div>
            <div className={styles.pageHeading__right}>{children}</div>
        </div>
    );
};

export default PageHeading;
