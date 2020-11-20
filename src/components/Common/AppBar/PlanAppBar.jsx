import React from "react";
import { Link } from 'react-router-dom'

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Popper from "@material-ui/core/Popper";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import MenuList from "@material-ui/core/MenuList";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ClearIcon from "@material-ui/icons/Clear";

// import Logo from '../common/Logo'
import { assets } from '../../../theme'

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
    dropdown: {
        textTransform: 'initial',
        backgroundColor: '#E3E3E3',
        marginLeft: '12px',
        borderRadius: '8px',
        [theme.breakpoints.up("md")]: {
            marginRight: '5vw',
        },
        [theme.breakpoints.down("xs")]: {
            display: 'none'
        },
    },
    btnlogo: {
        "&:hover": {
            backgroundColor: 'transparent'
        }
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
        marginLeft: "8px",
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
    }
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


    // User Drop Down Button
    const [dropDown, setDropDown] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setDropDown((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setDropDown(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setDropDown(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(dropDown);
    React.useEffect(() => {
        if (prevOpen.current === true && dropDown === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = dropDown;
    }, [dropDown]);

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
                        <Button component={Link} className={classes.btnlogo} to="/" disableRipple={true} > <img src={assets.gulfBlackLogo} style={{ marginTop: '0px', cursor: 'pointer', width: '180px' }} alt="Sorry!" /> </Button>
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
                                to="/employers/home"
                                style={{ marginLeft: "0px" }}
                                className={classes.listItem}
                            >
                                <ListItemText primary="Home" className={classes.listItemText} />
                            </ListItem>
                            <ListItem
                                button
                                component={Link}
                                to="/employers/services/about_us"
                                disableRipple={true}
                                className={classes.listItem}
                            >
                                <ListItemText primary="About" className={classes.listItemText} />
                            </ListItem>
                            <ListItem
                                button
                                disableRipple={true}
                                to="/employers/services/faqs"
                                component={Link}
                                className={classes.listItem}
                            >
                                <ListItemText primary="FAQ" className={classes.listItemText} />
                            </ListItem>
                            <ListItem
                                button
                                disableRipple={true}
                                to="/employers/services/contact_us"
                                style={{ marginLeft: '15px' }}
                                component={Link}
                                className={classes.listItem}
                            >
                                <ListItemText primary="Contact" className={classes.listItemText} />
                            </ListItem>
                        </List>
                    </div>
                    <Button
                        ref={anchorRef}
                        aria-controls={dropDown ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        color='secondary'
                        className={classes.dropdown}
                        onClick={handleToggle}
                    >
                        <Avatar alt="Travis Howard" style={{ width: '35px', height: '35px', marginRight: '10px' }} src={assets.employer} />
                        Chris Hemsworth
                        <ArrowDropDownRoundedIcon style={{ fontSize: '40px', marginTop: '-5px' }} />
                    </Button>
                    <Popper open={dropDown} anchorEl={anchorRef.current} style={{ backgroundColor: '#EDF3F3', color: '#343434', marginTop: '11px', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px', width: '160px' }} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <div>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList autoFocusItem={dropDown} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                            <MenuItem component={Link} to="/employers/profile" onClick={handleClose}>Profile</MenuItem>
                                            <MenuItem onClick={handleClose}>My account</MenuItem>
                                            <MenuItem onClick={handleClose}>Settings</MenuItem>
                                            <MenuItem component={Link} to="/" onClick={handleClose}>Logout</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </div>
                            </Grow>
                        )}
                    </Popper>
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
                    {["Home", "About", "FAQ", "Contact"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}