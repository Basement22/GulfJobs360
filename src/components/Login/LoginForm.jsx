import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { green } from "@material-ui/core/colors";

import {assets} from '../../theme'

import GoogleButton from "../Common/GoogleButton";

export default function SignIn(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid item xs={12}>
              <TextField
                // variant="filled"
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
          <Grid item xs={12} style={{ marginTop: "30px" }}>
              <TextField
                // variant="filled"
                style={{ marginTop: '0px', marginBottom: '0px' }}
                margin="normal"
                size='small'
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="password"
              />


          </Grid>
          <Grid container style={{ textAlign: 'right' }}>
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
          </Grid>
          <div className={classes.wrapper}>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Sign In
          </Button>
          </div>
          <Grid item xs={12} style={{ marginTop: "0px", marginBottom: '0px' }}>
            <Paper className={classes.paper} style={{ textAlign: 'center', marginTop: '10px', marginBottom: '18px', boxShadow: 'none' }}>
              <Typography component="h1" variant="subtitle1">
                OR
              </Typography>
            </Paper>
          </Grid>
          <Grid container className={classes.btnContainer} >
            <Grid item xs={5} >
              <Paper className={classes.paper} style={{ textAlign: 'center', boxShadow: 'none' }}>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  className={classes.login1}
                >
                  Google
                  {/* <img src={assets.googleicon} className={classes.gIcon} alt="sorry!"/> */}
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={2}>

            </Grid>
            <Grid item xs={5} >
              <Paper className={classes.paper} style={{ textAlign: 'center', boxShadow: 'none' }}>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  // color=""
                  className={classes.login2}
                >
                  FaceBook
              </Button>
              </Paper>
            </Grid>
          </Grid>
          <Grid item style={{ textAlign: 'right', position: 'absolute', top: '93vh' }} >
            <Link to="/signup" className={classes.signupLink} >
              {"Don't have an account? Sign Up"}
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
    alignItems: 'center',
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
  submit: {
    padding: theme.spacing(1.5, 0),
    color: 'white',
    margin: theme.spacing(2, 0, 2),
  },
  login1: {
    border: '1px solid #ADADAD',
    padding: theme.spacing(1.5, 0),
    margin: theme.spacing(2, 0, 2),
  },
  login2: {
    padding: theme.spacing(1.5, 0),
    margin: theme.spacing(2, 0, 2),
    color: 'white',
    background: '#0D88F0',
  },
  gIcon: {
    width: '20px',
  },
  signupLink: {
    color: "#0E4B7A",
    textDecoration: 'none',
    "&:hover": {
      textDecoration: 'underline',
    }
  },
  forgotPass: {
    color: "#0E4B7A",
    textDecoration: 'none',
    "&:hover": {
      textDecoration: 'underline',
    }
  },
}));
