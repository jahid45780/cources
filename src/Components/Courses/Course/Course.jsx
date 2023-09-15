import PropTypes from 'prop-types'
const Course = ({course}) => {
    const {title}=course
    return (
        <div>
            <h3 className=' text-xl' >  {title}  </h3>
        </div>
    );
};

Course.propTypes={
    course: PropTypes.object
}

export default Course;