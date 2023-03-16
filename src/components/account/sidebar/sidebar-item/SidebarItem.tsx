import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import { Props } from './SidebarItem.interface';
import styles from './SidebarItem.module.scss';

const SidebarItem = ({ item }: Props): JSX.Element => {
    return (
        <Link className={styles.sidebarItem} href={item.href as string}>
            {item.icon && (
                <div className={styles.sidebarItem__icon}>
                    <FontAwesomeIcon icon={item.icon} />
                </div>
            )}
            <span className={styles.sidebarItem__text}>{item.text}</span>
        </Link>
    );
};

export default SidebarItem;
