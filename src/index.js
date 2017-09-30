import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import Footer from './js/footer.js';
import Console from './js/console.js';

class App extends React.Component {
	render() {
		return (
			<div className="screen">
				<div className="play-area">
					<img className="background-image" src={require("./images/moon.jpg")} alt=""></img>
					<Console />
				</div>
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);