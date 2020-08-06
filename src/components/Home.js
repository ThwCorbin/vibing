import React, { Component } from "react";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Addpost from "./Addpost.js";
import Button from "./Button.js";
import Posts from "./Posts.js";
import SignUp from "./SignUp";

class Home extends Component {
    render() {
        return(
            <div className="App">
				<Header />
				<Addpost />
				<Posts />
			</div>
        )
    }
}

export default Home