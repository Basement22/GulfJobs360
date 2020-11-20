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
        marginBottom: '20px'
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: '100%',
        paddingLeft: '2vw',
        paddingRight: '2vw',
    },
    image: {
        width: '100%',
        height: 60,
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
                            <Grid item xs={12} >
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} src={assets.new} alt="Sorry!" />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            Post Quality Score
                                        </Typography>
                                        <Typography variant="h6" gutterBottom>
                                            Know Where my Post Stands in peer Group. 
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                            <Button color="secondary" >Know Your Score</Button>
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
