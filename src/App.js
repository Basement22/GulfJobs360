import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Home from './pages/Home';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0E4B7A',
      dark: '#17CCA3',
    },
    secondary: {
      main: '#17CCA3',
      light: "#18A1E8",
      dark: "#3D60A7",
      contrastText: '#3F3F3F',
    },
    text: {
      primary: '#242424',
      secondary: '#3F3F3F',
    },
  },
  typography: {
    h1: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: '32px',
      fontWeight: '500',
      color: '#0E4B7A',
    },
    h2: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: '30px',
      fontWeight: '500',
      color: '#0E4B7A',
    },
    h3: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: '24px',
      fontWeight: '100',
      color: '#242424',
    },
    h4: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: '22px',
      fontWeight: '500',
      color: '#075A5D',
    },
    h5: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: '18px',
      fontWeight: '500',
      color: '#075A5D',
    },
    h6: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: '16px',
      fontWeight: '500',
      color: '#075A5D',
    },
    title1: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: '48px',
      fontWeight: '500',
      color: '#242424',
    },
    title2: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: '42px',
      fontWeight: '100',
      color: '#242424',
    },
    subtitle1: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: '16px',
      color: '#9F9F9F',
    },
    subtitle2: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: '14px',
      color: '#242424',
    },
  },
  overrides: {
    '@global': {
      ul: {
        color: "red"
      }
    },

  },
})

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
