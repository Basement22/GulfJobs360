import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '../components/Landing/AppBar'
import Content from '../components/Landing/Content'
import Footer from '../components/Landing/Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#EDF3F3',
  },
  appbar: {
    backgroundColor: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar />
      <Content />
      <Footer />
    </div>
  );
}

