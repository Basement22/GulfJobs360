import React from 'react';
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import Grid from '@material-ui/core/Grid';
import { Button, Typography, Avatar } from '@material-ui/core';
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
    paddingBottom: '0px',
    marginTop: '20px',
    marginBottom: '20px',
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
    marginTop: '10px',
    fontSize: '18px',
    color: '#3F3F3F',
  },
  text: {
    [theme.breakpoints.down('xs')]: {
      display: "none",
    },
    marginTop: '10px',
    fontSize: '16px',
    fontWeight: '300',
    color: '#6A6A6A',
  },
  rounded: {
    width: '120px',
    height: '120px',
    marginTop: '20px',
    marginBottom: '10px',
    // marginRight: '10px',
    color: '#fff',
  },
  card: {
    width: '180px',

    "&:hover": {
      boxShadow: '2px 2px 20px #DADADA'
    },
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className={classes.paper}>
            <div style={{ display: 'flex', padding: '10px 2vw 0px 2vw', justifyContent: 'space-between' }} >
              <Typography component="h1" className={classes.heading} variant="h1">
                Featured Candidates
              </Typography>
              <Button color="secondary" style={{ marginTop: '10px' }} disableRipple='true' >View All</Button>
            </div>
            <Grid item xs={12} >
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 4vw' }} >
                <Grid item xs={2}>
                  <div className={classes.card} >
                    <div style={{ cursor: 'pointer', alignItems: 'center', borderRadius: '4px', width: '100%', display: 'flex', textAlign: 'center', flexDirection: 'column', justifyContent: 'center' }} >
                      <Avatar variant="rounded" className={classes.rounded} src={assets.user} />
                      <Typography component="h1" className={classes.title} variant="h1">
                        John Doe
                      </Typography>
                      <Typography component="h1" className={classes.text} variant="h1">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      </Typography>
                      <Button color="secondary" component={Link} to="/user/profile" style={{ marginTop: '20px', marginBottom: '30px', color: 'white' }} variant="contained" >See Profile</Button>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <div className={classes.card} >
                    <div style={{ cursor: 'pointer', alignItems: 'center', borderRadius: '4px', width: '100%', display: 'flex', textAlign: 'center', flexDirection: 'column', justifyContent: 'center' }} >
                      <Avatar variant="rounded" className={classes.rounded} src={assets.candidate2} />
                      <Typography component="h1" className={classes.title} variant="h1">
                        Sheldon Cooper
                      </Typography>
                      <Typography component="h1" className={classes.text} variant="h1">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      </Typography>
                      <Button color="secondary" style={{ marginTop: '20px', marginBottom: '30px', color: 'white' }} variant="contained" >See Profile</Button>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={2}>
                <div className={classes.card} >
                    <div style={{ cursor: 'pointer', alignItems: 'center', borderRadius: '4px', width: '100%', display: 'flex', textAlign: 'center', flexDirection: 'column', justifyContent: 'center' }} >
                      <Avatar variant="rounded" className={classes.rounded} src={assets.candidate3} />
                      <Typography component="h1" className={classes.title} variant="h1">
                        Henery Avery
                      </Typography>
                      <Typography component="h1" className={classes.text} variant="h1">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      </Typography>
                      <Button color="secondary" style={{ marginTop: '20px', marginBottom: '30px', color: 'white' }} variant="contained" >See Profile</Button>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={2}>
                <div className={classes.card} >
                    <div style={{ cursor: 'pointer', alignItems: 'center', borderRadius: '4px', width: '100%', display: 'flex', textAlign: 'center', flexDirection: 'column', justifyContent: 'center' }} >
                      <Avatar variant="rounded" className={classes.rounded} src={assets.candidate4} />
                      <Typography component="h1" className={classes.title} variant="h1">
                        James William
                      </Typography>
                      <Typography component="h1" className={classes.text} variant="h1">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      </Typography>
                      <Button color="secondary" style={{ marginTop: '20px', marginBottom: '30px', color: 'white' }} variant="contained" >See Profile</Button>
                    </div>
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
