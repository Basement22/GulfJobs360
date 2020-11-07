import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import FirstBox from '../Landing/FirstBox';
import SecondBox from '../Landing/SecondBox';
import HelpBox from '../Landing/HelpBox';
import ThirdBox from '../Landing/ThirdBox';
import Categories from '../Landing/Categories';
import FourthBox from '../Landing/FourthBox'


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        overflowX: 'hidden',
        flexDirection: 'column',
    },
}));

export default function PersistentDrawerRight() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FirstBox />
            <FourthBox />
            <HelpBox />
            <Categories />
            <SecondBox />
            <ThirdBox />
        </div>
    );
}
