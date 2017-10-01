import React from 'react';
import ReactDOM from 'react-dom';
import Typed from 'typed.js';
import * as strings from './strings.js';

import ConsolePanel from './console.js';
import InventoryPanel from './inventory.js';
import ThirdPanel from './thirdpanel.js';

import '../css/menu.css';

export default class Menu extends React.Component {

	constructor(props) {
		super(props);
		this.state = { index: 0 };
	}

	handleClick(index) {
		this.setState({ index: index });
	}

	toggleMenu() {
		return (
			<div className="toggle-container">
				<div className="toggle" onClick={() => this.handleClick(0)}>console</div>
				<div className="toggle" onClick={() => this.handleClick(1)}>inventory</div>
				<div className="toggle" onClick={() => this.handleClick(2)}>panel</div>
			</div>
		);
	}

	render() {
		if(this.state.index === 0) {
			return <div className="menu-container">
					<ConsolePanel index={this.state.index}/>
					{this.toggleMenu()}
				</div>;
		} else if (this.state.index === 1) {
			return <div className="menu-container">
					<InventoryPanel />
					{this.toggleMenu()}
				</div>;
		} else {
			return <div className="menu-container">
					<ThirdPanel />
					{this.toggleMenu()}
				</div>;;
		}
	}
};