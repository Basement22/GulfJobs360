import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import SearchCard from './SearchCard';
import ProfileCard from './ProfileCard';
import FeaturedCandidates from './FeaturedCandidates';
import RecommendedCard from './RecommendedCard';
import FAQ from './FAQ';
import TipsCard from './TipsCard';
import EmployersView from './EmployersView';
import Boost from './Boost';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '70px',
        paddingLeft: '8vw',
        backgroundColor: 'white',
        // backgroundImage: "linear-gradient(135deg, #84F5C5, #20EDD7, #F9F9F9, #04F58F)",
        paddingRight: '8vw',
    },
    paper: {
        textAlign: 'left',
        color: theme.palette.text.secondary,
        backgroundColor: 'white',
        paddingBottom: '20px',
        border: '1px solid #D7D7D7',
        boxShadow: '2px 2px 30px #DFDFDF',
        borderRadius: '8px',
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <div className={classes.paper} style={{ border: 'none', marginTop: '30px', display: 'flex', backgroundColor: '#6EE5CD', justifyContent: 'center' }} >
                        <SearchCard />
                    </div>
                </Grid>
                {/* <Grid container item xs={12} spacing={3} > */}
                    <Grid item xs={8} >
                        <div className={classes.paper} style={{ border: 'none', marginBottom: '0px', backgroundColor: 'transparent', boxShadow: 'none' }} >
                            <RecommendedCard />
                        </div>
                    </Grid>
                    <Grid item xs={4} >
                        <div className={classes.paper} style={{marginTop: '0px', paddingBottom: '0px'}} >
                            <ProfileCard />
                        </div>
                    </Grid>
                {/* </Grid> */}
                <Grid item xs={6} sm={12}>
                    <div className={classes.paper} style={{marginTop: '0px', paddingBottom: '0px'}} >
                        <FeaturedCandidates />
                    </div>
                </Grid>
                <Grid item xs={6} sm={12}>
                    <div className={classes.paper} style={{marginBottom: '0px', paddingBottom: '0px'}} >
                        <FAQ />
                    </div>
                </Grid>
                <Grid item xs={6} sm={12}>
                    <div className={classes.paper}>
                        <TipsCard />
                    </div>
                </Grid>
                {/* <Grid item xs={6} sm={12}>
                    <div className={classes.paper} style={{marginBottom: '0px', paddingBottom: '0px'}} >
                        <EmployersView />
                    </div>
                </Grid> */}
                <Grid item xs={6} sm={12}>
                    <div className={classes.paper} style={{marginBottom: '30px', boxShadow: 'none', border: 'none', paddingBottom: '0px'}} >
                        <Boost />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
