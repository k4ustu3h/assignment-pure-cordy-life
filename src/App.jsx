import React from "react";
import { Experimental_CssVarsProvider } from "@mui/material";
import Body from "./components/sections/Body.jsx";
import Footer from "./components/sections/Footer.jsx";
import Home from "./components/sections/Home.jsx";
import { cssVars } from "./styles/cssVars.js";

export default function App() {
	return (
		<Experimental_CssVarsProvider theme={cssVars}>
			<Home />
			<Body />
			<Footer />
		</Experimental_CssVarsProvider>
	);
}
