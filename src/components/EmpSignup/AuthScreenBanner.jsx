import React from 'react';
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { assets } from '../../theme'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    paper: {
        backgroundColor: 'transparent',
        padding: theme.spacing(2),
        textAlign: 'left',
        boxShadow: 'none',
        borderRadius: '0px',
        [theme.breakpoints.down('xs')]: {
            marginTop: '-15px',
            padding: theme.spacing(0),
        },
        color: theme.palette.text.secondary,
    },
    typography: {
        marginTop: "0px",
        marginRight: '6%',
        marginLeft: '6%',
        color: '#17CCA3',
        [theme.breakpoints.down('xs')]: {
            fontSize: '26px',
            marginTop: '10px',
            marginRight: '5%',
            marginLeft: '12%',
        },
    },
    span: {
        color: '#252834',
    },
    undrawimg: {
        marginTop: '0px',
        marginLeft: '6vw',
        width: '38vw',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    undrawsingle: {
        marginTop: '-95px',
        marginLeft: '45%',
        width: '40vw',
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'block',
        },
    },
    btnlogo: {
        "&:hover": {
            backgroundColor: 'transparent'
        },
        marginLeft: '2.4vw',
    },
    signin: {
        marginLeft: '6%',
        marginTop: '30px',
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'block',
            marginLeft: '12%',
        },
    }
}));

export default function AuthScreenBanner({ tagLine, type }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                            <Button component={Link} className={classes.btnlogo} to="/" disableRipple={true} > <img src={assets.gulfBlackLogo} style={{ marginTop: '0px', cursor: 'pointer', width: '180px' }} alt="Sorry!" /> </Button>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper} style={{ marginTop: '0px', paddingTop: '0px' }}>
                        <Typography variant="h1" className={classes.typography} gutterBottom>
                            {tagLine} <span className={classes.span}>Join our platform to extend your career or find new one!</span>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <img src={assets.hiring} className={classes.undrawimg} alt=" sorry!" />
                        <Typography component="h1" variant="h3" className={classes.signin}>
                            {type}
                        </Typography>
                        <img src={assets.hiring} className={classes.undrawsingle} alt="sorry!" />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}