import React from "react";
import Box from "@mui/material/Box";
import Hero from "./subsections/Hero";
import NavBar from "../surfaces/NavBar";

export default function Home() {
	return (
		<Box width="100vw">
			<NavBar />
			<Hero />
		</Box>
	);
}
