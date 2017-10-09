import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiActions from '../actions/uiActions';
import * as itemActions from '../actions/itemActions';
import * as consoleActions from '../actions/consoleActions';

import React3 from 'react-three-renderer';
import * as THREE from 'three';

// Images
import stars from '../images/stars.jpg';
import moon from '../images/moon.png';
import menuIcon from '../images/menu-icon.png';


import '../css/gameview.css';

function mapStateToProps(state) {
	return {
		uiState: state.uiState,
		itemState: state.itemState,
		consoleState: state.consoleState
	};
}

function mapDispatchToProps(dispatch) {
	return {
		uiActions: bindActionCreators(uiActions, dispatch),
		itemActions: bindActionCreators(itemActions, dispatch),
		consoleActions: bindActionCreators(consoleActions, dispatch)
	};
}

class Three extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.cameraPosition = new THREE.Vector3(0,0,5);
	}

	render() {
		return(
			<React3 mainCamera="camera" width={500} height={500}>
				<scene>
					<perspectiveCamera name="camera" fox={75} aspect={1} near={0.1} far={1000} position={this.cameraPosition} />
					<mesh>
						<boxGeometry
			              width={100}
			              height={100}
			              depth={100}
			            />
				          <meshBasicMaterial color={0x00ff00}/>
					</mesh>
				</scene>
			</React3>
		);
	}
}

class GameView extends React.Component {

	renderOrbit() {
		let orbitItems = [];

		if(this.props.uiState.camera === 0) {
			orbitItems.push(<img key={-1} className="moon" src={moon} alt=""></img>)
		} else if (this.props.uiState.camera === 1) {
			orbitItems.push(<Three key={-2}/>);
		}

		this.props.itemState.forEach((item, index) => {
			if(item.itemLocation === 2) {
				let orbitingItemClassName = item.className;

				if(item.itemState === 1) {
					orbitingItemClassName += " rotating";
				}


				orbitItems.push(
					<img key={index} className={orbitingItemClassName} onClick={() => this.props.itemActions.addItem(item.itemName, 2)} src={item.itemUrl} alt=""></img>
				)
			}
		});

		return orbitItems;
	}

	renderItems() {
		let gameViewItems = [];

		this.props.itemState.forEach((item, index) => {
			if(item.itemLocation === 0) {
				gameViewItems.push(
					<img key={index} className={item.className} onClick={() => this.props.itemActions.addItem(item.itemName, 0)} src={item.itemUrl} alt=""></img>
				)
			}
		});
		
		return gameViewItems;
	}

	render() {
		let overlayClassName = "game-view-overlay";

		if (this.props.consoleState.taskNumber > 1) {
			overlayClassName += " hide";
		}

		return <div className="game-view">
				<div className={overlayClassName}></div>
				<img className="background-image" src={stars} alt=""></img>

				<div className="layer-1">
					<div className="moon-orbit">
						{this.renderOrbit()}
					</div>
				</div>
					{this.renderItems()}
				
				<img className="menu-icon" onClick={() => this.props.uiActions.toggleMenu()} src={menuIcon} alt=""></img>
			</div>
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GameView);