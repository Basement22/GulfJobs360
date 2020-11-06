import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import FindInPageIcon from '@material-ui/icons/FindInPageOutlined';
import ContactMailIcon from '@material-ui/icons/ContactMailOutlined';
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";

import { assets } from '../../theme'
// import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
// import BubbleChartOutlinedIcon from "@material-ui/icons/BubbleChartOutlined";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: '60px',
        paddingBottom: '80px',
    },
    paper1: {
        padding: theme.spacing(1),
        textAlign: "left",
        width: '450px',
        paddingLeft: '8vw',
        marginBottom: '30px',
        boxSizing: 'border-box',
        color: theme.palette.text.secondary
    },
    paper2: {
        paddingLeft: '115px',
        boxSizing: 'border-box',
    },
    paper3: {
        padding: theme.spacing(1),
        textAlign: "center",
        width: '90%',
        paddingLeft: '8vw',
        boxSizing: 'border-box',
        color: theme.palette.text.secondary
    },
    cat1: {
        padding: theme.spacing(1),
        textAlign: "center",
        height: '180px',
        paddingTop: '55px',
        marginBottom: '30px',
        width: '220px',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${assets.bgcat})`,
        backgroundSize: 'cover',
        boxShadow: '2px 2px 20px grey',
        color: 'white',
        borderRadius: '8px',
        backgroundColor: '#13B493',
        color: theme.palette.text.secondary
    },
    cat2: {
        padding: theme.spacing(1),
        textAlign: "center",
        height: '180px',
        paddingTop: '55px',
        backgroundRepeat: 'no-repeat',
        marginBottom: '30px',
        backgroundSize: 'cover',
        boxShadow: '2px 2px 20px grey',
        width: '220px',
        backgroundImage: `url(${assets.bgcat})`,
        color: 'white',
        borderRadius: '8px',
        backgroundColor: '#13B493',
        color: theme.palette.text.secondary
    },
    cat3: {
        padding: theme.spacing(1),
        textAlign: "center",
        height: '180px',
        paddingTop: '55px',
        backgroundImage: `url(${assets.bgcat})`,
        marginBottom: '30px',
        boxShadow: '2px 2px 20px grey',
        width: '220px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: 'white',
        borderRadius: '8px',
        backgroundColor: '#13B493',
        color: theme.palette.text.secondary
    },
    cat4: {
        padding: theme.spacing(1),
        textAlign: "center",
        marginBottom: '30px',
        height: '180px',
        backgroundImage: `url(${assets.bgcat})`,
        paddingTop: '55px',
        boxShadow: '2px 2px 20px grey',
        color: 'white',
        backgroundSize: 'cover',
        width: '220px',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
        backgroundColor: '#13B493',
        color: theme.palette.text.secondary
    },
    cat5: {
        padding: theme.spacing(1),
        textAlign: "center",
        marginBottom: '30px',
        boxShadow: '2px 2px 20px grey',
        height: '180px',
        paddingTop: '55px',
        backgroundImage: `url(${assets.bgcat})`,
        backgroundSize: 'cover',
        color: 'white',
        backgroundRepeat: 'no-repeat',
        width: '220px',
        borderRadius: '8px',
        backgroundColor: '#13B493',
        color: theme.palette.text.secondary
    },
    cat6: {
        padding: theme.spacing(1),
        textAlign: "center",
        marginBottom: '30px',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${assets.bgcat})`,
        backgroundSize: 'cover',
        height: '180px',
        paddingTop: '55px',
        boxShadow: '2px 2px 20px grey',
        color: 'white',
        width: '220px',
        borderRadius: '8px',
        backgroundColor: '#13B493',
        color: theme.palette.text.secondary
    },
    cat7: {
        padding: theme.spacing(1),
        textAlign: "center",
        marginBottom: '30px',
        backgroundRepeat: 'no-repeat',
        height: '180px',
        backgroundImage: `url(${assets.bgcat})`,
        paddingTop: '55px',
        color: 'white',
        backgroundSize: 'cover',
        width: '220px',
        boxShadow: '2px 2px 20px grey',
        borderRadius: '8px',
        backgroundColor: '#13B493',
        color: theme.palette.text.secondary
    },
    cat8: {
        padding: theme.spacing(1),
        textAlign: "center",
        backgroundImage: `url(${assets.bgcat})`,
        marginBottom: '30px',
        boxShadow: '2px 2px 20px grey',
        height: '180px',
        paddingTop: '55px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        width: '220px',
        borderRadius: '8px',
        backgroundColor: '#13B493',
        color: theme.palette.text.secondary
    },
    heading: {
        fontSize: "32px",
        // marginTop: "2vh",
        fontWeight: "600",
        color: "#252834"
    },
    text: {
        color: "#575858",
        fontSize: "22px",
        marginTop: "50px",
        marginBottom: "100px"
    },
    title: {
        fontSize: "16px",
        fontWeight: '200',
        margin: "15px 0px 20px 15px",
        fontWeight: "600",
        color: 'white',
    },
    body: {
        color: 'white',
        // color: "#575858",
        fontSize: "16px",
        margin: "15px 0px 20px 15px",
        // marginTop: "50px",
        marginBottom: "100px"
    },
    lock: {
        fontSize: '70px',
        fontWeight: '100',
        marginLeft: '5px',
        color: '#13B493',
    },
    search: {
        fontSize: '70px',
        fontWeight: '100',
        marginLeft: '5px',
        color: '#13B493'
    },
    hire: {
        fontSize: '70px',
        fontWeight: '100',
        marginLeft: '15px',
        color: '#13B493'
    },
    save: {
        fontSize: '70px',
        fontWeight: '100',
        marginLeft: '10px',
        color: '#13B493'
    },
}));

export default function FourthBox() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={5} spacing={0}>
                    <Grid item xs={12}>
                        <div className={classes.paper1}>
                            <Typography component="h1" variant="h2" className={classes.heading} >
                                Popular Job Categories
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
                <Grid container className={classes.paper2} spacing={0}>
                    <Grid container item xs={12} spacing={0}>
                        <Grid item xs={3}>
                            <div className={classes.wrap}>
                                <div className={classes.cat1}>
                                    <Typography component="h3" variant="h3" className={classes.title}>
                                        Design & Multimedia
                                    </Typography>
                                    <Typography component="h3" variant="h3" className={classes.body}>
                                        4 Open Positions
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className={classes.cat2}>
                                <div className={classes.wrap}>

                                    <Typography component="h3" variant="h3" className={classes.title}>
                                        Education Training
                                </Typography>
                                    <Typography component="h3" variant="h3" className={classes.body}>
                                        4 Open Positions
                                </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className={classes.cat3}>
                                <div className={classes.wrap}>
                                    <Typography component="h3" variant="h3" className={classes.title}>
                                        Accounting / Finance
                                </Typography>
                                    <Typography component="h3" variant="h3" className={classes.body}>
                                        4 Open Positions
                                </Typography>

                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className={classes.cat4}>
                                <div className={classes.wrap}>

                                    <Typography component="h3" variant="h3" className={classes.title}>
                                        Human Resource
                                </Typography>
                                    <Typography component="h3" variant="h3" className={classes.body}>
                                        4 Open Positions
                                </Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={0}>
                        <Grid item xs={3}>
                            <div className={classes.cat5}>
                                <div className={classes.wrap}>

                                    <Typography component="h3" variant="h3" className={classes.title}>
                                        Telecommunication
                                </Typography>
                                    <Typography component="h3" variant="h3" className={classes.body}>
                                        4 Open Positions
                                </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className={classes.cat6}>
                                <div className={classes.wrap}>

                                    <Typography component="h3" variant="h3" className={classes.title}>
                                        Resturant / Food Services
                                </Typography>
                                    <Typography component="h3" variant="h3" className={classes.body}>
                                        4 Open Positions
                                </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className={classes.cat7}>
                                <div className={classes.wrap}>

                                    <Typography component="h3" variant="h3" className={classes.title}>
                                        Construction / Facilities
                                </Typography>
                                    <Typography component="h3" variant="h3" className={classes.body}>
                                        4 Open Positions
                                </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className={classes.cat8}>
                                <div className={classes.wrap}>
                                    <Typography component="h3" variant="h3" className={classes.title}>
                                        Health
                                </Typography>
                                    <Typography component="h3" variant="h3" className={classes.body}>
                                        4 Open Positions
                                </Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={0}>
                    <Grid item xs={12}>
                        <div className={classes.paper3}>
                            <Button color="primary" variant="contained" className={classes.btnBrowse} >Browse All Categories</Button>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
