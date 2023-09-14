import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title,cover,description,price_img,price,book_img,credit}=blog;
  
    return (
        <div className='w-[312px] shadow-lg space-y-3' >
            <img className='w-full' src={cover} alt="" />
            <h2 className=' text-xl font-semibold' > {title} </h2>
            <p > {description} </p>
            <div className=' flex gap-3'>
                <p className=' text-2xl'> {price_img} </p>
                <p className='text-1xl text-[#2a2a2a]'> Price:{price} </p>
                <img className=' w-9 h-8' src={book_img} alt="" />
                <p className=' text-1xl text-[#2a2a2a] '> Credit :  {credit} hr </p>
                
            </div>
            <button className=' bg-[#2F80ED] w-full h-11 rounded-md text-xl text-white ' >Select</button>
        </div>
    );
};

Blog.propTypes={
      blog: PropTypes.object.isRequired
}

export default Blog;