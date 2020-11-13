import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { green } from "@material-ui/core/colors";

import { InputLabel } from '@material-ui/core';

// import GoogleButton from "../Common/GoogleButton";

export default function Experience(props) {
    const classes = useStyles();

    const currencies = [
        {
            value: 'Doctorate',
            label: 'Doctorate',
        },
        {
            value: 'Masters',
            label: 'Masters',
        },
        {
            value: "Basic (Bachelor's, Diploma, School)",
            label: "Basic (Bachelor's, Diploma, School)",
        },
    ];

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" className={classes.heading} variant="h1">
                    Enter Your Personal Details
                </Typography>
                <form className={classes.form} noValidate>
                    <Typography component="h4" className={classes.text} variant="h4">
                        Please Select your Gender
                    </Typography>
                    <Grid container style={{ textAlign: 'right' }}>
                        <RadioGroup aria-label="gender" name="gender1">
                            <FormControlLabel
                                style={{ marginTop: '8px' }}
                                control={<Radio value="fresher" color="primary" />}
                                label="Male"
                            />
                            <Grid item xs style={{ marginTop: '7px' }}>
                                <FormControlLabel
                                    style={{ marginTop: '0px' }}
                                    control={<Radio value="work" color="primary" />}
                                    label="Female"
                                />
                            </Grid>
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "20px" }} >
                        <TextField
                            id="standard-select-currency"
                            select
                            fullWidth
                            label="What is your Nationality?"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "20px" }} >
                        <TextField
                            id="standard-select-currency"
                            select
                            fullWidth
                            label="What Country are you located in?"
                        // helperText="Please select your currency"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "20px" }} >
                        <TextField
                            margin="normal"
                            color='primary'
                            required
                            fullWidth
                            style={{ marginTop: '0px', marginBottom: '0px' }}
                            size="small"
                            label="Which City are you located in?"
                            name="city"
                        />
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "20px" }}>
                        <TextField
                            style={{ marginTop: '0px', marginBottom: '0px' }}
                            margin="normal"
                            size='small'
                            required
                            fullWidth
                            name="phone"
                            label="Enter your Phone Number"
                        />
                    </Grid>
                    {/* <Grid container style={{ textAlign: 'right' }}>
                        <FormControlLabel
                            style={{ marginTop: '8px' }}
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Grid item xs style={{ marginTop: '20px' }}>
                            <Link to="/password_reset" className={classes.forgotPass}>
                                Forgot password?
                            </Link>
                        </Grid>
                    </Grid> */}
                    {/* <div className={classes.wrapper}>
                        <Button
                            type="button"
                            fullWidth
                            component={Link}
                            to="/signup/steps"
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                        >
                            Save and Continue
                        </Button>
                    </div> */}
                </form>
            </div>
        </Container>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(0),
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        alignItems: 'center',
        textAlign: 'left',
    },
    wrapper: {
        margin: theme.spacing(0),
        position: 'relative',
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    form: {
        width: '90%',
        marginTop: theme.spacing(1),
    },
    heading: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        marginTop: '20px',
        fontSize: '24px',
        color: '#252834',
    },
    text: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        textAlign: 'left',
        marginTop: '20px',
        fontSize: '14px',
        color: '#575858',
    },
    submit: {
        padding: theme.spacing(1.5, 0),
        color: 'white',
        margin: theme.spacing(2, 0, 2),
    },
    login1: {
        width: '100px',
        height: '50px',
        border: '1px solid #D5D5D5',
        margin: theme.spacing(2, 0, 2),
        boxShadow: 'none',
        "&:hover": {
            boxShadow: '2px 2px 30px #C1C1C1',
            backgroundColor: '#F3F3F3',
        },
    },
    login2: {
        width: '100px',
        height: '50px',
        border: '1px solid #D5D5D5',
        margin: theme.spacing(2, 0, 2),
        boxShadow: 'none',
        "&:hover": {
            boxShadow: '2px 2px 30px #C1C1C1',
            backgroundColor: '#F3F3F3',
        },
    },
    login3: {
        width: '100px',
        height: '50px',
        border: '1px solid #D5D5D5',
        margin: theme.spacing(2, 0, 0),
        boxShadow: 'none',
        "&:hover": {
            boxShadow: '2px 2px 30px #C1C1C1',
            backgroundColor: '#F3F3F3',
        },
    },
    gIcon: {
        width: '25px',
    },
    fIcon: {
        width: '40px',
    },
    inIcon: {
        width: '30px',
    },
    loginLink: {
        color: "#252834",
        textDecoration: 'none',
        "&:hover": {
            color: "#13B493",
            textDecoration: 'underline',
        }
    },
    forgotPass: {
        color: "#252834",
        textDecoration: 'none',
        "&:hover": {
            color: "#13B493",
            textDecoration: 'underline',
        }
    },
}));
