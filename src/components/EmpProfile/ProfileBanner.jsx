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
        color: 'white',
        borderRadius: '8px',
        color: theme.palette.text.secondary,
    },
    rounded: {
        width: '180px',
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
                <Grid item xs={2}>
                    <div className={classes.paper} style={{ display: 'flex', marginTop: '10px', direction: 'column', alignItems: 'center', justifyContent: 'right' }}>
                        <Avatar variant="rounded" className={classes.rounded}>
                            <img src={assets.blacklogo} style={{ width: '100%', height: '100%' }} alt="Sorry!" />
                        </Avatar>
                        <Button color="primary" style={{ color: 'white', marginTop: '110px', marginLeft: '-135px' }} variant="contained" >Change</Button>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.paper} style={{marginLeft: '20px'}} >
                        <h1 style={{ color: 'white' }} >Mellinium Investment</h1>
                        <p style={{ color: 'white' }} >Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
