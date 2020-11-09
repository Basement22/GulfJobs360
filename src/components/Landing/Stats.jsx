import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LocationCityOutlinedIcon from '@material-ui/icons/LocationCityOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: '40px',
        paddingBottom: '0px',
    },
    paper2: {
        boxSizing: 'border-box',
    },
    box1: {
        padding: theme.spacing(1),
        paddingTop: '30px',
        textAlign: "center",
        color: 'white',
        height: '240px',
        "&:hover": {
            cursor: 'pointer',
        },
        borderRadius: '8px',
        color: theme.palette.text.secondary
    },
    box2: {
        padding: theme.spacing(1),
        textAlign: "center",
        height: '240px',
        paddingTop: '30px',
        color: 'white',
        "&:hover": {
            cursor: 'pointer',
            color: 'white',
        },
        borderRadius: '8px',
        color: theme.palette.text.secondary
    },
    box3: {
        padding: theme.spacing(1),
        textAlign: "center",
        paddingTop: '30px',
        height: '240px',
        color: 'white',
        borderRadius: '8px',
        "&:hover": {
            color: 'white',
            cursor: 'pointer',
        },
        color: theme.palette.text.secondary
    },
    box4: {
        padding: theme.spacing(1),
        textAlign: "center",
        height: '240px',
        paddingTop: '30px',
        color: 'white',
        borderRadius: '8px',
        "&:hover": {
            cursor: 'pointer',
            color: 'white',
        },
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
        fontSize: "28px",
        margin: "15px 0px 20px 15px",
        fontWeight: "700",
        color: "#3E3E3E",
    },
    body: {
        color: "grey",
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
                <Grid container item xs={12} spacing={0}>
                    <Grid item xs={12}>
                        <Grid container item xs={12} spacing={0} className={classes.paper2} >
                            <Grid item xs={3}>
                                <div className={classes.box1}>
                                    <WorkOutlineIcon className={classes.lock} />
                                    <Typography component="h3" variant="h3" className={classes.title}>
                                        2523
                                    </Typography>
                                    <Typography component="h3" variant="h3" className={classes.body}>
                                        Jobs Added
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div className={classes.box2}>
                                    <AssignmentTurnedInOutlinedIcon className={classes.search} />
                                    <Typography component="h3" variant="h3" className={classes.title}>
                                        1424
                                    </Typography>
                                    <Typography component="h3" variant="h3" className={classes.body}>
                                        Task Posted
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div className={classes.box3}>
                                    <LocationCityOutlinedIcon className={classes.hire} />
                                    <Typography component="h3" variant="h3" className={classes.title}>
                                        1063
                                    </Typography>
                                    <Typography component="h3" variant="h3" className={classes.body}>
                                        Companies
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div className={classes.box4}>
                                    <GroupOutlinedIcon className={classes.save} />
                                    <Typography component="h3" variant="h3" className={classes.title}>
                                        2845
                                    </Typography>
                                    <Typography component="h3" variant="h3" className={classes.body}>
                                        Freelancer
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
