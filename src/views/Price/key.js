import React, { PropTypes } from 'react';

var handleClick = function (i) {
  var el = document.querySelector('.price');
  el.value += i;
};

export const Key =
  ({ value }) => {
    return (
      <li onClick={handleClick.bind(this, value)}>
        {value}
      </li>
    );
  };

Key.propTypes = {
  value: PropTypes.string,
};

export default Key;
