import { Web3ReactProvider } from '@web3-react/core';
import { Router } from 'react-router-dom';
import MomentUtils from '@date-io/moment';
import { jssPreset, StylesProvider, ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { createBrowserHistory } from 'history';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { SnackbarProvider } from 'notistack';

import getLibrary from 'src/utils/getLibrary';
import GlobalStyles from 'src/components/GlobalStyles';
import routes, { renderRoutes } from 'src/routes';
import { createTheme } from 'src/theme';
import useSettings from 'src/hooks/useSettings';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const history = createBrowserHistory();

const App = () => {
  const { settings } = useSettings();
  const theme = createTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    theme: settings.theme,
  });

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider theme={theme}>
        <StylesProvider jss={jss}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <SnackbarProvider dense maxSnack={3}>
              <GlobalStyles />
              <Router history={history}>{renderRoutes(routes)}</Router>
            </SnackbarProvider>
          </MuiPickersUtilsProvider>
        </StylesProvider>
      </ThemeProvider>
    </Web3ReactProvider>
  );
};

export default App;
