import React, { Component } from "react";
import "./Inspirations.css";
import Header from "../Header/Header";

let url = "https://vibing-api.herokuapp.com/home/inspirations";
const optionGET = {
	method: "GET",
	headers: {
		"Content-Type": "application/json",
	},
};

class Inspirations extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
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
	render() {
		let list = this.state.data.map((item) => {
			return (
				<div className="div-quote">
					<p className="p-quote">{item.quote}</p>

					<p className="p-name">{item.name}</p>
				</div>
			); //return
		});

		return (
			<React.Fragment>
				<Header />
				<div className="div-inspirations">{list}</div>
			</React.Fragment>
		);
	} //render
} //component
export default Inspirations;
