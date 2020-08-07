import React, { Component } from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import "./Vibe.css";

let url = "https://vibing-api.herokuapp.com/home/posts";

const optionGET = {
	method: "GET",
	headers: {
		"Content-Type": "application/json",
	},
};

const optionDELETE = {
	method: "DELETE",
	headers: {
		"Content-Type": "application/json",
	},
};

class Vibe extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			id: "",
		};
	} //constructor

	componentWillMount() {
		fetch(url, optionGET)
			.then((res) => res.json())
			.then((data) => this.setState({ data }))
			.catch((err) => {
				console.log(err);
			});
	} //componentWillMount

	handleUpdate = (updatedText) => {
		const formData = {
			post: updatedText,
		};

		const optionPUT = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		};

		fetch(url + "/" + this.props.match.params.id, optionPUT)
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => {
				console.log(err);
			});
	}; //handleUpdate

	handleDelete = (props) => {
		fetch(url + "/" + props, optionDELETE)
			.then((res) => res.json())
			.catch((err) => {
				console.log(err);
			});
	}; //handleDelete

	render() {
		let display = this.state.data.map((item) => {
			if (item._id === this.props.match.params.id) {
				return (
					<React.Fragment>
						<Header />
						<div className="div-vibe-post-forms">
							<div className="div-vibe-post">{item.post}</div>
							<div className="div-vibe-forms">
								<Form formUpdateCallback={this.handleUpdate} />
								<Form id={item._id} formDeleteCallback={this.handleDelete} />
							</div>
						</div>
					</React.Fragment>
				);
			} else {
				return null;
			}
		}); //display
		return <div>{display}</div>;
	} //render
} //Vibe

export default Vibe;
