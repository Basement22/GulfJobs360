// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";



// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: "flex",
//         overflowX: 'hidden',
//         overflowY: 'hidden',
//         flexDirection: 'column',
//     },
// }));

// export default function PersistentDrawerRight() {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <>
//         </div>
//     );
// }

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
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import Button from '@material-ui/core/Button';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import Typography from '@material-ui/core/Typography';

import AppBar from './AppBar'
import Signup from './Signup'
import Experience from './Experience'
import Personal from './Personal'
import Education from './Education'
import Footer from '../../Landing/Footer'
import Main from '../../ProfileSetup/Main'

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
        backgroundColor: 'white',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    submit: {
        padding: theme.spacing(1.5, 0),
        color: 'white',
        margin: theme.spacing(2, 0, 2),
    },
    box: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        paddingTop: '60px',
        paddingBottom: '60px',
        backgroundColor: '#EDF3F3',
        borderRadius: '10px',
        boxShadow: '4px 4px 40px #EDF3F3',
    },
}));

function getSteps() {
    return ['Sign Up', 'Experience', 'Personal', 'Education'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <Signup />;
        case 1:
            return <Experience />;
        case 2:
            return <Personal />;
        case 3:
            return <Education />;
        default:
            return 'Unknown step';
    }
}

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
        <div className={classes.root} style={{ marginTop: '70px', backgroundColor: 'white' }} >
            <AppBar />
            <div style={{ paddingTop: '60px', paddingBottom: '60px', paddingLeft: '11vw', paddingRight: '11vw', backgroundColor: 'white' }} >
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
                        <div style={{ textAlign: 'center' }}>
                            <div className={classes.box} >
                                <Stepper style={{backgroundColor: '#EDF3F3'}} alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                                    {steps.map((label) => (
                                        <Step key={label}>
                                            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                                {getStepContent(activeStep)}
                                <div style={{ display: 'flex', marginTop: '60px', paddingLeft: '25vw', paddingRight: '25vw', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                                    <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                        Previous
                                </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        fullWidth
                                        onClick={handleNext}
                                        className={classes.submit}
                                    >
                                        {activeStep === steps.length - 1 ? 'Register' : 'Save and Continue'}
                                    </Button>
                                </div></div>

                        </div>
                    )}
            </div>
            <Footer />
        </div>
    );
}

