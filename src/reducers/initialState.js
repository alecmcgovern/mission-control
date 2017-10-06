import object1 from '../images/object1.png';
import object2 from '../images/object2.png';

export default {
	uiState: {
		menuOpen: true,
		panelIndex: 0
	},
	
	itemState: [
		{ 
			itemUrl: object1,
			itemName: "spinner",
			itemState: 2,
			className: "object1 interact"
		},
		{
			itemUrl: object2,
			itemName: "spring",
			itemState: 0,
			className: "object2 interact"
		}
	]
};