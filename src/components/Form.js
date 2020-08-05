import React, { Component } from "react";
import "./Form.css";
import Input from "./Input";

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
		console.log(this.state.email, this.state.password);
	}

	render() {
		return (
			<form className="form form-add" onSubmit={this.handleSubmit}>
				<label>
					Email:
					<br />
					<Input
						id="email"
						type="text"
						name="email"
						placeholder="Email"
						value={this.state.email}
						onChange={this.handleChange}
					/>
					{/* <input
						name="email"
						type="text"
						value={this.state.email}
						onChange={this.handleChange}
					/> */}
				</label>
				<br />
				<label>
					Password:
					<br />
					<Input
						id="password"
						type="text"
						name="password"
						placeholder="Password"
						value={this.state.email}
						onChange={this.handleChange}
					/>
					{/* <input
						name="password"
						type="text"
						value={this.state.password}
						onChange={this.handleChange}
						placeholder="Up to 4 separated by commas - first is correct"
					/> */}
				</label>
				<br />
				<input type="submit" value="Submit" />
			</form>
		);
	}
} //Form

export default Form;
