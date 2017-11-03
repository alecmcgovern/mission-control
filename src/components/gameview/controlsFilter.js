import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiActions from '../../actions/uiActions';
import * as consoleActions from '../../actions/consoleActions';

import './controlsFilter.css';

import lens1 from '../../images/lens1.png';
import lens2 from '../../images/lens2.png';
import lens3 from '../../images/lens3.png';

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

	render() {
		let filterOneClass = "filter-one";
		let filterTwoClass = "filter-two";
		let filterThreeClass = "filter-three";
		let filterControlsClass = "filter-controls";
		let filterHeaderClass = "filter-header";

		if (this.props.uiState.camera.type === 2) {
			filterOneClass += " show-filter-controls";
			filterTwoClass += " show-filter-controls";
			filterThreeClass += " show-filter-controls";
			filterHeaderClass += " filter-header-show";

			if (this.props.uiState.camera.filter === 0) {
				filterOneClass += " filter-selected";
			} else if (this.props.uiState.camera.filter === 1) {
				filterTwoClass += " filter-selected";
			}

		}

		if (this.props.consoleState.taskNumber < 3) {
			filterControlsClass += " filter-controls-hide";
		}

		return <div className={filterControlsClass}>
				<div className={filterHeaderClass}>FILTERS</div>
				<div className="filters-container">
					<img className={filterOneClass} src={lens1} alt="" onClick={() => this.props.uiActions.setFilter(0)} ></img>
					<img className={filterTwoClass} src={lens3} alt="" onClick={() => this.props.uiActions.setFilter(1)} ></img>
					<img className={filterThreeClass} src={lens2} alt="" onClick={() => this.props.uiActions.setFilter(1)} ></img>
				</div>
		</div>
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ControlsFilter);