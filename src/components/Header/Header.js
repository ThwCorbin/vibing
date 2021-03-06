import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function Header(props) {
	return (
		<header>
			<Link to="/" style={{ textDecoration: "none" }}>
				<h1 className="h1-title">Vibing</h1>
			</Link>
			<h2 className="h2-subtitle">We need your good Vibes</h2>
			<Navbar />
		</header>
	);
} //Header

export default Header;
