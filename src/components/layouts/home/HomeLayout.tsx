import { PropsWithChildren } from 'react';

import Footer from '@/components/footer/Footer';
import styles from './HomeLayout.module.scss';

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.app}>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
