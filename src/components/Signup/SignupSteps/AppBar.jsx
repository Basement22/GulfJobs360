import React from "react";
import { Link } from 'react-router-dom'

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ClearIcon from "@material-ui/icons/Clear";

// import Logo from '../common/Logo'

const drawerWidth = "100vw";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    // boxShadow: "0px 1px 5px grey",
    boxShadow: "none",
    backgroundColor: "#EDF3F3",
    // borderBottom: '1px solid #D8D8D8',
    height: "70px",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  logoicon: {
    flexGrow: 1,
    marginTop: '6px',
    marginLeft: '5vw',
  },
  logo: {
    width: '180px',
    height: '54px',
    [theme.breakpoints.down("xs")]: {
      width: '150px',
      height: '47px',
    },
  },
}));

export default function Header() {
  const classes = useStyles();

//   const [open, setOpen] = React.useState(false);
//   const [close, setClose] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//     setClose(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//     setClose(false);
//   };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        className={clsx(classes.appBar)}
      >
        <Toolbar>
          <div className={classes.logoicon}>
          <h1 style={{color: '#252834'}}>GulfJobs. <b style={{color: '#13B493'}}>360</b></h1>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}