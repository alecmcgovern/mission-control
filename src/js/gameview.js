import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiStateActions from '../actions/uiStateActions';
import * as itemActions from '../actions/itemActions';

// Images
import background from '../images/moon.jpg';
import moon from '../images/moon.png';
import menuIcon from '../images/menu-icon.png';


import '../css/gameview.css';

function mapStateToProps(state) {
	return {
		menuOpen: state.uiState.menuOpen,
		itemState: state.itemState
	};
}

function mapDispatchToProps(dispatch) {
	return {
		uiStateActions: bindActionCreators(uiStateActions, dispatch),
		itemActions: bindActionCreators(itemActions, dispatch)
	};
}

class GameView extends React.Component {

	renderOrbit() {
		let orbitItems = [];

		this.props.itemState.forEach((item) => {
			if(item.itemState === 2) {
				orbitItems.push(
					<img className={item.className} onClick={() => this.props.itemActions.addItem(item.itemUrl, item.itemName, 2)} src={item.itemUrl} alt=""></img>
				)
			}
		});

		return orbitItems;
	}

	renderItems() {
		let gameViewItems = [];

		this.props.itemState.forEach((item) => {
			if(item.itemState === 0) {
				gameViewItems.push(
					<img className={item.className} onClick={() => this.props.itemActions.addItem(item.itemUrl, item.itemName, 0)} src={item.itemUrl} alt=""></img>
				)
			}
		});
		
		return gameViewItems;
	}

	render() {
		let object1ClassName = "object1";
		let object2ClassName = "object2";

		for (var i = 0; i < this.props.itemState.length; i++) {
			if (this.props.itemState.length > 0 ) {
				object1ClassName += " hidden";
			}
		}

		this.props.itemState.forEach((item) => {
			if (item.itemState !== 0) {

			}
		});

		return <div className="game-view">
				{/*IMAGES*/}
				<img className="background-image" src={background} alt=""></img>
				<div className="moon-orbit">
					<img className="moon" src={moon} alt=""></img>
					{this.renderOrbit()}
				</div>

				{/*ITEMS*/}
				{this.renderItems()}
				
				{/*ICONS*/}
				<img className="menu-icon" onClick={() => this.props.uiStateActions.toggleMenu()} src={menuIcon} alt=""></img>
			</div>
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GameView);