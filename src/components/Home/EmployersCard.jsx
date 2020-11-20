import React from 'react';

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
    paddingBottom: '20px',
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
    marginTop: '20px',
    fontSize: '16px',
    color: '#676767',
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
          <div className={classes.paper}>
            <div style={{ display: 'flex', padding: '10px 2vw 0px 2vw', justifyContent: 'space-between' }} >
              <Typography component="h1" className={classes.heading} variant="h1">
                Jobs by Top Employers
                            </Typography>
              <Button color="secondary" style={{ marginTop: '10px' }} disableRipple='true' >View All</Button>
            </div>
            <Grid item xs={12}>
              <div style={{ padding: '10px 2vw 150px 2vw' }} >
                <img src={assets.visme} style={{ width: '200px', marginTop: '20px', border: '1px solid #D8D8D8', padding: '12px 20px', float: 'left', borderRadius: '4px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
                <img src={assets.visme} style={{ width: '200px', marginTop: '20px', border: '1px solid #D8D8D8', padding: '12px 20px', float: 'left', borderRadius: '4px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
                <img src={assets.visme} style={{ width: '200px', marginTop: '20px', border: '1px solid #D8D8D8', padding: '12px 20px', float: 'left', borderRadius: '4px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
                <img src={assets.visme} style={{ width: '200px', marginTop: '20px', border: '1px solid #D8D8D8', padding: '12px 20px', float: 'left', borderRadius: '4px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
                <img src={assets.visme} style={{ width: '200px', marginTop: '20px', border: '1px solid #D8D8D8', padding: '12px 20px', float: 'left', borderRadius: '4px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
                <img src={assets.visme} style={{ width: '200px', marginTop: '20px', border: '1px solid #D8D8D8', padding: '12px 20px', float: 'left', borderRadius: '4px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
                <img src={assets.visme} style={{ width: '200px', marginTop: '20px', border: '1px solid #D8D8D8', padding: '12px 20px', float: 'left', borderRadius: '4px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div style={{padding: '20px 2vw 180px 2vw', marginBottom: '20px'}} >
                <img src={assets.companylogo2} style={{ width: '130px', marginTop: '20px', border: '1px solid #D8D8D8', padding: '12px 20px', float: 'left', borderRadius: '4px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
                <img src={assets.companylogo2} style={{ width: '130px', marginTop: '20px', border: '1px solid #D8D8D8', padding: '12px 20px', float: 'left', borderRadius: '4px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
                <img src={assets.companylogo2} style={{ width: '130px', marginTop: '20px', border: '1px solid #D8D8D8', padding: '12px 20px', float: 'left', borderRadius: '4px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
                <img src={assets.companylogo2} style={{ width: '130px', marginTop: '20px', border: '1px solid #D8D8D8', padding: '12px 20px', float: 'left', borderRadius: '4px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
                <img src={assets.companylogo2} style={{ width: '130px', marginTop: '20px', border: '1px solid #D8D8D8', padding: '12px 20px', float: 'left', borderRadius: '4px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
                <img src={assets.companylogo2} style={{ width: '130px', marginTop: '20px', border: '1px solid #D8D8D8', padding: '12px 20px', float: 'left', borderRadius: '4px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
                <img src={assets.companylogo2} style={{ width: '130px', marginTop: '20px', border: '1px solid #D8D8D8', padding: '12px 20px', float: 'left', borderRadius: '4px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
                <img src={assets.companylogo2} style={{ width: '130px', marginTop: '20px', border: '1px solid #D8D8D8', padding: '12px 20px', float: 'left', borderRadius: '4px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
                <img src={assets.companylogo2} style={{ width: '130px', marginTop: '20px', border: '1px solid #D8D8D8', padding: '12px 20px', float: 'left', borderRadius: '4px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
                <img src={assets.companylogo2} style={{ width: '130px', marginTop: '20px', border: '1px solid #D8D8D8', padding: '12px 20px', float: 'left', borderRadius: '4px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
                <img src={assets.companylogo2} style={{ width: '130px', marginTop: '20px', border: '1px solid #D8D8D8', padding: '12px 20px', float: 'left', borderRadius: '4px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
              </div>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
