import React from 'react';
import ReactDOM from 'react-dom';
import Typed from 'typed.js';
import '../css/console.css';


export default class Console extends React.Component {

	componentDidMount() {
		let instructions1 = {
		  strings: ["Welcome to Space.", "Prepare yourself."],
		  typeSpeed: 40,
		  showCursor: false
		}
		let typed = new Typed(".typed-text", instructions1);
	}

	render() {

		return (
			<div className="typed-text-container">
				<div className="typed-text">
				</div>
			</div>
		);
	}
};