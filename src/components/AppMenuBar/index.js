import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, {Fragment, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import RestoreIcon from '@material-ui/icons/Restore';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));

function AppMenuBar(props) {
    const classes = useStyles();
    const { handleHideDone, reloadBaseItems, handleShowNotification } = props;
    const [openMenu, setOpenMenu] = React.useState(false);
    const [hideDone, setHideDone] = React.useState(false);

    useEffect(() => {
        handleHideDone(hideDone);
    });

    return (
        <Fragment>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon onClick={event => setOpenMenu(true)} />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Lista
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor='left' open={openMenu} onClose={(event) => setOpenMenu(false)}>
                <List>
                    <ListItem button key='hide-selected'>
                        <FormControlLabel
                            checked={hideDone}
                            control={<Switch color="primary" />}
                            label="Ocultar Seleccionados"
                            labelPlacement="end"
                            onChange={e => setHideDone(e.target.checked)}
                        />
                    </ListItem>
                    <Divider />
                    <ListItem button key='reset' onClick={(event) => {
                            reloadBaseItems();
                            handleShowNotification("Artículos restablecidos")}}>
                        <ListItemIcon><RestoreIcon /></ListItemIcon>
                        <ListItemText>Reiniciar Valores</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </Fragment>
    );
}

export default AppMenuBar;