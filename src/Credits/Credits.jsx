import PropTypes from 'prop-types'
const Credits = ({credit}) => {
    return (
        <div>
           <p className=" text-2xl text-gray-700" > Total Credit Hour : {credit} </p>
           < hr className=" h-4 mt-6" />
        </div>
    );
};

Credits.propTypes={
    credit: PropTypes.array
}

export default Credits;