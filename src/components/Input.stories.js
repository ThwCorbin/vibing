import React from "react";
import { storiesOf } from "@storybook/react";
// For "action" see https://dev.to/tducasse/how-to-use-storybook-with-react-10g1
// And see https://github.com/storybookjs/storybook/tree/master/addons/actions
import { action } from "@storybook/addon-actions";
import Input from "./Input";

storiesOf("Input", module).add("Email", () => (
	<Input
		id="form-email"
		type="email"
		name="email"
		label="Email"
		placeholder="Email"
		onClick={action("click")}
	/>
));
