import React, { Component } from "react";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Addpost from "../Addpost/Addpost";
import Button from "../Button/Button";
import Posts from "../Posts/Posts";
import SignUp from "../SignUp/SignUp";
import Home from "../Home/Home";

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
				<main>
					<Route path="/home" component={Home} exact={true} />
					<Route path="/signup" component={SignUp} exact={true} />
				</main>
			</React.Fragment>
		);
	}
}

export default App;
