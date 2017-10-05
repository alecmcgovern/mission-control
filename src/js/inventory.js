import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../actions/itemActions';

import '../css/menu.css';

function mapStateToProps(state) {
	return {
		itemState: state.itemState
	};
}

function mapDispatchToProps(dispatch) {
	return {
		itemActions: bindActionCreators(itemActions, dispatch)
	};
}


class InventoryPanel extends React.Component {
	renderItems() {
		let inventoryItems = [];

		this.props.itemState.forEach((item) => {
			if(item.itemState === 1) {
				inventoryItems.push(
					<div className="inventory-item">
						<img className="inventory-item-image" src={item.itemUrl} alt=""></img>
					</div>
				)
			}
		});

		return inventoryItems;
	}

	render () {
		return <div className="inventory">
			<div>Inventory</div>
			<div className="inventory-container">
				{this.renderItems()}
			</div>
		</div>;
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InventoryPanel);