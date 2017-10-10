import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiActions from '../actions/uiActions';
import * as consoleActions from '../actions/consoleActions';


import ConsolePanel from './console.js';
import InventoryPanel from './inventory.js';
import ThirdPanel from './thirdpanel.js';

import '../css/menu.css';
import '../css/buttons.css';

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

class Menu extends React.Component {

	buildPanel(index) {
		if(index === 0) {
			return <ConsolePanel/>
		} else if (index === 1) {
			return <InventoryPanel />
		} else {
			return <ThirdPanel />
		}
	}

	render() {
		let menuContainerClassName = "menu-container";
		let bottomMenuClassName = "bottom-menu";
		let consoleButtonClass = "button";
		let inventoryButtonClass = "button";
		let scriptsButtonClass = "button";

		if (!this.props.uiState.menuOpen) {
			menuContainerClassName += " closed";
		}

		if (this.props.consoleState.taskNumber < 3) {
			bottomMenuClassName += " bottom-menu-hide";
		}

		if (this.props.uiState.panelIndex === 0) {
			consoleButtonClass += " button-selected";
		} else if (this.props.uiState.panelIndex === 1) {
			inventoryButtonClass += " button-selected";
		} else if (this.props.uiState.panelIndex === 2) {
			scriptsButtonClass += " button-selected";
		}
		
		return <div className={menuContainerClassName}>
				{this.buildPanel(this.props.uiState.panelIndex)}
				<div className={bottomMenuClassName}>
					<div className={consoleButtonClass} onClick={() => this.props.uiActions.setPanel(0)}>console</div>
					<div className={scriptsButtonClass} onClick={() => this.props.uiActions.setPanel(2)}>scripts</div>
					<div className={inventoryButtonClass} onClick={() => this.props.uiActions.setPanel(1)}>inventory</div>
				</div>
			</div>;

	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu);