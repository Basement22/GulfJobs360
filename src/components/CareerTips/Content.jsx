import React from 'react';
import { Link } from 'react-router-dom';

import {
    Typography,
    Divider,
    Paper,
    ButtonBase,
    Grid,
    makeStyles,
    Button,
    List,
    ListItemText,
    ListItem,
} from '@material-ui/core';

import Links from '@material-ui/core/Link';

import { assets } from '../../theme'

//  Styling ` 
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: '100%',
        paddingLeft: '8vw',
        paddingRight: '8vw',
        paddingTop: '120px',
        textAlign: 'left',
    },
    image: {
        width: 128,
        height: '150px',
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));
function CareerTips() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();


    return (
        <div >
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    {/* Top Heading */}
                    <Typography variant="h1" style={{ marginLeft: '20px' }} component="h2">
                        Career Tips
                    </Typography>
                    <Divider variant="middle" style={{ marginTop: '10px', marginBottom: '10px' }} />
                    <Grid container spacing={2}>
                        <Grid item >
                            <ButtonBase className={classes.image}>
                                <img src={assets.profile} style={{ width: '60%' }} alt="Sorry!" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" wrap="nowrap" spacing={0}>
                                <Grid item xs>
                                    <Typography variant="h6" style={{ marginLeft: '3px' }} >
                                        Common Mistakes to Avoid in Interview
                                    </Typography>
                                    <List >
                                        <ul style={{ listStyleType: 'none', marginLeft: '-35px' }}>
                                            <li><Links component={Link} to="/user/career_tips/blogs" style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq andna adadaas</Links></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq </Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka  andna ada</Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq andna ada</Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka andna ada</Link></li>
                                        </ul>
                                    </List>
                                    <Button color="secondary" >Read More</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" style={{ marginTop: '10px', marginBottom: '20px' }} />
                    <Grid container spacing={2}>
                        <Grid item >
                            <ButtonBase className={classes.image}>
                                <img src={assets.profile2} style={{ width: '60%' }} alt="Sorry!" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" wrap="nowrap" spacing={0}>
                                <Grid item xs>
                                    <Typography variant="h6" style={{ marginLeft: '3px' }} >
                                        Common Mistakes to Avoid in Interview
                                    </Typography>
                                    <List >
                                        <ul style={{ listStyleType: 'none', marginLeft: '-35px' }}>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq andna adadaas</Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq </Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka andna ada</Link></li>
                                        </ul>
                                    </List>
                                    <Button color="secondary" >Read More</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" style={{ marginTop: '10px', marginBottom: '20px' }} />
                    <Grid container spacing={2}>
                        <Grid item >
                            <ButtonBase className={classes.image}>
                                <img src={assets.new} style={{ width: '60%' }} alt="Sorry!" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" wrap="nowrap" spacing={0}>
                                <Grid item xs>
                                    <Typography variant="h6" style={{ marginLeft: '3px' }} >
                                        Common Mistakes to Avoid in Interview
                                    </Typography>
                                    <List >
                                        <ul style={{ listStyleType: 'none', marginLeft: '-35px' }}>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq andna adadaas</Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq </Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka  andna ada</Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq andna ada</Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka andna ada</Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq </Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka  andna ada</Link></li>
                                        </ul>
                                    </List>
                                    <Button color="secondary" >Read More</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" style={{ marginTop: '10px', marginBottom: '20px' }} />
                    <Grid container spacing={2}>
                        <Grid item >
                            <ButtonBase className={classes.image}>
                                <img src={assets.profile} style={{ width: '60%' }} alt="Sorry!" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" wrap="nowrap" spacing={0}>
                                <Grid item xs>
                                    <Typography variant="h6" style={{ marginLeft: '3px' }} >
                                        Common Mistakes to Avoid in Interview
                                    </Typography>
                                    <List >
                                        <ul style={{ listStyleType: 'none', marginLeft: '-35px' }}>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq andna adadaas</Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq </Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka  andna ada</Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq andna ada</Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka andna ada</Link></li>
                                        </ul>
                                    </List>
                                    <Button color="secondary" >Read More</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" style={{ marginTop: '10px', marginBottom: '20px' }} />
                    <Grid container spacing={2}>
                        <Grid item >
                            <ButtonBase className={classes.image}>
                                <img src={assets.profile2} style={{ width: '60%' }} alt="Sorry!" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" wrap="nowrap" spacing={0}>
                                <Grid item xs>
                                    <Typography variant="h6" style={{ marginLeft: '3px' }} >
                                        Common Mistakes to Avoid in Interview
                                    </Typography>
                                    <List >
                                        <ul style={{ listStyleType: 'none', marginLeft: '-35px' }}>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq andna adadaas</Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq </Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka andna ada</Link></li>
                                        </ul>
                                    </List>
                                    <Button color="secondary" >Read More</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" style={{ marginTop: '10px', marginBottom: '20px' }} />
                    <Grid container spacing={2}>
                        <Grid item >
                            <ButtonBase className={classes.image}>
                                <img src={assets.new} style={{ width: '60%' }} alt="Sorry!" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" wrap="nowrap" spacing={0}>
                                <Grid item xs>
                                    <Typography variant="h6" style={{ marginLeft: '3px' }} >
                                        Common Mistakes to Avoid in Interview
                                    </Typography>
                                    <List >
                                        <ul style={{ listStyleType: 'none', marginLeft: '-35px' }}>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq andna adadaas</Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq </Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka  andna ada</Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq andna ada</Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka andna ada</Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq </Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka  andna ada</Link></li>
                                        </ul>
                                    </List>
                                    <Button color="secondary" >Read More</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" style={{ marginTop: '10px', marginBottom: '20px' }} />
                    <Grid container spacing={2}>
                        <Grid item >
                            <ButtonBase className={classes.image}>
                                <img src={assets.profile} style={{ width: '60%' }} alt="Sorry!" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" wrap="nowrap" spacing={0}>
                                <Grid item xs>
                                    <Typography variant="h6" style={{ marginLeft: '3px' }} >
                                        Common Mistakes to Avoid in Interview
                                    </Typography>
                                    <List >
                                        <ul style={{ listStyleType: 'none', marginLeft: '-35px' }}>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq andna adadaas</Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq </Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka  andna ada</Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq andna ada</Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka andna ada</Link></li>
                                        </ul>
                                    </List>
                                    <Button color="secondary" >Read More</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" style={{ marginTop: '10px', marginBottom: '20px' }} />
                    <Grid container spacing={2}>
                        <Grid item >
                            <ButtonBase className={classes.image}>
                                <img src={assets.profile2} style={{ width: '60%' }} alt="Sorry!" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" wrap="nowrap" spacing={0}>
                                <Grid item xs>
                                    <Typography variant="h6" style={{ marginLeft: '3px' }} >
                                        Common Mistakes to Avoid in Interview
                                    </Typography>
                                    <List >
                                        <ul style={{ listStyleType: 'none', marginLeft: '-35px' }}>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq andna adadaas</Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq </Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka andna ada</Link></li>
                                        </ul>
                                    </List>
                                    <Button color="secondary" >Read More</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" style={{ marginTop: '10px', marginBottom: '20px' }} />
                    <Grid container spacing={2}>
                        <Grid item >
                            <ButtonBase className={classes.image}>
                                <img src={assets.new} style={{ width: '60%' }} alt="Sorry!" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" wrap="nowrap" spacing={0}>
                                <Grid item xs>
                                    <Typography variant="h6" style={{ marginLeft: '3px' }} >
                                        Common Mistakes to Avoid in Interview
                                    </Typography>
                                    <List >
                                        <ul style={{ listStyleType: 'none', marginLeft: '-35px' }}>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq andna adadaas</Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq </Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka  andna ada</Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq andna ada</Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka andna ada</Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka jasigwq </Link></li>
                                            <li><Link style={{ color: '#0349EA', cursor: 'pointer' }} >lorem ipsum kajs jka  andna ada</Link></li>
                                        </ul>
                                    </List>
                                    <Button color="secondary" >Read More</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" style={{ marginTop: '10px', marginBottom: '20px' }} />
                </Paper>
            </div>
        </div>
    );
}

export default CareerTips;