import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiActions from '../../actions/uiActions';
import * as itemActions from '../../actions/itemActions';
import * as consoleActions from '../../actions/consoleActions';

import Orbit from './orbit.js';


// Images
import stars from '../../images/stars.jpg';
import menuIcon from '../../images/menu-icon.png';


import './gameview.css';

function mapStateToProps(state) {
	return {
		uiState: state.uiState,
		itemState: state.itemState,
		consoleState: state.consoleState
	};
}

function mapDispatchToProps(dispatch) {
	return {
		uiActions: bindActionCreators(uiActions, dispatch),
		itemActions: bindActionCreators(itemActions, dispatch),
		consoleActions: bindActionCreators(consoleActions, dispatch)
	};
}

class GameView extends React.Component {


	renderControls() {
		if (this.props.uiState.camera.type === 2) {
			let filterOneClass = "filter-one";
			let filterTwoClass = "filter-two";
			let filterThreeClass = "filter-three";

			if (this.props.uiState.camera.filter === 0) {
				filterOneClass += " filter-selected";
			} else if (this.props.uiState.camera.filter === 1) {
				filterTwoClass += " filter-selected";
			} else if (this.props.uiState.camera.filter === 2) {
				filterThreeClass += " filter-selected";
			}

			return <div className="filter-controls">
				<div className="filter-header">FILTERS</div>
				<div className={filterOneClass} onClick={() => this.props.uiActions.setFilter(0)}></div>
				<div className={filterTwoClass} onClick={() => this.props.uiActions.setFilter(1)}></div>
				<div className={filterThreeClass} onClick={() => this.props.uiActions.setFilter(2)}></div>
			</div>
		}
	}

	renderItems() {
		let gameViewItems = [];

		this.props.itemState.forEach((item, index) => {
			if(item.itemLocation === 0) {
				gameViewItems.push(
					<img key={index} className={item.className} onClick={() => this.props.itemActions.changeItemLocation(item.itemName, 1)} src={item.itemUrl} alt=""></img>
				)
			}
		});
		
		return gameViewItems;
	}

	render() {
		let overlayClassName = "game-view-overlay";

		if (this.props.consoleState.taskNumber > 1) {
			overlayClassName += " hide";
		}

		return <div className="game-view">
				<div className={overlayClassName}></div>
				<img className="background-image" src={stars} alt=""></img>

				<div className="layer-1">
					<Orbit />
				</div>
				{this.renderItems()}
				{this.renderControls()}
				
				<img className="menu-icon" onClick={() => this.props.uiActions.toggleMenu()} src={menuIcon} alt=""></img>
			</div>
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GameView);