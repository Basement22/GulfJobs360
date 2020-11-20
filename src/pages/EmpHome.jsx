import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from '../components/Common/AppBar/EmployerAppBar'
import Content from '../components/EmpHome/Content'
import Banner from '../components/Landing/Banner';
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
            <Banner />
            <Footer />
        </div>
    );
}
