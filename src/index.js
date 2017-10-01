import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import Footer from './js/footer.js';
import Menu from './js/menu.js';

class App extends React.Component {
	consoleState() {

	}

	render() {
		return (
			<div className="screen">
				<div className="play-area">
					<Menu />
					<img className="background-image" src={require("./images/moon.jpg")} alt=""></img>
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