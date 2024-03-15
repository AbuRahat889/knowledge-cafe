import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handelBookmark }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        
        const loadData=async() =>{
            const res = await fetch('blogs.json');
            const data = await res.json();
            setBlogs(data);
        } 
        loadData();
    },[])
    return (
        <div className="md:w-2/3">
            {
                blogs.map((blogInfo) => <Blog 
                    handelBookmark={ handelBookmark }
                    key={blogs.id} 
                    blog={blogInfo}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {

    handelBookmark:PropTypes.func,
    timeHandeler:PropTypes.func
  
  };

export default Blogs;