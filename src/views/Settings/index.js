import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import { actions } from 'redux/modules/settings';

import { getIconCssClass } from 'utils/icons';

import classes from './SettingsView.scss';

export const fields = [
  'protocol',
  'host',
  'port',
];

const validate =
  ({ host, port, protocol }) => {
    const errors = {};
    const isRequiredError = 'Required';

    if (!host) {
      errors.host = isRequiredError;
    }
    if (!port) {
      errors.port = isRequiredError;
    }
    if (!protocol) {
      errors.protocol = isRequiredError;
    }

    return errors;
  };

const mapStateToProps =
  ({ settings }) =>
    ({
      initialValues: settings.toJS().initialValues,
    });

export class SettingsView extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    initialValues: PropTypes.object,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    setSettings: PropTypes.func.isRequired,
    loadSettings: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  componentWillMount() {
    const { loadSettings } = this.props;
    loadSettings();
  }

  submit(values) {
    const { setSettings } = this.props;

    setSettings(values);
  };

  render() {
    const {
      fields: { host, port, protocol },
      resetForm, handleSubmit, submitting,
    } = this.props;

    return (
      <div className={[classes['container'], 'container'].join(' ')}>
        <h2>Settings:</h2>

        <form onSubmit={handleSubmit(this.submit)}>
          <fieldset>
            <legend>
              <h2>
                Update Server Settings
              </h2>
              <h5>Use this settings if you want to use your own build server.</h5>
              <p>Current url: {protocol.value}://{host.value}{parseInt(port.value, 10) !== 80 && `:${port.value}`}/</p>
            </legend>

            <ul>
              <li>
                <label>hostname</label>
                <input
                  type='text'
                  {...host}
                />
              </li>
              <li>
                <label>port</label>
                <input
                  type='text'
                  {...port}
                />
              </li>
              <li>
                <label>protocol</label>
                <input
                  type='text'
                  {...protocol}
                />
              </li>
              <li>
                <button
                  type='submit'
                  disabled={submitting}
                >
                  {
                    submitting &&
                    <i className={getIconCssClass(['loading', 'spin'])} />
                  }
                  save
                </button>
                <input
                  type='button'
                  value='reset'
                  onClick={resetForm}
                  disabled={submitting}
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
    form: 'SettingsView',
    fields,
    validate,
  },
  mapStateToProps,
  actions
)(SettingsView);
