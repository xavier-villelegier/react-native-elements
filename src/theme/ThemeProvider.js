import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import store from './store';
import { setTheme } from './theme-actions';
import * as themes from './themes';

class ThemeProvider extends React.Component {
  componentWillMount() {
    setTheme({ ...themes.base, ...this.props.theme });
  }

  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

ThemeProvider.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
