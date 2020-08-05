import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Form from "./Form";

// Storybook addon actions: https://github.com/storybookjs/storybook/tree/master/addons/actions
storiesOf("Form", module)
	.add("Login", () => <Form type="login" labelEmail="Email" name="email" />)
	.add("Sign-up", () => (
		<Form
			className="form form-sign-up"
			type="sign-up"
			labelEmail="Sign up"
			name="sign-up"
			onClick={action("Clicked Input")}
		/>
	)); // storiesOf "Form"
