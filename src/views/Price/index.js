import React from 'react';
import { numPad } from 'GLOBALS';
import Key from './key.js';

export class PriceView extends React.Component {
  render() {
    return (
      <div className='container text-center'>
        <h1>PriceView</h1>
        {numPad.map(
          value =>
            <Key
              {...value}
              value={value.key}
            />
        )}
        {turtleDivs}
      </div>
    );
  }
}

export default PriceView;
