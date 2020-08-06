import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
	return (
		<nav className="navbar">
			<ul>
				<Link to="/">
					<li className="li-home">Vibes</li>
				</Link>
				<Link to="/inspirations">
					<li className="li-inspiration">Inspiration</li>
				</Link>
				<Link>
					<li className="li-sign-in">Sign In</li>
				</Link>
				<Link to="/signup">
					<li className="li-sign-up">Sign Up</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Navbar;
