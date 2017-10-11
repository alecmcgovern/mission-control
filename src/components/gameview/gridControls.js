import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiActions from '../../actions/uiActions';

import './gridControls.css';

function mapStateToProps(state) {
	return {
		uiState: state.uiState,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		uiActions: bindActionCreators(uiActions, dispatch),
	};
}

class GridControls extends React.Component {
	render() {
		return <div className="grid-controls-container">

		</div>
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GridControls);