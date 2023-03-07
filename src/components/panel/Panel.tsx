import { Props } from './Panel.interface';
import styles from './Panel.module.scss';

const Panel = ({ heading, children, colour = 'white' }: Props): JSX.Element => {
    const getPanelColour = (colour: string) => {
        switch (colour) {
            case 'white':
                return styles.panel___white;
            case 'red':
                return styles.panel___red;
            default:
                return '';
        }
    };

    return (
        <div className={[styles.panel, getPanelColour(colour)].join(' ')}>
            <div className={styles.panel__header}>
                <h3 className={styles.panel__heading}>{heading}</h3>
            </div>
            <div className={styles.panel__content}>{children}</div>
        </div>
    );
};

export default Panel;
