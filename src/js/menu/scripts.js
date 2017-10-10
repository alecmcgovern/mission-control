import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as uiActions from '../../actions/uiActions';

import '../../css/menu.css';
import '../../css/scripts.css';
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
    	this.state = {value: ''};

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
		};

		this.setState({ value: '' });
	}

	render () {
		return <div className="scripts">
			<div className="scripts-panel-header">Scripts</div>
			<div className="scripts-form">
				<input className="scripts-input" type="text" value={this.state.value} onChange={this.handleChange} />
				<div className="button" onClick={this.handleSubmit} type="submit" value="Submit" >Submit</div>
			</div>
		</div>;
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Scripts);