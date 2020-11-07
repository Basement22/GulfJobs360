import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { assets } from '../../theme'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '0px',
        backgroundImage: "linear-gradient(to bottom right, #252834, #252834, #13B493, #DFFFFA)",
        // backgroundColor: '#075A5D',
        height: 'auto',
        borderRadius: '5vw 15vw 5vw 0vw',
        paddingBottom: '20vh',
    },
    paper1: {
        paddingTop: '9vh',
        textAlign: 'left',
        [theme.breakpoints.down("sm")]: {
            textAlign: 'center',
            paddingTop: '2vh',
        },
        color: theme.palette.text.secondary,
    },
    laptopworking: {
        width: '40vw',
        marginLeft: '8vw',
        marginRight: '2vw',
        [theme.breakpoints.down("md")]: {
            width: '43vw',
            marginTop: '10vh',
            // marginLeft: '0vw',
        },
        [theme.breakpoints.down("sm")]: {
            width: '55vw',
            marginLeft: '0vw',
        },
        [theme.breakpoints.down("xs")]: {
            width: '70vw',
            marginLeft: '0vw',
        },
    },
    paper2: {
        paddingTop: '9vh',
        [theme.breakpoints.down("sm")]: {
            paddingTop: '3vh',
        },
        marginLeft: '2vw',
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    heading: {
        [theme.breakpoints.down("xs")]: {
            marginLeft: '5vw',
            marginRight: '5vw',
            marginTop: '3vh',
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: '15vw',
            marginRight: '10vw',
        },
        fontSize: '36px',
        marginTop: '6vh',
        marginRight: '6vw',
        fontWeight: '600',
        color: 'white',
    },
    text: {
        color: 'white',
        fontSize: '22px',
        marginRight: '6vw',
        [theme.breakpoints.down("xs")]: {
            marginLeft: '5vw',
            marginRight: '5vw',
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: '15vw',
            marginRight: '10vw',
        },
        marginTop: '20px',
    },
    learnmore: {
        [theme.breakpoints.down("xs")]: {
            marginLeft: '5vw',
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: '15vw',
        },
        marginTop: '50px',
        textTransform: 'capitalize',
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={6} >
                    <div className={classes.paper1}>
                        <img src={assets.laptopworking} alt="sorry!" className={classes.laptopworking} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <div className={classes.paper2}>
                        <Typography component='h1' variant='h2' className={classes.heading} >
                            Make a Difference with Your
                            Online Resume. Your resume in minutes with JobBoard resume assistant is ready!
                        </Typography>
                        <Typography component='h3' variant='h3' className={classes.text} >
                            Search, find and apply for jobs directly on your mobile device or desktop Manage all
                            of the jobs you have applied to from a convenience secure dashboard.
                        </Typography>
                        <Button color="primary" variant="outlined" className={classes.learnmore} >Learn More</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
