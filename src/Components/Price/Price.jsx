import PropTypes from 'prop-types'
const Price = ({price}) => {
    return (
        <div>
            <p className="text-2xl text-gray-700">Total Price : {price} <span>USD</span> </p>
        </div>
    );
};

Price.propTypes={
    price: PropTypes.array
}

export default Price;