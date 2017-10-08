import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../actions/itemActions';

import '../css/index.css';

function mapStateToProps(state) {
	return {
		itemState: state.itemState
	};
}

function mapDispatchToProps(dispatch) {
	return {
		itemActions: bindActionCreators(itemActions, dispatch)
	};
}

class Footer extends React.Component {

	render() {

		return (
			<div className="footer">
				<button className="test-button" onClick={() => this.props.itemActions.changeItemState("spinner", 0)}>Rotate</button>
			</div>
		);
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Footer);