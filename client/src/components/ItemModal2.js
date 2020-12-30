import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { TextField,  Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    modal: {
        margin: '10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));



const ModalExample2 = (props) => {

   
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const submit =() =>{

  }
  return (
    
        <div>

            <Button variant="contained" color="secondary" onClick={handleOpen}>
                Search
            </Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div  >
                    
                    <Paper className={classes.paper}>
                    <form onSubmit={submit}>
                        <TextField name="tag" variant="outlined" label="Enter Topic Tag" fullWidth /> 
                        
                        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Find</Button>
                        {/* <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button> */}
                    </form>
                    </Paper>
                    
                    </div>
                </Fade>
            </Modal>
       

         </div>
    
    
  );
}

export default ModalExample2;