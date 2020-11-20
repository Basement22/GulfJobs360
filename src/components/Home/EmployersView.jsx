import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Avatar from '@material-ui/core/Avatar';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';

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
        // paddingBottom: '20px',
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
    rounded: {
        width: '120px',
        height: '120px',
        marginTop: '20px',
        marginRight: '10px',
        color: '#fff',
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
                                Employer's View of My Profile
                            </Typography>
                            <Button color="secondary" style={{ marginTop: '10px' }} disableRipple='true' >See Full View</Button>
                        </div>
                        <Grid container item xs={12} >
                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '2vw' }} >
                                <Typography component="h1" className={classes.text} style={{ color: '#13B493', fontWeight: '400' }} variant="h1">
                                    John Doe (Male) - Fresh Graduate (0 yrs.)
                                </Typography>
                                <Typography component="h1" className={classes.text} style={{ marginTop: '5px' }} variant="h1">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </Typography>
                            </div>
                            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', padding: '40px 2vw 10px 2vw' }} >
                                <Grid item xs={3} >
                                    <div style={{ textAlign: 'left', cursor: 'pointer' }} >
                                        <Typography component="h1" className={classes.title} style={{ marginTop: '0px' }} variant="h1">
                                            Skills:
                                        </Typography>
                                        <Typography component="h1" className={classes.text} style={{ marginTop: '5px' }} variant="h1">
                                            Lorem Ipsum, Consectetur
                                        </Typography>
                                        <Typography component="h1" className={classes.title} variant="h1">
                                            Languages Known:
                                        </Typography>
                                        <Typography component="h1" className={classes.text} style={{ marginTop: '5px' }} variant="h1">
                                            Lorem Ipsum, Consectetur
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Last Modified: Nov 16, 2020
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3} >
                                    <div style={{ textAlign: 'left', cursor: 'pointer' }} >
                                        <Typography component="h1" className={classes.title} style={{ marginTop: '0px' }} variant="h1">
                                            Location:
                                        </Typography>
                                        <Typography component="h1" className={classes.text} style={{ marginTop: '5px' }} variant="h1">
                                            Lorem Ipsum, Consectetur
                                        </Typography>
                                        <Typography component="h1" className={classes.title} variant="h1">
                                            Salary Bucket:
                                        </Typography>
                                        <Typography component="h1" className={classes.text} style={{ marginTop: '5px' }} variant="h1">
                                            Lorem Ipsum 0
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Last Active: Nov 16, 2020
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3} >
                                    <div style={{ textAlign: 'left', cursor: 'pointer' }} >
                                        <Typography component="h1" className={classes.title} style={{ marginTop: '0px' }} variant="h1">
                                            Nationality:
                                        </Typography>
                                        <Typography component="h1" className={classes.text} style={{ marginTop: '5px' }} variant="h1">
                                            Consectetur
                                        </Typography>
                                        <Typography component="h1" className={classes.title} variant="h1">
                                            Current Employer:
                                        </Typography>
                                        <Typography component="h1" className={classes.text} style={{ marginTop: '5px' }} variant="h1">
                                            Consectetur
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3} >
                                    <div style={{ cursor: 'pointer', display: 'flex', textAlign: 'right', justifyContent: 'flex-end' }} >
                                        <Avatar variant="rounded" className={classes.rounded} src={assets.user} />
                                    </div>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{ display: 'flex', marginTop: '20px', justifyContent: 'space-between', width: '100%', padding: '10px 2vw 10px 2vw', backgroundColor: '#F0F0F0', marginBottom: '0px' }} >
                                <div>
                                    <div style={{ width: '95%', marginLeft: '30px', marginTop: '8px', display: 'flex', direction: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }} >
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
