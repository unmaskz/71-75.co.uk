import Link from 'next/link';
import { useState } from 'react';
import { Collapse } from 'react-collapse';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/pro-solid-svg-icons';

import SidebarItem from '../sidebar-item/SidebarItem';
import { Props } from './SidebarCollapsible.interface';
import styles from './SidebarCollapsible.module.scss';

const SidebarCollapsible = ({ item }: Props): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className={styles.sidebarCollapsible}>
            <div className={styles.sidebarCollapsible__item} onClick={() => setOpen(!open)}>
                <div className={styles.sidebarCollapsible__icon}>
                    <FontAwesomeIcon icon={item.icon as IconProp} />
                </div>
                <span className={styles.sidebarCollapsible__text}>{item.text}</span>
                <div className={styles.sidebarCollapsible__caret}>
                    <FontAwesomeIcon icon={!open ? faCaretDown : faCaretUp} />
                </div>
            </div>
            <Collapse isOpened={open}>
                <div className={styles.sidebarCollapsible__items}>
                    {item.children?.map((child) => (
                        <SidebarItem item={child} key={child.slug} />
                    ))}
                </div>
            </Collapse>
        </div>
    );
};

export default SidebarCollapsible;
