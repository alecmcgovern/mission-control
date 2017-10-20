import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiActions from '../../actions/uiActions';
import * as itemActions from '../../actions/itemActions';
import * as consoleActions from '../../actions/consoleActions';

import React3 from 'react-three-renderer';
import * as THREE from 'three';

import hiddenText1 from '../../images/hiddenText1.png';
import mars from '../../images/mars-4k-clue.jpg';
import grid from '../../images/gridcolor.png';
import filter1 from '../../images/marsThermal1-4k.jpg';
import filter2 from '../../images/marsThermal2-4k.jpg';
import spaceStationRotating from '../../images/spaceStationRotating.gif';

import './orbit.css';

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

class Orbit extends React.Component {
	
	constructor(props, context) {
		super(props, context);

		this.cameraPosition = new THREE.Vector3(0,0,5);
	}

	degreeToRadian(degree) {
		return degree*(Math.PI/180);
	}
	
	onAnimate() {
		// if (this.props.consoleState.taskNumber > 2) {
			let degrees = this.props.uiState.autorotate + 0.1;
			if (degrees > 359) {
				degrees = 0;
			}
			this.props.uiActions.autorotate(degrees);
		// }
	}

	componentDidMount() {
		this.setSpaceStationDimensions();
	}

	componentDidUpdate() {
		this.setSpaceStationDimensions();
	}

	setSpaceStationDimensions() {
		if (this.refs.spaceStation) {
			this.refs.spaceStation.style.width = Math.pow(this.props.uiState.zoom,2)/4000 + "px";	
			// this.refs.spaceStation.style.width = this.props.uiState.zoom/10 + "px";	
		}

		if (this.refs.spaceStationRotating) {
			this.refs.spaceStationRotating.style.width = Math.pow(this.props.uiState.zoom,2)/4000 + "px";
		}
	}

	renderOrbit() {
		let orbitItems = [];

		if (this.props.uiState.camera.type === 0) {
			if(this.props.uiState.spaceStationRotating) {
				orbitItems.push(
					<img key={-5} ref="spaceStationRotating" className="space-station-rotating" src={spaceStationRotating} alt=""></img>
				);	
			} else {
				let item = this.props.itemState[0];
				let orbitingItemClassName = item.className;
				orbitItems.push(
					<img key={-4} ref="spaceStation" className={orbitingItemClassName} src={item.itemUrl} alt=""></img>
				);
			}
		}

		return orbitItems;
	}


	render() {
		let rotation;
		let divisions;
		let imageTexture;
		let wireframe = false;

		if (this.props.uiState.frozen) {
			const xRadians = this.degreeToRadian(this.props.uiState.rotation.x);
			const yRadians = this.degreeToRadian(this.props.uiState.rotation.y);
			const zRadians = this.degreeToRadian(this.props.uiState.rotation.z);

			rotation = new THREE.Euler(xRadians, yRadians, zRadians);
		} else {
			rotation = new THREE.Euler(0, this.degreeToRadian(this.props.uiState.autorotate), 0);
		}

		if (this.props.uiState.camera.type === 0 ) {
			imageTexture = mars;
			divisions = 64;
		} else if (this.props.uiState.camera.type === 1) {
			imageTexture = grid;
			wireframe = true;
			divisions = 36;
		} else if (this.props.uiState.camera.type === 2) {
			this.props.uiState.camera.filter === 0 ? imageTexture = filter1 : imageTexture = filter2;
			divisions = 64;
		}

		return <div className="moon-orbit">
			<React3 key={-1} mainCamera="camera" width={this.props.uiState.zoom} height={this.props.uiState.zoom} alpha={true} onAnimate={() => this.onAnimate()}>
					<scene>
						<perspectiveCamera name="camera" fov={50} aspect={1} near={0.1} far={1000} position={this.cameraPosition} />
						<mesh rotation={rotation}>
							<sphereGeometry radius={2.1} 
											widthSegments={divisions} 
											heightSegments={divisions} />
							<meshBasicMaterial wireframe={wireframe}>
								<texture minFilter={THREE.LinearFilter} wrapS={THREE.RepeatWrapping} wrapT={THREE.RepeatWrapping} url={imageTexture}/>
							</meshBasicMaterial>
						</mesh>
					</scene>
				</React3>
			{this.renderOrbit()}
		</div>;
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Orbit);