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
import { assets } from '../../theme'

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
  appBarShift: {
    width: "100%",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
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
  title: {
    flexGrow: 1
  },
  menubtn: {
    marginLeft: '12px',
    marginRight: '5vw',
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "6px",
    },
  },
  hide: {
    display: "none",
  },
  hide2: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundImage: "linear-gradient(#EDF3F3, #EDF3F3, #EDF3F3, #FFFFFF)",
    width: drawerWidth,
    height: `calc(100vh - 70px)`,
    paddingLeft: '7vw'
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  contentShift: {
    width: "100%"
  },
  listmenu: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    flexGrow: 1.7,
  },
  list: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      width: '72%',
    },
    flexDirection: "row",
    width: "60%",
    maxWidth: 500,
  },
  login: {
    textTransform: 'initial',
    color: 'white',
  },
  signup: {
    textTransform: 'initial',
    marginLeft: '12px',
    [theme.breakpoints.up("md")]: {
      marginRight: '5vw',
    },
    [theme.breakpoints.down("xs")]: {
      display: 'none'
    },
  },
  listItem: {
    "&:hover": {
      backgroundColor: "transparent"
    },
    color: '#3D3D3D',
    padding: "0px",
    paddingLeft: '0px',
    fontSize: '50px',
    paddingRight: '0px',
    marginLeft: "17px",
    backgroundColor: "none",
    textAlign: "center"
  },
  listItemText: {
    "&:hover": {
      color: '#13B493',
      backgroundColor: "transparent"
    },
    color: '#3D3D3D',
    padding: "0px",
    marginLeft: "0px",
    backgroundColor: "none",
    textAlign: "center"
  },
  btnlogo: {
    "&:hover" : {
      backgroundColor: 'transparent'
    }
  },
}));

export default function Header() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [close, setClose] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setClose(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setClose(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <div className={classes.logoicon}>
          {/* <h1 style={{color: '#252834'}}>GulfJobs. <b style={{color: '#13B493'}}>360</b></h1> */}
          <Button component={Link} className={classes.btnlogo} to="/" disableRipple={true} > <img src={assets.gulfBlackLogo} style={{marginTop: '0px', cursor: 'pointer', width: '180px'}} alt="Sorry!"/> </Button>
          </div>
          <div className={classes.listmenu}>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              className={classes.list}
            >
              <ListItem
                button
                component={Link}
                disableRipple={true}
                to="/"
                style={{ marginLeft: "0px" }}
                className={classes.listItem}
              >
                <ListItemText primary="Home" className={classes.listItemText} />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/user/jobs"
                disableRipple={true}
                className={classes.listItem}
              >
                <ListItemText primary="Jobs" className={classes.listItemText} />
              </ListItem>
              <ListItem
                button
                disableRipple={true}
                to="/employers/signup"
                component={Link}
                className={classes.listItem}
              >
                <ListItemText primary="Employers" className={classes.listItemText} />
              </ListItem>
              <ListItem
                button
                disableRipple={true}
                to="/user/signup"
                component={Link}
                className={classes.listItem}
              >
                <ListItemText primary="Candidates" className={classes.listItemText} />
              </ListItem>
              <ListItem
                button
                disableRipple={true}
                to="/user/services"
                component={Link}
                className={classes.listItem}
              >
                <ListItemText primary="Pages" className={classes.listItemText} />
              </ListItem>
            </List>
          </div>
          <Button color="secondary" variant="contained" component={Link} to="/login" className={classes.login} >Login</Button>
          <Button color="secondary" variant="outlined" component={Link} to="/signup" className={classes.signup} >Sign up</Button>
          <div className={classes.menubtn}>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerClose}
              className={clsx(!close && classes.hide2)}
            >
              <ClearIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="bottom"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <List>
          {["Find Jobs", "Services", "Career Tips", "Post Jobs"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}