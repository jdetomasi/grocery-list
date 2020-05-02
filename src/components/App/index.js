import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container, Step, StepLabel, Stepper, Button } from '@material-ui/core';
import Template from '../Template';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function getSteps() {
    return ['Crear', 'Lista'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <Template />;
        case 1:
            return 'Artículos';
        default:
            break;
    }
}

function App() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
      setActiveStep(0);
    };

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Lista
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label, index) => {
                        return (
                            <Step key={label} onClick={() => setActiveStep(index)}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>
                                All steps completed
                            </Typography>
                            <Button onClick={handleReset}>Reset</Button>
                        </div>
                    ) : (
                        <div>
                            <Typography className={classes.instructions}>
                                {getStepContent(activeStep)}
                            </Typography>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
}

export default App;
