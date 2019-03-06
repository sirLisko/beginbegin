import React from 'react';

import styles from './Footer.module.css';

export default ({ title, subtitle }) => (
  <div className="box box_8">
    <div className={styles.footer}>
      <h2>Presented By</h2>
      <img src="/imgs/parrabbola.png" />
      <p>
        Photos by <b>Dawid Linkowski</b>, <b>Rachel Cole-Wilkin</b>,{' '}
        <b>Sebastian Gora</b>
      </p>
    </div>
    <p className={styles.credits}>
      Made with ♥ by{' '}
      <a href="https://sirlisko.com">Luca Lischetti (@sirLisko)</a>
    </p>
  </div>
);
