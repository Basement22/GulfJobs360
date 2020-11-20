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
    borderRadius: '8px',
    marginBottom: '20px',
    paddingBottom: '40px',
    border: '1px solid #D7D7D7',
    backgroundColor: 'white',
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
              Lorem Ipsum
            </Typography>
            <Typography component="h1" className={classes.text} variant="h1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla praesentium quo molestiae est error.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.paper}>
            <Typography component="h1" className={classes.title} variant="h1">
              lorem ipsum
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
              Lorem Ipsum Codlew adwar.
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
              Dolor Sit Amet
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
              Consectetur Adipisicing
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
              Edaoine Kagncie
            </Typography>
            <Typography component="h1" className={classes.text} variant="h1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla praesentium quo molestiae est error.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.paper}>
            <Typography component="h1" className={classes.title} variant="h1">
              Lorem Ipsum
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
              Ipsuym
            </Typography>
            <Button color="secondary" style={{marginTop: '20px', color: 'white'}} variant="contained" >Upload CV</Button>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.paper}>
            <Typography component="h1" className={classes.title} variant="h1">
              Lorem
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
              Codor Lorem
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
      </Grid>
    </div>
  );
}
