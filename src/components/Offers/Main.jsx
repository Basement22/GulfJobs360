import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import OfferAppBar from '../Common/AppBar/OfferAppBar'
import Content from './Content'
import Footer from '../Landing/Footer'

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
            <OfferAppBar />
            <Content />
            <Footer />
        </div>
    );
}
