import React, { useEffect, useState } from 'react';
import Post from '../post/Post';

const Body = () => {
    const [post, setPost] = useState([]);
    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return (
        <>
            {
                post.map(x => <Post getPost={x} key="id"></Post>) 
            }
        </>
    );
};

export default Body;