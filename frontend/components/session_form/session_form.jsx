import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import { ModalStyle } from '../../util/modal_style';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: "",
			modalOpen: true
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onModalClose = this.onModalClose.bind(this);
	}

	componentDidUpdate(){
		this.redirectIfLoggedIn();
	}
	onModalClose() {
	  this.setState({modalOpen: false});
		// this.redirectToIntro();
	}

	// redirectToIntro() {
	//   hashHistory.push('/');
	// }


	redirectIfLoggedIn(){
		if (this.props.loggedIn){
			hashHistory.push(`/photos`);
		}
	}

	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	handleSubmit(e){
		e.preventDefault();
		this.onModalClose();
		const user = {username: this.state.username, password: this.state.password};
		this.props.processForm({user});
	}

	navLink(){
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
	}

	renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div >
			<Modal isOpen={this.state.modalOpen}
						 onRequestClose={this.onModalClose}
						 style={ModalStyle}>
				<form onSubmit={this.handleSubmit}
				 			 className="login-form-box">
					Welcome to Beardstagram!
					<br/>
					Please { this.props.formType } or { this.navLink() }
					{ this.renderErrors() }
					<div className="login-form">

						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>

						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>
						<br />

						<input className="submit" type="submit" value="Submit" />
						<button className="demo" type="submit" value="Demo">Demo</button>
					</div>
				</form>
				</Modal>
			</div>
		);
	}

}

export default SessionForm;
