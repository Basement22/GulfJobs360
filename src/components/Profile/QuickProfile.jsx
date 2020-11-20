import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        backgroundColor: 'white',
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    links: {
        cursor: 'pointer',
        // background: 'pink',
        width: '100px',
        "&:hover": {
            color: '#13B493'
        }
    },
    heading: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        marginTop: '20px',
        fontSize: '18px',
        color: '#252834',
    },
    bar: {
        display: 'flex',
        direction: 'row',
        paddingLeft: '10px',
        paddingRight: '10px',
        justifyContent: 'space-between'
    },
    body: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        marginTop: '20px',
        fontSize: '16px',
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
                    <div className={classes.bar} >
                        <Typography component="h1" className={classes.body} variant="h1">
                            Profile Completeness
                        </Typography>
                        <Typography component="h1" className={classes.body} style={{ color: '#13B493', fontSize: '18px', fontWeight: '600' }} variant="h1">
                            81%
                        </Typography>
                    </div>
                    <div style={{ width: '90%', height: '5px', borderRadius: '4px', marginTop: '10px', marginLeft: '10px', marginRight: '10px', backgroundColor: '#D6D6D6' }} >
                        <div style={{ width: '81%', height: '5px', borderRadius: '4px', backgroundColor: '#13B493' }} ></div>
                    </div>
                    <div className={classes.paper}>
                        <div className={classes.paper} style={{marginTop: '-20px', paddingTop: '0px'}} >
                            <Typography component="h1" className={classes.heading} variant="h1">
                                Quick Links
                            </Typography>
                        </div>
                        <div className={classes.paper} style={{ textAlign: 'left' }} >
                            <ListItemText className={classes.links} primary="CV Headline" />
                            <ListItemText className={classes.links} primary="Key Skills" />
                            <ListItemText className={classes.links} primary="Professional" />
                            <ListItemText className={classes.links} primary="Employment" />
                            <ListItemText className={classes.links} primary="IT Skills" />
                            <ListItemText className={classes.links} primary="Education" />
                            <ListItemText className={classes.links} primary="Summary" />
                            <ListItemText className={classes.links} primary="CV" />
                            <ListItemText className={classes.links} primary="Personal" />
                            <ListItemText className={classes.links} primary="Desired Jobs" />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
