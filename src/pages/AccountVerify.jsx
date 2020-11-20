import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from '../components/Common/AppBar/UserAppBar'
import Content from '../components/Static/Content'
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
            <AppBar />
            <Content />
            <Footer />
        </div>
    );
}
