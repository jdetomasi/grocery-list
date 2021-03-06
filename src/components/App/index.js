import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppMenuBar from '../AppMenuBar';
import Typography from '@material-ui/core/Typography';
import {Container, Step, StepLabel, Stepper} from '@material-ui/core';
import Items from '../Items';
import baseItems from '../../items';
import NotificationArea from "../Notification";
import SendFab from "../SendFab";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

const getSelectedItems = (items) => {
    console.log(items);
    return items
        .map((c) => {
            return {
                category: c.category,
                items: c.items.filter((i) => i.selected),
            };
        })
        .filter((i) => i.items.length > 0);
};

const getStepContent = (step, items, handleTemplateChange, handleListChange, hideDone) => {
    switch (step) {
        case 0:
            return <Items
                        items={items}
                        handleTemplateChange={handleTemplateChange}
                        isChecked={i => i.selected}
                        hideDone={false}
                    />;
        case 1:
            return (
                <Items
                    items={getSelectedItems(items)}
                    handleTemplateChange={handleListChange}
                    isChecked={i => i.done}
                    hideDone={hideDone}
                />
            );
        default:
            break;
    }
};

function App() {
    const items = localStorage.getItem('items')
        ? JSON.parse(localStorage.getItem('items'))
        : baseItems;
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [hideDone, setHideDone] = React.useState(false);
    const [notification, setNotification] = React.useState(null);
    const [templateItems, setTemplateItems] = React.useState(items);
    const steps = ['Todos', 'Lista'];

    const reloadBaseItems = () => {
        setTemplateItems(baseItems);
    }

    const handleTemplateChange = (category, name) => {
        let copy = Object.assign([], templateItems);
        let item = copy.find((i) => i.category === category).items.find((i) => i.name === name);
        item.selected = !item.selected;
        setTemplateItems(copy);
    };

    const handleListChange = (category, name) => {
        let copy = Object.assign([], templateItems);
        let item = copy.find((i) => i.category === category).items.find((i) => i.name === name);
        item.done = !item.done;
        setTemplateItems(copy);
    };

    const handleShowNotification = (notification) => {
        setNotification(notification);
    };

    const handleCloseNotification = () => {
        setNotification(null);
    };

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(templateItems));
    });

    return (
        <div className="App">
            <AppMenuBar
                handleHideDone={selected => setHideDone(selected)}
                reloadBaseItems={reloadBaseItems}
                handleShowNotification={handleShowNotification}
            />
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
                    <Typography className={classes.instructions}>
                        {getStepContent(
                            activeStep,
                            templateItems,
                            handleTemplateChange,
                            handleListChange,
                            hideDone
                        )}
                    </Typography>
                </div>
                <SendFab />
                <NotificationArea notification = { notification } handleCloseNotification = { handleCloseNotification } />
            </Container>
        </div>
    );
}

export default App;
