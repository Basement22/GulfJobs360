import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { assets } from '../../theme'

const useStyles = makeStyles((theme) => ({
    login: {
        flexGrow: 1,
        boxShadow: 'none',
        height: '75vh',
        backgroundImage: `url(${assets.bgbanner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    leftpaper: {
        padding: theme.spacing(2),
        height: '100%',
        paddingLeft: '10vw',
        boxSizing: 'border-box',
        color: theme.palette.text.secondary,
        // [theme.breakpoints.down('xs')]: {
        //     // borderRadius:'35% 0% 48% 52% / 0% 26% 5% 4%',
        //     height: '50vh',
        // },
    },
    rightpaper: {
        padding: theme.spacing(2),
        height: '100%',
        color: theme.palette.text.secondary,
        paddingLeft: '8vw',
        boxSizing: 'border-box',
        // [theme.breakpoints.down('xs')]: {
        //     marginTop: '-250px',
        //     height: '50vh',
        //     backgroundColor: "transparent",
        // },
    },
    heading: {
        fontSize: "32px",
        fontWeight: "600",
        color: "#FFFFFF",
        marginTop: '80px',
    },
    text: {
        color: "#FFFFFF",
        fontSize: "20px",
        marginTop: "30px",
        marginBottom: "40px"
    },
    btntext: {
        fontSize: "16px",
        fontWeight: "200",
        marginBottom: '4px',
        color: "#FFFFFF",
    },
    image: {
        width: 50,
        height: 50,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    btnApple: {
        padding: theme.spacing(1),
        // margin: 'auto',
        width: '235px',
        borderRadius: '8px',
        background: 'transparent',
        cursor: 'pointer',
        border: '1px solid white',
        "&:hover": {
            border: '1px solid #13B493',
            backgroundColor: '#13B493',
        },
    },
    btnPlay: {
        padding: theme.spacing(1),
        // margin: 'auto',
        width: '235px',
        borderRadius: '8px',
        background: 'transparent',
        cursor: 'pointer',
        marginLeft: '30px',
        border: '1px solid white',
        "&:hover": {
            border: '1px solid #13B493',
            backgroundColor: '#13B493',
        },
    },
    mobImg: {
        // boxShadow: '2px 2px 30px #D9D9D9',
        marginTop: '20px',
        width: '24vw',
    },
}));

export default function Login() {
    const classes = useStyles();

    return (
        <div className={classes.login}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={7}>
                    <div className={classes.leftpaper}>
                        <Typography component="h1" variant="h2" className={classes.heading} >
                            Download & Enjoy
                        </Typography>
                        <Typography component="h3" variant="h3" className={classes.text}>
                            Search, find and apply for jobs directly on your mobile device <br /> or desktop Manage all
                            of the jobs you have applied to from a <br /> convenience secure dashboard.
                        </Typography>
                        <Grid container item >
                            <div className={classes.btnApple}>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} src={assets.apple} alt="sorry!" />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={4} sm container style={{ marginTop: '4px' }}>
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography component="h1" variant="h2" className={classes.btntext} >
                                                    Avaiable now on the
                                                </Typography>
                                                <Typography component="h1" variant="h2" className={classes.btntext} >
                                                    Apple Store
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className={classes.btnPlay}>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} src={assets.googleplay} alt="sorry!" />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={4} sm container style={{ marginTop: '4px' }}>
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography component="h1" variant="h2" className={classes.btntext} >
                                                    Get it on
                                                </Typography>
                                                <Typography component="h1" variant="h2" className={classes.btntext} >
                                                    Gooogle Play
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <div className={classes.rightpaper}>
                        <img src={assets.mobImg}  alt="Sorry!" className={classes.mobImg} />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
