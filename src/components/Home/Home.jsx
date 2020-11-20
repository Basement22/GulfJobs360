import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from '../Common/AppBar/UserAppBar'
import Footer from '../Landing/Footer'
import Content from './Content'
import Banner from '../Landing/Banner';

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
            <Banner />
            <Footer />
        </div>
    );
}
