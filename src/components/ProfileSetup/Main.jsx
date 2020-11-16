import React from 'react';
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import StepConnector from '@material-ui/core/StepConnector';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
// import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import Button from '@material-ui/core/Button';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import AppBar from '../Landing/AppBar'
import Footer from '../Landing/Footer'
import Main from '../ProfileSetup/Main'
import { assets } from '../../theme'

const QontoConnector = withStyles({
    alternativeLabel: {
        top: '100',
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    active: {
        '& $line': {
            borderColor: '#784af4',
        },
    },
    completed: {
        '& $line': {
            borderColor: '#784af4',
        },
    },
    line: {
        borderColor: '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        backgroundColor: 'white',
        height: 10,
        alignItems: 'center',
    },
    active: {
        color: '#784af4',
    },
    circle: {
        width: 25,
        height: 25,
        borderRadius: '2px',
        backgroundColor: 'currentColor',
    },
    completed: {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
});

function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
        </div>
    );
}

QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: '22',
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg, #252834 0%, #13B493 50%, #2BDAB6 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg, #252834 0%, #13B493 50%, #2BDAB6 100%)',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 80,
        height: 80,
        display: 'flex',
        borderRadius: '8%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, #2BDAB6 0%, #13B493 50%, #252834 100%)',
        // 'linear-gradient( 136deg, #252834 0%, #13B493 50%, #2BDAB6 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, #252834 0%, #13B493 50%, #2BDAB6 100%)',
    },
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <LockOutlinedIcon />,
        2: <BusinessCenterOutlinedIcon />,
        3: <PersonOutlineOutlinedIcon />,
        4: <SchoolOutlinedIcon />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    main: {
        backgroundImage: `url(${assets.bgsignup})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: '#252834',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    submit: {
        padding: theme.spacing(1.5, 0),
        color: 'white',
        marginLeft: '3vw',
        margin: theme.spacing(2, 0, 2),
    },
    box: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        paddingTop: '60px',
        paddingBottom: '60px',
        backgroundColor: '#EDF3F3',
        borderRadius: '6px',
        boxShadow: '4px 4px 40px #252834',
    },
    paper: {
        marginTop: theme.spacing(0),
        display: 'flex',
        flexDirection: 'column',
        width: '25vw',
        textAlign: 'left',
        backgroundColor: 'transparent',
        marginLeft: '2vw',
        alignItems: 'left',
    },
    wrapper: {
        margin: theme.spacing(0),
        position: 'relative',
    },
    // buttonProgress: {
    //     color: green[500],
    //     position: 'absolute',
    //     top: '50%',
    //     left: '50%',
    //     marginTop: -12,
    //     marginLeft: -12,
    // },
    form: {
        width: '90%',
        marginTop: theme.spacing(1),
    },
    submit: {

        padding: theme.spacing(1.5, 2),
        // color: 'white',
        margin: theme.spacing(2, 0, 2),
    },
    heading: {
        // [theme.breakpoints.down('xs')]: {
        //     display: "none",
        // },
        marginTop: '20px',
        fontSize: '24px',
        color: '#252834',
    },
    text: {
        marginTop: '20px',
        fontSize: '20px',
        color: '#252834',
    },
    title: {
        marginTop: '20px',
        fontSize: '18px',
        fontWeight: '500',
        marginBottom: '5px',
        color: '#525252',
    },
    bodytext: {
        marginTop: '20px',
        fontSize: '18px',
        fontWeight: '400',
        color: '#424242',
    },
    wrapper: {
        margin: theme.spacing(0),
        position: 'relative',
    },
    submit: {
        padding: theme.spacing(1.5, 0),
        color: 'white',
        margin: theme.spacing(2, 0, 2),
    },
}));

const option = [
    {
        value: 'asdlsajld',
        label: 'Doctorate',
    },
    {
        value: 'Masters',
        label: 'Masters',
    },
    {
        value: "Basic (Bachelor's, Diploma, School)",
        label: "Basic (Bachelor's, Diploma, School)",
    },
];

function getSteps() {
    return ['Sign Up', 'Experience', 'Personal', 'Education'];
}

// function getStepContent(step) {
//     switch (step) {
//         case 0:
//             return 'Congratulations UserName. You have registered successfully';
//         default:
//             return 'Unknown step';
//     }
// }

export default function CustomizedSteppers() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(1);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        <Main />;
    };

    return (
        <div className={classes.root} style={{ marginTop: '70px' }} >
            <AppBar />
            <div className={classes.main} style={{ paddingTop: '60px', paddingBottom: '60px', paddingLeft: '11vw', paddingRight: '11vw' }} >
                {activeStep === steps.length ? (
                    <div style={{ textAlign: 'center' }} >
                        <div className={classes.box}>
                            All steps completed - you&apos;re finished
                            <Button component={Link} to="/user/profile_setup" onClick={handleReset} className={classes.button}>
                                Set Profile
                            </Button>
                        </div>
                    </div>
                ) : (
                        <div style={{ textAlign: 'left' }}>
                            <div className={classes.box} style={{ background: 'transparent', boxShadow: 'none', marginBottom: '-40px', paddingTop: '10px' }} >
                                <Typography component="h1" className={classes.heading} style={{ color: 'white', marginLeft: '10px' }} variant="h1">
                                    Congratulations user. You have been registered successfully
                                </Typography>
                                <Typography component="h1" className={classes.text} style={{ color: 'white', marginLeft: '10px' }} variant="h1">
                                    Complete your profile and maximize your chances of getting shortlisted by top employers.
                                </Typography>
                            </div>
                            <div className={classes.box} style={{ paddingTop: '15px', paddingLeft: '2vw', paddingRight: '2vw', boxSizing: 'border-box' }} >
                                <Typography component="h1" className={classes.title} style={{ marginLeft: '10px' }} variant="h1">
                                    Your Pesonal Details
                                </Typography>
                                <Divider variant="middle" />
                                <Avatar variant="rounded" style={{ color: '#F2F2F2', marginLeft: '2vw', background: '#252834', marginTop: '30px', width: '130px', height: '130px' }} className={classes.rounded}>
                                    <PersonOutlineOutlinedIcon style={{ fontSize: '80px' }} />
                                </Avatar>
                                <Button style={{ color: 'white', fontSize: '12px', textTransform: 'inherit', marginTop: '-15px', marginBottom: '20px', marginLeft: '2.66vw' }} color="secondary" variant="contained" className={classes.button}>
                                    Upload Photo
                                </Button>
                                <Typography component="h1" className={classes.bodytext} variant="h1" style={{ marginLeft: '1vw', marginBottom: '30px' }} >
                                    A Profile with Photo has a 40% higher chance of getting viewed by Employers
                                </Typography>
                                <Divider variant="middle" />
                                <div className={classes.paper}>
                                    <form className={classes.form} noValidate>
                                        <Grid item xs={12} style={{ marginTop: "20px", display: 'flex', alignItems: 'left' }} >
                                            <TextField
                                                id="standard-select-currency"
                                                select
                                                style={{ width: 150 }}
                                                // value={currency}
                                                // onChange={handleChange}
                                                label="Select Years"
                                            >
                                                {option.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                            <TextField
                                                id="standard-select-currency"
                                                select
                                                // margin="normal"
                                                color='primary'
                                                required
                                                style={{ width: 150, marginLeft: '70px' }}
                                                label="Select Month"
                                            // style={{textAlign: 'right'}}
                                            // helperText="Please select your currency"
                                            >
                                                {option.map((option) => (
                                                    <MenuItem key={option.value} style={{ textAlign: 'left' }} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={12} style={{ marginTop: "20px" }} >
                                            <TextField
                                                margin="normal"
                                                color='primary'
                                                required
                                                fullWidth
                                                style={{ marginTop: '0px', marginBottom: '0px' }}
                                                size="small"
                                                label="What is your Current Designation / Job Title?"
                                                name="jobTitle"
                                            />
                                        </Grid>
                                        <Grid item xs={12} style={{ marginTop: "20px" }} >
                                            <TextField
                                                margin="normal"
                                                color='primary'
                                                required
                                                fullWidth
                                                style={{ marginTop: '0px', marginBottom: '0px' }}
                                                size="small"
                                                label="Which Company do you work for?"
                                                name="work"
                                            />
                                        </Grid>
                                        <Grid item xs={12} style={{ marginTop: "20px" }} >
                                            <TextField
                                                margin="normal"
                                                color='primary'
                                                required
                                                fullWidth
                                                style={{ marginTop: '0px', marginBottom: '0px' }}
                                                size="small"
                                                label="In which city is your workplace?"
                                                name="workplace"
                                            />
                                        </Grid>
                                        <Grid item xs={12} style={{ marginTop: "20px" }} >
                                            <TextField
                                                id="standard-select-currency"
                                                select
                                                fullWidth
                                                label="Industry Your Company belongs to"
                                            // helperText="Please select your currency"
                                            >
                                                {option.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={12} style={{ marginTop: "20px" }} >
                                            <TextField
                                                id="standard-select-currency"
                                                select
                                                fullWidth
                                                label="Your Function / Department in the company"
                                            // helperText="Please select your currency"
                                            >
                                                {option.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={12} style={{ marginTop: "20px" }}>
                                            <TextField
                                                style={{ marginTop: '0px', marginBottom: '0px' }}
                                                margin="normal"
                                                size='small'
                                                required
                                                fullWidth
                                                name="password"
                                                label="Enter Key Skills which you use at work"
                                                type="text"
                                            />
                                        </Grid>
                                    </form>
                                </div>
                            </div>
                            <div className={classes.box} style={{ paddingTop: '15px', paddingLeft: '2vw', paddingRight: '2vw', boxSizing: 'border-box' }} >
                                <Typography component="h1" className={classes.title} style={{ marginLeft: '10px' }} variant="h1">
                                    Give Your CV Headline
                                </Typography>
                                <Divider variant="middle" />
                                <div className={classes.paper}>
                                    <form className={classes.form} noValidate>
                                        <Grid item xs={12} style={{ marginTop: "20px" }} >
                                            <TextField
                                                margin="normal"
                                                color='primary'
                                                required
                                                fullWidth
                                                style={{ marginTop: '0px', marginBottom: '0px' }}
                                                size="small"
                                                label="What is your Current Designation / Job Title?"
                                                name="jobTitle"
                                            />
                                        </Grid>
                                    </form>
                                </div>
                            </div>
                            <div className={classes.box} style={{ paddingTop: '15px', paddingLeft: '2vw', paddingRight: '2vw', boxSizing: 'border-box' }} >
                                <Typography component="h1" className={classes.title} style={{ marginLeft: '10px' }} variant="h1">
                                    What Kind of Job are you looking for?
                                </Typography>
                                <Divider variant="middle" />
                                <div className={classes.paper}>
                                    <form className={classes.form} noValidate>
                                        <Grid item xs={12} style={{ marginTop: "20px" }} >
                                            <TextField
                                                margin="normal"
                                                color='primary'
                                                required
                                                fullWidth
                                                style={{ marginTop: '0px', marginBottom: '0px' }}
                                                size="small"
                                                label="What is your Current Designation / Job Title?"
                                                name="jobTitle"
                                            />
                                        </Grid>
                                        <Grid item xs={12} style={{ marginTop: "20px" }} >
                                            <TextField
                                                margin="normal"
                                                color='primary'
                                                required
                                                fullWidth
                                                style={{ marginTop: '0px', marginBottom: '0px' }}
                                                size="small"
                                                label="What is your Current Designation / Job Title?"
                                                name="jobTitle"
                                            />
                                        </Grid>
                                        <Grid item xs={12} style={{ marginTop: "20px" }} >
                                            <TextField
                                                margin="normal"
                                                color='primary'
                                                required
                                                fullWidth
                                                style={{ marginTop: '0px', marginBottom: '0px' }}
                                                size="small"
                                                label="What is your Current Designation / Job Title?"
                                                name="jobTitle"
                                            />
                                        </Grid>
                                        <div className={classes.wrapper}>
                                            <Button
                                                type="button"
                                                fullWidth
                                                component={Link}
                                                to="/user/profile"
                                                variant="contained"
                                                color="secondary"
                                                style={{ color: 'white' }}
                                                className={classes.submit}
                                            >
                                                Done
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
            <Footer />
        </div>
    );
}

