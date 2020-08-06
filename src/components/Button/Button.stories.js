import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
storiesOf("Button", module)
	//* Primary *************** */
	.add("Primary", () => <Button type="primary" label="Do something" />)
	.add("Primary Hover", () => (
		<Button type="primary" hover label="Do something" />
	))
	.add("Primary Outline", () => (
		<Button type="primary" outline label="Do something" />
	))
	.add("Primary Haze", () => (
		<Button type="primary" haze label="Do something" />
	))
	.add("Primary Large", () => (
		<Button type="primary" large label="Do something" />
	))
	.add("Primary Large Outline", () => (
		<Button type="primary" large outline label="Do something" />
	))
	.add("Primary Large Haze", () => (
		<Button type="primary" large haze label="Do something" />
	))
	.add("Primary Small", () => (
		<Button type="primary" small label="Do something" />
	))
	.add("Primary Small Outline", () => (
		<Button type="primary" small outline label="Do something" />
	))
	.add("Primary Small Haze", () => (
		<Button type="primary" small haze label="Do something" />
	)); // storiesOf "Button"
