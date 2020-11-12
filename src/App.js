import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './components/Signup/SignupSteps/Main';
import ProfileMain from './components/ProfileSetup/Main';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#252834',
      light: "#575858",
      dark: '#575858',
    },
    secondary: {
      main: '#13B493',
      light: "#DFFFFA",
      dark: "#12AF8F",
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
      color: '#211E1E',
    },
    h2: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: '30px',
      fontWeight: '500',
      color: '#211E1E',
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
      color: '#FFFFFF',
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
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" exact component={Signup}/>
          <Route path="/signup/steps" component={Main}/>
          <Route path="/user/profile_setup" component={ProfileMain}/>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
