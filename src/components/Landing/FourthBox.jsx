import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CodeIcon from "@material-ui/icons/Code";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import BubbleChartOutlinedIcon from "@material-ui/icons/BubbleChartOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    backgroundColor: "#FFF",
    backgroundImage: "linear-gradient(#EDF3F3, #F3F3F3, #F3F3F3, #EDF3F3)",
  },
  paper1: {
    paddingTop: "3vh",
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  heading: {
    fontSize: "40px",
    marginTop: "4vh",
    fontWeight: "600",
    color: "#075A5D"
  },
  text: {
    color: "#2F2F2F",
    fontSize: "22px",
    marginTop: "50px",
    marginBottom: "100px"
  },
  cardsgrid: {
    // marginRight: '10vw',
    // marginLeft: '10vw',
    marginBottom: '180px',
  },
  paper2: {
    width: 250,
    height: 325,
    paddingBottom: '10px',
    boxShadow: "2px 2px 30px #BEBEBE",
    [theme.breakpoints.down("750")]: {
      width: '70vw',
      height: 'auto'
    },
    borderRadius: "8px",
    paddingTop: "10px",
    // backgroundColor: "#008AB7"
  },
  code: {
    marginLeft: "15px",
    width: "60px",
    height: "60px",
    color: "#17CCA3"
  },
  file: {
    marginLeft: "15px",
    width: "40px",
    height: "55px",
    color: "#17CCA3"
  },
  chart: {
    marginLeft: "15px",
    width: "45px",
    height: "55px",
    color: "#17CCA3"
  },
  title: {
    color: "#0E4B7A",
    fontSize: '26px',
    marginLeft: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  body: {
    color: "grey",
    marginLeft: "20px",
    marginRight: '20px',
    marginBottom: '30px',
    marginTop: '5px',
    fontWeight: '200',
    fontSize: '18px',
    background: 'transparent',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  paper3: {
    width: 250,
    height: 325,
    paddingBottom: '10px',
    [theme.breakpoints.down("750")]: {
      width: '70vw',
      height: 'auto'
    },
    paddingTop: "10px",
    borderRadius: "8px",
    boxShadow: "2px 2px 30px #BEBEBE",
    // backgroundColor: "#07485D"
  },
  paper4: {
    width: 250,
    height: 325,

    paddingBottom: '10px',
    [theme.breakpoints.down("750")]: {
      width: '70vw',
      height: 'auto'
    },
    paddingTop: "10px",
    borderRadius: "8px",
    boxShadow: "2px 2px 30px #BEBEBE",
    // backgroundColor: "#0E6B7E"
  }
}));

export default function FourthBox() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} direction="column" alignItems="center" >
        <Grid item xs={10} sm={7}>
          <div className={classes.paper1}>
            <Typography component="h1" variant="h2" className={classes.heading}>
              Why GulfJobs. 360?
            </Typography>
            <Typography component="h3" variant="h3" className={classes.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Grid container className={classes.cardsgrid} spacing={0}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={10}>
                <Grid item>
                  <div className={classes.paper2}>
                    <CodeIcon className={classes.code} />
                    <Typography variant="h4" className={classes.title}>
                      Find your 
                      dream Job
                    </Typography>
                    <Typography
                      component="h6"
                      variant="h6"
                      className={classes.body}
                    >
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                    </Typography>
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.paper3}>
                    <FileCopyOutlinedIcon className={classes.file} />
                    <Typography variant="h4" className={classes.title}>
                      Manage Jobs &
                      Browse
                      Candidate
                    </Typography>
                    <Typography
                      component="h6"
                      variant="h6"
                      className={classes.body}
                    >
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                    </Typography>
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.paper4}>
                    <BubbleChartOutlinedIcon className={classes.chart} />
                    <Typography variant="h4" className={classes.title}>
                      Career Tips
                    </Typography>
                    <Typography
                      component="h6"
                      variant="h6"
                      className={classes.body}
                    >
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
