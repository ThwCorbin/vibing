import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
	return (
		<nav className="navbar">
			<ul>
				<li className="li-home">
					<Link to="/">Vibes</Link>
				</li>

				<li className="li-inspiration">
					<Link to="/inspirations">Inspiration</Link>
				</li>

				<li className="li-sign-up">
					{" "}
					<Link to="/signup">Sign Up</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
