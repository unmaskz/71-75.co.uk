import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Grid } from 'react-flexbox-grid';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

import Button from '@/components/button/Button';
import { getDirectusImage } from '@/utils/directus';
import { Props } from './Navigation.interface';
import styles from './Navigation.module.scss';

export default ({ home }: Props): JSX.Element => {
  const homeStyle = home ? styles.navigation___home : '';

  return (
    <Navbar
      className={`${styles.navigation} ${homeStyle}`}
      collapseOnSelect
      bg="dark"
      expand="lg"
    >
      <Grid>
        <Link className="navbar-brand" href="/">
          <Image
            src="/logo-white.png"
            alt="71-75.co.uk logo."
            width="105"
            height="40"
            className={styles.navigation__logo}
          />
        </Link>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          className={styles.navigation__burger}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          className={styles.navigation__offcanvas}
        >
          <Offcanvas.Header closeButton />
          <Offcanvas.Body>
            <Nav className="justify-content-start flex-grow-1">
              <Link href="/" className={`nav-link ${styles.navigation__link}`}>
                Home
              </Link>
              <Link
                href="/serviced-offices/"
                className={`nav-link ${styles.navigation__link}`}
              >
                Serviced offices
              </Link>
              <Link
                href="/meeting-rooms/"
                className={`nav-link ${styles.navigation__link}`}
              >
                Meeting rooms
              </Link>
              <Link
                href="/contact-us/"
                className={`nav-link ${styles.navigation__link}`}
              >
                Contact
              </Link>
              <Link
                href="/about-us/"
                className={`nav-link ${styles.navigation__link}`}
              >
                About
              </Link>
            </Nav>
            <Nav className="justify-content-end flex-grow-1">
              <SignedIn>
                <UserButton
                  userProfileUrl="/account/"
                  userProfileMode="navigation"
                />
              </SignedIn>
              <SignedOut>
                <SignInButton>
                  <Button role="primary">Log in</Button>
                </SignInButton>
              </SignedOut>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Grid>
    </Navbar>
  );
};
