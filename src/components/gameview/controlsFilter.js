import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiActions from '../../actions/uiActions';
import * as consoleActions from '../../actions/consoleActions';

import './controlsFilter.css';

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

class ControlsFilter extends React.Component {

	renderFilters() {
		if (this.props.uiState.camera.type === 2) {
			let filterOneClass = "filter-one";
			let filterTwoClass = "filter-two";

			if (this.props.uiState.camera.filter === 0) {
				filterOneClass += " filter-selected";
			} else if (this.props.uiState.camera.filter === 1) {
				filterTwoClass += " filter-selected";
			}

			return <div className="filter-controls">
				<div className="filter-header">FILTERS</div>
				<div className="filters-container">
				<div className={filterOneClass} onClick={() => this.props.uiActions.setFilter(0)}></div>
				<div className={filterTwoClass} onClick={() => this.props.uiActions.setFilter(1)}></div>
				</div>
			</div>
		}
	}

	render() {
		return <div className="filter-controls-container">
			{this.renderFilters()}
		</div>
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ControlsFilter);