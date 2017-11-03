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
	toggleRotation() {
		this.props.uiActions.toggleRotation();
		let callback = () => {
			this.props.uiActions.setPanel(0);
			this.props.uiActions.setCamera(0);
			this.props.consoleActions.goForward();
		}

		setTimeout(callback, 1000);
	}

	setCamera(camera) {
		if (this.props.uiState.camera === 1 && camera !== 1) {
			this.props.uiActions.setRotateX(0);
			this.props.uiActions.setRotateY(this.props.uiState.autorotate);
			this.props.uiActions.setRotateZ(0);

			if (this.props.uiState.frozen) {
				this.props.uiActions.toggleFreeze();
			}
		}

		this.props.uiActions.setCamera(camera);
	}

	render() {
		let footerCLass = "footer";
		let footerEdgeClass = "footer-edge";

		if(this.props.consoleState.taskNumber > 1) {
			footerCLass += " footer-open";
		} else {
			footerEdgeClass += " footer-edge-hide";
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
			<div className="footer-outside">
				<div className={footerEdgeClass}></div>
				<div className={footerCLass}>
					<div className={testControlsClass}>
						<div className="test-button" onClick={() => this.toggleRotation()}>Rotate</div>
					</div>
					<div className="right">
						<div className={cameraButtonClass} onClick={() => this.setCamera(0)}>Camera</div>
						<div className={gridButtonClass} onClick={() => this.setCamera(1)}>Grid</div>
						<div className={thermalButtonClass} onClick={() => this.setCamera(2)}>Thermal</div>
					</div>
				</div>
			</div>
		);
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Footer);