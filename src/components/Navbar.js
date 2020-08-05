import React from "react";
import "./Navbar.css";
import Form from "./Form";

function Navbar(props) {
	return (
		<nav className="navbar">
			<div className="dive-link-home">
				{/* Need a React Router <Link /> to "/" */}
			</div>
			<div className="div-link-inspiration">
				{/* Replace <a> with a React Router <Link /> to "/inspiration" */}
				<a className="famous" href="#">
					Inspiration
				</a>
			</div>
			<div class="div-form-sign-in">
				<Form formCallback={props.formCallback} />
			</div>
			<div class="div-form-sign-up">
				<Form formCallback={props.formCallback} />
			</div>
		</nav>
	);
}

export default Navbar;
