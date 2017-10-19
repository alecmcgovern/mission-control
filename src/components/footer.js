import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as itemActions from '../actions/itemActions';
import * as uiActions from '../actions/uiActions';
import * as consoleActions from '../actions/consoleActions';


import './footer.css';
import '../css/buttons.css';

function mapStateToProps(state) {
	return {
		itemState: state.itemState,
		uiState: state.uiState,
		consoleState: state.consoleState
	};
}

function mapDispatchToProps(dispatch) {
	return {
		itemActions: bindActionCreators(itemActions, dispatch),
		uiActions: bindActionCreators(uiActions, dispatch),
		consoleActions: bindActionCreators(consoleActions, dispatch)
	};
}

class Footer extends React.Component {

	render() {
		let footerCLass = "footer";
		if(this.props.consoleState.taskNumber > 2) {
			footerCLass += " footer-open";
		}

		let cameraButtonClass = "button button-camera";
		let thermalButtonClass = "button button-thermal";
		let gridButtonClass = "button button-grid";

		if (this.props.uiState.camera.type === 0) {
			cameraButtonClass += " button-selected";
		} else if (this.props.uiState.camera.type === 1) {
			gridButtonClass += " button-selected";
		} else if (this.props.uiState.camera.type === 2) {
			thermalButtonClass += " button-selected";
		}

		let testControlsClass = "test-controls";

		if (this.props.uiState.testControls) {
			testControlsClass += " test-controls-show";
		}

		return (
			<div className={footerCLass}>
				<div className={testControlsClass}>
					<div className="test-button" onClick={() => this.props.uiActions.toggleRotation()}>Rotate</div>
				</div>
				<div className="right">
					<div className={cameraButtonClass} onClick={() => this.props.uiActions.setCamera(0)}>Camera</div>
					<div className={gridButtonClass} onClick={() => this.props.uiActions.setCamera(1)}>Grid</div>
					<div className={thermalButtonClass} onClick={() => this.props.uiActions.setCamera(2)}>Thermal</div>
				</div>

			</div>
		);
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Footer);