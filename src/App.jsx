import React from "react";
import { Experimental_CssVarsProvider } from "@mui/material";
import Home from "./components/sections/Home.jsx";
import { cssVars } from "./styles/cssVars.js";

export default function App() {
	return (
		<Experimental_CssVarsProvider theme={cssVars}>
			<Home />
		</Experimental_CssVarsProvider>
	);
}
