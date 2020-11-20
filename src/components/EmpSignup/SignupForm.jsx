import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { green } from "@material-ui/core/colors";

import { assets } from '../../theme'

export default function SignIn(props) {
    const classes = useStyles();

    const option = [
        {
            value: 'CV Search',
            label: 'CV Search',
        },
        {
            value: 'Job Posting',
            label: 'Job Posting',
        },
        {
            value: "Employers Branding",
            label: "Employers Branding",
        },
    ];

    return (
        <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <div className={classes.paper} >
                <Typography component="h1" className={classes.signin} variant="h1">
                    Register Now
                </Typography>
                <Typography
                    component="h6"
                    variant="h6"
                    className={classes.body}
                >
                    Lorem Ipsum is simply dummy text of the <br />
                    printing and typesetting industry.
                </Typography>
                <form className={classes.form} noValidate >
                    <Grid container style={{ marginTop: '0px' }} >
                        <Grid item xs={5}  >
                            <TextField
                                margin="normal"
                                color='primary'
                                required
                                fullWidth
                                style={{ marginTop: '0px', marginBottom: '0px' }}
                                size="small"
                                label="First Name"
                                name="firstname"
                            />
                        </Grid>
                        <Grid item xs={2}>

                        </Grid>
                        <Grid item xs={5} >
                            <TextField
                                margin="normal"
                                color='primary'
                                required
                                fullWidth
                                style={{ marginTop: '0px', marginBottom: '0px' }}
                                size="small"
                                label="Last Name"
                                name="lastname"
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "20px" }} >
                        <TextField
                            margin="normal"
                            color='primary'
                            required
                            fullWidth
                            style={{ marginTop: '0px', marginBottom: '0px' }}
                            size="small"
                            label="Username Or Email "
                            name="usernameOrEmail"
                        />
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "20px" }}>
                        <TextField
                            style={{ marginTop: '0px', marginBottom: '0px' }}
                            margin="normal"
                            size='small'
                            required
                            fullWidth
                            name="organization"
                            label="Name of Organization"
                        />
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "20px" }} >
                        <TextField
                            id="standard-select-currency"
                            select
                            fullWidth
                            label="You are interested in"
                        // helperText="Please select your currency"
                        >
                            {option.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid container style={{ textAlign: 'right' }}>
                        <FormControlLabel
                            style={{ marginTop: '8px' }}
                            control={<Checkbox value="remember" color="secondary" />}
                            label="I agree to the Privacy and Terms"
                        />
                    </Grid>
                    <div className={classes.wrapper}>
                        <Button
                            type="button"
                            fullWidth
                            component={Link}
                            to="/employers/account_verfication"
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                        >
                            Sign up
                        </Button>
                    </div>
                    <Grid item style={{ textAlign: 'right', position: 'absolute' }} >
                        <Link to="/employers/login" className={classes.loginLink} >
                            {"Already have an account? Log In"}
                        </Link>
                    </Grid>
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
        // alignItems: 'center',
    },
    wrapper: {
        margin: theme.spacing(0),
        position: 'relative',
    },
    submit: {
        padding: theme.spacing(1.5, 0),
        color: 'white',
        margin: theme.spacing(2, 0, 2),
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
    body: {
        color: "#ABABAB",
        marginTop: '3px',
        fontWeight: '200',
        fontSize: '18px',
        background: 'transparent',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    signin: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        color: '#13B493',
        marginTop: '40px',
    }
}));
