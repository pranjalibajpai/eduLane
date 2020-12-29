import React from 'react';
import { useSelector } from 'react-redux';

const Post = () => {
    const posts = useSelector((state) => state.posts); //in reducer index.js we have posts
    console.log(posts);
}