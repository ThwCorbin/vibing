import React, { Component } from "react";
import "./Textarea.css";

class Textarea extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "We need your good Vibes",
		}; //state

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	} //constructor

	handleChange(e) {
		this.setState({ value: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(`Text to submit: ${this.state.value}`);
	}

	render() {
		return (
			<form className="form form-post" onSubmit={this.handleSubmit}>
				<label>
					<textarea value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		); //return
	} //render
} //Textarea

export default Textarea;