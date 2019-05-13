import React from 'react';

import { nextShows, pastShows, showBlock } from '../helpers/shows';

export default function Shows({ shows }) {
  const next = nextShows(shows);
  return (
    <>
      {next.length > 0 && (
        <div className="box box_4">
          <div className="rotate">
            <h2>Next shows</h2>
            {next.map(show => showBlock(show))}
          </div>
        </div>
      )}
      <div className="box box_3">
        <div>
          <h2>Past shows</h2>
          {pastShows(shows).map(show => showBlock(show))}
        </div>
      </div>
    </>
  );
}
