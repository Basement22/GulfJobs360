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
        paddingLeft: '2vw',
        paddingRight: '2vw',
        paddingBottom: '30px',
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
                    <Grid item xs={12}>
                        <div className={classes.paper} >
                            <h1 >Mellinium Investment</h1>
                            <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <p>Company Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut perferendis corrupti cum nulla at reprehenderit necessitatibus dolore quibusdam autem ipsum quidem, odit dolor? Consectetur enim facilis quis praesentium aliquid doloremque!</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit minima aut illum.</p>
                            <p>Company Email Address</p>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.paper}>
                            <h4>Create a new job post for your company</h4>
                            <Button color="secondary" style={{ color: 'white' }} variant="contained" >Post Job</Button>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
