import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Typed from 'typed.js';

import * as uiActions from '../../actions/uiActions';

import './scripts.css';
import '../../css/buttons.css';

function mapStateToProps(state) {
	return {
		uiState: state.uiState,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		uiActions: bindActionCreators(uiActions, dispatch),
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

class Scripts extends React.Component {
  	constructor(props) {
    	super(props);
    	this.state = {value: '', showError: false};

    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleChange(event) {
    	this.setState({value: event.target.value});
  	}

	handleSubmit(event) {
		console.log('Submitted: '+ this.state.value);
		event.preventDefault();

		if (this.state.value === "password") {
			this.props.uiActions.toggleTestControls();
			this.typed = null;
		} else {
			this.setState({ value: this.state.value, showError: true });
			let error1 = {
				...typedTextOptions,
				strings: ["Error: Command not found"],
				onComplete: () => {setTimeout(this.hideError.bind(this), 2000)}
			}

			this.typed = new Typed(".scripts-error", error1);
		}

		this.setState({ value: '' });
	}

	hideError() {
		this.typed.destroy();
		this.setState({ value: this.state.value, showError: false });
	}

	componentDidMount() {
		this.refs.textarea.focus();
	}

	render () {
		let scriptsErrorClass = "scripts-error";

		if (this.state.showError === false) {
			scriptsErrorClass += " scripts-error-hidden"
		}

		return <div className="scripts-form">
				<textarea className="scripts-input" type="text" value={this.state.value} onChange={this.handleChange} ref="textarea"/>
				<div className={scriptsErrorClass}></div>
				<div className="button button-border" onClick={this.handleSubmit} type="submit" value="Submit" >Submit</div>
			</div>;
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Scripts);