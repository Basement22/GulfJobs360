import React from 'react';
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Links from '@material-ui/core/Link';

import { assets } from '../../theme'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        borderRadius: '8px',
        marginBottom: '0px',
        paddingBottom: '30px',
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
                            <div style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }} >
                                <div style={{ width: '50%' }} >
                                    <Typography component="h1" className={classes.title} variant="h1">
                                        Chris Hemsworth
                                    </Typography>
                                    <Typography component="h1" className={classes.text} variant="h1">
                                        Company Name
                                    </Typography>
                                </div>
                                <div>
                                    <Avatar variant="rounded" className={classes.rounded} src={assets.employer} />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                <div>
                                    <Typography component="h1" style={{ float: 'left' }} className={classes.body} variant="h1">
                                        Create Job Posts
                                    </Typography>
                                    {/* <Typography component="h1" className={classes.body} style={{ float: 'left', color: '#838383', fontWeight: '500' }} variant="h1">
                                        +9%
                                    </Typography> */}
                                </div>
                                <Button color="secondary" component={Link} to="/employers/post_jobs" style={{ marginTop: '11px' }} >Create</Button>
                            </div>
                            <Button color="secondary" component={Link} to="/employers/profile" variant="contained" fullWidth style={{ marginTop: '11px', paddingTop: '10px', paddingBottom: '10px', color: 'white' }} >View / Update Profile</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }} >
                                <div style={{ width: '48%', borderRadius: '8px', boxShadow: '2px 2px 10px #E4E4E4', paddingLeft: '10px', boxSizing: 'border-box', paddingBottom: '20px' }} >
                                    <Typography component="h1" className={classes.title} variant="h1">
                                        00
                                    </Typography>
                                    <Typography component="h1" className={classes.text} style={{ color: '#838383', fontWeight: '500', fontSize: '14px', marginTop: '4px' }} variant="h1">
                                        Candidates Actions
                                    </Typography>
                                </div>
                                <Button color="secondary" style={{ marginTop: '11px', paddingTop: '10px', paddingBottom: '10px' }} >Know More</Button>
                            </div>
                            <Typography component="h1" className={classes.text} style={{ color: '#838383', fontSize: '12px', fontWeight: '300', marginTop: '20px' }} variant="h1">
                                <Links style={{cursor: 'pointer'}} >Get status updates on the jobs you have created</Links>
                            </Typography>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
