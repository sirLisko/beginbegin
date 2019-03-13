import React from 'react';

import { nextShows, pastShows, showBlock } from '../helpers/shows';

export default function Shows({ shows }) {
  return (
    <>
      <div className="box box_4">
        <div className="rotate">
          <h2>Next shows</h2>
          {nextShows(shows, 'rotate--alt').map(show => showBlock(show))}
        </div>
      </div>
      <div className="box box_3">
        <div>
          <h2>Past shows</h2>
          {pastShows(shows).map(show => showBlock(show))}
        </div>
      </div>
    </>
  );
}
