import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

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
		} else {
			this.setState({ value: this.state.value, showError: true });
			setTimeout(() => this.hideError(), 2000);
		}

		this.setState({ value: '' });
	}

	hideError() {
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
				<div className="scripts-panel-header">Scripts</div>
				<textarea className="scripts-input" type="text" value={this.state.value} onChange={this.handleChange} ref="textarea"/>
				<div className={scriptsErrorClass}>Error: Command not found.</div>
				<div className="button button-border" onClick={this.handleSubmit} type="submit" value="Submit" >Submit</div>
			</div>;
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Scripts);