import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../actions/itemActions';
import * as uiActions from '../actions/uiActions';


import '../css/footer.css';

function mapStateToProps(state) {
	return {
		itemState: state.itemState,
		uiState: state.uiState
	};
}

function mapDispatchToProps(dispatch) {
	return {
		itemActions: bindActionCreators(itemActions, dispatch),
		uiActions: bindActionCreators(uiActions, dispatch)
	};
}

class Footer extends React.Component {

	render() {
		let cameraButtonClass = "button button-camera";
		let thermalButtonClass = "button button-thermal";
		let gridButtonClass = "button button-grid";

		if (this.props.uiState.camera === 0) {
			cameraButtonClass += " button-selected";
		} else if (this.props.uiState.camera === 1) {
			thermalButtonClass += " button-selected";
		} else if (this.props.uiState.camera === 2) {
			gridButtonClass += " button-selected";
		}

		return (
			<div className="footer">
				<div className="left">
					<div className="button" onClick={() => this.props.itemActions.changeItemState("spinner", 0)}>Rotate</div>
				</div>
				<div className="right">
					<div className={cameraButtonClass} onClick={() => this.props.uiActions.setCamera(0)}>Camera</div>
					<div className={thermalButtonClass} onClick={() => this.props.uiActions.setCamera(1)}>Thermal</div>
					<div className={gridButtonClass} onClick={() => this.props.uiActions.setCamera(2)}>Grid</div>
				</div>

			</div>
		);
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Footer);