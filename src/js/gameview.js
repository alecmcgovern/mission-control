import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiStateActions from '../actions/uiStateActions';

import '../css/gameview.css';

function mapStateToProps(state) {
	return {
		menuOpen: state.uiState.menuOpen
	};
}

function mapDispatchToProps(dispatch) {
	return {
		uiStateActions: bindActionCreators(uiStateActions, dispatch)
	};
}

class GameView extends React.Component {
	render() {
		return <div className="game-view">
				{/*IMAGES*/}
				<img className="background-image" src={require("../images/moon.jpg")} alt=""></img>

				{/*ITEMS*/}
				<div className="content">
					<img className="object1" onClick={() => {}} src={require("../images/object1.png")}></img>
				</div>

				{/*ICONS*/}
				<img className="menu-icon" onClick={() => this.props.uiStateActions.toggleMenu()} src={require("../images/menu-icon.png")} alt=""></img>
			</div>
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GameView);