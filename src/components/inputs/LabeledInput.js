import React, { PropTypes } from 'react';

export const LabeledInput =
  props =>
    <div>
      {props.label && <label>props.label</label>}
      <input
        {...props}
      />
    </div>;

LabeledInput.propTypes = {
  label: PropTypes.string,
};

export default LabeledInput;
