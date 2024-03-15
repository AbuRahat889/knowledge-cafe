import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        
        const loadData=async() =>{
            const res = await fetch('blogs.json');
            const data = await res.json();
            setBlogs(data);
            console.log(data);
        } 
        loadData();
    },[])
    return (
        <div className="md:w-2/3">
            <h2 className="text-4xl">Blogs:{blogs.length} </h2>
            {
                blogs.map(blogInfo => <Blog 
                    key={blogs.id} 
                    blog={blogInfo}></Blog>)
            }
        </div>
    );
};

export default Blogs;