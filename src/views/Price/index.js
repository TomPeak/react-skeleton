import React from 'react';
import { numPad } from 'GLOBALS';
import Key from './key.js';
import classes from './PriceView.scss';

export class PriceView extends React.Component {
  render() {
    return (
      <div className='container text-center'>
      <input type='text' className='price'/>
      <ul className={classes['numpad']}>
        <h1>PriceView</h1>
        {numPad.map(
          value => <Key
              {...value}
              value={value.key}
          />
        )}
        </ul>
      </div>
    );
  }
}

export default PriceView;
