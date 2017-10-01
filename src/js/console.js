import React from 'react';
import ReactDOM from 'react-dom';
import Typed from 'typed.js';
import * as strings from './strings.js';

import '../css/console.css';


export default class Menu extends React.Component {

	componentDidMount() {
		let instructions = {
		  strings: [strings.INSTRUCTIONS],
		  startDelay: 0,
		  typeSpeed: 10,
		  backDelay: 2000,
		  backSpeed: 20,
		  showCursor: false,
		  cursorChar: "_",
		  autoInsertCss: true,
		  contentType: 'text'
		}
		let typed = new Typed(".typed-text", instructions);
	}

	render () {
		return <div className="typed-text-container">
			<div className="typed-text"></div>
		</div>;
	}
};