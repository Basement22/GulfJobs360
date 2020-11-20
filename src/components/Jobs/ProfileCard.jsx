import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { assets } from '../../theme'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'sticky',
        top: '0',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        borderRadius: '8px',
        marginBottom: '20px',
        paddingBottom: '40px',
        backgroundColor: 'white',
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
    rounded: {
        width: '70px',
        height: '70px',
        marginTop: '20px',
        marginRight: '10px',
        color: '#fff',
    },
    bar: {
        display: 'flex',
        direction: 'row',
        // paddingLeft: '10px',
        // paddingRight: '10px',
        justifyContent: 'space-between'
    },
    body: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        marginTop: '20px',
        fontSize: '14px',
        fontWeight: '400',
        color: '#575858',
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className={classes.paper}>
                        <Grid item xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                <div style={{ width: '50%' }} >
                                    <Typography component="h1" className={classes.title} variant="h1">
                                        John Doe
                                    </Typography>
                                    <Typography component="h1" className={classes.text} variant="h1">
                                        Bachelors of Science in Computers
                                    </Typography>
                                </div>
                                <div>
                                    <Avatar variant="rounded" className={classes.rounded} src={assets.user} />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.bar} >
                                <Typography component="h1" className={classes.body} variant="h1">
                                    Profile Completed
                                </Typography>
                                <Typography component="h1" className={classes.body} style={{ color: '#13B493', fontSize: '18px', fontWeight: '600' }} variant="h1">
                                    81%
                                </Typography>
                            </div>
                            <div style={{ width: '100%', height: '5px', borderRadius: '4px', marginTop: '10px', backgroundColor: '#D6D6D6' }} >
                                <div style={{ width: '81%', height: '5px', borderRadius: '4px', backgroundColor: '#13B493' }} ></div>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                <div>
                                    <Typography component="h1" style={{ float: 'left' }} className={classes.body} variant="h1">
                                        Upload CV
                                    </Typography>
                                    <Typography component="h1" className={classes.body} style={{ float: 'left', color: '#838383', fontWeight: '500' }} variant="h1">
                                        +9%
                                    </Typography>
                                </div>
                                <Button color="secondary" style={{ marginTop: '11px' }} >Upload</Button>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                <div>
                                    <Typography component="h1" style={{ float: 'left' }} className={classes.body} variant="h1">
                                        Upload Photo
                                    </Typography>
                                    <Typography component="h1" className={classes.body} style={{ float: 'left', color: '#838383', fontWeight: '500' }} variant="h1">
                                        +6%
                                    </Typography>
                                </div>
                                <Button color="secondary" style={{ marginTop: '11px' }} >Upload</Button>
                            </div>
                            <Button color="secondary" variant="contained" fullWidth style={{ marginTop: '11px', paddingTop: '10px', paddingBottom: '10px', color: 'white' }} >View / Update Profile</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography component="h1" className={classes.text} style={{ color: '#838383', fontSize: '12px', fontWeight: '300', marginTop: '20px' }} variant="h1">
                                Your profile performance on GulfJobs360 CV database
                            </Typography>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }} >
                                <div style={{ width: '48%', borderRadius: '8px', paddingLeft: '10px', boxSizing: 'border-box', boxShadow: '2px 2px 10px #E4E4E4' }} >
                                    <Typography component="h1" className={classes.title} variant="h1">
                                        00
                                    </Typography>
                                    <Typography component="h1" className={classes.text} style={{ color: '#838383', fontSize: '14px', fontWeight: '500', marginTop: '4px' }} variant="h1">
                                        Search Appearances
                                    </Typography>
                                </div>
                                <div style={{ width: '48%', borderRadius: '8px', boxShadow: '2px 2px 10px #E4E4E4', paddingLeft: '10px', boxSizing: 'border-box', paddingBottom: '20px' }} >
                                    <Typography component="h1" className={classes.title} variant="h1">
                                        00
                                    </Typography>
                                    <Typography component="h1" className={classes.text} style={{ color: '#838383', fontWeight: '500', fontSize: '14px', marginTop: '4px' }} variant="h1">
                                        Employer Actions
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }} >
                                <div style={{ width: '48%', borderRadius: '8px', paddingLeft: '10px', boxSizing: 'border-box', boxShadow: '2px 2px 10px #E4E4E4' }} >
                                    <Typography component="h1" className={classes.title} variant="h1">
                                        00 Applied Jobs
                                    </Typography>
                                </div>
                                <Button color="secondary" style={{ marginTop: '11px', paddingTop: '10px', paddingBottom: '10px' }} >Know More</Button>
                            </div>
                            <Typography component="h1" className={classes.text} style={{ color: '#838383', fontSize: '12px', fontWeight: '300', marginTop: '20px' }} variant="h1">
                                Get status updates on the jobs you have applied
                            </Typography>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
