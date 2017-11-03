import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiActions from '../../actions/uiActions';
import * as consoleActions from '../../actions/consoleActions';
import * as itemActions from '../../actions/itemActions';

import './controlsFilter.css';

import lens1 from '../../images/lens1.png';
import lens2 from '../../images/lens2.png';
import lens3 from '../../images/lens3.png';

function mapStateToProps(state) {
	return {
		uiState: state.uiState,
		consoleState: state.consoleState,
		itemState: state.itemState
	};
}

function mapDispatchToProps(dispatch) {
	return {
		uiActions: bindActionCreators(uiActions, dispatch),
		consoleActions: bindActionCreators(consoleActions, dispatch),
		itemActions: bindActionCreators(itemActions, dispatch)
	};
}

class ControlsFilter extends React.Component {
	setFilter(filter) {
		if (this.props.uiState.camera.filter === filter) {
			this.props.uiActions.setFilter(0);
		} else {
			this.props.uiActions.setFilter(filter);
		}
	}

	render() {
		let filterOneClass = "filter-one";
		let filterTwoClass = "filter-two";
		let filterThreeClass = "filter-three";
		let filterControlsClass = "filter-controls";

		if (this.props.uiState.camera.type === 0) {
			if (this.props.itemState[2].itemState === 1) {
				filterOneClass += " show-filter-controls";
			}

			if (this.props.itemState[3].itemState === 1) {
				filterTwoClass += " show-filter-controls";
			}

			if (this.props.itemState[4].itemState === 1) {
				filterThreeClass += " show-filter-controls";
			}

			if (this.props.uiState.camera.filter === 1) {
				filterOneClass += " filter-selected";
			} else if (this.props.uiState.camera.filter === 2) {
				filterTwoClass += " filter-selected";
			} else if (this.props.uiState.camera.filter === 3) {
				filterThreeClass += " filter-selected";
			}
		}

		if (this.props.uiState.camera.type !== 0) {
			filterControlsClass += " filter-controls-hide";
		}

		return <div className={filterControlsClass}>
				<div className="filters-container">
					<img className={filterOneClass} src={lens1} alt="" onClick={() => this.setFilter(1)} ></img>
					<img className={filterTwoClass} src={lens2} alt="" onClick={() => this.setFilter(2)} ></img>
					<img className={filterThreeClass} src={lens3} alt="" onClick={() => this.setFilter(3)} ></img>
				</div>
		</div>
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ControlsFilter);