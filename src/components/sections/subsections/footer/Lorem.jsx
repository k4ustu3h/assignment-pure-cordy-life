import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Arrow from "../../../../assets/Arrow";

export default function Lorem() {
	return (
		<Box
			alignItems="center"
			bgcolor="#F5F7FA"
			display="flex"
			flexDirection="column"
			py="22px"
			textAlign="center"
		>
			<Typography
				color="#263238"
				fontSize="44.55px"
				fontWeight={600}
				width="617.41px"
				lineHeight="52.9px"
			>
				Lorem ipsum dolor sit amet consectetuer
			</Typography>
			<Box mt="22px">
				<Button variant="filled">
					Get a Demo
					<Arrow />
				</Button>
			</Box>
		</Box>
	);
}
