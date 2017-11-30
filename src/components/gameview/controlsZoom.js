import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiActions from '../../actions/uiActions';
import * as consoleActions from '../../actions/consoleActions';

import './controlsZoom.css';

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

class ControlsZoom extends React.Component {
	onChange() {
		this.props.uiActions.zoom(parseInt(this.refs.slider.value));
	}

	render() {
		let zoomControlsContainerClass = "zoom-controls-container";

		if (this.props.consoleState.taskNumber < 3) {
			zoomControlsContainerClass += " zoom-controls-hide";
		}
		return <div className={zoomControlsContainerClass}>
			<div className="zoom-input-container">
				<input ref="slider" type="range" className="zoom-slider" onChange={() => this.onChange()} min={130} max={900} defaultValue={this.props.uiState.zoom}/>
			</div>
			<div className="zoom-value">{Math.round((this.props.uiState.zoom - 130) * 100 / (900 - 130) ) + "%"}</div>
		</div>
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ControlsZoom);