import React from 'react';
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import { assets } from '../../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '-20px'
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'left',
    borderRadius: '8px',
    marginBottom: '0px',
    marginTop: '20px',
    paddingBottom: '20px',
    backgroundColor: 'white',
    color: theme.palette.text.secondary,
  },
  heading: {
    [theme.breakpoints.down('xs')]: {
      display: "none",
    },
    marginTop: '20px',
    fontSize: '20px',
    color: '#252834',
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      display: "none",
    },
    marginTop: '20px',
    fontSize: '16px',
    color: '#676767',
    cursor: 'pointer',
  },
  text: {
    [theme.breakpoints.down('xs')]: {
      display: "none",
    },
    // marginTop: '10px',
    fontSize: '16px',
    fontWeight: '400',
    color: '#4E4E4E',
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className={classes.paper} >
            <div style={{ display: 'flex', padding: '10px 2vw 0px 2vw', justifyContent: 'space-between' }} >
              <Typography component="h1" className={classes.heading} variant="h1">
                Branding Tips
              </Typography>
              <Button color="secondary" style={{ marginTop: '10px' }} disableRipple='true' >View All</Button>
            </div>
            <Grid item xs={12}>
              <div style={{ padding: '10px 2vw 0px 2vw' }} >
                <Typography component="h1" className={classes.title} variant="h1">
                  "Live like there is no tomorrow." Najwan Isaa - Group Tal...
                </Typography>
                <Typography component="h1" className={classes.text} style={{ marginTop: '10px', marginBottom: '15px', float: 'left' }} variant="h1">
                  Najwan Issa- Group Talent Acquisition Manager- NFPC[/caption] In this interview with Naukrigulf, Ms. Najwan Issa talks about her professional journey, employment during Covid-19 ...
                  <a href="#" >Read More</a>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div style={{ padding: '10px 2vw 0px 2vw' }} >
                <Typography component="h1" className={classes.title} variant="h1">
                  "Live like there is no tomorrow." Najwan Isaa - Group Tal...
                </Typography>
                <Typography component="h1" className={classes.text} style={{ marginTop: '10px', marginBottom: '15px', float: 'left' }} variant="h1">
                  Najwan Issa- Group Talent Acquisition Manager- NFPC[/caption] In this interview with Naukrigulf, Ms. Najwan Issa talks about her professional journey, employment during Covid-19 ...
                  <a href="#" >Read More</a>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div style={{ padding: '10px 2vw 0px 2vw' }} >
                <Typography component="h1" className={classes.title} variant="h1">
                  "Live like there is no tomorrow." Najwan Isaa - Group Tal...
                </Typography>
                <Typography component="h1" className={classes.text} style={{ marginTop: '10px', marginBottom: '15px', float: 'left' }} variant="h1">
                  Najwan Issa- Group Talent Acquisition Manager- NFPC[/caption] In this interview with Naukrigulf, Ms. Najwan Issa talks about her professional journey, employment during Covid-19 ...
                  <a href="#" >Read More</a>
                </Typography>
              </div>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
