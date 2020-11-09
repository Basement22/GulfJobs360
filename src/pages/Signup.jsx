import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AuthScreenBanner from '../components/Common/AuthScreenBanner';
import RightGrid from '../components/Signup/RightGrid';

const useStyles = makeStyles((theme) => ({
    login: {
        flexGrow: 1,
        boxShadow: 'none',
        height: '100%',
        backgroundImage: "linear-gradient(45deg, #3d3d3d8e, #3d3d3d8e, #17cca267, #17cca267, #EDF3F3, #EDF3F3, #EDF3F3, #EDF3F3, #EDF3F3, #EDF3F3, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF)",

    },
    leftpaper: {
        padding: theme.spacing(2),
        boxShadow: 'none',
        textAlign: 'center',
        backgroundColor: 'transparent',
        height: '100vh',
        // borderRadius:'35% 8% 9% 57% / 0% 48% 52% 0%',
        [theme.breakpoints.down('xs')]: {
            // borderRadius:'35% 0% 48% 52% / 0% 26% 5% 4%',
            height: '50vh',
        },
        color: theme.palette.text.secondary,
    },
    rightpaper: {
        padding: theme.spacing(2),
        boxShadow: 'none',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: 'transparent',
        [theme.breakpoints.down('xs')]: {
            marginTop: '-250px',
            height: '50vh',
            backgroundColor: "transparent",
        },
        borderRadius: '0px',
        color: theme.palette.text.secondary,
    },
    linkpaper: {
        padding: theme.spacing(2),
        boxShadow: 'none',
        textAlign: 'right',
        borderRadius: '0px',
        color: theme.palette.text.secondary,
    },
    formpaper: {
        padding: theme.spacing(2),
        boxShadow: 'none',
        textAlign: 'center',
        borderRadius: '0px',
        color: theme.palette.text.primary,
    },
    link: {
        cursor: 'pointer',
        textAlign: 'left',
    },
}));

export default function Login() {
    const classes = useStyles();

    return (
        <div className={classes.login}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={7}>
                    <Paper className={classes.leftpaper}>
                        <AuthScreenBanner tagLine="Welcome!" type="Sign up" />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Paper className={classes.rightpaper}>
                        <RightGrid />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
