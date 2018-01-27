import { SET_THEME } from './theme-actions';
import base from './themes/base';

const initialState = {
  theme: base,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        theme: {
          ...state.theme,
          ...action.theme,
        },
      };
    default:
      return state;
  }
};
