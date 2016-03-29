import React, { PropTypes } from 'react';

export const Key =
  ({ value }) => {
    return (
      <li>
        {value}
      </li>
    );
 }

Key.propTypes = {
  value: PropTypes.string,
};

export default Key;