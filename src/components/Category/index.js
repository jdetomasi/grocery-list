import React from 'react';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    Typography,
    ExpansionPanelDetails,
    Checkbox,
    List,
    ListItem,
    ListItemText,
    makeStyles,
} from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function Category(props) {
    const classes = useStyles();
    const { category, items, isChecked, handleItemChange } = props;

    return (
        <div>
            <ExpansionPanel square defaultExpanded={true}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{category}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List className={classes.root}>
                        {items.map((i) => (
                            <ListItem
                                key={i.name}
                                dense
                                button
                                onClick={() => handleItemChange(category, i.name)}
                            >
                                <ListItemIcon>
                                    <Checkbox checked={isChecked(i)} />
                                </ListItemIcon>
                                <ListItemText id={i.name} primary={i.name} />
                            </ListItem>
                        ))}
                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

export default Category;
