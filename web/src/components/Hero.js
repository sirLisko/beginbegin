import React from 'react';

import styles from './Hero.module.css';

export default ({ title, subtitle }) => (
  <div className={styles.hero}>
    <video
      className={styles.video}
      playsInline="playsinline"
      autoPlay="autoplay"
      muted="muted"
      loop="loop"
    >
      <source src="/hero.mp4" type="video/mp4" />
    </video>
    <h1 className={styles.title}>
      {title}
      <span>{subtitle}</span>
    </h1>
  </div>
);
