import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import Modal from 'react-modal';
import { ModalStyle1 } from '../../util/modal_style';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: "",
			modalOpen: true,
			disabled: false
		};
		this.DEMO_USERNAME = "Guest";
		this.DEMO_PASSWORD = "12345678";
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onModalClose = this.onModalClose.bind(this);
		this.redirectToIntro = this.redirectToIntro.bind(this);
		this.logInQuestion = this.logInQuestion.bind(this);
		this.demoLogin = this.demoLogin.bind(this);
		this.handleClick = this.handleClick.bind(this);
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

	navLink(){
		if (this.props.formType === "login") {
			return <Link className="form-question" to="/signup">Sign Up</Link>;
		} else {
			return <Link className="form-question" to="/login">Login</Link>;
		}
	}

	logInQuestion() {
		if (this.props.formType === "login") {
			return <div className="form-question">Don't have an account?</div>;
		} else {
			return <div className="form-question">Got an account?</div>;
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

	handleClick(e) {
		e.preventDefault();
		this.setState({disabled: true});
		this.props.router.push(`/login`);
		this.setState({username: "", password: ""});
		this.demoLogin();
	}


	demoLogin(){
		let username = this.DEMO_USERNAME.split("").slice();
		this.fillUsername(username);
	}

	fillUsername(username) {
		let password = this.DEMO_PASSWORD.split("").slice();
		if (username.length > 0) {
			setTimeout(() => {
		    this.setState({
					username: this.state.username + username.shift()
				});

				this.fillUsername(username);
				}, 100);
			} else {
				this.fillPassword(password);
			}
		}

	fillPassword(password) {
		if (password.length > 0) {
			setTimeout(() => {
		    this.setState({
					password: this.state.password + password.shift()
				});

				this.fillPassword(password);
				}, 100);
			} else {
				let e = { preventDefault: function() {}};
				this.handleSubmit(e);
			}
		}

		handleSubmit(e){
			e.preventDefault();
			this.setState({disabled: false});
			const user = {
										username: this.state.username,
				 						password: this.state.password
									 };
			this.props.processForm({user});
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

						<input className="submit"
						 			 type="submit"
									 value="Submit" />
						<button className="demo"
						 				type="submit"
									  value="Demo"
									  onClick={this.handleClick}
										disabled={this.state.disabled}>Demo</button>
					</div>
				</form>
				</Modal>
			</div>
		);
	}

}

export default withRouter(SessionForm);
