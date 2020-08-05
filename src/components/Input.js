import React from "react";
import "./Input.css";

const Input = (props) => {
	if (props.large) {
		classList += ` button-large`;
	}

	return <input className={classList}>{props.label}</input>;
};

export default Input;
