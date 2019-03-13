import React from 'react';

import { Link, animateScroll as scroll } from 'react-scroll';

import styles from './Header.module.css';

const links = [
  {
    to: 'production',
    text: 'Production',
  },
  {
    to: 'cast',
    text: 'Cast',
  },
  {
    to: 'about',
    text: 'About Us',
  },
  {
    to: 'contact',
    text: 'Contact',
  },
];

const Header = () => {
  return (
    <nav className={styles.navigation} role="navigation">
      <input id="menu-toggle" type="checkbox" />
      <a className={styles.logo} onClick={scroll.scrollToTop}>
        <img src="/imgs/logo.png" alt="logo" />
      </a>
      <label className={styles.hamburger} htmlFor="menu-toggle">
        <span />
      </label>
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l.text}>
            <Link
              activeClass="active"
              to={l.to}
              hashSpy
              spy
              smooth
              duration={500}
            >
              {l.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
