import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';

import styles from './Sidebar.module.scss';

const AccountSidebar = () => {
  const { asPath } = useRouter();

  const items = [
    {
      slug: 'account',
      text: 'Account',
      href: '/account/',
      icon: faUser,
    },
    {
      slug: 'bookings',
      text: 'Bookings',
      href: '/bookings/',
      icon: faCalendar,
    },
  ];

  return (
    <aside className={styles.accountSidebar}>
      <ul className={styles.accountSidebar__items}>
        {items.map(({ slug, text, href, icon }) => {
          const isCurrent = href.indexOf(asPath) > -1;

          return (
            <li key={slug} className={styles.accountSidebar__item}>
              <Link
                href={href}
                className={`${styles.accountSidebar__link} ${
                  isCurrent ? styles.accountSidebar__link___current : ''
                }`}
              >
                <FontAwesomeIcon icon={icon} />
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default AccountSidebar;
