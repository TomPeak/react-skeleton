import { PropTypes } from 'react';

/*
 * SettingsView PropTypes
 */

export const settingsType = PropTypes.shape({
  host: PropTypes.string.isRequired,
  protocol: PropTypes.string.isRequired,
  port: PropTypes.number.isRequired,
}).isRequired;
