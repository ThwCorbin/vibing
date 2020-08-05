import React from "react";
import "./Header.css";
import Navbar from "./Navbar";

function Header(props) {
	return (
		<header>
			<h1 className="h1-title">Vibing</h1>
			<h2 className="h2-subtitle">We need your good Vibes</h2>
			<Navbar />
		</header>
	);
} //Header

export default Header;
