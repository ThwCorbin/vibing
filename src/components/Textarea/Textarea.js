import React, { Component } from "react";
import "./Textarea.css";
import Button from "../Button/Button";

let url = "https://vibing-api.herokuapp.com/home/posts";

class Textarea extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
		}; //state

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	} //constructor

	handleChange(e) {
		this.setState({ value: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		// Prevent user from submitting ""
		if (this.state.value === "") return;

		const newPost = {
			post: this.state.value,
		};

		const optionPOST = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newPost),
		};

		fetch(url, optionPOST)
			.then((res) => res.json())
			.then(() => this.setState({ value: "" }))
			.then(this.props.callback())
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<form className="form form-post" onSubmit={this.handleSubmit}>
				<label>
					<textarea
						value={this.state.value}
						placeholder="         Post a Vibe ♡"
						maxLength="195"
						onChange={this.handleChange}
					/>
				</label>
				<Button type="primary" small outline label="Submit" />
			</form>
		); //return
	} //render
} //Textarea

export default Textarea;
