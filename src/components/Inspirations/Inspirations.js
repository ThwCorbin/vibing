import React, { Component } from "react";
import "./Inspirations.css";
import Header from "../Header/Header";
import quote from "../Quote/Quote";
import Quote from "../Quote/Quote";

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
		let list = this.state.data.map((item, idx) => {
			return <Quote quote={item.quote} name={item.name} key={idx} />; //return
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
