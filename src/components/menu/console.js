import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as consoleActions from '../../actions/consoleActions';
import * as uiActions from '../../actions/uiActions';

import Typist from 'react-typist';
import * as Strings from '../strings.js';


import './console.css';
import '../../css/buttons.css';

function mapStateToProps(state) {
	return {
		uiState: state.uiState,
		consoleState: state.consoleState
	};
}

function mapDispatchToProps(dispatch) {
	return {
		consoleActions: bindActionCreators(consoleActions, dispatch),
		uiActions: bindActionCreators(uiActions, dispatch)
	};
}

class ConsolePanel extends React.Component {

	componentWillUnmount() {
		if (this.typed) {
			this.typed.destroy();
		}
	}

	goForward(delay) {
		setTimeout(() => this.props.consoleActions.goForward(), delay);
	}

	toggleMenu() {
		this.props.uiActions.toggleMenu();
	}

	renderText() {		
		switch(this.props.consoleState.taskNumber) {
			case 0:
				return <div className="text-container">
					<Typist avgTypingDelay={20} stdTypingDelay={0} cursor={{show: false}} onTypingDone={() => {this.goForward(800)}}>
						<p>Welcome to Mission Control.</p>
						<Typist.Delay ms={800} />
						<br />
						<p>Follow our instructions.</p>
						<Typist.Delay ms={800} />
						<br />
						<p>Good luck.</p>
					</Typist>
				</div>;
			case 1:
				return <div className="text-container">
					<p>Welcome to Mission Control.</p>
					<br />
					<p>Follow our instructions.</p>
					<br />
					<p>Good luck.</p>
					<br />
					<div className="button button-hover" onClick={() => this.props.consoleActions.goForward()}>START</div>
				</div>;

			case 2:
				return <div className="text-container">
					<Typist avgTypingDelay={20} stdTypingDelay={0} cursor={{show: false}} onTypingDone={() => {this.goForward(0)}}>
						<p>Mission 1:</p>
						<br />
						<Typist.Delay ms={800} />
						<p>The Transnational Martian Orbiter has stopped rotating.</p>
						<Typist.Delay ms={800} />
						<p>Power and life support appear to be online but communications are down.</p>
						<Typist.Delay ms={800} />
						<p>Determine why the rotation rockets are not firing and fix them.</p>
					</Typist>
				</div>;
			case 3:
				return <div className="text-container">
					<p>Mission 1:</p>
					<br />
					<p>The Transnational Martian Orbiter has stopped rotating.</p>
					<p>Power and life support appear to be online but communications are down.</p>
					<p>Determine why the rotation rockets are not firing and fix them.</p>
				</div>;

			default:
				return 0;
		}
	}

	render () {
		return <div className="console-text-container">
			{this.renderText()}
		</div>;
	}
};



export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ConsolePanel);