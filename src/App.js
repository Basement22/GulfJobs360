import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Landing from './pages/Landing';
import Home from './components/Home/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './components/Signup/SignupSteps/Main';
import ProfileMain from './components/ProfileSetup/Main';
import Profile from './components/Profile/Main';
import DashboardMain from './components/Dashboard/Main';
import OfferMain from './components/Offers/Main';
import Blogs from './components/CareerTips/Blogs';
import Contact from './components/StaticPages/Contact';
import FAQ from './components/Offers/FAQ';
import About from './components/Offers/About';
import EmpSignup from './pages/EmpSignup';
import EmpLogin from './pages/EmpLogin';
import EmpHome from './pages/EmpHome';
import EmpProfile from './pages/EmpProfile';
import Jobs from './pages/Jobs';
import AllJobs from './pages/AllJobs';
import EmpServices from './pages/EmpServices';
import CareerTips from './pages/CareerTips';
import PostJobs from './pages/PostJobs';
import AccountVerify from './pages/AccountVerify';
import EmpProfileSetup from './pages/EmpProfileSetup';

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
      color: '#404040',
    },
    h5: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: '18px',
      fontWeight: '500',
      color: '#404040',
    },
    h6: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: '18px',
      fontWeight: '500',
      color: '#4C4C4C',
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
      color: '#404040',
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
          <Route path="/" exact component={Landing}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" exact component={Signup}/>
          <Route path="/signup/steps" component={Main}/>
          <Route path="/user/profile_setup" exact component={ProfileMain}/>
          <Route path="/user/profile" component={Profile}/>
          <Route path="/user/home" component={Home}/>
          <Route path="/user/services" exact component={OfferMain}/>
          <Route path="/user/services/contact_us" component={Contact}/>
          <Route path="/user/services/about_us" component={About}/>
          <Route path="/user/jobs" exact component={Jobs}/>
          <Route path="/user/jobs/all_jobs" component={AllJobs}/>
          <Route path="/user/career_tips" exact component={CareerTips}/>
          <Route path="/user/career_tips/blogs" component={Blogs}/>
          <Route path="/user/services/faqs" component={FAQ}/>
          <Route path="/employers/signup" component={EmpSignup}/>
          <Route path="/employers/account_verfication" component={AccountVerify}/>
          <Route path="/employers/login" component={EmpLogin}/>
          <Route path="/employers/home" exact component={EmpHome}/>
          <Route path="/employers/services" component={EmpServices}/>
          <Route path="/employers/tips" component={CareerTips}/>
          <Route path="/employers/profile" component={EmpProfile}/>
          <Route path="/employers/profile_setup" component={EmpProfileSetup}/>
          <Route path="/employers/post_jobs" component={PostJobs}/>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
