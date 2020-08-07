import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input";

storiesOf("Input", module)
	.add("User", () => (
		<Input id="user" type="text" name="email" placeholder="  User" />
	))
	.add("Password", () => (
		<Input id="password" type="text" name="password" placeholder="  Password" />
	))
	.add("Update", () => (
		<Input id="update" type="text" name="update" placeholder="  Update" />
	)); // storiesOf "Input"
