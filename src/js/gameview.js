import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiStateActions from '../actions/uiStateActions';
import * as itemActions from '../actions/itemActions';

// Images
import object1 from '../images/object1.png';

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
	render() {
		let object1ClassName = "object1";

		for (var i = 0; i < this.props.itemState.length; i++) {
			if (this.props.itemState.length > 0 ) {
				object1ClassName += " hidden";
			}
		}

		return <div className="game-view">
				{/*IMAGES*/}
				<img className="background-image" src={require("../images/moon.jpg")} alt=""></img>

				{/*ITEMS*/}
				<img className={object1ClassName} onClick={() => this.props.itemActions.addItem(object1)} src={object1}></img>

				{/*ICONS*/}
				<img className="menu-icon" onClick={() => this.props.uiStateActions.toggleMenu()} src={require("../images/menu-icon.png")} alt=""></img>
			</div>
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GameView);