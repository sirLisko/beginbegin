import React from 'react';

export default ({ cast }) => (
  <>
    <div id="production" className="box box_6">
      <div>
        <h2>Production</h2>
        <div>
          <span>Director</span>
          {cast.director}
        </div>
        <div>
          <span>Writer</span>
          {cast.writer}
        </div>
        <div>
          <span>Costumes</span>
          {cast.costumes}
        </div>
      </div>
    </div>
    <div id="cast" className="box_5">
      <div>
        <h2>Cast</h2>
        <div>
          {cast.cast.map(c => {
            const name = c.split(' - ');
            return (
              <div key={name[0]}>
                <span>{name[1]}</span>
                {name[0]}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </>
);
