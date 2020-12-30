import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Grid}  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useDispatch } from 'react-redux';


import Form from './Form/Form';

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



const ModalExample = (props) => {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
  

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
  const submit = e =>{
    e.preventDefault();
    toggle();
  }
  return (
    
        <div>

            <Button variant="contained" color="secondary" onClick={handleOpen}>
                Add a new Post
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
                    
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    
                    
                            
                        </div>
                </Fade>
            </Modal>
        </div>
    
    
  );
}

export default ModalExample;