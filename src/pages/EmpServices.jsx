import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import PlanAppBar from '../components/Common/AppBar/PlanAppBar';
import Content from '../components/Plans/Content'
import Footer from '../components/Landing/Footer'

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        overflowX: 'hidden',
        overflowY: 'hidden',
        flexDirection: 'column',
    },
}));

export default function PersistentDrawerRight() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <PlanAppBar />
            <Content />
            <Footer />
        </div>
    );
}
