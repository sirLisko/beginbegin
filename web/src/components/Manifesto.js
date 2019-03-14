import React from 'react';

export default ({ manifesto }) => (
  <div id="about" className="box box_9">
    <div>
      <h2>{manifesto.title}</h2>
      <div className="box_9__text">
        {manifesto.text &&
          manifesto.text.map((b, i) => <p key={i}>{b.children[0].text}</p>)}
      </div>
    </div>
  </div>
);
