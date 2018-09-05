'use strict';

const HexInput = props => {
  return (
    <input
      value={props.value}
      onChange={e => props.onChange(e.target.value)}
      type="text"
      className="hex-field js-hex-field"
      placeholder="#000000" />
  );
};
