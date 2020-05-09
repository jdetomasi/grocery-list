import SendIcon from '@material-ui/icons/Send';
import Fab from "@material-ui/core/Fab";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ListService from '../../service/LocalStorageService';

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

function SendFab(props) {
    const classes = useStyles();

    const copyList = () => {
        let items = ListService.getListOfSelectedItems();
        let listAsString = items.map(i => i.name).join('%0A');
        window.location = `whatsapp://send?text=${listAsString}`
    };

    return (
        <Fab color="primary" aria-label="Copiar lista" className={classes.fab} onClick={copyList}>
            <SendIcon />
        </Fab>
    )
}

export default SendFab;