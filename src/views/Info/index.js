import React from 'react';

import classes from './InfoView.scss';

export const InfoView =
  ({ versions }) =>
    <div className={[classes['container'], 'container'].join(' ')}>
      <h1>Welcome to the MagicShifter 3000 Skeleton</h1>

      <p>
        This app was created to show a minimal implementation of the codebase
        that's in use in
        our <a target='_blank' href='https://github.com/magicshifter/ms3000-webinterface'>
          MagicShifter onboard Webinterface.
        </a>
      </p>

      <p>
        If you want to explore this codebase, start at the src/ directory,
        it includes the custom logic,
        everything else in this repository is a part of the build toolchain.
      </p>

      <p>Greetings,</p>
      <p>The MagicShifter Team!</p>
    </div>;

export default InfoView;
