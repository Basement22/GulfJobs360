import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
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
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className={classes.paper} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} >
                        {/* <div style={{ display: 'flex', padding: '10px 2vw 0px 2vw', justifyContent: 'space-between' }} >
                            <Typography component="h1" className={classes.heading} variant="h1">
                                Frequently Asked Questions
                            </Typography>
                            <Button color="secondary" style={{ marginTop: '10px' }} disableRipple='true' >View All</Button>
                        </div> */}
                        {/* <Grid container item xs={12} >
                            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '40px 2vw 10px 2vw' }} > */}
                                <Grid item xs={3} >
                                    <div style={{textAlign: 'center', cursor: 'pointer', backgroundColor: 'skyblue'}} >
                                        <ContactMailOutlinedIcon style={{fontSize: '60px', color: '#13B493'}} />
                                        <Typography component="h1" className={classes.title} variant="h1">
                                            Registering with GulfJobs360
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3} >
                                    <div style={{textAlign: 'center', cursor: 'pointer', backgroundColor: 'orange'}} >
                                        <SendOutlinedIcon style={{fontSize: '60px', color: '#13B493'}} />
                                        <Typography component="h1" className={classes.title} variant="h1">
                                            Create Job Post
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3} >
                                    <div style={{textAlign: 'center', cursor: 'pointer', backgroundColor: 'pink' }} >
                                        <FindInPageOutlinedIcon style={{fontSize: '60px', color: '#13B493'}} />
                                        <Typography component="h1" className={classes.title} variant="h1">
                                            Jobseeker Profile
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3} >
                                    <div style={{textAlign: 'center', cursor: 'pointer', backgroundColor: 'lightgreen' }} >
                                        <SettingsOutlinedIcon style={{fontSize: '60px', color: '#13B493'}} />
                                        <Typography component="h1" className={classes.title} variant="h1">
                                            Account & Email Setting
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </Typography>
                                    </div>
                                </Grid>
                            {/* </div> */}
                        {/* </Grid> */}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
