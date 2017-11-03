import object1 from '../images/object1.png';
import tablet from '../images/object3.png';
import lens1 from '../images/lens1.png';
import lens2 from '../images/lens2.png';
import lens3 from '../images/lens3.png';


export default {
	uiState: {
		menuOpen: true,
		panelIndex: 0,
		showScripts: false,
		camera: {
			type: 0,
			filter: 0
		},
		rotation: {
			x: 0,
			y: 0,
			z: 0
		},
		autorotate: 0,
		zoom: 550,
		frozen: false,
		testControls: false,
		spaceStationRotating: false
	},
	
	itemState: [
		{ 
			itemUrl: object1,
			itemName: "spinner",
			itemLocation: 2,
			itemState: 0,
			selected: false,
			className: "object1",
			description: ""
		},
		{
			itemUrl: tablet,
			itemName: "tablet",
			itemLocation: 0,
			itemState: 0,
			selected: false,
			className: "tablet interact",
			id: "ROC-0931",
			description: "TMO Remote Operator"
		},
		{
			itemUrl: lens1,
			itemName: "lens1",
			itemLocation: 0,
			itemState: 0,
			selected: false,
			className: "lens1 interact",
			id: "F-0021",
			description: "Camera Lens - Thermal"
		},
		{
			itemUrl: lens2,
			itemName: "lens2",
			itemLocation: 0,
			itemState: 0,
			selected: false,
			className: "lens2 interact",
			id: "F-0022",
			description: "Camera Lens (F-0022)"
		},
		{
			itemUrl: lens3,
			itemName: "lens3",
			itemLocation: 0,
			itemState: 0,
			selected: false,
			className: "lens3 interact",
			id: "F-0023",
			description: "Camera Lens - Bio (F-0023)"
		}
	],

	consoleState: {
		taskNumber: 0
	}
};