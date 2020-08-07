import React from "react";
import "./Input.css";

const Input = (props) => {
	const { id, type, name, placeholder } = props;
	let classList = `input`;

	//  must keep " " at String start to build class sting
	if (id === "user") {
		classList += ` input-email`;
	} else if (id === "password") {
		classList += ` input-password`;
	} else if (id === "update") {
		classList += ` input-update`;
	} else {
		classList = classList;
	}

	return (
		<input
			className={classList}
			type={type}
			name={name}
			placeholder={placeholder}
		/>
	);
};

export default Input;
