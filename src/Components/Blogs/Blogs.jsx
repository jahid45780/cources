import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs]= useState([]);

    useEffect(()=>{
        fetch('Course.json')
        .then(res=>res.json())
        .then(data=> setBlogs(data))
    },[])

    return (
        <>
            
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} ></Blog> )
            }
        </>
    );
};

export default Blogs;