import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import { ModalStyle1 } from '../../util/modal_style';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: "",
			modalOpen: true
		};
		this.DEMO_USERNAME = "Guest"
		this.DEMO_PASSWORD = "12345678"
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onModalClose = this.onModalClose.bind(this);
		this.redirectToIntro = this.redirectToIntro.bind(this);
		this.logInQuestion = this.logInQuestion.bind(this);
	}

	componentDidUpdate(){
		this.redirectIfLoggedIn();
	}
	onModalClose() {
	  this.setState({modalOpen: false});
		if (!this.props.loggedIn){
			this.redirectToIntro();
		}
	}

	redirectToIntro() {
	  hashHistory.push('/');
	}


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
		const user = {username: this.state.username, password: this.state.password};
		this.props.processForm({user});
	}

	navLink(){
		if (this.props.formType === "login") {
			return <Link className="form-question" to="/signup">Sign Up</Link>;
		} else {
			return <Link className="form-question" to="/login">Login</Link>;
		}
	}

	logInQuestion() {
		if (this.props.formType === "login") {
			return <div className="form-question">Got an account?</div>
		} else {
			return <div className="form-question">Dont have an account?</div>
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
						 style={ModalStyle1}>
				<form onSubmit={this.handleSubmit}
				 			 className="login-form-box">
					<br/>

					<div className="login-form">
							{ this.logInQuestion() }  { this.navLink() }
							{ this.renderErrors() }

							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input"
								placeholder="username" />

							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input"
								placeholder="password" />
						<br />

						<input className="submit" type="submit" value="Submit" />
						<button className="demo" type="submit" value="Demo" >Demo</button>
					</div>
				</form>
				</Modal>
			</div>
		);
	}

}

export default SessionForm;
