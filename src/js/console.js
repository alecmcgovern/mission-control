import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as consoleActions from '../actions/consoleActions';


import Typed from 'typed.js';
import * as Strings from './strings.js';

import '../css/menu.css';

function mapStateToProps(state) {
	return {
		consoleState: state.consoleState
	};
}

function mapDispatchToProps(dispatch) {
	return {
		consoleActions: bindActionCreators(consoleActions, dispatch)
	};
}

const typedTextOptions = {
	startDelay: 0,
  	typeSpeed: 0,
  	backDelay: 2000,
  	backSpeed: 20,
  	showCursor: false,
  	cursorChar: "_",
  	autoInsertCss: true,
  	contentType: 'text'
}



class ConsolePanel extends React.Component {

	componentDidMount() {
		let text1 = {
		  	...typedTextOptions,
		  	strings: [Strings.TEXT_ONE_TYPED],
		  	onComplete: () => {this.props.consoleActions.goForward()}
		}

		if (this.props.consoleState.taskNumber % 2 === 0) {
			this.typed = new Typed(".typed-text", text1);
		}
	}

	componentWillUnmount() {
		if (this.typed) {
			this.typed.destroy();
		}
	}

	renderText() {		
		switch(this.props.consoleState.taskNumber) {
			case 0:
				return <div className="typed-text console-text"></div>;
			case 1:
				return <div className="text1 console-text">{Strings.TEXT_ONE}</div>;
			default:
				return 0;
		}
	}

	render () {
		return <div className="console">
			{this.renderText()}
		</div>;
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ConsolePanel);