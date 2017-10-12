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

	setRotationInterval(index) {
		switch(index) {
			case 0:
				this.rotationInterval = setInterval(this.rotateXNegative.bind(this), 50);
				return;
			case 1:
				this.rotationInterval = setInterval(this.rotateXPositive.bind(this), 50);
				return;
			case 2:
				this.rotationInterval = setInterval(this.rotateYNegative.bind(this), 50);
				return;
			case 3:
				this.rotationInterval = setInterval(this.rotateYPositive.bind(this), 50);
				return;
			case 4:
				this.rotationInterval = setInterval(this.rotateZNegative.bind(this), 50);
				return;
			case 5:
				this.rotationInterval = setInterval(this.rotateZPositive.bind(this), 50);
				return;
			default:
				return;
		}
	}

	clearRotationInterval() {
		clearInterval(this.rotationInterval);
	}

	rotateXPositive() {
		if (this.props.uiState.rotation.x < 359) {
			this.props.uiActions.setRotateX(this.props.uiState.rotation.x + 1);
		} else {
			this.props.uiActions.setRotateX(0);
		}
	}

	rotateXNegative() {
		if (this.props.uiState.rotation.x > 0) {
			this.props.uiActions.setRotateX(this.props.uiState.rotation.x - 1);
		} else {
			this.props.uiActions.setRotateX(359);
		}
	}

	rotateYPositive() {
		if (this.props.uiState.rotation.y < 359) {
			this.props.uiActions.setRotateY(this.props.uiState.rotation.y + 1);
		} else {
			this.props.uiActions.setRotateY(0);
		}
	}

	rotateYNegative() {
		if (this.props.uiState.rotation.y > 0) {
			this.props.uiActions.setRotateY(this.props.uiState.rotation.y - 1);
		} else {
			this.props.uiActions.setRotateY(359);
		}
	}

	rotateZPositive() {
		if (this.props.uiState.rotation.z < 359) {
			this.props.uiActions.setRotateZ(this.props.uiState.rotation.z + 1);
		} else {
			this.props.uiActions.setRotateZ(0);
		}
	}

	rotateZNegative() {
		if (this.props.uiState.rotation.z > 0) {
			this.props.uiActions.setRotateZ(this.props.uiState.rotation.z - 1);
		} else {
			this.props.uiActions.setRotateZ(359);
		}
	}

	render() {
		let freezeText;

		if (this.props.uiState.moonSpin) {
			freezeText = "Freeze";
		} else {
			freezeText = "Unfreeze";
		}
		return <div className="grid-controls-container">
			<div className="grid-control-x-group">
				<div className="grid-control" 
					onMouseDown={() => this.setRotationInterval(0)} 
					onMouseUp={() => this.clearRotationInterval()}
					onMouseOut={() => this.clearRotationInterval()}>
					-
				</div>
				<div className="x-value">{this.props.uiState.rotation.x}&deg;</div>
				<div className="grid-control" 
					onMouseDown={() => this.setRotationInterval(1)}
					onMouseUp={() => this.clearRotationInterval()}
					onMouseOut={() => this.clearRotationInterval()}>
					+
				</div>
			</div>
			<div className="grid-control-y-group">
				<div className="grid-control" 
					onMouseDown={() => this.setRotationInterval(2)}
					onMouseUp={() => this.clearRotationInterval()}
					onMouseOut={() => this.clearRotationInterval()}>
					-
				</div>
				<div className="y-value">{this.props.uiState.rotation.y}&deg;</div>
				<div className="grid-control" 
					onMouseDown={() => this.setRotationInterval(3)}
					onMouseUp={() => this.clearRotationInterval()}
					onMouseOut={() => this.clearRotationInterval()}>
					+
				</div>
			</div>
			<div className="grid-control-z-group">
				<div className="grid-control" 
					onMouseDown={() => this.setRotationInterval(4)}
					onMouseUp={() => this.clearRotationInterval()}
					onMouseOut={() => this.clearRotationInterval()}>
					-
				</div>
				<div className="z-value">{this.props.uiState.rotation.z}&deg;</div>
				<div className="grid-control" 
					onMouseDown={() => this.setRotationInterval(5)}
					onMouseUp={() => this.clearRotationInterval()}
					onMouseOut={() => this.clearRotationInterval()}>
					+
				</div>
			</div>
			<div className="freeze-button button" onClick={() => this.props.uiActions.toggleMoonSpin()}>{freezeText}</div>
		</div>
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GridControls);