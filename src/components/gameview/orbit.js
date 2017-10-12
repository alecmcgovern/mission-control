import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiActions from '../../actions/uiActions';
import * as itemActions from '../../actions/itemActions';

import React3 from 'react-three-renderer';
import * as THREE from 'three';

import moon from '../../images/moon.png';
import moonThermal from '../../images/moonThermal.png';
import hiddenText1 from '../../images/hiddenText1.png';

import './orbit.css';

function mapStateToProps(state) {
	return {
		uiState: state.uiState,
		itemState: state.itemState,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		uiActions: bindActionCreators(uiActions, dispatch),
		itemActions: bindActionCreators(itemActions, dispatch),
	};
}

class Three extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {rotationUp: this.degreeToRadian(90), rotationLR: this.degreeToRadian(0)};

		this.cameraPosition = new THREE.Vector3(0,0,5);
	}

	degreeToRadian(degree) {
		return degree*(Math.PI/180);
	}

	componentDidMount() {
		this.rotationInterval = setInterval(this.rotate.bind(this), 50);
	}
	
	componentWillUnmount() {
		clearInterval(this.rotationInterval);
	}

	rotate() {
		if (this.props.rotationType === "UP") {
			this.setState({ rotationUp: this.state.rotationUp - this.degreeToRadian(1)})
		} else if (this.props.rotationType === "DOWN") {
			this.setState({ rotationUp: this.state.rotationUp + this.degreeToRadian(1)})
		} else if (this.props.rotationType === "LEFT") {
			this.setState({ rotationLR: this.state.rotationLR - this.degreeToRadian(1)})
		} else if (this.props.rotationType === "RIGHT") {
			this.setState({ rotationLR: this.state.rotationLR + this.degreeToRadian(1)})
		}
	}


	render() {
		let divisions = 24;
		let rotation = new THREE.Euler(this.state.rotationUp, this.degreeToRadian(0), this.state.rotationLR);

		return(
			<React3 mainCamera="camera" width={600} height={600} alpha={true}>
				<scene>
					<perspectiveCamera name="camera" fov={50} aspect={1} near={0.1} far={1000} position={this.cameraPosition} />
					<mesh rotation={rotation}>
						<sphereGeometry radius={2.1} 
										widthSegments={divisions} 
										heightSegments={divisions} />
				        <meshBasicMaterial color={0x00ff00} wireframe={true}/>
					</mesh>
				</scene>
			</React3>
		);
	}
}

class Orbit extends React.Component {

	renderOrbit() {
		let orbitItems = [];

		if(this.props.uiState.camera.type === 0) {
			orbitItems.push(<img key={-1} className="moon" src={moon} alt=""></img>);
		} else if (this.props.uiState.camera.type === 1) {
			orbitItems.push(<Three key={-2} rotationType={this.props.uiState.rotationType}/>);
		} else if (this.props.uiState.camera.type === 2) {
			let moonClass = "moon";

			if (this.props.uiState.camera.filter === 0) {

			} else if (this.props.uiState.camera.filter === 1) {
				moonClass += " filter-1";
			} else if (this.props.uiState.camera.filter === 2) {
				moonClass += " filter-2";
			}

			orbitItems.push(<img key={-3} className={moonClass} src={moonThermal} alt=""></img>);

			if (this.props.itemState[2].itemLocation === 1) {
				orbitItems.push(<img key={-4} className="hiddenText1" src={hiddenText1} alt=""></img>);
			}
		}

		this.props.itemState.forEach((item, index) => {
			if(item.itemLocation === 2) {
				let orbitingItemClassName = item.className;

				if(item.itemState === 1) {
					orbitingItemClassName += " rotating";
				}


				orbitItems.push(
					<img key={index} className={orbitingItemClassName} onClick={() => this.props.itemActions.changeItemLocation(item.itemName, 2)} src={item.itemUrl} alt=""></img>
				)
			}
		});

		return orbitItems;
	}


	render() {
		return <div className="moon-orbit">
			{this.renderOrbit()}
		</div>
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Orbit);