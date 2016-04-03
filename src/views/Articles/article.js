import React, { PropTypes } from 'react';

var handleClick = function (i) {
  var el = document.querySelector('.price');
  el.value += i;
};

export const Article =
  ({ type }) => {
    return (
      <li onClick={handleClick.bind(this, type)}>
        {type}
      </li>
    );
  };

Article.propTypes = {
  type: PropTypes.string,
};

export default Article;
