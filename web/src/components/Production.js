import React from 'react';

export default ({ production }) => (
  <div id="production" className="box box_6">
    <div>
      <h2>Production</h2>
      <div>
        <span>Director</span>
        {production.director}
      </div>
      <div>
        <span>Writer</span>
        {production.writer}
      </div>
      <div>
        <span>Costumes</span>
        {production.costumes}
      </div>
    </div>
  </div>
);
