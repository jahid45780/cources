import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleToAddCourse}) => {
    const [blogs, setBlogs]= useState([]);

    useEffect(()=>{
        fetch('Course.json')
        .then(res=>res.json())
        .then(data=> setBlogs(data))
    },[])

    return (
        <>
            
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleToAddCourse={handleToAddCourse} ></Blog> )
                
            }
        </>
    );
};

Blogs.propTypes={
    handleToAddCourse:PropTypes.func  
}

export default Blogs;