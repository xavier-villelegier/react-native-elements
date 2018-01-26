import store from './store';

const SET_THEME = 'SET_THEME';

const setThemeAction = theme => ({
  type: SET_THEME,
  theme,
});

const setTheme = theme => {
  store.dispatch(setThemeAction(theme));
};

export { SET_THEME, setTheme };
