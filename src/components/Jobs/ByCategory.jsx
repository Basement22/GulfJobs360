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
        marginTop: '0px',
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
        marginTop: '10px',
        fontSize: '18px',
        cursor: 'pointer',
        fontWeight: '400',
        width: '10%',
        color: '#343434',
        "&:hover": {
            color: '#13B493',
        },
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <div className={classes.paper}>
                        <div style={{ display: 'flex', padding: '10px 2vw 0px 2vw', justifyContent: 'space-between' }} >
                            <Typography component="h1" className={classes.heading} variant="h1">
                                Jobs by Categories
                            </Typography>
                            <Button color="secondary" style={{ marginTop: '-5px' }} disableRipple='true' >View All</Button>
                        </div>
                        <Grid container item xs={12} >
                            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', padding: '20px 2vw 30px 2vw' }} >
                                <Grid item xs={3} >
                                    <div style={{ textAlign: 'left' }} >
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Lorem
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Ispum
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Dolor
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Consectetur
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Recusandae
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Accusamus
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3} >
                                    <div style={{ textAlign: 'left', cursor: 'pointer' }} >
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Lorem
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Ispum
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Dolor
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Consectetur
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Recusandae
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Accusamus
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3} >
                                    <div style={{ textAlign: 'left', cursor: 'pointer' }} >
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Lorem
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Ispum
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Dolor
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Consectetur
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Recusandae
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Accusamus
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3} >
                                    <div style={{ textAlign: 'left', cursor: 'pointer' }} >
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Lorem
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Ispum
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Dolor
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Consectetur
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Recusandae
                                        </Typography>
                                        <Typography component="h1" className={classes.text} variant="h1">
                                            Accusamus
                                        </Typography>
                                    </div>
                                </Grid>
                            </div>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
