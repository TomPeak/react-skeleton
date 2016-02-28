import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { actions } from 'redux/modules/versions';

import classes from './InfoView.scss';

const mapStateToProps =
  ({ versions }) => {
    return {
      ...versions.toJS(),
    };
  };

export class InfoView extends Component {
  static propTypes = {
    loadAvailableVersions: PropTypes.func.isRequired,
    versions: PropTypes.array,
  };

  render() {
    const { versions, loadAvailableVersions } = this.props;

    return (
      <div
        className={classes['container']}
      >
        <h1>Welcome to the MagicShifter 3000 Firmware Updater</h1>
        <p>{JSON.stringify(versions)}</p>

        <p>
          <input
            type='button'
            value='Load Versions'
            onClick={() => console.log('load') || loadAvailableVersions()}
          />
        </p>
      </div>
    );
  }
}

export default connect(mapStateToProps, actions)(InfoView);
