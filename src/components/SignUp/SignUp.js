import React, { Component } from "react";
import axios from "axios";
import Form from "../Form/Form";
import Header from "../Header/Header";

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false,
		};
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

	handleSignUp(username, password) {
		axios
			.post("https://vibing-api.herokuapp.com/home/users/signup", {
				username: username,
				password: password,
			})
			.then((response) => {
				localStorage.token = response.data.token;
				this.setState({ isLoggedIn: true });
			})
			.catch((err) => console.log(err));
	}

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
