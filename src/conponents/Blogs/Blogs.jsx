import { useEffect } from "react";
import { useState } from "react";

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
        <div>
            <h2>Blogs</h2>
        </div>
    );
};

export default Blogs;