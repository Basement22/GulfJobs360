import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'transparent'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    marginBottom: '20px',
    backgroundColor: '#EDF3F3',
    boxShadow: '2px 2px 30px #DFDFDF',
    color: theme.palette.text.secondary,
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      display: "none",
    },
    marginTop: '20px',
    fontSize: '18px',
    color: '#252834',
  },
  text: {
    [theme.breakpoints.down('xs')]: {
      display: "none",
    },
    marginTop: '20px',
    fontSize: '16px',
    fontWeight: '400',
    color: '#4E4E4E',
  },
  tags: {
    [theme.breakpoints.down('xs')]: {
      display: "none",
    },
    marginTop: '20px',
    fontSize: '14px',
    // backgroundColor: 'grey',
    fontWeight: '400',
    color: '#4E4E4E',
  },
  close: {
    marginTop: '20px',
    marginLeft: '20p',
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.paper}>
            <Typography component="h1" className={classes.title} variant="h1">
              CV Headline
            </Typography>
            <Typography component="h1" className={classes.text} variant="h1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla praesentium quo molestiae est error.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.paper}>
            <Typography component="h1" className={classes.title} variant="h1">
              Key Skills
            </Typography>
            <Typography component="h1" className={classes.tags} variant="h1">
              Lorem ipsum
              <CloseRoundedIcon />
            </Typography>
            <Typography component="h1" className={classes.tags} variant="h1">
              Lorem ipsum
              <CloseRoundedIcon  />
            </Typography>
            <Button color="secondary" style={{marginTop: '20px'}} >Add More Key Skills</Button>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.paper}>
            <Typography component="h1" className={classes.title} variant="h1">
              Professional Details
            </Typography>
            <Typography component="h1" className={classes.text} variant="h1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla praesentium quo molestiae est error.
            </Typography>
            <Typography component="h1" className={classes.text} variant="h1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla praesentium quo molestiae est error.
            </Typography>
            <Typography component="h1" className={classes.text} variant="h1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla praesentium quo molestiae est error.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.paper}>
            <Typography component="h1" className={classes.title} variant="h1">
              Employment History
            </Typography>
            <Typography component="h1" className={classes.text} variant="h1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla praesentium quo molestiae est error.
            </Typography>
            <Typography component="h1" className={classes.text} variant="h1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla praesentium quo molestiae est error.
            </Typography>
            <Typography component="h1" className={classes.text} variant="h1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla praesentium quo molestiae est error.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.paper}>
            <Typography component="h1" className={classes.title} variant="h1">
              IT Skills/ Certifications
            </Typography>
            <Typography component="h1" className={classes.text} variant="h1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla praesentium quo molestiae est error.
            </Typography>
            <Typography component="h1" className={classes.text} variant="h1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla praesentium quo molestiae est error.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.paper}>
            <Typography component="h1" className={classes.title} variant="h1">
              Education Details
            </Typography>
            <Typography component="h1" className={classes.text} variant="h1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla praesentium quo molestiae est error.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.paper}>
            <Typography component="h1" className={classes.title} variant="h1">
              Profile Summary
            </Typography>
            <Typography component="h1" className={classes.text} variant="h1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla praesentium quo molestiae est error.
            </Typography>
            <Typography component="h1" className={classes.text} variant="h1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla praesentium quo molestiae est error.
            </Typography>
            <Typography component="h1" className={classes.text} variant="h1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla praesentium quo molestiae est error.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.paper}>
            <Typography component="h1" className={classes.title} variant="h1">
              CV
            </Typography>
            <Button color="secondary" style={{marginTop: '20px', color: 'white'}} variant="contained" >Upload CV</Button>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.paper}>
            <Typography component="h1" className={classes.title} variant="h1">
              Personal Details
            </Typography>
            <Typography component="h1" className={classes.text} variant="h1">
              Lorem ipsum dolor sit amet
            </Typography>
            <Typography component="h1" className={classes.text} variant="h1">
              Lorem ipsum dolor sit amet
            </Typography>
            <Typography component="h1" className={classes.text} variant="h1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iusto, eos accusantium,
            </Typography>
            <Button color="secondary" style={{marginTop: '20px', color: 'white'}} variant="contained" >Add Alternative Email Addresss</Button>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.paper}>
            <Typography component="h1" className={classes.title} variant="h1">
              Desired Jobs
            </Typography>
            <Typography component="h1" className={classes.text} variant="h1">
              Lorem ipsum dolor sit amet
            </Typography>
            <Typography component="h1" className={classes.text} variant="h1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iusto, eos accusantium,
            </Typography>
            <Typography component="h1" className={classes.text} variant="h1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iusto, eos accusantium,
            </Typography>
          </div>
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}
