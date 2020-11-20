import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { assets } from '../../theme';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: '100%',
        paddingLeft: '2vw',
        paddingRight: '2vw',
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className={classes.paper} style={{ cursor: 'pointer' }} >
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} src={assets.new} alt="Sorry!" />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            Resume Writing
                                        </Typography>
                                        <Typography variant="h6" gutterBottom>
                                            Standout from the crowd with our professionally written Resume by expert.
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Resume that hightlights your strengthsand showcase your experience.
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                            <Button color="secondary" >Text Resume</Button>
                                            <Button color="secondary" >Visual Resume</Button>
                                            <Button color="secondary" >Premium Text Resume</Button>
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                            <div >
                                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                                    Starts from
                                        </Typography>
                                                <Typography variant="body2" style={{ cursor: 'pointer', fontWeight: '600' }}>
                                                    $111 Only
                                        </Typography>
                                            </div>
                                            <Button color="secondary" >Know More</Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
