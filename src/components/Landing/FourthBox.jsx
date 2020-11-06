import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
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
            Recent Jobs
          </div>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
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
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Brooklyn, NY USA
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
