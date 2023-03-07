import { PropsWithChildren } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Navigation from '@/components/navigation/Navigation';
import AccountSidebar from '@/components/account/sidebar/Sidebar';
import Footer from '@/components/footer/Footer';
import styles from './AccountLayout.module.scss';

const AccountLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className={styles.app}>
            <Navigation />
            <main>
                <Grid>
                    <Row>
                        <Col xs={12} sm={12} md={3}>
                            <AccountSidebar />
                        </Col>
                        <Col xs={12} sm={12} md={9}>
                            {children}
                        </Col>
                    </Row>
                </Grid>
            </main>
            <Footer />
        </div>
    );
};

export default AccountLayout;