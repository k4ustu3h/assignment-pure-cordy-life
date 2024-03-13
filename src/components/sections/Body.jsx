import React from "react";
import Box from "@mui/material/Box";
import Achievements from "./subsections/body/Achievements";
import Calendar from "./subsections/body/Calendar";
import Customers from "./subsections/body/Customers";
import Unlock from "./subsections/body/Unlock";

export default function Body() {
	return (
		<Box mt="84.8px">
			<Unlock />
			<Achievements />
			<Calendar />
			<Customers />
		</Box>
	);
}
