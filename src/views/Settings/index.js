import React, { PropTypes, Component } from 'react';
import { reduxForm } from 'redux-form';

import { actions } from 'redux/modules/settings';
import { settingsType } from 'utils/propTypes';

import LabeledInput from 'components/inputs/LabeledInput';

import classes from './SettingsView.scss';

export const fields = [
  'host',
  'port',
  'protocol',
];

const mapStateToProps =
  ({ settings }) => ({
    settings: settings.toJS(),
  });

export class SettingsView extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    settings: settingsType,
  };

  constructor(props) {
    const { host, port, protocol } = props.settings;

    props.fields.host.defaultValue = host;
    props.fields.port.defaultValue = port;
    props.fields.protocol.defaultValue = protocol;

    super(props);
  }

  render() {
    const {
      fields: { host, port, protocol },
    } = this.props;

    return (
      <div className={[classes['container'], 'container'].join(' ')}>
        <h2>Settings:</h2>

        <form>
          <fieldset>
            <legend>
              Update Server
            </legend>
            <h2>
              Use this settings if you want to use your own build server.
            </h2>
            <ul>
              <lh>Host</lh>
              <li>
                <input
                  type='text'
                  {...host}
                />
              </li>
              <li>
                <LabeledInput
                  type='text'
                  {...port}
                />
              </li>
              <li>
                <input
                  type='text'
                  {...protocol}
                />
              </li>
              <li>
                <input
                  type='submit'
                  value='save'
                />
              </li>
            </ul>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default reduxForm(
  {
    form: 'settings',
    fields,
  },
  mapStateToProps,
  actions
)(SettingsView);
