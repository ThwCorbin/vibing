import React, { Component } from "react";
import "./Form.css";
// import Input from "./Input";

// React forms https://reactjs.org/docs/forms.html#gatsby-focus-wrapper
class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(
			`Email: ${this.state.email}`,
			`Password: ${this.state.password}`
		);
	}

	render() {
		return (
			<form
				className="form form-sign-in form-sign-up"
				onSubmit={this.handleSubmit}
			>
				<label>
					<input
						name="email"
						type="text"
						placeholder="Email"
						value={this.state.email}
						onChange={this.handleChange}
					/>
					{/* <Input
						name="email"
						type="text"
						placeholder="Email"
						value={this.state.email}
						onChange={this.handleChange}
					/> */}
				</label>
				<label>
					<input
						name="password"
						type="text"
						placeholder="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
					{/* <Input
						name="password"
						type="text"
						placeholder="Password"
						value={this.state.password}
						onChange={this.handleChange}
					/> */}
				</label>
				<input type="submit" value="Submit" />
			</form>
		); //return
	}
} //Form

export default Form;
