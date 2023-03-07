import { PropsWithChildren } from 'react';
import { Grid } from 'react-flexbox-grid';

import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/footer/Footer';
import styles from './MainLayout.module.scss';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.app}>
      <Navigation />
      <main>
        <Grid>{children}</Grid>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
