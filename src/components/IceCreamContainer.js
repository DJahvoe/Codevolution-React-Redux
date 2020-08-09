import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

// 3. use it as a props
function IceCreamContainer(props) {
	let { numOfIceCreams, buyIceCream } = props;
	return (
		<div>
			<h2>Number of ice creams - {numOfIceCreams}</h2>
			<button onClick={buyIceCream}>Buy Ice Cream</button>
		</div>
	);
}

// 1. declare mapping from redux
const mapStateToProps = (state) => {
	return {
		// iceCream reference to reducer name in rootReducer
		numOfIceCreams: state.iceCream.numOfIceCreams,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyIceCream: () => dispatch(buyIceCream()),
	};
};

// 2. connect state and dispatch to component, passing it as a props
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
