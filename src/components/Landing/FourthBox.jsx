import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CodeIcon from "@material-ui/icons/Code";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import BubbleChartOutlinedIcon from "@material-ui/icons/BubbleChartOutlined";

import { assets } from '../../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    backgroundColor: "#FFFFFF",
  },
  main: {
    padding: '30px 7vw 70px 7vw',
  },
  paper1: {
    paddingTop: "3vh",
    textAlign: "center",
    marginTop: '30px',
    // display: 'flex',
    // alignItems: 'center',
    // align: 'center',
    // justify: 'center',
    // justifyItems: 'center',
    // width: '100vw',
    // backgroundColor: 'skyblue',
    color: theme.palette.text.secondary
  },
  btnContainer: {
    width: '340px',
    height: '60px',
    backgroundColor: '#333333',
    color: 'white',
    marginLeft: '29vw',
    paddingTop: '10px',
    paddingLeft: '10px',
    marginBottom: '25px',
    boxSizing: 'border-box',
    borderRadius: '8px',
  },
  btnFeatured: {
    width: '150px',
    padding: theme.spacing(1),
    boxShadow: 'none',
    color: 'white',
    background: 'transparent',
  },
  btnRecent: {
    width: '150px',
    boxShadow: 'none',
    padding: theme.spacing(1),
    background: 'white',
  },
  // paper: {
  //   marginTop: theme.spacing(0),
  //   display: 'flex',
  //   flexDirection: 'column',
  //   backgroundColor: 'transparent',
  //   alignItems: 'center',
  // },
  heading: {
    fontSize: "32px",
    marginBottom: '50px',
    fontWeight: "600",
    color: "#252834"
  },
  text: {
    color: "#575858",
    fontSize: "22px",
    marginTop: "50px",
    marginBottom: "100px"
  },
  jobcards: {
    marginLeft: '3vw'
  },
  card: {
    cursor: 'pointer',
    border: '1px solid #EAEAEA',
    padding: '20px',
    marginLeft: '3vw',
    borderRadius: '8px',
    // width: '300px',
    marginBottom: '30px',
    "&:hover": {
      boxShadow: '2px 2px 10px #D7F9F2',
      border: '1px solid #13B493',
    },
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function FourthBox() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} className={classes.main} >
        <Grid item xs={12} >
          <div className={classes.paper1}>
            <Grid container item className={classes.btnContainer} >
              <Grid item xs={4} >
                <div className={classes.paper} style={{ textAlign: 'center', boxShadow: 'none' }}>
                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    className={classes.btnFeatured}
                  >
                    Featured Jobs
                  </Button>
                </div>
              </Grid>
              <Grid item xs={4} >
                <div className={classes.paper} style={{ textAlign: 'center', boxShadow: 'none', marginLeft: '60px' }}>
                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    className={classes.btnRecent}
                  >
                    Recent Jobs
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid container item xs={12} spacing={0} className={classes.jobcards} >
          <Grid item xs={5} className={classes.card} >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="sorry!"
                    src={assets.companylogo2}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Part Time
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      ACB Product Sales Specialist
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Mencap Co
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      Brooklyn, NY USA
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5} className={classes.card} >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="sorry!"
                    src={assets.flooop}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Freelance
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      General Ledger Accountant
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      NonStopo Co
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      Flushing, NY USA
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={0} className={classes.jobcards} >
          <Grid item xs={5} className={classes.card} >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="sorry!"
                    src={assets.com}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Internship
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Finance Manager & Health
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Mencap Co
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      Flushing, NY USA
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5} className={classes.card} >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="sorry!"
                    src={assets.advo}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Freelance
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Senior / Staff Nurse
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Shieseido Co
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      Flushing, NY USA
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={0} className={classes.jobcards} >
          <Grid item xs={5} className={classes.card} >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="sorry!"
                    src={assets.visme}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Full Time
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Assistant / Store Keeper
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Shieseido Co
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      Flushing, NY USA
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5} className={classes.card} >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="sorry!"
                    src={assets.logo}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Internship
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Group Marketing Manager
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Mencap Co
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      London W1D 7LH, UK
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
