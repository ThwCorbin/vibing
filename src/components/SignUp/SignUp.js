import React, { Component } from "react";
// import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Form from "../Form/Form";
import Header from "../Header/Header";

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			isLoggedIn: false,
		};

		this.handleInput = this.handleInput.bind(this);

		this.handleSignUp = this.handleSignUp.bind(this);
	}

	componentDidMount() {
		if (localStorage.token) {
			this.setState({
				isLoggedIn: true,
			});
		} else {
			this.setState({
				isLoggedIn: false,
			});
		}
	}

	handleInput(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleSignUp(e) {
		// e.preventDefault()
		axios
			.post("https://vibing-api.herokuapp.com/home/users/signup", {
				username: this.state.username,
				password: this.state.password,
			})
			.then((response) => {
				localStorage.token = response.data.token;
				this.setState({ isLoggedIn: true });
			})
			.catch((err) => console.log(err));
	}
	// handleForm(username, password) {
	// 	console.log(username, password);

	// }

	render() {
		return (
			<React.Fragment>
				<Header />
				<Form formCallback={this.handleSignUp} />
			</React.Fragment>
		);
	}
}

export default SignUp;
