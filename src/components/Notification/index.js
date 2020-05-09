import Snackbar from "@material-ui/core/Snackbar";
import Alert from '@material-ui/lab/Alert';
import React from "react";

function NotificationArea(props) {
    const { notification, handleCloseNotification } = props;

    return (
        <Snackbar open={notification != null} autoHideDuration={6000} onClose={handleCloseNotification}>
            <Alert onClose={handleCloseNotification} severity="success">
                { notification }
            </Alert>
        </Snackbar>
    );
}

export default NotificationArea;