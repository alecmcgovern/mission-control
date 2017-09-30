import React from 'react';
import ReactDOM from 'react-dom';
import Typed from 'typed.js';
import './index.css';

export default class Header extends React.Component {

	componentDidMount() {
		let options = {
		  strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
		  typeSpeed: 40
		}
		let typed = new Typed(".typed-text", options);
		typed.start();
	}

	render() {

		return (
			<div className="header">
				<div className="typed-text-container">
					<div className="typed-text">
					</div>
				</div>
				<button className="play-button">PLAY</button>
				<button className="pause-button">PAUSE</button>
			</div>
		);
	}
};