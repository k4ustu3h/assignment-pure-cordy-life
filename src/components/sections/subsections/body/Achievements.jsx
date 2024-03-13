import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Clubs from "../../../../assets/body/achievements/Clubs";
import EventBookings from "../../../../assets/body/achievements/EventBookings";
import Members from "../../../../assets/body/achievements/Members";
import Payments from "../../../../assets/body/achievements/Payments";

export default function Achievements() {
	const counts = [
		{
			icon: <Members />,
			number: "2,245,341",
			label: "Members",
		},
		{ icon: <Clubs />, number: "46,328", label: "Clubs" },
		{ icon: <EventBookings />, number: "828,867", label: "Event Bookings" },
		{
			icon: <Payments />,
			number: "1,926,436",
			label: "Payments",
		},
	];
	return (
		<Box bgcolor="#F5F7FA" my="33px">
			<Box
				alignItems="center"
				display="flex"
				justifyContent="space-evenly"
				px="100px"
				py="45px"
			>
				<Box width="375.88px">
					<Typography color="secondary" variant="h5">
						Helping a local
					</Typography>
					<Typography color="primary" variant="h5">
						business reinvent itself
					</Typography>
					<Typography color="#18191F" mt="6px" variant="subtitle2">
						We reached here with our hard work and dedication
					</Typography>
				</Box>
				<Grid
					columnGap="11px"
					container
					rowSpacing="28px"
					width="375.88px"
				>
					{counts.map((count) => {
						return (
							<Grid alignItems="center" display="flex" item>
								{count.icon}
								<Box ml="11px" width="132.95px">
									<Typography
										color="secondary"
										fontSize="19.49px"
										fontWeight="bold"
									>
										{count.number}
									</Typography>
									<Typography variant="subtitle2">
										{count.label}
									</Typography>
								</Box>
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</Box>
	);
}
