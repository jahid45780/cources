import PropTypes from 'prop-types'
const Credit = ({creditRemaining}) => {
    return (
        <div>
            <h3 className=" text-[#2F80ED] text-2xl font-bold " >Credit Hour Remaining {creditRemaining} hr</h3>
            < hr className=" h-4 mt-6" />
        </div>
    );
};

Credit.propTypes={
    creditRemaining: PropTypes.array
}

export default Credit;