import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import SignUp from "../SignUp/SignUp";
import Home from "../Home/Home";
import Inspirations from "../Inspirations/Inspirations";

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
					<Route path="/inspirations" component={Inspirations} exact={true} />
				</main>
			</React.Fragment>
		);
	}
}

export default App;
