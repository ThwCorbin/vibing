import React, { Component } from "react";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Addpost from "./Addpost.js";
import Button from "./Button.js";
import Posts from "./Posts.js";
import SignUp from "./SignUp";



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dog: "dog",
		};
	} //constructor

	render() {
		return (
			<React.Fragment>
			<div className="App">
				<Header />
				<Addpost />
				<Posts />
			</div>
			<main>
				<Route path="/signup" component={SignUp} exact={true}/>
				<Route path="/signup" component={Home} exact={true}/>

			</main>
			</React.Fragment>
		);
	}
}

export default App;
