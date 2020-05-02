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

function CategoryPanel(props) {
    const classes = useStyles();
    const { category, items } = props;
    const [ checked, setChecked ] = React.useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
      };

    return (
        <div>
            <ExpansionPanel square defaultExpanded={true}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{category}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List className={classes.root}>
                        {items.map((i) => (
                            <ListItem key={i} dense button onClick={handleToggle(i)}>
                                <ListItemIcon>
                                    <Checkbox checked={checked.indexOf(i) !== -1} />
                                </ListItemIcon>
                                <ListItemText id={i} primary={i} />
                            </ListItem>
                        ))}
                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

export default CategoryPanel;
