import React from 'react';
import '../css/index.css';

export default class Footer extends React.Component {

	render() {

		return (
			<div className="footer">
				<audio controls className="sfx-audio">
					<source src="./../audio/beep1.mp3" />
				</audio>
			</div>
		);
	}
};