import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Grid } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import Newsletter from '@/components/newsletter/Newsletter';
import styles from './Footer.module.scss';

const Footer = (): JSX.Element => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <Grid>
                <div className={styles.footer__top}>
                    <div className={styles.footer__logo}>
                        <Image src="/logo-white.png" alt="71-75.co.uk logo." width="105" height="40" className={styles.footer__logo} />
                    </div>
                    <div className={styles.footer__links}>
                        <h4>Site</h4>
                        <ul>
                            <li>
                                <Link href="/serviced-offices/">Serviced Offices</Link>
                            </li>
                            <li>
                                <Link href="/meeting-rooms/">Meeting Rooms</Link>
                            </li>
                            <li>
                                <Link href="/about-us/">About</Link>
                            </li>
                            <li>
                                <Link href="/contact-us/">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footer__links}>
                        <h4>Useful</h4>
                        <ul>
                            <li>
                                <Link href="/terms/">Terms &amp; Conditions</Link>
                            </li>
                            <li>
                                <Link href="/cookies-policy/">Cookies Policy</Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy/">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/id-requirements/">ID Requirements</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footer__newsletter}>
                        <Newsletter />
                    </div>
                </div>

                <div className={styles.footer__bottom}>
                    <div className={styles.footer__info}>
                        <p>Copyright {currentYear} © 71-75 Ltd., registered at 71-75 Shelton Street, Covent Gardens, London, WC2H 9JQ</p>
                        <p>Company Nr: XXXXXX VAT Registration Nr: XXXXXX</p>
                    </div>
                    <div className={styles.footer__social}>
                        <a href="/test">
                            <div className={styles.footer__icon} style={{ backgroundColor: '#0097d8' }}>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </div>
                        </a>
                        <a href="/test">
                            <div className={styles.footer__icon} style={{ backgroundColor: '#89dcff' }}>
                                <FontAwesomeIcon icon={faTwitter} />
                            </div>
                        </a>
                        <a href="/test">
                            <div className={styles.footer__icon} style={{ backgroundColor: '#0077b5' }}>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </div>
                        </a>
                    </div>
                </div>
            </Grid>
        </footer>
    );
};

export default Footer;
