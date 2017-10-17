import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiActions from '../../actions/uiActions';
import * as itemActions from '../../actions/itemActions';

import React3 from 'react-three-renderer';
import * as THREE from 'three';

import hiddenText1 from '../../images/hiddenText1.png';
import mars from '../../images/marsmap1k.jpg';
import grid from '../../images/gridcolor.png';
import filter1 from '../../images/marsmapthermal1.jpg';
import filter2 from '../../images/marsmapthermal2.jpg';

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

		this.cameraPosition = new THREE.Vector3(0,0,5);
	}

	degreeToRadian(degree) {
		return degree*(Math.PI/180);
	}

	render() {
		const xRadians = this.degreeToRadian(this.props.rotation.x);
		const yRadians = this.degreeToRadian(this.props.rotation.y);
		const zRadians = this.degreeToRadian(this.props.rotation.z);
		
		let rotation = new THREE.Euler(xRadians, yRadians, zRadians);

		let divisions;
		let imageTexture;
		let wireframe = false;

		if (this.props.cameraType === 0 ) {
			imageTexture = mars;
			divisions = 48;
		} else if (this.props.cameraType === 1) {
			imageTexture = grid;
			wireframe = true;
			divisions = 24;
		} else if (this.props.cameraType === 2) {
			this.props.filter === 0 ? imageTexture = filter1 : imageTexture = filter2;
			divisions = 48;
		}


		return(
				<React3 mainCamera="camera" width={600} height={600} alpha={true}>
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
		);
	}
}

class Orbit extends React.Component {

	renderOrbit() {
		let orbitItems = [];

		let gridViewClass = "grid-view-container";

		if (!this.props.uiState.moonSpin) {
			gridViewClass += " reverseSpin";
		}

		let wireframe = false;
		if (this.props.uiState.camera.type === 1) {
			wireframe = true;
		}

		let thermal = 0;
		if (this.props.uiState.camera.type === 2) {
			thermal = this.props.uiState.camera.filter;
		}
		orbitItems.push(<div key={-1} className={gridViewClass}><Three rotation={this.props.uiState.rotation} cameraType={this.props.uiState.camera.type} filter={this.props.uiState.camera.filter}/></div>);

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