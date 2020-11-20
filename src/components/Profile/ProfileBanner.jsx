import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';

import { assets } from '../../theme'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        borderRadius: '8px',
        backgroundColor: 'white',
        color: theme.palette.text.secondary,
    },
    rounded: {
        width: '140px',
        height: '160px',
        color: '#fff',
        backgroundColor: green[500],
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className={classes.paper} style={{ display: 'flex', direction: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Avatar variant="rounded" className={classes.rounded}>
                            <img src={assets.user} style={{ width: '100%', height: '100%' }} alt="Sorry!" />
                        </Avatar>
                        <Button color="secondary" style={{ color: 'white', marginTop: '110px', marginLeft: '-110px' }} variant="contained" >Change</Button>
                    </div>
                    <Grid item xs={12}>
                        <div className={classes.paper}>
                            <h1>John Doe</h1>
                            <p>Degree Name</p>
                            <p>University Name</p>
                            <p>User Email</p>
                            <p>User Phone Number</p>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.paper}>
                            <h4>Employers prefer original CV of a candidate</h4>
                            <Button color="secondary" style={{ color: 'white' }} variant="contained" >Upload CV</Button>
                        </div>
                    </Grid>
                </Grid>
                {/* <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid> */}
            </Grid>
        </div>
    );
}
