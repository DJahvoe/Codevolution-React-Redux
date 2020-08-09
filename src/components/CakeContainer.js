import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

// 3. use it as a props
function CakeContainer(props) {
	let { numOfCakes, buyCake } = props;
	return (
		<div>
			<h2>Number of cakes - {numOfCakes}</h2>
			<button onClick={buyCake}>Buy Cake</button>
		</div>
	);
}

// 1. declare mapping from redux
const mapStateToProps = (state) => {
	return {
		// cake reference to reducer name in rootReducer
		numOfCakes: state.cake.numOfCakes,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyCake: () => dispatch(buyCake()),
	};
};

// 2. connect state and dispatch to component, passing it as a props
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
