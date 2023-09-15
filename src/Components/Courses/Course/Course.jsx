import PropTypes from 'prop-types'
const Course = ({course}) => {
    const {title}=course
    return (
        <div>
            <ol className=' list-disc list-inside'> 
            
              <li className=' text-xl' >  {title}  </li>
            
            
                 </ol>
        </div>
    );
};

Course.propTypes={
    course: PropTypes.object
}

export default Course;