import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { actions } from 'redux/modules/versions';

import { getIconCssClass } from 'utils/icons';

import classes from './InfoView.scss';
import errorClasses from 'styles/errors.scss';

const mapStateToProps =
  ({ versions, settings }) => {
    return {
      ...versions.toJS(),
      ...settings.toJS(),
    };
  };

export class InfoView extends Component {
  static propTypes = {
    fetchAvailableVersions: PropTypes.func.isRequired,
    fetchAvailableVersionsError: PropTypes.string,
    versions: PropTypes.array,
    host: PropTypes.string.isRequired,
    port: PropTypes.string.isRequired,
    protocol: PropTypes.string.isRequired,
  };

  state = {
    fetchingAvailableVersions: false,
    fetchingAvailableVersionsError: false,
  };

  constructor(props) {
    super(props);

    this.fetchVersions = this.fetchVersions.bind(this);
  }

  fetchVersions() {
    const { host, protocol, port, fetchAvailableVersions } = this.props;
    const realPort = parseInt(port, 10) === 80 ? '' : `:${port}`;
    const url = `${protocol}://${host}${realPort}/versions.json`;
    this.setState({
      fetchingAvailableVersions: true,
    });
    fetchAvailableVersions(url)
      .then(
        () =>
          this.setState({
            fetchingAvailableVersions: false,
          })
      );
  }

  render() {
    const { versions, fetchAvailableVersionsError } = this.props;
    const { fetchingAvailableVersions } = this.state;

    return (
      <div
        className={classes['container']}
      >
        <h1>Welcome to the MagicShifter 3000 Firmware Updater</h1>
        <p>{JSON.stringify(versions)}</p>

        <p>

          <button
            disabled={fetchingAvailableVersions}
            onClick={this.fetchVersions}
          >
            <i
              className={getIconCssClass(fetchingAvailableVersions ? 'loading' : 'download')}
            />
            Load available versions
          </button>

        </p>
          {
            fetchAvailableVersionsError &&
            <p className={errorClasses['error']}>{fetchAvailableVersionsError}</p>
          }
      </div>
    );
  }
}

export default connect(mapStateToProps, actions)(InfoView);
