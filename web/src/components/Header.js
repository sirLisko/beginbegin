import React from 'react';

import { Link, animateScroll as scroll } from 'react-scroll';

import styles from './Header.module.css';

const links = [
  {
    to: 'projects',
    text: 'Projects',
  },
  {
    to: 'cast',
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
      <a onClick={scroll.scrollToTop}>
        <img className={styles.logo} src="/imgs/logo.png" alt="logo" />
      </a>
      <label className={styles.hamburger} htmlFor="menu-toggle">
        <span />
      </label>
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l.text}>
            <Link activeClass="active" to={l.to} spy smooth duration={500}>
              {l.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
