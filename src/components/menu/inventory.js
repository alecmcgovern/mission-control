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

	renderItems() {
		let inventoryItems = [];

		this.props.itemState.forEach((item, index) => {
			let inventoryItemClass = "inventory-item";

			if (item.selected) {
				inventoryItemClass += " item-selected";
			}

			if (item.itemLocation === 1) {
				inventoryItems.push(
				  <div key={index} className={inventoryItemClass} onClick={() => this.selectItem(item)}>
						<img className="inventory-item-image" src={item.itemUrl} alt=""></img>
					</div>
				)
			}
		});

		return inventoryItems.length > 0 ? inventoryItems : <div className="empty-inventory">Empty</div>;
	}

	useItem(item) {
		if (item.itemName === "tablet") {
			this.props.uiActions.toggleRotation();
			this.props.itemActions.toggleSelect(item);
			let callback = () => {
				this.props.uiActions.setPanel(0);
				this.props.uiActions.setCamera(0);
				this.props.uiActions.setRotateX(0);
				this.props.uiActions.setRotateY(this.props.uiState.autorotate);
				this.props.uiActions.setRotateZ(0);
				this.props.consoleActions.goForward();
			}
			setTimeout(callback, 10);
		}

		if (item.itemName === "lens1" || item.itemName === "lens2" || item.itemName === "lens3") {
			this.props.itemActions.changeItemState(item.itemName, 1);
		}

		this.props.itemActions.toggleSelect(item);
	}

	selectItem(item) {
		this.props.itemState.forEach((i) => {
			if (i != item && i.selected) {
				this.props.itemActions.toggleSelect(i);
			}
		});
		this.props.itemActions.toggleSelect(item)
	}

	renderControls() {
		let controls;
		this.props.itemState.forEach((item, index) => {
			let useText;
			if (item.itemName === "lens1" || item.itemName === "lens2" || item.itemName === "lens3") {
				useText = "Equip";
			} else {
				useText = "Use";
			}
			if (item.selected) {
				controls = <div className="inventory-controls-container">
					<div className="item-description">Id:&nbsp;&nbsp;{item.id}</div>
					<div className="item-description">{item.description}</div>
					<div className="control-buttons-container">
						<div className="button button-border" onClick={() => this.selectItem(item)}>Cancel</div>
						<div className="button button-border" onClick={() => this.useItem(item)}>{useText}</div>
					</div>
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