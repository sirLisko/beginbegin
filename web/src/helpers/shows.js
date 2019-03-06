import React from 'react';

export const pastShows = shows => shows.filter(s => !s.startedAt && s.title);
export const nextShows = shows => shows.filter(s => s.startedAt && s.title);
export const nextShow = shows => shows.filter(s => s.startedAt && s.title)[0];

export const showBlock = show => (
  <div key={show.title}>
    {show.title}
    <span>
      {show.where}, {show.when}
    </span>
  </div>
);
