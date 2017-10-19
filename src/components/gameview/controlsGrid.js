import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiActions from '../../actions/uiActions';
import * as consoleActions from '../../actions/consoleActions';

import './controlsGrid.css';
import '../../css/buttons.css';

function mapStateToProps(state) {
	return {
		uiState: state.uiState,
		consoleState: state.consoleState
	};
}

function mapDispatchToProps(dispatch) {
	return {
		uiActions: bindActionCreators(uiActions, dispatch),
		consoleActions: bindActionCreators(consoleActions, dispatch)
	};
}

class ControlsGrid extends React.Component {

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

	toggleFreeze() {

			this.props.uiActions.setRotateX(0);
			this.props.uiActions.setRotateY(this.props.uiState.autorotate);
			this.props.uiActions.setRotateZ(0);

		
		this.props.uiActions.toggleFreeze();
	}

	render() {
		let freezeText;
		let freezeButtonClass = "button freeze-button";
		let gridControlsContainerClass = "grid-controls-container";
		let gridControlClass = "grid-control";

		if (this.props.uiState.frozen) {
			freezeText = "Unfreeze";
			freezeButtonClass += " button-selected";
		} else {
			freezeText = "Freeze";
			gridControlClass += " grid-controls-frozen";
		}

		if (this.props.consoleState.taskNumber < 3) {
			gridControlsContainerClass += " grid-controls-hide";
		}


		return <div className={gridControlsContainerClass}>
			<div className="grid-control-x-group">
				<div className={gridControlClass} 
					onMouseDown={() => this.setRotationInterval(0)} 
					onMouseUp={() => this.clearRotationInterval()}
					onMouseOut={() => this.clearRotationInterval()}>
					-
				</div>
				<div className="x-value">{this.props.uiState.rotation.x}&deg;</div>
				<div className={gridControlClass} 
					onMouseDown={() => this.setRotationInterval(1)}
					onMouseUp={() => this.clearRotationInterval()}
					onMouseOut={() => this.clearRotationInterval()}>
					+
				</div>
			</div>
			<div className="grid-control-y-group">
				<div className={gridControlClass} 
					onMouseDown={() => this.setRotationInterval(2)}
					onMouseUp={() => this.clearRotationInterval()}
					onMouseOut={() => this.clearRotationInterval()}>
					-
				</div>
				<div className="y-value">{this.props.uiState.frozen ? this.props.uiState.rotation.y.toFixed(0) : this.props.uiState.autorotate.toFixed(0)}&deg;</div>
				<div className={gridControlClass} 
					onMouseDown={() => this.setRotationInterval(3)}
					onMouseUp={() => this.clearRotationInterval()}
					onMouseOut={() => this.clearRotationInterval()}>
					+
				</div>
			</div>
			<div className="grid-control-z-group">
				<div className={gridControlClass} 
					onMouseDown={() => this.setRotationInterval(4)}
					onMouseUp={() => this.clearRotationInterval()}
					onMouseOut={() => this.clearRotationInterval()}>
					-
				</div>
				<div className="z-value">{this.props.uiState.rotation.z}&deg;</div>
				<div className={gridControlClass} 
					onMouseDown={() => this.setRotationInterval(5)}
					onMouseUp={() => this.clearRotationInterval()}
					onMouseOut={() => this.clearRotationInterval()}>
					+
				</div>
			</div>
			<div className={freezeButtonClass} onClick={() => this.toggleFreeze()}>{freezeText}</div>
		</div>
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ControlsGrid);