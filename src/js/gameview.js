import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiStateActions from '../actions/uiStateActions';
import * as itemActions from '../actions/itemActions';

// Images
import moon from '../images/moon.jpg';
import menuIcon from '../images/menu-icon.png';
import object1 from '../images/object1.png';
import object2 from '../images/object2.png';

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
				<img className="background-image" src={moon} alt=""></img>

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