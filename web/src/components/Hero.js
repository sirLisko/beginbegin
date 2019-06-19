import React from 'react';

import { showBlock } from '../helpers/shows';
import styles from './Hero.module.css';

export default ({ title, subtitle, nextShow, trailer }) => (
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
    {(nextShow || trailer) && (
      <div className={styles.banner}>
        {nextShow && (
          <div className={styles.next}>
            <h2>Next Show</h2>
            {showBlock(nextShow)}
          </div>
        )}
        {trailer && (
          <a
            href={trailer}
            className={styles.trailer}
            alt="tickets"
            target="_blank"
          >
            Watch our trailer!
          </a>
        )}
      </div>
    )}
  </div>
);
