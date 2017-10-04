import React from 'react';
import '../css/footer.css';

export default class Footer extends React.Component {

	render() {

		return (
			<div className="footer">
				<audio controls autoPlay className="sfx-audio">
					<source src="./../audio/beep1.mp3" />
				</audio>
			</div>
		);
	}
};