import { purple } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

import '~styles/core/variables.scss';

/**
 * material-ui theme color pallete
 * @see https://material-ui.com/style/color/
 */
export const customTheme = createMuiTheme({
  palette: {
    primary: purple,
  },
  typography: {
    fontFamily: ['"Noto Sans JP"', 'Roboto', '"Helvetica Neue"', 'Arial'].join(
      ','
    ),
  },
});
