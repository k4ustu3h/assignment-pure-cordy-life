import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Arrow from "../../assets/Arrow";

export default function NavBar() {
	const pages = ["Home", "Features", "Community", "Blog", "Pricing"];
	return (
		<AppBar color="transparent" position="absolute" sx={{ px: "100px" }}>
			<Toolbar>
				<Box display="flex">
					<Typography>P</Typography>
					<Typography color="primary">cl</Typography>
				</Box>
				<Box style={{ flexGrow: 1 }}></Box>
				{pages.map((page) => {
					return (
						<Link
							color="#4d4d4d"
							href="/"
							key={page}
							mr="22px"
							variant="navbar"
						>
							{page}
						</Link>
					);
				})}
				<Button variant="filled">
					Register Now
					<Arrow />
				</Button>
			</Toolbar>
		</AppBar>
	);
}
