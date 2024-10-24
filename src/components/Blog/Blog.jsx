import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark,handleMarkAsRead}) => {
    const{id, title, cover, reading_time, author_name, author_img, posted_date,hashtags} = blog
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-96' src={cover} alt={`Cover pic of the cover${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex items-center mb-4'>
                    <img className='w-14  rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author_name}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-red-400'><FaBookmark ></FaBookmark ></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash ,idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(id, reading_time)} className='text-purple-800 font-bold underline'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;