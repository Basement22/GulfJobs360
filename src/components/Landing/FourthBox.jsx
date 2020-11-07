import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
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
    color: theme.palette.text.secondary
  },
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
  // heading: {
  //   fontSize: "40px",
  //   marginTop: "4vh",
  //   fontWeight: "600",
  //   color: "#075A5D"
  // },
  // text: {
  //   color: "#2F2F2F",
  //   fontSize: "22px",
  //   marginTop: "50px",
  //   marginBottom: "100px"
  // },
  // cardsgrid: {
  //   // marginRight: '10vw',
  //   // marginLeft: '10vw',
  //   marginBottom: '180px',
  // },
  // paper2: {
  //   width: 250,
  //   height: 325,
  //   paddingBottom: '10px',
  //   boxShadow: "2px 2px 30px #BEBEBE",
  //   [theme.breakpoints.down("750")]: {
  //     width: '70vw',
  //     height: 'auto'
  //   },
  //   borderRadius: "8px",
  //   paddingTop: "10px",
  // },
  // code: {
  //   marginLeft: "15px",
  //   width: "60px",
  //   height: "60px",
  //   color: "#17CCA3"
  // },
  // file: {
  //   marginLeft: "15px",
  //   width: "40px",
  //   height: "55px",
  //   color: "#17CCA3"
  // },
  // chart: {
  //   marginLeft: "15px",
  //   width: "45px",
  //   height: "55px",
  //   color: "#17CCA3"
  // },
  // title: {
  //   color: "#0E4B7A",
  //   fontSize: '26px',
  //   marginLeft: "20px",
  //   fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  // },
  // body: {
  //   color: "grey",
  //   marginLeft: "20px",
  //   marginRight: '20px',
  //   marginBottom: '30px',
  //   marginTop: '5px',
  //   fontWeight: '200',
  //   fontSize: '18px',
  //   background: 'transparent',
  //   fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  // },
  // paper3: {
  //   width: 250,
  //   height: 325,
  //   paddingBottom: '10px',
  //   [theme.breakpoints.down("750")]: {
  //     width: '70vw',
  //     height: 'auto'
  //   },
  //   paddingTop: "10px",
  //   borderRadius: "8px",
  //   boxShadow: "2px 2px 30px #BEBEBE",
  // },
  // paper4: {
  //   width: 250,
  //   height: 325,

  //   paddingBottom: '10px',
  //   [theme.breakpoints.down("750")]: {
  //     width: '70vw',
  //     height: 'auto'
  //   },
  //   paddingTop: "10px",
  //   borderRadius: "8px",
  //   boxShadow: "2px 2px 30px #BEBEBE",
  // }
}));

export default function FourthBox() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} className={classes.main} >
        <Grid item xs={12}>
          <div className={classes.paper1}>
            <Typography component="h1" variant="h2" className={classes.heading} >
              Recent Jobs
            </Typography>
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
          {/* <Grid item xs={2} style={{width: '20px'}}>

          </Grid> */}
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
