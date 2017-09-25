import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './header.js';
import LeftMenu from './leftmenu.js';

class App extends React.Component {
	render() {
		return (
			<div className="screen">
				<Header />
				<LeftMenu />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);