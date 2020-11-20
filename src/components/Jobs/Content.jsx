import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ByLocation from './ByLocation';
import ByCategory from './ByCategory';
import BySkill from './BySkill';
import ByDesignations from './ByDesignations';

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
        marginTop: '20px',
        // border: '1px solid #D7D7D7',
        boxShadow: '2px 2px 30px #DFDFDF',
        borderRadius: '8px',
    },
    heading: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        marginTop: '0px',
        fontSize: '24px',
        color: 'white',
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={12} >
                    <div className={classes.paper} style={{ marginTop: '20px', padding: '30px 2vw', backgroundColor: '#13B493' }} >
                        <Typography component="h1" className={classes.heading} variant="h1">
                            Browse Jobs in Gulf
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={6} sm={12} >
                    <div className={classes.paper} style={{ marginTop: '20px', paddingBottom: '0px' }} >
                        <ByLocation />
                    </div>
                </Grid>
                <Grid item xs={6} sm={12}>
                    <div className={classes.paper} style={{ paddingBottom: '0px' }} >
                        <ByCategory />
                    </div>
                </Grid>
                <Grid item xs={6} sm={12}>
                    <div className={classes.paper} style={{ paddingBottom: '0px' }} >
                        <BySkill />
                    </div>
                </Grid>
                <Grid item xs={6} sm={12}>
                    <div className={classes.paper} style={{ marginBottom: '60px', paddingBottom: '10px' }} >
                        <ByDesignations />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
