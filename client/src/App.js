import React, { useEffect } from "react";
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
//dispatch an action
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
   <div>
    <AppNavbar />
   </div>
  );
}

export default App;
