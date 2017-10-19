import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemActions from '../../actions/itemActions';

import './inventory.css';

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

    this.props.itemState.forEach((item, index) => {
      if (item.itemLocation === 1) {
        inventoryItems.push(
          <div key={index} className="inventory-item" onClick={() => this.props.itemActions.changeItemLocation(item.itemName, 0)}>
						<img className="inventory-item-image" src={item.itemUrl} alt=""></img>
					</div>
        )
      }
    });

    return inventoryItems.length > 0 ? inventoryItems : "Empty";
  }

  render() {
    return <div className="inventory">
			<div>Inventory</div>
			<div className="inventory-container">
				{this.renderItems()}
			</div>
		</div>;
  }
}
;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InventoryPanel);