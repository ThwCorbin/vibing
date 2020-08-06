import React, { Component } from "react";
import "./Textarea.css";

let url = "https://vibing-api.herokuapp.com/home/posts"



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

		const newPost = {
			post: this.state.value
		}

		console.log(newPost)

		const optionPOST = {
			"method": "POST",
			"headers": {
			  "Content-Type": "application/json",
			},
			body: JSON.stringify(newPost),
			this.props.callback();
		  }
		
		fetch(url ,optionPOST)
		.then((res)=> res.json())
		.then((data) =>
		console.log(data))
		.catch((err) => {
		  console.log(err);
		});
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
