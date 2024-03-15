import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa6";


const Blog = ({ blog,  handelBookmark }) => {
  // console.log(blog);
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  
  return (
    <div className="mb-16 space-y-6 border rounded-2xl border-blue-700 p-4">
      <img className="w-full rounded-xl" src={cover} alt="" />
      <div className="md:flex justify-between items-center">
        <div className="flex gap-4">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h1 className="font-bold text-2xl ">{author}</h1>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button onClick={()=> handelBookmark(blog)} className="text-2xl text-green-700"><FaBookmark /></button>
        </div>
      </div>
      <h1 className="text-4xl">{title}</h1>

      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx} className="text-gray-500 mr-10">
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button className="text-blue-600 underline text-xl"> Mark as read</button>
    </div>
  );
};

//use prop type
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handelBookmark:PropTypes.func
};

export default Blog;
