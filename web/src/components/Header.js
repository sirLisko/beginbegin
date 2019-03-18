import React, { useState } from 'react';

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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={styles.navigation} role="navigation">
      <a className={styles.logo} onClick={scroll.scrollToTop}>
        <img src="/imgs/logo.png" alt="logo" />
      </a>
      <label
        className={isOpen ? styles.hamburgerOpen : styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span />
      </label>
      <ul className={isOpen ? styles.linksOpen : styles.links}>
        {links.map(l => (
          <li key={l.text}>
            <Link
              activeClass="active"
              to={l.to}
              hashSpy
              spy
              smooth
              duration={500}
              onClick={() => setIsOpen(false)}
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
