import React from "react";
import { storiesOf } from "@storybook/react";
import Navbar from "./Navbar";

storiesOf("Navbar", module)
	.add("Home", () => <Navbar id="home" text="Vibes" />)
	.add("Inspirations", () => <Navbar id="inspirations" text="Inspirations" />)
	.add("Signup", () => <Navbar id="signup" text="Sign Up" />); // storiesOf "Navbar"
