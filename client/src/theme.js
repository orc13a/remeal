import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#a7e9af',
    },
    secondary: {
      main: '#75b79e',
    },
  },
  typography: {
    button: {
      lineHeight: '2',
    },
  },
});

export default theme;