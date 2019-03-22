import React from 'react';

export default ({ reviews, title }) => (
  <div id="scroll" className="box box_2">
    {reviews.map((review, i) => (
      <div className={i % 2 !== 0 ? 'box__cont--alt' : ''} key={review}>
        {review}’
      </div>
    ))}
    {title && <span>{title}</span>}
  </div>
);
