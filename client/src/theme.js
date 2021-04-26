import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#916dd5',
    },
    secondary: {
      main: '#d89cf6',
    },
  },
  typography: {
    button: {
      lineHeight: '2',
    },
  },
});

export default theme;