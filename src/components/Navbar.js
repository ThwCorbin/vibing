import React from "react";
import "./Navbar.css";
import Form from "./Form";

function Navbar(props) {
	return (
		<nav className="navbar">
			<ul>
				<li className="li-home">
					Home
					{/* Need a React Router <Link /> to "/" */}
				</li>
				<li className="li-inspiration">
					Inspiration
					{/* Need a React Router <Link /> to "/inspiration" */}
				</li>
			</ul>
			<div class="div-form div-form-sign-in">
				<p>Sign In</p>
				<Form />
			</div>
			<div class="div-form div-form-sign-up">
				<p>Sign Up</p>
				<Form />
			</div>
		</nav>
	);
}

export default Navbar;
