import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: '#EDF3F3',
  },
  paper1: {
    paddingTop: "3vh",
    backgroundColor: "#EDF3F3",
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  docs: {
    marginTop: "50px",
    color: 'white',
    textTransform: "capitalize"
  },
  heading: {
    fontSize: "40px",
    marginTop: "4vh",
    fontWeight: "600",
    color: "#0E4B7A"
  },
  text: {
    color: "#075A5D",
    fontSize: "22px",
    marginTop: "20px"
  },
  paper2: {
    backgroundColor: "#EDF3F3",
    paddingTop: "3vh",
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  signup: {
    color: 'white',
    marginTop: "50px",
    marginBottom: "70px",
    textTransform: "capitalize"
  }
}));

export default function ThirdBox() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        className={classes.container}
        direction="column"
        alignItems="center"
      >
        <Grid item xs={10} sm={7} >
          <div className={classes.paper1}>
            <Typography component="h1" variant="h2" className={classes.heading}>
              All you need to do...
            </Typography>
            <Typography component="h3" variant="h3" className={classes.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy.
            </Typography>
            <Button
              color="secondary"
              variant="contained"
              className={classes.docs}
            >
              Browse Candidates
            </Button>
          </div>
        </Grid>
        <Grid item xs={10} sm={7} >
          <div className={classes.paper2}>
            <Typography component="h1" variant="h2" className={classes.heading}>
              Start for free, and scale as you go
            </Typography>
            <Typography component="h3" variant="h3" className={classes.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy.
            </Typography>
            <Button
              color="secondary"
              variant="contained"
              className={classes.signup}
            >
              Sign up for free
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
