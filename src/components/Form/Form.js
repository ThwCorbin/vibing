import React, { Component } from "react";
import "./Form.css";
import Button from "../Button/Button";

// React forms https://reactjs.org/docs/forms.html#gatsby-focus-wrapper
class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: "",
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

		this.props.formCallback(this.state.user, this.state.password);
	}
	render() {
		return (
			<form className=" form form-sign-up" onSubmit={this.handleSubmit}>
				<label>
					<input
						name="user"
						type="text"
						placeholder="user"
						value={this.state.user}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					<input
						name="password"
						type="text"
						placeholder="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
				</label>
				<Button type="submit" outline small label="Submit" />
				{/* <input type="submit" value="Submit" /> */}
			</form>
		); //return
	}
} //Form
export default Form;
