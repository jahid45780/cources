import PropTypes from 'prop-types'
import Course from './Course/Course';
const Courses = ({courses}) => {
    return (
        <div>
            <h2 className=" text-3xl font-bold" >Course Name</h2>
            
            {
                courses.map(course=> <Course key={course.id} course={course} ></Course> )
            }
        </div>
        
    );
};

Courses.propTypes={
    courses: PropTypes.array
}

export default Courses;