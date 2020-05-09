import FileCopyIcon from "@material-ui/icons/FileCopy";
import Fab from "@material-ui/core/Fab";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ListService from '../../service/ListService';

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

function CopyFab(props) {
    const { handleShowNotification } = props;
    const classes = useStyles();

    const copyList = async () => {
        let items = ListService.getListOfSelectedItems();
        let listAsString = items.map(i => i.name).join('\n');
        await navigator.clipboard.writeText(listAsString);
        handleShowNotification('Lista copiada!');
    };

    return (
        <Fab color="primary" aria-label="Copiar lista" className={classes.fab} onClick={copyList}>
            <FileCopyIcon />
        </Fab>
    )
}

export default CopyFab;