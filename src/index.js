import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';


import './css/index.css';

import Footer from './js/footer.js';
import Menu from './js/menu.js';

const store = configureStore();

class App extends React.Component {

	render() {
		return (
			<Provider store={store}>

			<div className="screen">
				<div className="play-area">
					<Menu />
					<img className="background-image" src={require("./images/moon.jpg")} alt=""></img>
				</div>
				<Footer />
			</div>
			</Provider>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);