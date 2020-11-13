import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from '../Landing/AppBar'
import Footer from '../Landing/Footer'
import Content from './Content'

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
