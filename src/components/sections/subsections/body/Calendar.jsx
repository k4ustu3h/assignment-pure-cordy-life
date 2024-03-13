import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalenldarIllustration from "../../../../assets/body/calendar/CalendarIllustration";

export default function Calendar() {
	return (
		<Box
			alignItems="center"
			display="flex"
			flexDirection="row"
			justifyContent="space-evenly"
			mx="100px"
		>
			<Box
				alignItems="center"
				display="flex"
				height="301.4px"
				justifyContent="center"
				width="307.66px"
			>
				<CalenldarIllustration />
			</Box>
			<Box width="460.1px">
				<Typography color="secondary" variant="h5">
					How to design your site footer like we did
				</Typography>
				<Typography mb="22px" variant="subtitle2">
					Donec a eros justo. Fusce egestas tristique ultrices. Nam
					tempor, augue nec tincidunt molestie, massa nunc varius
					arcu, at scelerisque elit erat a magna. Donec quis erat at
					libero ultrices mollis. In hac habitasse platea dictumst.
					Vivamus vehicula leo dui, at porta nisi facilisis finibus.
					In euismod augue vitae nisi ultricies, non aliquet urna
					tincidunt. Integer in nisi eget nulla commodo faucibus
					efficitur quis massa. Praesent felis est, finibus et nisi
					ac, hendrerit venenatis libero. Donec consectetur faucibus
					ipsum id gravida.
				</Typography>
				<Button variant="filled">Learn More</Button>
			</Box>
		</Box>
	);
}
