import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import LoginForm from './LoginForm'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        borderRadius: 'none',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        [theme.breakpoints.down('xs')]: {
            backgroundColor: "transparent",
        },
    },
    body: {
        color: "#ABABAB",
        marginTop: '3px',
        fontWeight: '200',
        fontSize: '18px',
        background: 'transparent',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      },
    signin: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        color: '#13B493',
    }
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Paper className={classes.paper} style={{ textAlign: 'left', marginLeft: '73px', marginTop: '20px' }}>
                        <Typography component="h1" className={classes.signin} variant="h1">
                            Log In
                        </Typography>
                        <Typography
                            component="h6"
                            variant="h6"
                            className={classes.body}
                        >
                            Lorem Ipsum is simply dummy text of the <br/>
                            printing and typesetting industry.
                    </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper} style={{ paddingTop: '0px' }}>
                        <LoginForm />
                    </Paper>
                    {/* <Paper className={classes.paper} style={{ paddingTop: '0px' }}>
                        <LoginOption />
                    </Paper> */}
                </Grid>
            </Grid>
        </div>
    );
}
