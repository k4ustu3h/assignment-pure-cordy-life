import React from "react";
import Box from "@mui/material/Box";
import Clients from "./subsections/home/Clients";
import Community from "./subsections/home/Community";
import Hero from "./subsections/home/Hero";
import NavBar from "../surfaces/NavBar";

export default function Home() {
	return (
		<Box width="100vw">
			<NavBar />
			<Hero />
			<Clients />
			<Community />
		</Box>
	);
}
