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

import { assets } from '../../theme'

export default function SignIn(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" className={classes.signin} variant="h1">
          Log In
        </Typography>
        <Typography
          component="h6"
          variant="h6"
          className={classes.body}
        >
          Lorem Ipsum is simply dummy text of the <br />
          printing and typesetting industry.
        </Typography>
        <form className={classes.form} noValidate>
          <Grid item xs={12}>
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
          <Grid item xs={12} style={{ marginTop: "30px" }}>
            <TextField
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
              component={Link}
              to="/employers/home"
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Sign In
          </Button>
          </div>
          <Grid item style={{ textAlign: 'right', position: 'absolute' }} >
            <Link to="/employers/signup" className={classes.signupLink} >
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
  signupLink: {
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
