import React from 'react';

import '../css/menu.css';


export default class Menu extends React.Component {
	renderItems() {
		return {forEach item in this.props.}
	}

	render () {
		return <div className="inventory">
			<div>Inventory</div>
			<div className="inventory-container">
				{renderItems()}
			</div>
		</div>;
	}
};