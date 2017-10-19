import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemActions from '../../actions/itemActions';
import * as uiActions from '../../actions/uiActions';
import * as consoleActions from '../../actions/consoleActions';

import './inventory.css';

function mapStateToProps(state) {
	return {
		itemState: state.itemState,
		uiState: state.uiState,
		consoleState: state.consoleState
	};
}

function mapDispatchToProps(dispatch) {
	return {
		itemActions: bindActionCreators(itemActions, dispatch),
		uiActions: bindActionCreators(uiActions, dispatch),
		consoleActions: bindActionCreators(consoleActions, dispatch)
	};
}


class InventoryPanel extends React.Component {

	constructor(props, context) {
		super(props, context);

	}

	renderItems() {
		let inventoryItems = [];

		this.props.itemState.forEach((item, index) => {
			let inventoryItemClass = "inventory-item";

			if (item.selected) {
				inventoryItemClass += " item-selected";
			}

			if (item.itemLocation === 1) {
				inventoryItems.push(
				  <div key={index} className={inventoryItemClass} onClick={() => this.props.itemActions.toggleSelect(item)}>
						<img className="inventory-item-image" src={item.itemUrl} alt=""></img>
					</div>
				)
			}
		});

		return inventoryItems.length > 0 ? inventoryItems : "Empty";
	}

	useItem(item) {
		if (item.itemName === "tablet") {
			this.props.uiActions.toggleRotation();
			this.props.itemActions.toggleSelect(item);
			let callback = () => {
				this.props.uiActions.setPanel(0)
				this.props.consoleActions.goForward();
			}
			setTimeout(callback, 1000);
		}
	}

	renderControls() {
		let controls;
		this.props.itemState.forEach((item, index) => {
			if (item.selected) {
				controls = <div className="inventory-controls-container">
					<div className="button button-border" onClick={() => this.props.itemActions.toggleSelect(item)}>Cancel</div>
					<div className="button button-border" onClick={() => this.useItem(item)}>Use</div>
				</div>;
			}
		});

		return controls;
	}

	render() {
		return <div className="inventory">
				<div>Inventory</div>
				<div className="inventory-container">
					{this.renderItems()}
				</div>
				{this.renderControls()}
		</div>;
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InventoryPanel);