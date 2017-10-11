import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

import Footer from './components/footer.js';
import Menu from './components/menu/menu.js';
import GameView from './components/gameview/gameview.js';

import './css/index.css';

const store = configureStore();

class App extends React.Component {

	render() {
		return (
			<Provider store={store}>

			<div className="screen">
				<div className="play-area">
					<Menu />
					<GameView />
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