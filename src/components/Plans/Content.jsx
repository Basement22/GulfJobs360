import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';

import ResumeSpotLight from './ResumeSpotLight';
import ResumeCritcs from './ResumeCritcs';
import ResumeWriting from './ResumeWriting';
import ResumeScore from './ResumeScore';
import Contact from './Contact';
import Plans from './Plans';

import { assets } from '../../theme';

import { Typography, Divider, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '70px',
        paddingLeft: '8vw',
        backgroundColor: 'white',
        // backgroundImage: "linear-gradient(135deg, #84F5C5, #20EDD7, #F9F9F9, #04F58F)",
        paddingRight: '8vw',
    },
    paper: {
        textAlign: 'left',
        color: theme.palette.text.secondary,
        backgroundColor: 'white',
        paddingBottom: '20px',
        boxShadow: '2px 2px 30px #DFDFDF',
        borderRadius: '8px',
    },
    heading: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        marginTop: '50px',
        fontSize: '22px',
        color: 'white',
        textAlign: 'center',
    },
    heading2: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        marginTop: '20px',
        fontSize: '42px',
        color: '#252834',
        textAlign: 'center',
    },
    heading3: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        marginTop: '20px',
        fontSize: '22px',
        color: '#13B493',
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
    title2: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        marginTop: '30px',
        fontSize: '20px',
        fontWeight: '600',
        color: 'white',
    },
    text: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        textAlign: 'left',
        marginTop: '20px',
        fontSize: '18px',
        marginLeft: '50px',
        fontWeight: '400',
        color: '#4E4E4E',
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <div className={classes.paper} style={{ marginTop: '20px', paddingBottom: '40px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#13B493' }} >
                        <Typography component="h1" className={classes.heading} variant="h1" >Move Ahead in Career, Faster Plans</Typography>
                        <Typography component="h1" className={classes.title2} style={{ marginTop: '10px' }} variant="h1" >with our paid services</Typography>
                    </div>
                </Grid>
                <Grid item xs={4} >
                    <div style={{ textAlign: 'center', cursor: 'pointer', marginBottom: '10px',padding: '50px 2vw', backgroundColor: 'white', borderRadius: '4px', boxShadow: '2px 2px 20px #DFDFDF' }} >
                        <Typography component="h1" className={classes.heading2} variant="h1">
                            $200
                        </Typography>
                        <Typography component="h1" className={classes.heading3} variant="h1">
                            7 Day CV Search
                        </Typography>
                        <Divider style={{marginTop: '40px', marginBottom: '30px'}} />
                        <div>
                            <CheckCircleOutlineRoundedIcon style={{ fontSize: '20px', marginTop: '2px', color: '#13B493', float: 'left' }} />
                            <Typography component="h1" className={classes.text} variant="h1">
                                Lorem ipsum dolor
                            </Typography>
                        </div>
                        <div>
                            <CheckCircleOutlineRoundedIcon style={{ fontSize: '20px', marginTop: '2px', color: '#13B493', float: 'left' }} />
                            <Typography component="h1" className={classes.text} variant="h1">
                                Lorem ipsum dolor
                            </Typography>
                        </div>
                        <div>
                            <CheckCircleOutlineRoundedIcon style={{ fontSize: '20px', marginTop: '2px', color: '#13B493', float: 'left' }} />
                            <Typography component="h1" className={classes.text} variant="h1">
                                Lorem ipsum dolor
                            </Typography>
                        </div>
                        <Button color="secondary" fullWidth style={{marginTop: '40px', color: 'white'}} variant="contained" >Buy Now</Button>
                    </div>
                </Grid>
                <Grid item xs={4} >
                <div style={{ textAlign: 'center', cursor: 'pointer', marginBottom: '10px',padding: '50px 2vw', backgroundColor: 'white', borderRadius: '4px', boxShadow: '2px 2px 20px #DFDFDF' }} >
                        <Typography component="h1" className={classes.heading2} variant="h1">
                            $200
                        </Typography>
                        <Typography component="h1" className={classes.heading3} variant="h1">
                            7 Day CV Search
                        </Typography>
                        <Divider style={{marginTop: '40px', marginBottom: '30px'}} />
                        <div>
                            <CheckCircleOutlineRoundedIcon style={{ fontSize: '20px', marginTop: '2px', color: '#13B493', float: 'left' }} />
                            <Typography component="h1" className={classes.text} variant="h1">
                                Lorem ipsum dolor
                            </Typography>
                        </div>
                        <div>
                            <CheckCircleOutlineRoundedIcon style={{ fontSize: '20px', marginTop: '2px', color: '#13B493', float: 'left' }} />
                            <Typography component="h1" className={classes.text} variant="h1">
                                Lorem ipsum dolor
                            </Typography>
                        </div>
                        <div>
                            <CheckCircleOutlineRoundedIcon style={{ fontSize: '20px', marginTop: '2px', color: '#13B493', float: 'left' }} />
                            <Typography component="h1" className={classes.text} variant="h1">
                                Lorem ipsum dolor
                            </Typography>
                        </div>
                        <Button color="secondary" fullWidth style={{marginTop: '40px', color: 'white'}} variant="contained" >Buy Now</Button>
                    </div>
                </Grid>
                <Grid item xs={4} >
                <div style={{ textAlign: 'center', cursor: 'pointer', marginBottom: '10px',padding: '50px 2vw', backgroundColor: 'white', borderRadius: '4px', boxShadow: '2px 2px 20px #DFDFDF' }} >
                        <Typography component="h1" className={classes.heading2} variant="h1">
                            $200
                        </Typography>
                        <Typography component="h1" className={classes.heading3} variant="h1">
                            7 Day CV Search
                        </Typography>
                        <Divider style={{marginTop: '40px', marginBottom: '30px'}} />
                        <div>
                            <CheckCircleOutlineRoundedIcon style={{ fontSize: '20px', marginTop: '2px', color: '#13B493', float: 'left' }} />
                            <Typography component="h1" className={classes.text} variant="h1">
                                Lorem ipsum dolor
                            </Typography>
                        </div>
                        <div>
                            <CheckCircleOutlineRoundedIcon style={{ fontSize: '20px', marginTop: '2px', color: '#13B493', float: 'left' }} />
                            <Typography component="h1" className={classes.text} variant="h1">
                                Lorem ipsum dolor
                            </Typography>
                        </div>
                        <div>
                            <CheckCircleOutlineRoundedIcon style={{ fontSize: '20px', marginTop: '2px', color: '#13B493', float: 'left' }} />
                            <Typography component="h1" className={classes.text} variant="h1">
                                Lorem ipsum dolor
                            </Typography>
                        </div>
                        <Button color="secondary" fullWidth style={{marginTop: '40px', color: 'white'}} variant="contained" >Buy Now</Button>
                    </div>
                </Grid>
                <Grid item xs={6} >
                    <div className={classes.paper} style={{ marginBottom: '20px', paddingBottom: '0px' }} >
                        <ResumeSpotLight />
                    </div>
                </Grid>
                <Grid item xs={6} >
                    <div className={classes.paper} style={{ marginBottom: '0px', paddingBottom: '0px' }} >
                        <ResumeCritcs />
                    </div>
                </Grid>
                <Grid item xs={8} >
                    <div className={classes.paper} style={{ marginBottom: '0px', paddingBottom: '0px' }} >
                        <ResumeWriting />
                    </div>
                </Grid>
                <Grid item xs={4} >
                    <div className={classes.paper} style={{ marginBottom: '0px', paddingBottom: '0px' }} >
                        <ResumeScore />
                    </div>
                </Grid>
                <Grid item sm={12}>
                    <div className={classes.paper} style={{ marginBottom: '30px', paddingBottom: '0px' }} >
                        <Contact />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
