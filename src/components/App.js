import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Addpost from "./Addpost.js";
import Button from "./Button.js";
import Posts from "./Posts.js";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dog: "dog",
		};
	} //constructor

	render() {
		return (
			<div className="App">
				<Header />
				<Addpost />
				<Posts />
			</div>
		);
	}
}

export default App;
