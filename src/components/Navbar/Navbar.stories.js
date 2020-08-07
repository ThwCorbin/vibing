import React from "react";
import { Route, Link } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import Navbar from "./Navbar";

storiesOf("Navbar", module)
	.addDecorator(StoryRouter())
	.add("Navbar", () => <Navbar id="navbar" />); // storiesOf "Navbar"
