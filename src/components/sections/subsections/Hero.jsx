import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Illustration from "../../../assets/Illustration";

export default function Hero() {
	return (
		<Box
			sx={{
				alignItems: "center",
				bgcolor: "#F5F7FA",
				display: "flex",
				justifyContent: "space-around",
				mt: "64px",
				px: "100px",
				py: "67px",
			}}
		>
			<Box mr="72px" sx={{ fontWeight: "bold" }}>
				<Typography color="secondary" variant="h3">
					Lessons and Insights
				</Typography>
				<Typography color="primary" variant="h3">
					from 8 years
				</Typography>
				<Typography mt="11px" variant="subtitle2">
					Where to grow your business as a photographer: site or
					social media?
				</Typography>
				<Button sx={{ mt: "22px" }} variant="filled">
					Register
				</Button>
			</Box>
			<Illustration />
		</Box>
	);
}
