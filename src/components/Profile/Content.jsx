import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ProfileBanner from './ProfileBanner';
import ProfileDetail from './ProfileDetail';
import QuickProfile from './QuickProfile';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '70px',
    paddingLeft: '8vw',
    backgroundImage: "linear-gradient(135deg, #84F5C5, #20EDD7, #F9F9F9, #04F58F)",
    paddingRight: '8vw',
  },
  paper: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
    backgroundColor: 'white',
    border: '1px solid #D7D7D7',
    boxShadow: '2px 2px 30px #DFDFDF',
    borderRadius: '8px',
    marginTop: '20px',
    marginBottom: '20px',
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <div className={classes.paper} >
            <ProfileBanner />
          </div>
        </Grid>
        <Grid item xs={6} sm={6}>
          <div className={classes.paper} style={{border: 'none',backgroundColor: 'transparent', boxShadow: 'none'}} >
            <ProfileDetail />
          </div>
        </Grid>
        <Grid item xs={6} sm={3}>
          <div className={classes.paper}>
            <QuickProfile />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
