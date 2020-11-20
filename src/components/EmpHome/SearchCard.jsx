import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        width: '100%',
        borderRadius: '8px',
        paddingBottom: '40px',
        color: theme.palette.text.secondary,
    },
    searchbox: {
        padding: "2px 4px",
        display: "flex",
        height: '60px',
        marginTop: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '2px 2px 10px #DFDFDF',
        alignItems: "center",
        width: '98%'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1
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
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className={classes.paper}>
                        <Typography component="h1" className={classes.title} variant="h1">
                            Search Through 36,537 Candidates
                        </Typography>
                        <div className={classes.searchbox} >
                            <InputBase
                                style={{ width: '50%' }}
                                className={classes.input}
                                placeholder="Enter Skills, designation or Candidate names"
                                inputProps={{ "aria-label": "search google maps" }}
                            />
                            <Button variant="contained" color="primary" style={{ color: 'white', marginRight: '10px' }} className={classes.search} >
                                Search
                            </Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
