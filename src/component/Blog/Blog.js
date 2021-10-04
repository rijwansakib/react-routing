import React, { useEffect, useState } from 'react';
import PostBlog from '../PostBlog/PostBlog';

const Blog = () => {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        fetch('./blog.JSON')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    return (
        <div className="p-5">
           {
               posts.map(post=><PostBlog
               key={post.key}
               post={post}
               ></PostBlog>)
           }
        </div>
    );
};

export default Blog;