import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as consoleActions from '../../actions/consoleActions';
import * as uiActions from '../../actions/uiActions';

import Typist from 'react-typist';

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
					<Typist startDelay={800} avgTypingDelay={10} stdTypingDelay={0} cursor={{show: false}}>
						<p>Welcome to Mission Control.</p>
					</Typist>
						<br />
					<Typist startDelay={2800} avgTypingDelay={10} stdTypingDelay={0} cursor={{show: false}}>
						<p>Follow our instructions.</p>
					</Typist>
						<br />
					<Typist startDelay={4400} avgTypingDelay={10} stdTypingDelay={0} cursor={{show: false}} onTypingDone={() => this.goForward(1000)}>
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
					<div className="button button-hover start-button" onClick={() => this.props.consoleActions.goForward()}>START</div>
				</div>;

			case 2:
				return <div className="text-container">
					<Typist avgTypingDelay={10} stdTypingDelay={0} cursor={{show: false}}>
						<p>Mission 1:</p>
					</Typist>
						<br />
					<Typist startDelay={1000} avgTypingDelay={10} stdTypingDelay={0} cursor={{show: false}}>
						<p>The Transnational Martian Orbiter has stopped rotating.</p>
					</Typist>
					<br />
					<Typist startDelay={3400} avgTypingDelay={10} stdTypingDelay={0} cursor={{show: false}}>
						<p>Power and life support appear to be online but communications are down.</p>
					</Typist>
					<br />
					<Typist startDelay={6000} avgTypingDelay={10} stdTypingDelay={0} cursor={{show: false}} onTypingDone={() => this.goForward(1000)}>
						<p>We need you to do a remote restart of the rotation rockets.</p>
					</Typist>
				</div>;
			case 3:
				return <div className="text-container">
					<p>Mission 1:</p>
					<br />
					<p>The Transnational Martian Orbiter has stopped rotating.</p>
					<br />
					<p>Power and life support appear to be online but communications are down.</p>
					<br />
					<p>We need you to do a remote restart of the rotation rockets.</p>
					<br />
				</div>;

			case 4:
				return <div className="text-container">
					<Typist startDelay={600} avgTypingDelay={10} stdTypingDelay={0} cursor={{show: false}}>
						<p>Good work.</p>
					</Typist>
					<br />
					<Typist startDelay={2800} avgTypingDelay={10} stdTypingDelay={0} cursor={{show: false}}>
						<p>The crew can now work in simulated gravity and should restore communications soon.</p>
					</Typist>
					<br />
					<Typist startDelay={5800} avgTypingDelay={10} stdTypingDelay={0} cursor={{show: false}} onTypingDone={() => this.goForward(1000)}>
						<p>Stay tuned...</p>
					</Typist>
				</div>;
			case 5:
				return <div className="text-container">
						<p>Good work.</p>
						<br />
						<p>The crew can now work in simulated gravity and should restore communications soon.</p>
						<br />
						<p>Stay tuned...</p>
				</div>

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