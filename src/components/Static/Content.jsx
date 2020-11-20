import React from 'react';
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import {assets} from '../../theme'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '100px',
        height: 'auto',
        paddingTop: '10vh',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '100px',
        color: theme.palette.text.secondary,
    },
    heading: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        marginTop: '20px',
        fontSize: '26px',
        fontWeight: '700',
        color: '#383838',
    },
    title: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        marginTop: '30px',
        fontSize: '16px',
        fontWeight: '400',
        color: '#858585',
    },
    text: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        marginTop: '20px',
        fontSize: '16px',
        fontWeight: '300',
        color: '#4E4E4E',
    },
    homebtn: {
        // width: 'auto'
    },
    verify: {
        width: '20vw',
    }
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} justify="center" alignItems="center"  >
                <Grid item xs={7}>
                    <div className={classes.paper}>
                        <img src={assets.verification} className={classes.verify} alt="Sorry!"/>
                        <Typography component="h1" className={classes.heading} variant="h1">
                            Please, be patient!
                        </Typography>
                        <Typography component="h1" className={classes.title} variant="h1">
                            Your request for an account as an employer has been recieved. Our Team will review your account while you check our employer Home.
                        </Typography>
                        <Button color="secondary" component={Link} to="/employers/services" variant="contained" className={classes.homebtn} style={{ color: 'white', marginTop: '30px' }} >Services</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
