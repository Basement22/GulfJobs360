import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { assets } from '../../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '50px',
    backgroundColor: '#252834',
  },
  paper1: {
    paddingTop: '50px',
    padding: theme.spacing(2),
    textAlign: "left",
    paddingLeft: "10vw",
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: "left",
    paddingLeft: "10vw",
    height: "240px",
    color: "#F5F5F5"
  },
  paper3: {
    padding: theme.spacing(2),
    textAlign: "left",
    paddingLeft: "2vw",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "10vw"
    },
    height: "240px",
    color: "#F5F5F5"
  },
  paper4: {
    padding: theme.spacing(2),
    textAlign: "left",
    paddingLeft: "2vw",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "10vw"
    },
    height: "240px",
    color: "#F5F5F5"
  },
  paper5: {
    padding: theme.spacing(2),
    textAlign: "left",
    paddingLeft: "2vw",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "10vw"
    },
    height: "240px",
    color: "#F5F5F5"
  },
  title: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#13B493",
    marginBottom: "15px"
  },
  listItem: {
    "&:hover": {
      backgroundColor: "transparent",
      color: "#13B493"
    },
    textAlign: "left",
    padding: "0px",
    paddingLeft: "0px",
    paddingRight: "0px"
  },
  divide: {
    marginLeft: '10vw',
    marginRight: '10vw',
  },
  divider: {
    backgroundColor: '#F3F3F3',
  },
  paper6: {
    padding: theme.spacing(2),
    textAlign: "left",
    height: "85px",
    paddingLeft: "10vw",
    color: theme.palette.text.secondary
  },
  icons: {
    marginTop: "15px",
    marginLeft: "20px"
  },
  paper7: {
    padding: theme.spacing(2),
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    height: "55px",
    color: theme.palette.text.secondary
  },
  paper8: {
    padding: theme.spacing(2),
    textAlign: "right",
    [theme.breakpoints.down("xs")]: {
      textAlign: "left",
      paddingLeft: "10vw"
    },
    paddingRight: "10vw",
    [theme.breakpoints.down("1012")]: {
      paddingRight: '5vw',
    },
    [theme.breakpoints.down("1012")]: {
      paddingRight: '10vw',
    },
    height: "39px",
    paddingTop: "32px",
    color: theme.palette.text.secondary
  },
  copy: {
    fontSize: "16px",
    fontWeight: '100',
    color: "#F5F5F5"
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        {/* <Grid item xs={12}>
          <div className={classes.paper1}>
            <h1 style={{ color: '#17CCA3' }}>360.</h1>
          </div>
        </Grid> */}
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.paper2}>
            <Typography component="h6" variant="h6" className={classes.title}>
              Quik Links
            </Typography>
            <List className={classes.list}>
              <ListItem
                button
                disableRipple={true}
                className={classes.listItem}
              >
                <ListItemText
                  primary="Job Packages"
                  style={{ marginLeft: "0px" }}
                />
              </ListItem>
              <ListItem
                button
                disableRipple={true}
                className={classes.listItem}
              >
                <ListItemText primary="Post New Job" />
              </ListItem>
              <ListItem
                button
                disableRipple={true}
                className={classes.listItem}
              >
                <ListItemText primary="Jobs Listing" />
              </ListItem>
              <ListItem
                button
                disableRipple={true}
                className={classes.listItem}
              >
                <ListItemText primary="Jobs Style Grid" />
              </ListItem>
              <ListItem
                button
                disableRipple={true}
                className={classes.listItem}
              >
                <ListItemText primary="Employers Listing" />
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.paper3}>
            <Typography component="h6" variant="h6" className={classes.title}>
              For Candidates
            </Typography>
            <List className={classes.list}>
              <ListItem
                button
                disableRipple={true}
                className={classes.listItem}
              >
                <ListItemText
                  primary="User Dashboard"
                  style={{ marginLeft: "0px" }}
                />
              </ListItem>
              <ListItem
                button
                disableRipple={true}
                className={classes.listItem}
              >
                <ListItemText primary="CV Packages" />
              </ListItem>
              <ListItem
                button
                disableRipple={true}
                className={classes.listItem}
              >
                <ListItemText primary="Candidate Listing" />
              </ListItem>
              <ListItem
                button
                disableRipple={true}
                className={classes.listItem}
              >
                <ListItemText primary="Candidates Grid" />
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.paper4}>
            <Typography component="h6" variant="h6" className={classes.title}>
              For Employers
            </Typography>
            <List className={classes.list}>
              <ListItem
                button
                disableRipple={true}
                className={classes.listItem}
              >
                <ListItemText
                  primary="Post New"
                  style={{ marginLeft: "0px" }}
                />
              </ListItem>
              <ListItem
                button
                disableRipple={true}
                className={classes.listItem}
              >
                <ListItemText primary="Job Employer Listing" />
              </ListItem>
              <ListItem
                button
                disableRipple={true}
                className={classes.listItem}
              >
                <ListItemText primary="Employers Grid" />
              </ListItem>
              <ListItem
                button
                disableRipple={true}
                className={classes.listItem}
              >
                <ListItemText primary="Job Packages" />
              </ListItem>
              <ListItem
                button
                disableRipple={true}
                className={classes.listItem}
              >
                <ListItemText primary="Job Listing" />
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.paper5}>
            <Typography component="h6" variant="h6" className={classes.title}>
              Newsletter
            </Typography>
            <List className={classes.list}>
              <ListItem
                button
                disableRipple={true}
                className={classes.listItem}
              >
                <ListItemText
                  primary="Case Studies"
                  style={{ marginLeft: "0px" }}
                />
              </ListItem>
              <ListItem
                button
                disableRipple={true}
                className={classes.listItem}
              >
                <ListItemText primary="Browse Jobs" />
              </ListItem>
              <ListItem
                button
                disableRipple={true}
                className={classes.listItem}
              >
                <ListItemText primary="Help" />
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.divide}>
            <Divider className={classes.divider} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.paper6}>
            <img src={assets.github} alt="Sorry!" />
            <img src={assets.in} alt="Sorry!" className={classes.icons} />
            <img src={assets.twitter} alt="Sorry!" className={classes.icons} />
          </div>
        </Grid>
        <Grid item md={4}>
          <div className={classes.paper7}>
            <h1 style={{ color: '#13B493', marginTop: '9px' }}>GulfJobs. <b style={{ color: '#FFFFFF' }}>360</b></h1>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.paper8}>
            <Typography
              component="h6"
              variant="h6"
              className={classes.copy}
            >
              © 2020 --- All Rights Reserved
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
