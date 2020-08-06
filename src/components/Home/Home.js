import React, { Component } from "react";
import "../App/App.css";
import Header from "../Header/Header";
import Addpost from "../Addpost/Addpost";
import Posts from "../Posts/Posts";

class Home extends Component {
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

export default Home;
