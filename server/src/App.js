import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import img from './images/memories.png';

import './index.css';

import ModalExample from './components/ItemModal';
import ModalExample2 from './components/ItemModal2';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Recent Posts</Typography>
        <img className={classes.image} src={img} alt="icon" height="60" />
      </AppBar>
      <Grow in>
      <Container>
          <div className="buttonn"><ModalExample /> </div>
              
          <div className="buttonn2"> <ModalExample2 /> </div>
          <br></br><br></br>
          <hr/>
          <br></br>
          {/* <Grid container justify="space-between"  spacing={3}> */}
            {/* <Grid item xs={12} sm={7}> */}
              <Posts setCurrentId={setCurrentId} />
            {/* </Grid> */}
            
          {/* </Grid> */}
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
