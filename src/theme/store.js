import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import themeReducer from './theme-reducer';

export default createStore(themeReducer, applyMiddleware(logger));
