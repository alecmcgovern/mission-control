import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiActions from '../actions/uiActions';
import * as itemActions from '../actions/itemActions';
import * as consoleActions from '../actions/consoleActions';

// Images
import stars from '../images/stars.jpg';
import moon from '../images/moon.png';
import menuIcon from '../images/menu-icon.png';


import '../css/gameview.css';

function mapStateToProps(state) {
	return {
		menuOpen: state.uiState.menuOpen,
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

	renderOrbit() {
		let orbitItems = [];

		this.props.itemState.forEach((item, index) => {
			if(item.itemLocation === 2) {
				let orbitingItemClassName = item.className;

				if(item.itemState === 1) {
					orbitingItemClassName += " rotating";
				}
				orbitItems.push(
					<img key={index} className={orbitingItemClassName} onClick={() => this.props.itemActions.addItem(item.itemName, 2)} src={item.itemUrl} alt=""></img>
				)
			}
		});

		return orbitItems;
	}

	renderItems() {
		let gameViewItems = [];

		this.props.itemState.forEach((item, index) => {
			if(item.itemLocation === 0) {
				gameViewItems.push(
					<img key={index} className={item.className} onClick={() => this.props.itemActions.addItem(item.itemName, 0)} src={item.itemUrl} alt=""></img>
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
					<div className="moon-orbit">
						<img className="moon" src={moon} alt=""></img>
						{this.renderOrbit()}
					</div>
				</div>
					{this.renderItems()}
				
				<img className="menu-icon" onClick={() => this.props.uiActions.toggleMenu()} src={menuIcon} alt=""></img>
			</div>
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GameView);