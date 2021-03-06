import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import SignUp from "../SignUp/SignUp";
import Home from "../Home/Home";
import Inspirations from "../Inspirations/Inspirations";
import Vibe from "../Vibe/Vibe";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
		};
	} //constructor

	render() {
		return (
			<React.Fragment>
				<main>
					<Route path="/" component={Home} exact={true} />
					<Route path="/signup" component={SignUp} exact={true} />
					<Route path="/inspirations" component={Inspirations} exact={true} />
					<Route
						path="/vibes/:id"
						render={(routerProps) => {
							return <Vibe {...routerProps} {...this.state} />;
						}}
					/>
				</main>
			</React.Fragment>
		); //return
	} //render
}

export default App;
