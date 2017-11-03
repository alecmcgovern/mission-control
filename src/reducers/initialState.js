import object1 from '../images/object1.png';
import object2 from '../images/object2.png';
import object3 from '../images/object3.png';
import object4 from '../images/lens1.png';


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
			className: "object1"
		},
		// {
		// 	itemUrl: object2,
		// 	itemName: "spring",
		// 	itemLocation: 0,
		// 	itemState: 0,
		// 	selected: false,
		// 	className: "object2 interact"
		// },
		{
			itemUrl: object3,
			itemName: "tablet",
			itemLocation: 0,
			itemState: 0,
			selected: false,
			className: "object3 interact"
		},
		{
			itemUrl: object4,
			itemName: "lens1",
			itemLocation: 0,
			itemState: 0,
			selected: false,
			className: "object4 interact"
		}
	],

	consoleState: {
		taskNumber: 3
	}
};