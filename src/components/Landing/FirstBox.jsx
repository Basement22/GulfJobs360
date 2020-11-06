import React from 'react';

import clsx from "clsx";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import LocationOnOutlined from "@material-ui/icons/LocationOnOutlined";
import MyLocation from "@material-ui/icons/MyLocation";
import Visibility from "@material-ui/icons/Visibility";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
// import Button from "@material-ui/core/Button";
// import Button from "@material-ui/core/Button";


import { assets } from '../../theme'
import { InputBase } from '@material-ui/core';
// import { MyLocation } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        width: '100vw',
        [theme.breakpoints.up("md")]: {
            height: 'auto',
        },
        [theme.breakpoints.down("md")]: {
            height: 'auto',
        },
        [theme.breakpoints.down("sm")]: {
            height: 'auto',
        },
        overflow: 'hidden',
        backgroundColor: '',
        backgroundImage: "linear-gradient(to right, #13B493, #13B493, #13b49488, #13b4945d)",
    },
    leftgrid: {
        // backgroundColor: '#13B493',
    },
    paper1: {
        paddingTop: '70px',
        height: '100vh',
        marginLeft: '10vw',
        padding: theme.spacing(0),
        textAlign: 'left',
        [theme.breakpoints.down("xs")]: {
            textAlign: 'center',
            marginLeft: '5vw',
            marginRight: '5vw',
        },
        [theme.breakpoints.down("sm")]: {
            textAlign: 'center',
            marginLeft: '5vw',
            marginRight: '5vw',
        },
        color: theme.palette.text.secondary,
    },
    heading: {
        fontSize: '54px',
        marginTop: '12vh',
        fontWeight: '700',
        color: 'white',
        [theme.breakpoints.down("xs")]: {
            fontSize: '38px',
            marginTop: '8vh',
        },
        [theme.breakpoints.down("1180")]: {
            fontSize: '44px',
        },
    },
    text: {
        fontSize: '20px',
        color: 'white',
        [theme.breakpoints.down("xs")]: {
            fontSize: '22px',
        },
        [theme.breakpoints.down("380")]: {
            fontSize: '18px',
        },
        [theme.breakpoints.down("1180")]: {
            fontSize: '26px',
        },
        [theme.breakpoints.down("1005")]: {
            fontSize: '24px',
        },
        marginTop: '20px',
    },
    getstarted: {
        color: 'white',
        // marginTop: '50px',
        [theme.breakpoints.down("xs")]: {
            fontSize: '22px',
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: '24px',
        },
        [theme.breakpoints.down("1180")]: {
            fontSize: '20px',
        },
        textTransform: 'capitalize',
    },
    paper2: {
        textAlign: 'left',
        height: `calc(92vh)`,
        backgroundColor: '#13B493',
        marginTop: '70px',
        width: '100%',
        color: theme.palette.text.secondary,
        [theme.breakpoints.up("sm")]: {
            display: 'none',
        },
        [theme.breakpoints.down("sm")]: {
            textAlign: 'center',
            display: 'block',
            height: 'auto',
        },
        [theme.breakpoints.down("xs")]: {
            textAlign: 'center',
            height: 'auto',
        },
    },
    // searchbox: {
    //     width: '100%',
    //     backgroundColor: 'white',
    // },
    searchform: {
        backgroundColor: 'white',
        display: 'flex',
        borderRadius: '8px',
        height: '70px',
        // width: '80vw',
        marginTop: '10vh',
        padding: '14px',
        zIndex: '1',
        position: 'absolute',
        flexDirection: 'row',
    },
    body: {
        fontSize: '16px',
        color: 'white',
        [theme.breakpoints.down("xs")]: {
            fontSize: '22px',
        },
        [theme.breakpoints.down("380")]: {
            fontSize: '18px',
        },
        [theme.breakpoints.down("1180")]: {
            fontSize: '26px',
        },
        [theme.breakpoints.down("1005")]: {
            fontSize: '24px',
        },
        // position: 'absolute',
        marginTop: '25vh',
    },
    working: {
        marginTop: '10vh',
        width: '40vw',
        [theme.breakpoints.down("1080")]: {
            width: '45vw',
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: '0vh',
            marginLeft: '10vw',
            width: '80vw',
            marginRight: '10vw',
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: '0vh',
            width: '60vw',
            marginLeft: '10vw',
            marginRight: '10vw',
        },
        [theme.breakpoints.down("480")]: {
            width: '80vw',
        },
        [theme.breakpoints.down("375")]: {
            width: '80vw',
        },
    },
    // margin: {
    //     margin: theme.spacing(1),
    // },
    // textField: {
    //     width: '25ch',
    // },
    paper3: {
        textAlign: 'left',
        height: '92vh',
        marginTop: '70px',
        opacity: '0.4',
        // backgroundColor: 'orange',
        width: '100%',
        color: theme.palette.text.secondary,
        [theme.breakpoints.up("md")]: {
            backgroundImage: `url(${assets.job})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            height: '80vh',
            marginTop: '70px',
        },
        [theme.breakpoints.down("md")]: {
            marginTop: '12vh',
            height: '60vh',
        },
        [theme.breakpoints.down("sm")]: {
            display: 'none',
        },

    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0} >
                <Grid item xs={12} sm={12} md={6} className={classes.leftgrid} >
                    <div className={classes.paper1}>
                        <Typography component='h1' variant='h2' className={classes.heading} >
                            Find Your Next Job, <br />
                            That Suits You Best.
                        </Typography>
                        <Typography component='h3' variant='h3' className={classes.text} >
                            The platform where you can manage
                            and post new jobs, <br /> and where
                            you can find new jobs.
                        </Typography>
                        <div className={classes.searchbox} >
                            <FormControl className={classes.searchform}>
                                {/* <InputLabel htmlFor="standard-adornment-password">Password</InputLabel> */}
                                <InputBase
                                    id="input-with-icon-adornment"
                                    placeholder="Job Title"
                                    // style={{padding: '20px'}}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <SearchOutlined style={{ color: 'grey', fontSize: '30px' }} />
                                        </InputAdornment>
                                    }
                                />
                                <InputBase
                                    id="location-text"
                                    // type={values.showPassword ? 'text' : 'password'}
                                    type="text"
                                    placeholder="Location"
                                    // value={values.password}
                                    // onChange={handleChange('password')}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <LocationOnOutlined style={{ color: 'grey', fontSize: '30px' }} />
                                        </InputAdornment>
                                    }
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                            // onClick={handleClickShowPassword}
                                            // onMouseDown={handleMouseDownPassword}
                                            >
                                                {/* {values.showPassword ? <Visibility /> : <VisibilityOff />} */}
                                                <MyLocation />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                <Button color="primary" variant="contained" className={classes.getstarted} >Browse Jobs</Button>
                            </FormControl>
                        </div>
                        <Typography component='h6' variant='h6' className={classes.body} >
                            Trending Keywords: Designer, Developer, Parmacist, Engineer
                        </Typography>
                    </div>
                    <div className={classes.paper2}>
                        <img src={assets.working} alt="sorry!" className={classes.working} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className={classes.rightgrid} >
                    <div className={classes.paper3}>
                    </div>
                </Grid>
            </Grid>

        </div>
    );
}