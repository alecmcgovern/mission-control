import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiActions from '../../actions/uiActions';

import './controlsZoom.css';

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

class ControlsZoom extends React.Component {
	onChange() {
		this.props.uiActions.zoom(parseInt(this.refs.slider.value));
	}

	render() {
		return <div className="zoom-controls-container">
			<input ref="slider" type="range" className="zoom-slider" onChange={() => this.onChange()} min={5} max={900} defaultValue={this.props.uiState.zoom}/>
		</div>
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ControlsZoom);