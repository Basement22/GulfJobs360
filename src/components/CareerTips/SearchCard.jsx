import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'left',
        width: '100%',
        borderRadius: '8px',
        paddingBottom: '40px',
        color: theme.palette.text.secondary,
    },
    searchbox: {
        padding: "2px 0px",
        display: "flex",
        height: '50px',
        marginTop: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '2px 2px 10px #DFDFDF',
        alignItems: "center",
        width: '100%'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1
    },
    title: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        marginTop: '10px',
        fontSize: '18px',
        color: '#252834',
    },
    text: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        marginTop: '20px',
        marginLeft: '20px',
        fontSize: '16px',
        textAlign: 'left',
        fontWeight: '400',
        color: '#4E4E4E',
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <div className={classes.paper}>
                        <Typography component="h1" className={classes.title} variant="h1">
                            Search Above 300 Articles
                        </Typography>
                        <div className={classes.searchbox} >
                            <InputBase
                                style={{ width: '100%' }}
                                className={classes.input}
                                placeholder="Search Articles"
                                inputProps={{ "aria-label": "search google maps" }}
                            />
                        </div>
                        <Typography component="h1" className={classes.title} style={{marginTop: '20px'}} variant="h1">
                            Select Categories
                        </Typography>
                        <div style={{marginTop: '20px', textAlign: 'left'}} >
                            <Checkbox
                                color="secondary"
                                style={{float: 'left', marginTop: '-10px'}}
                                inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                            />
                            <Typography component="h1" className={classes.text} variant="h1">
                                Lorem ipsum dolor
                            </Typography>
                        </div>
                        <div style={{marginTop: '20px', textAlign: 'left'}} >
                            <Checkbox
                                color="secondary"
                                style={{float: 'left', marginTop: '-10px'}}
                                inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                            />
                            <Typography component="h1" className={classes.text} variant="h1">
                                Lorem dolor
                            </Typography>
                        </div>
                        <div style={{marginTop: '20px', textAlign: 'left'}} >
                            <Checkbox
                                color="secondary"
                                style={{float: 'left', marginTop: '-10px'}}
                                inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                            />
                            <Typography component="h1" className={classes.text} variant="h1">
                                Lorem ipsum
                            </Typography>
                        </div>
                        <div style={{marginTop: '20px', textAlign: 'left'}} >
                            <Checkbox
                                color="secondary"
                                style={{float: 'left', marginTop: '-10px'}}
                                inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                            />
                            <Typography component="h1" className={classes.text} variant="h1">
                                Ipsum dolor
                            </Typography>
                        </div>
                        <div style={{marginTop: '20px', textAlign: 'left'}} >
                            <Checkbox
                                color="secondary"
                                style={{float: 'left', marginTop: '-10px'}}
                                inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                            />
                            <Typography component="h1" className={classes.text} variant="h1">
                                Lorem dolor
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
