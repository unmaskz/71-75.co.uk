import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faGrid2, faUser, faCalendar, faIdCard } from '@fortawesome/pro-solid-svg-icons';

import SidebarCollapsible from './sidebar-collapsible/SidebarCollapsible';
import SidebarItem from './sidebar-item/SidebarItem';
import styles from './Sidebar.module.scss';

const AccountSidebar = () => {
    const { asPath } = useRouter();

    const items = [
        {
            slug: 'dashboard',
            text: 'Dashboard',
            icon: faGrid2,
            href: '/dashboard/',
        },
        {
            slug: 'account',
            text: 'Account',
            icon: faUser,
            children: [
                {
                    slug: 'account',
                    text: 'My Account',
                    href: '/account/',
                },
                {
                    slug: 'profile',
                    text: 'My Profile',
                    href: '/profile/',
                },
            ],
        },
        {
            slug: 'bookings',
            text: 'Bookings',
            icon: faCalendar,
            children: [
                {
                    slug: 'bookings',
                    text: 'My Bookings',
                    href: '/bookings/',
                },
                {
                    slug: 'new-booking',
                    text: 'Add New',
                    href: '/bookings/new',
                },
            ],
        },
    ];

    return (
        <aside className={styles.accountSidebar}>
            <div className={styles.accountSidebar__items}>
                {items.map((item) =>
                    item.children ? <SidebarCollapsible key={item.slug} item={item} /> : <SidebarItem key={item.slug} item={item} />,
                )}
            </div>
        </aside>
    );
};

export default AccountSidebar;
