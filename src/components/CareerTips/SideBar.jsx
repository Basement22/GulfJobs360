import React from 'react';
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Links from '@material-ui/core/Link';

import SearchCard from './SearchCard'

import { assets } from '../../theme'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '50px',
        position: 'sticky',
        top: '0',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        marginTop: '80px',
        borderRadius: '8px',
        marginBottom: '0px',
        boxShadow: '2px 2px 20px #E1E1E1',
        paddingBottom: '30px',
        backgroundColor: 'white',
        color: theme.palette.text.secondary,
    },
    title: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        marginTop: '20px',
        fontSize: '18px',
        color: '#252834',
    },
    text: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        marginTop: '20px',
        fontSize: '16px',
        fontWeight: '400',
        color: '#4E4E4E',
    },
    rounded: {
        width: '70px',
        height: '70px',
        marginTop: '20px',
        marginRight: '10px',
        color: '#fff',
    },
    bar: {
        display: 'flex',
        direction: 'row',
        // paddingLeft: '10px',
        // paddingRight: '10px',
        justifyContent: 'space-between'
    },
    body: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        marginTop: '20px',
        fontSize: '14px',
        fontWeight: '400',
        color: '#575858',
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className={classes.paper}>
                        <Grid item xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'left', cursor: 'pointer' }} >
                                <div style={{ width: '100%' }} >
                                    <SearchCard />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Button color="secondary" component={Link} to="/employers/profile" variant="contained" fullWidth style={{ marginTop: '20px', paddingTop: '10px', paddingBottom: '10px', color: 'white' }} >Search Article</Button>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
