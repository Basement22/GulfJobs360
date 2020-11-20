import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import PersonPinOutlinedIcon from '@material-ui/icons/PersonPinOutlined';

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
    paddingBottom: '50px',
    backgroundColor: 'white',
    color: theme.palette.text.secondary,
  },
  heading: {
    [theme.breakpoints.down('xs')]: {
      display: "none",
    },
    marginTop: '50px',
    fontSize: '22px',
    color: '#252834',
    textAlign: 'center',
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      display: "none",
    },
    marginTop: '30px',
    fontSize: '20px',
    fontWeight: '600',
    color: '#393939',
  },
  text: {
    [theme.breakpoints.down('xs')]: {
      display: "none",
    },
    marginTop: '20px',
    fontSize: '18px',
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
          <div className={classes.paper}>
            <div style={{ display: 'flex', padding: '10px 2vw 0px 2vw', justifyContent: 'center' }} >
              <Typography component="h1" className={classes.heading} variant="h1">
                Boost Your Candidate Hunt
              </Typography>
            </div>
            <Grid container item xs={12} >
              <div style={{ width: '100%', display: 'flex', marginTop: '30px', justifyContent: 'space-between', padding: '40px 8vw 10px 8vw' }} >
                <Grid item xs={5} >
                  <div style={{ textAlign: 'center', cursor: 'pointer' }} >
                    <AssignmentOutlinedIcon style={{ fontSize: '60px', color: '#13B493' }} />
                    <Typography component="h1" className={classes.title} variant="h1">
                      Job Post Writing
                    </Typography>
                    <Typography component="h1" className={classes.text} variant="h1">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                    <Button color="secondary" style={{ marginTop: '10px' }} disableRipple='true' >Know More</Button>
                  </div>
                </Grid>
                <Grid item xs={5} >
                  <div style={{ textAlign: 'center', cursor: 'pointer' }} >
                    <PersonPinOutlinedIcon style={{ fontSize: '60px', color: '#13B493' }} />
                    <Typography component="h1" className={classes.title} variant="h1">
                      Job Post Spotlight
                    </Typography>
                    <Typography component="h1" className={classes.text} variant="h1">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                    <Button color="secondary" style={{ marginTop: '10px' }} disableRipple='true' >Know More</Button>
                  </div>
                </Grid>
              </div>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
