import React from "react";
import Clients from "./subsections/home/Clients";
import Community from "./subsections/home/Community";
import Hero from "./subsections/home/Hero";
import NavBar from "../surfaces/NavBar";

export default function Home() {
	return (
		<>
			<NavBar />
			<Hero />
			<Clients />
			<Community />
		</>
	);
}
