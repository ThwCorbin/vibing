import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar.js";
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
				<header className="app-header">
					<h1 className="h1-title">VIBING</h1>
					<Navbar />
				</header>
				<div className="addpost">
					<Addpost />
					<Button type="primary" small label="POST" />
				</div>
				<div className="posts">
					<Posts />
				</div>
			</div>
		);
	}
}

export default App;
