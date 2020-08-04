import React from "react";
import "./Button.css";

const Button = (props) => {
	// Only using types "primary"
	let classList = "button button-primary";

	// Check if large, small, outline, and/or haze props are true
	// Update classList variable
	// must keep " " at String start to build "button button-primary" + " button-large"
	if (props.large) {
		classList += ` button-large`;
	}

	if (props.small) {
		classList += ` button-small`;
	}

	if (props.outline) {
		if (!props.type) {
			classList += ` button-outline`;
		} else {
			classList += ` button-${props.type}-outline`;
		}
	}

	if (props.haze) {
		if (!props.type) {
			classList += ` button-haze`;
		} else {
			classList += ` button-${props.type}-haze`;
		}
	}

	return <button className={classList}>{props.label}</button>;
};

export default Button;
