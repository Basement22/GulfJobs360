import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, ButtonBase, Typography, Divider } from '@material-ui/core';

import { assets } from '../../theme'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingLeft: '8vw', 
        paddingRight: '8vw',
        marginBottom: '50px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        boxShadow: '2px 2px 20px #E1E1E1',
        margin: 'auto',
        maxWidth: '100%',
        borderRadius: '8px',
        color: theme.palette.text.secondary,
    },
    heading: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        marginTop: '20px',
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
        marginTop: '20px',
        marginRight: '15vw',
        fontSize: '18px',
        fontWeight: '400',
        textAlign: 'justify',
        color: '#2A2A2A',
        marginBottom: '20px'
    },
    image: {
        textAlign: 'center',
        width: '100%',
        // height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '50%',
        // maxHeight: '100%',
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography component="h1" className={classes.heading} variant="h1" >Recommended Articles</Typography>
            <Divider style={{ marginTop: '10px', marginBottom: '30px' }} />
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <div className={classes.paper}>
                        <div className={classes.paper2}>
                            <Grid container spacing={2}>
                                <Grid style={{display: 'flex', justifyContent: 'center'}} item xs={12} >
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="sorry!" src={assets.wentwrong} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom style={{fontWeight: '400', fontSize: '22px'}} variant="subtitle1">
                                                Lorem Ipsum
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint ipsa beatae amet! Exercitationem nesciunt laborum non beatae repellat?
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" color="secondary" style={{ cursor: 'pointer', marginBottom: '10px' }}>
                                                Read More
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.paper}>
                        <div className={classes.paper2}>
                        <Grid container spacing={2}>
                                <Grid style={{display: 'flex', justifyContent: 'center'}} item xs={12} >
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="sorry!" src={assets.wentwrong} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom style={{fontWeight: '400', fontSize: '22px'}} variant="subtitle1">
                                                Lorem Ipsum
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint ipsa beatae amet! Exercitationem nesciunt laborum non beatae repellat?
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" color="secondary" style={{ cursor: 'pointer', marginBottom: '10px' }}>
                                                Read More
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.paper}>
                        <div className={classes.paper2}>
                        <Grid container spacing={2}>
                                <Grid style={{display: 'flex', justifyContent: 'center'}} item xs={12} >
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="sorry!" src={assets.wentwrong} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom style={{fontWeight: '400', fontSize: '22px'}} variant="subtitle1">
                                                Lorem Ipsum
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint ipsa beatae amet! Exercitationem nesciunt laborum non beatae repellat?
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" color="secondary" style={{ cursor: 'pointer', marginBottom: '10px' }}>
                                                Read More
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
