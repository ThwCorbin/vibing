import React from "react";
import { storiesOf } from "@storybook/react";
import Textarea from "../Textarea/Textarea";

storiesOf("Textarea", module)
	.add("Post", () => (
		<Textarea
			value={this.state.value}
			placeholder="         Post a Vibe ♡"
			maxLength="195"
			onChange={this.handleChange}
		/>
	))
	.add("Comment", () => (
		<Textarea
			value={this.state.value}
			placeholder="       Post a Comment"
			maxLength="100"
			onChange={this.handleChange}
		/>
	)); // storiesOf "Textarea"
