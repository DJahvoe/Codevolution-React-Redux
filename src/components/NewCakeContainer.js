import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

// 3. use it as a props
function NewCakeContainer(props) {
	const [number, setNumber] = useState(1);
	let { numOfCakes, buyCake } = props;
	return (
		<div>
			<h2>Number of cakes - {numOfCakes}</h2>
			<input
				type='text'
				value={number}
				onChange={(e) => setNumber(e.target.value)}
			/>
			<button onClick={() => buyCake(number)}>Buy {number} Cake</button>
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
		buyCake: (number) => dispatch(buyCake(number)),
	};
};

// 2. connect state and dispatch to component, passing it as a props
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
