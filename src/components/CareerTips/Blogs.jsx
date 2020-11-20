import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider, IconButton, TextField, Button } from '@material-ui/core';

import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded';

import AppBar from '../Common/AppBar/UserAppBar'
import Footer from '../Landing/Footer'
import RecommendedArticle from './RecommendedArticle'
import BreadCrumbs from './BreadCrumbs'
import SideBar from './SideBar'

import { assets } from '../../theme'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#ffffff',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        paddingLeft: '8vw',
        marginTop: '50px',
        paddingRight: '8vw',
        color: theme.palette.text.secondary,
    },
    heading: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        marginTop: '20px',
        fontSize: '20px',
        color: '#252834',
    },
    title: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        marginTop: '30px',
        fontSize: '20px',
        fontWeight: '600',
        color: '#393939',
    },
    text: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
        marginTop: '20px',
        // marginRight: '15vw',
        fontSize: '18px',
        fontWeight: '400',
        textAlign: 'justify',
        color: '#2A2A2A',
        marginBottom: '20px'
    },
    paperfield: {
        marginTop: '5vh',
        // marginLeft: '30px',
        marginRight: '3vw',
        [theme.breakpoints.down("xs")]: {
            marginLeft: '8vw',
            marginRight: '8vw',
        },
        // boxShadow: '0px 1px 0px 0.1px #252834',
        // boxSizing: 'border-box',
        paddingLeft: '10px',
        paddingRight: '0px',
        marginBottom: '30px',
        width: '50%',
    },
    textfield: {

        marginTop: '0px',
        marginBottom: '0px',
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar />
            <Grid container spacing={0}>
                <Grid item xs={8}>
                    <div className={classes.paper}>
                        <BreadCrumbs />
                        <Divider style={{ marginTop: '10px', marginBottom: '30px' }} />
                        <img src={assets.blogbanner} style={{ width: '70%' }} alt="sorry!" />
                        <Typography component="h1" className={classes.heading} variant="h1" >Common Mistakes to Avoid During a Virtual Interview</Typography>
                        <Divider style={{ marginTop: '10px', marginBottom: '30px' }} />
                        <Typography component="h1" className={classes.text} variant="h1" ><pre style={{ wordWrap: 'break-word', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '18px', whiteSpace: 'pre-wrap' }} >     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae consequuntur nam tempore asperiores exercitationem adipisci error magnam quas, ea nostrum libero iste quaerat laboriosam aspernatur rerum mollitia, magni iusto quia voluptatibus. Animi labore itaque consectetur illo corrupti facere sit! Odit ducimus quia dicta ad ab culpa iusto aliquid corrupti quae accusamus asperiores sit minima, magnam voluptatem minus cum consectetur molestiae vel pariatur recusandae accusantium nesciunt dolore? Harum praesentium quam eligendi veniam cum ipsam consequatur molestiae quidem veritatis blanditiis? Maiores ipsa minus voluptate voluptatem modi deleniti autem, est tenetur pariatur consectetur fuga eaque nostrum iusto vitae, sint adipisci voluptates possimus quaerat ad aperiam velit maxime.</pre>
                            <pre style={{ wordWrap: 'break-word', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '18px', whiteSpace: 'pre-wrap' }} >     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae consequuntur nam tempore asperiores exercitationem adipisci error magnam quas, ea nostrum libero iste quaerat laboriosam aspernatur rerum mollitia, magni iusto quia voluptatibus. Animi labore itaque consectetur illo corrupti facere sit! Odit ducimus quia dicta ad ab culpa iusto aliquid corrupti quae accusamus asperiores sit minima, magnam voluptatem minus cum consectetur molestiae vel pariatur recusandae accusantium nesciunt dolore? Harum praesentium quam eligendi veniam cum ipsam consequatur molestiae quidem veritatis blanditiis? Maiores ipsa minus voluptate voluptatem modi deleniti autem, est tenetur pariatur consectetur fuga eaque nostrum iusto vitae, sint adipisci voluptates possimus quaerat ad aperiam velit maxime magnam voluptatem minus cum consectetur molestiae vel pariatur recusandae accusantium nesciunt dolore? Harum praesentium quam eligendi veniam cum ipsam consequatur molestiae quidem veritatis blanditiis? Maiores ipsa minus voluptate voluptatem modi deleniti autem, est tenetur pariatur consectetur fuga eaque nostrum iusto vitae, sint adipisci voluptates possimus quaerat ad aperiam velit maxime.</pre>
                            <pre style={{ wordWrap: 'break-word', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '18px', whiteSpace: 'pre-wrap' }} >     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae consequuntur nam tempore asperiores exercitationem adipisci error magnam quas, ea nostrum libero iste quaerat laboriosam aspernatur rerum mollitia, magni iusto quia voluptatibus. Animi labore itaque consectetur, magnam voluptatem minus cum consectetur molestiae vel pariatur recusandae accusantium nesciunt dolore? Harum praesentium quam eligendi veniam cum ipsam consequatur molestiae quidem veritatis blanditiis? Maiores ipsa minus voluptate voluptatem modi deleniti autem, est tenetur pariatur consectetur fuga eaque nostrum iusto vitae, sint adipisci voluptates possimus quaerat ad aperiam velit maxime.</pre>
                            <pre style={{ wordWrap: 'break-word', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '18px', whiteSpace: 'pre-wrap' }} >     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae consequuntur nam tempore asperiores exercitationem adipisci error magnam quas, ea nostrum libero iste quaerat laboriosam aspernatur rerum mollitia, magni iusto quia voluptatibus. Animi labore itaque consectetur illo corrupti facere sit! Odit ducimus quia dicta ad ab culpa iusto aliquid corrupti quae accusamus asperiores sit minima.</pre>
                        </Typography>
                        <div style={{ display: 'flex' }} >
                            <IconButton color="secondary" aria-label="add an alarm">
                                <ThumbUpRoundedIcon />
                            </IconButton>
                            <IconButton color="secondary" aria-label="add an alarm">
                                <ThumbDownRoundedIcon />
                            </IconButton>
                        </div>
                        <Divider style={{ marginTop: '10px', marginBottom: '30px' }} />
                        <div className={classes.paperfield}>
                            <TextField
                                margin="normal"
                                multiline={true}
                                rows={3}
                                color='primary'
                                className={classes.textfield}
                                required
                                fullWidth
                                size="small"
                                label="Comment"
                                name="message"
                                autoComplete="message"
                            />
                        </div>
                        <Button variant="contained" color="primary" style={{ marginBottom: '30px' }} className={classes.send} >
                            Comment
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={3} >
                    <SideBar />
                </Grid>
                <Grid item xs={12} >
                    <RecommendedArticle />
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
}
