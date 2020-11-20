import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import FindInPageIcon from '@material-ui/icons/FindInPageOutlined';
import ContactMailIcon from '@material-ui/icons/ContactMailOutlined';
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import Paper from "@material-ui/core/Paper";

import {assets} from '../../theme'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#DFFFFA",
        paddingTop: '60px',
        paddingBottom: '80px',
    },
    paper1: {
        padding: theme.spacing(1),
        textAlign: "left",
        width: '450px',
        paddingLeft: '8vw',
        boxSizing: 'border-box',
        color: theme.palette.text.secondary
    },
    paper2: {
        paddingRight: "5vw",
        boxSizing: 'border-box',
        paddingTop: '18px',
    },
    box1: {
        padding: theme.spacing(1),
        paddingTop: '30px',
        textAlign: "left",
        color: 'white',
        marginBottom: '30px',
        height: '280px',
        "&:hover": {
            // backgroundColor: '#13B493',
            cursor: 'pointer',
            border: '1px solid #13B493'
            // color: 'white',
        },
        width: '350px',
        borderRadius: '8px',
        // backgroundColor: 'orange',
        color: theme.palette.text.secondary
    },
    box2: {
        padding: theme.spacing(1),
        textAlign: "left",
        height: '280px',
        paddingTop: '30px',
        marginBottom: '30px',
        color: 'white',
        width: '350px',
        "&:hover": {
            // backgroundColor: '#13B493',
            cursor: 'pointer',
            border: '1px solid #13B493',
            color: 'white',
        },
        borderRadius: '8px',
        // backgroundColor: 'orange',
        color: theme.palette.text.secondary
    },
    box3: {
        padding: theme.spacing(1),
        textAlign: "left",
        height: '280px',
        paddingTop: '30px',
        marginBottom: '30px',
        width: '350px',
        color: 'white',
        borderRadius: '8px',
        "&:hover": {
            color: 'white',
            // backgroundColor: '#13B493',
            border: '1px solid #13B493',
            cursor: 'pointer',
        },
        // backgroundColor: 'orange',
        color: theme.palette.text.secondary
    },
    box4: {
        padding: theme.spacing(1),
        textAlign: "left",
        marginBottom: '30px',
        height: '280px',
        paddingTop: '30px',
        color: 'white',
        width: '350px',
        borderRadius: '8px',
        "&:hover": {
            // backgroundColor: 'grey',
            cursor: 'pointer',
            border: '1px solid #13B493',
            color: 'white',
        },
        // backgroundColor: 'orange',
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
        fontSize: "22px",
        margin: "15px 0px 20px 15px",
        fontWeight: "600",
        // color: "#252834",
    },
    body: {
        // color: "#575858",
        fontSize: "20px",
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
                                How we can help you.
                            </Typography>
                            <Typography component="h3" variant="h3" className={classes.text}>
                                Search all the open positions on the
                                web. Get your own personalized
                                salary estimate.
                            </Typography>
                            <Typography component="h1" variant="h2" className={classes.heading} >
                                Jobs that fit your life.
                            </Typography>
                            <Typography component="h3" variant="h3" className={classes.text}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, corporis sit fugiat reprehenderit minus quidem optio eligendi accusamus architecto illum..
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
                <Grid container item xs={7} spacing={0}>
                    <Grid item xs={12}>
                        <Grid container item xs={12} spacing={0} className={classes.paper2} >
                            <Grid item xs={6}>
                                <div className={classes.box1}>
                                    <LockOpenIcon className={classes.lock} />
                                    <Typography component="h3" variant="h3" className={classes.title}>
                                        Create An Account
                                    </Typography>
                                    <Typography component="h3" variant="h3" className={classes.body}>
                                        Post a job to tell us about your project. We'll quickly match you with the right freelancers.
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className={classes.box2}>
                                    <FindInPageIcon className={classes.search} />
                                    <Typography component="h3" variant="h3" className={classes.title}>
                                        Search Jobs
                                    </Typography>
                                    <Typography component="h3" variant="h3" className={classes.body}>
                                        Post a job to tell us about your project. We'll quickly match you with the right freelancers.
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className={classes.box3}>
                                    <ContactMailIcon className={classes.hire} />
                                    <Typography component="h3" variant="h3" className={classes.title}>
                                        Hire The Best One
                                    </Typography>
                                    <Typography component="h3" variant="h3" className={classes.body}>
                                        Post a job to tell us about your project. We'll quickly match you with the right freelancers.
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className={classes.box4}>
                                    <SaveOutlinedIcon className={classes.save} />
                                    <Typography component="h3" variant="h3" className={classes.title}>
                                        Save & Apply
                                    </Typography>
                                    <Typography component="h3" variant="h3" className={classes.body}>
                                        Post a job to tell us about your project. We'll quickly match you with the right freelancers.
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
