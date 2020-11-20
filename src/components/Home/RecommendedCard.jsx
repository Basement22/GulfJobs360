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
        border: '1px solid #D7D7D7',
        marginBottom: '20px',
        borderRadius: '8px',
        boxShadow: '2px 2px 30px #DFDFDF',
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
                                4 New Recommended Jobs
                            </Typography>
                            <Button color="secondary" style={{ marginTop: '10px' }} disableRipple='true' >View All</Button>
                        </div>
                        <Grid item xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 2vw 0px 2vw' }} >
                                <div>
                                    <Typography component="h1" className={classes.title} variant="h1">
                                        IT Developers
                                    </Typography>
                                    <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
                                        Lorem Ispum
                                    </Typography>
                                    <div style={{ width: '200px', display: 'flex', justifyContent: 'space-between' }} >
                                        <BusinessCenterOutlinedIcon style={{ fontSize: '20px', marginTop: '10px' }} />
                                        <Typography component="h1" className={classes.text} style={{ marginRight: '20px', marginTop: '10px' }} variant="h1">
                                            0-1 Years
                                        </Typography>
                                        <LocationOnOutlinedIcon style={{ fontSize: '20px', marginTop: '10px' }} />
                                        <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
                                            Egypt
                                        </Typography>
                                    </div>
                                </div>
                                <img src={assets.visme} style={{ width: '160px', height: '80px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 2vw 20px 2vw', marginBottom: '0px' }} >
                                <div>
                                    <Typography component="h1" className={classes.title} variant="h1">
                                        Intern Developer
                                    </Typography>
                                    <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
                                        Lorem Ispum
                                    </Typography>
                                    <div style={{ width: '200px', display: 'flex', justifyContent: 'space-between' }} >
                                        <BusinessCenterOutlinedIcon style={{ fontSize: '20px', marginTop: '10px' }} />
                                        <Typography component="h1" className={classes.text} style={{ marginRight: '20px', marginTop: '10px' }} variant="h1">
                                            0-2 Years
                                        </Typography>
                                        <LocationOnOutlinedIcon style={{ fontSize: '20px', marginTop: '10px' }} />
                                        <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
                                            London
                                        </Typography>
                                    </div>
                                </div>
                                <img src={assets.companylogo2} style={{ width: '140px', marginRight: '15px', height: '80px', cursor: 'pointer' }} alt="sorry!" />
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '10px 2vw 10px 2vw', backgroundColor: '#F0F0F0', marginBottom: '0px' }} >
                                <div>
                                    <NotificationsActiveOutlinedIcon style={{ fontSize: '60px', color: '#13B493', float: 'left', marginTop: '10px' }} />
                                    <div style={{ width: '85%', marginLeft: '90px', marginTop: '8px', display: 'flex', direction: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }} >
                                        <Typography component="h1" className={classes.text} style={{ marginRight: '20px', marginTop: '10px' }} variant="h1">
                                            Be the first one to know about new jobs matching your search criteria!
                                        </Typography>
                                    </div>
                                    <Button color="secondary" style={{ marginLeft: '22px', marginTop: '4px' }} disableRipple='true' >Create Job Alert</Button>
                                </div>
                            </div>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
