import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';

const DetailedView = ({ open, setOpen, post }) => {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {post?.rocket?.rocket_name}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Typography>Rocket ID: {post?.rocket?.rocket_id}</Typography>
                        <Typography>Rocket Type: {post?.rocket?.rocket_id}</Typography>
                    </DialogContentText>
                    <DialogContentText style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Typography>Launch Year: {post?.launch_year}</Typography>
                        <Typography>Launch Date: {new Date(post?.launch_date_local).toDateString()}</Typography>
                    </DialogContentText>
                    <DialogContentText style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Typography>Flight Number: {post?.flight_number}</Typography>
                        <Typography>Mission Name: {post?.mission_name}</Typography>
                    </DialogContentText>
                    <DialogContentText style={{ marginBottom: 10 }}>
                        <Typography>Launch Site: {post?.launch_site?.site_name_long}</Typography>
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        {post?.details}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DetailedView;