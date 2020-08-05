import React, { Component } from "react";
import "./Form.css";

// React forms https://reactjs.org/docs/forms.html#gatsby-focus-wrapper
class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// value: "",
			question: "",
			answers: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.modalCallback(this.state.question, this.state.answers);
	}

	render() {
		// const { id, type, name, label, placeholder, onClick } = this.state.props;
		// className={this.props.className}
		return (
			<form className="form form-add" onSubmit={this.handleSubmit}>
				<label>
					Question:
					<br />
					<Input id={this.state.id} />
					{/* <input
						name="question"
						type="text"
						value={this.state.question}
						onChange={this.handleChange}
					/> */}
				</label>
				<br />
				<label>
					Answers:
					<br />
					{/* <Input /> */}
					{/* <input
						name="answers"
						type="text"
						value={this.state.answers}
						placeholder="Up to 4 separated by commas - first is correct"
						onChange={this.handleChange}
					/> */}
				</label>
				<br />
				<input
					onClick={this.state.props.onClick}
					type="submit"
					value="Submit"
				/>
			</form>
		);
	}
} //Form

export default Form;
