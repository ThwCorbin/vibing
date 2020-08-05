import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input";

storiesOf("Input", module)
	.add("Email", () => (
		<Input id="email" type="text" name="email" placeholder="Email" />
	))
	.add("Password", () => (
		<Input id="password" type="text" name="password" placeholder="Password" />
	)); // storiesOf "Input"
