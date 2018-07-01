'use strict';

function Stars({count}) {
  if (!(count >= 1 && count <= 5)) return null;
  const stars = new Array(count).fill(<li><Star /></li>);
  return <ul className="card-body-stars u-clearfix">{stars}</ul>;
}
