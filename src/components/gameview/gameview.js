import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiActions from '../../actions/uiActions';
import * as itemActions from '../../actions/itemActions';
import * as consoleActions from '../../actions/consoleActions';

import Orbit from './orbit.js';
import ControlsFilter from './controlsFilter.js';
import ControlsGrid from './controlsGrid.js';
import ControlsZoom from './controlsZoom.js';

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
			return <ControlsFilter />
		}
	}

	addItemToInventory(item) {
		this.props.itemActions.changeItemLocation(item.itemName, 1);	
	}

	renderItems() {
		let gameViewItems = [];

		if (this.props.uiState.camera.type === 0) {	

			this.props.itemState.forEach((item, index) => {
				if(item.itemLocation === 0 && item.itemName !== "tablet") {
					gameViewItems.push(
						<img key={index} className={item.className} onClick={() => this.addItemToInventory(item)} src={item.itemUrl} alt=""></img>
					)
				}
			});
		}
		
		const rotation = this.props.uiState.rotation;
		if (this.props.uiState.camera.type === 1 && rotation.x === 100 && rotation.y === 100 && rotation.z === 100) {	
			this.props.itemState.forEach((item, index) => {
				if(item.itemLocation === 0 && item.itemName === "tablet") {
					gameViewItems.push(
						<img key={index} className={item.className} onClick={() => this.addItemToInventory(item)} src={item.itemUrl} alt=""></img>
					)
				}
			});
		}
		
		return gameViewItems;
	}

	centerScroll() {
		let gameview = this.refs.gameviewElement;
		gameview.scrollTop = (gameview.scrollHeight - gameview.clientHeight)/2;
		gameview.scrollLeft = (gameview.scrollWidth - gameview.clientWidth)/2;
	}

	render() {
		let overlayClassName = "game-view-overlay";

		if (this.props.consoleState.taskNumber > 1) {
			overlayClassName += " hide";
		}

		if (this.props.consoleState.taskNumber === 2) {
			this.centerScroll();
		}

		return <div className="game-view" ref="gameviewElement">
				<div className={overlayClassName}></div>
				<img className="background-image" src={stars} alt=""></img>

				<div className="layer-1">
					<Orbit />
				</div>
				{this.renderItems()}
				{this.renderControls()}
				<ControlsGrid />
				<ControlsZoom />
				<img className="menu-icon" onClick={() => this.props.uiActions.toggleMenu()} src={menuIcon} alt=""></img>
			</div>
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GameView);