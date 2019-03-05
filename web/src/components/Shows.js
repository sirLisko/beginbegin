import React from 'react';

const showBlock = shows =>
  shows.map(p => (
    <div key={p.title}>
      {p.title}
      <span>
        {p.where}, {p.when}
      </span>
    </div>
  ));

export default function Shows({ shows }) {
  const past = shows.filter(s => !s.startedAt && s.title);
  const next = shows.filter(s => s.startedAt && s.title);

  return (
    <>
      <div className="box box_3">
        <div>
          <h2>Past shows</h2>
          {showBlock(past)}
        </div>
      </div>
      <div className="box box_4">
        <div>
          <h2>Next shows</h2>
          {showBlock(next)}
        </div>
      </div>
    </>
  );
}
