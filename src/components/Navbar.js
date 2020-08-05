import React from "react";
import "./Navbar.css";
import Form from "./Form";

function Navbar(props) {
	return (
		<nav className="navbar">
			<ul>
				<li className="li-home">
					Vibes
					{/* Need a React Router <Link /> to "/" */}
				</li>
				<li className="li-inspiration">
					Inspiration
					{/* Need a React Router <Link /> to "/inspiration" */}
				</li>
				<li className="li-sign-in">
					Sign In
					{/* Need a React Router <Link /> to "/inspiration" */}
				</li>
				<li className="li-sign-up">
					Sign Up
					{/* Need a React Router <Link /> to "/inspiration" */}
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
