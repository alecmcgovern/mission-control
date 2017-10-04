import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiStateActions from '../actions/uiStateActions';


import ConsolePanel from './console.js';
import InventoryPanel from './inventory.js';
import ThirdPanel from './thirdpanel.js';

import '../css/menu.css';

function mapStateToProps(state) {
	return {
		menuOpen: state.uiState.menuOpen,
		panelIndex: state.uiState.panelIndex
	};
}

function mapDispatchToProps(dispatch) {
	return {
		uiStateActions: bindActionCreators(uiStateActions, dispatch)
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

		if (!this.props.menuOpen) {
			menuContainerClassName += " closed";
		}
		return <div className={menuContainerClassName}>
				{this.buildPanel(this.props.panelIndex)}
				<div className="bottom-menu">
					<div className="toggle" onClick={() => this.props.uiStateActions.setPanel(0)}>console</div>
					<div className="toggle" onClick={() => this.props.uiStateActions.setPanel(1)}>inventory</div>
					<div className="toggle" onClick={() => this.props.uiStateActions.setPanel(2)}>panel</div>
				</div>
			</div>;

	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu);