import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    // console.log(blog);
    const {id,title,cover,author_img,author,posted_date,reading_time,hashtags} = blog;
    return (
        <div>
            <img className='w-full mt-10' src={cover} alt="" />
            <div className='md:flex justify-between items-center mt-4'>
                <div className='flex gap-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h1 className='font-bold text-2xl '>{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h1 className='text-4xl'>{title}</h1>
            
                <p>
                    {
                        hashtags.map((hash, idx) =><span key={idx} className='text-gray-500 mr-10'><a href="">#{hash}</a></span>)
                    }
                </p>
               
            
            
        </div>
    );
};

//use prop type
Blog.propTypes ={
    blog: PropTypes.object.isRequired
}

export default Blog;