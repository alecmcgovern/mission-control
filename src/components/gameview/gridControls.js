import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiActions from '../../actions/uiActions';

import './gridControls.css';
import '../../css/buttons.css';

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
			<div className="grid-control-x-group">
				<div className="grid-control" 
					onMouseDown={() => this.props.uiActions.rotateGrid("UP")} 
					onMouseUp={() => this.props.uiActions.rotateGrid("")}>-</div>
				<div className="x-value">{43}</div>
				<div className="grid-control" 
					onMouseDown={() => this.props.uiActions.rotateGrid("DOWN")}
					onMouseUp={() => this.props.uiActions.rotateGrid("")}>+</div>
			</div>
			<div className="grid-control-y-group">
				<div className="grid-control" 
					onMouseDown={() => this.props.uiActions.rotateGrid("LEFT")}
					onMouseUp={() => this.props.uiActions.rotateGrid("")}>-</div>
				<div className="y-value">{43}</div>
				<div className="grid-control" 
					onMouseDown={() => this.props.uiActions.rotateGrid("RIGHT")}
					onMouseUp={() => this.props.uiActions.rotateGrid("")}>+</div>
			</div>
			<div className="freeze-button button">Freeze</div>
		</div>
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GridControls);