import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<button className="play-button">PLAY</button>
				<button className="pause-button">PAUSE</button>
			</div>
		);
	}
};