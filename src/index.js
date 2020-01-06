import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import Routes from './components/Routes';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#00487c' },
    secondary: {
      main: '#fa8a4a',
      light: '#f7bd46',
      contrastText: 'white',
    },
    danger: '#ff4876',
    success: { main: '#4caf50' },
  },
});

const routing = (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </ThemeProvider>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
