import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import PropTypes from 'prop-types';
import Provider from 'react-redux';

import themeReducer from './theme-reducer';

const store = createStore(themeReducer, applyMiddleware([logger]));

class ThemeProvider extends React.Component {
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

ThemeProvider.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
