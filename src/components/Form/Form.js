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
			update: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();
		if (this.props.formDeleteCallback) {
			this.props.formDeleteCallback(this.props.id);
		} else if (this.props.formUpdateCallback) {
			this.props.formUpdateCallback(this.state.update);
			this.setState({ update: "" });
		} else {
			this.props.formCallback(this.state.user, this.state.password);
			this.setState({ user: "", password: "" });
		}
	}

	render() {
		if (this.props.formDeleteCallback) {
			return (
				<form className=" form form-delete" onSubmit={this.handleSubmit}>
					<Button type="submit" outline small label="Delete" />
				</form>
			);
		} else if (this.props.formUpdateCallback) {
			return (
				<form className=" form form-update" onSubmit={this.handleSubmit}>
					<label>
						<input
							name="update"
							type="text"
							placeholder="  update"
							value={this.state.update}
							onChange={this.handleChange}
						/>
					</label>
					<Button type="submit" outline small label="Submit" />
				</form>
			); //return
		} else {
			return (
				<form className=" form form-sign-up" onSubmit={this.handleSubmit}>
					<label>
						<input
							name="user"
							type="text"
							placeholder="  user"
							value={this.state.user}
							onChange={this.handleChange}
						/>
					</label>
					<label>
						<input
							name="password"
							type="text"
							placeholder="  password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</label>
					<Button type="submit" outline small label="Submit" />
				</form>
			); //return
		}
	}
} //Form
export default Form;
