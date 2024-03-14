import React from "react";
import { Icon } from "@iconify-icon/react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Lorem from "./subsections/footer/Lorem";
import TextBox from "./subsections/footer/TextBox";

export default function Footer() {
	const icons = [
		"simple-icons:instagram",
		"simple-icons:dribbble",
		"simple-icons:twitter",
		"simple-icons:youtube",
	];
	const companies = [
		"About Us",
		"Blog",
		"Contact Us",
		"Pricing",
		"Testimonials",
	];
	const supports = [
		"Help center",
		"Terms of service",
		"Legal",
		"Privacy Policy",
		"Status",
	];

	return (
		<Box mt="61.09px">
			<Lorem />
			<Stack
				bgcolor="#263238"
				direction="row"
				justifyContent="center"
				px="100px"
				py="44.55px"
			>
				<Box
					display="flex"
					flexDirection="column"
					height="83.69px"
					justifyContent="space-between"
					width="243.62px"
				>
					<Stack>
						<Typography variant="footer">
							Copyright © 2020 Landify UI Kit.
						</Typography>
						<Typography variant="footer">
							All rights reserved
						</Typography>
					</Stack>
					<Stack direction="row">
						{icons.map((icon, index) => {
							return (
								<IconButton
									sx={{
										bgcolor: "#ffffff1a",
										height: "22.27px",
										ml: index === 0 ? "" : "8.3575px",
										width: "22.27px",
									}}
								>
									<Icon
										height="11.88"
										icon={icon}
										width="11.88"
									/>
								</IconButton>
							);
						})}
					</Stack>
				</Box>
				<Box
					display="flex"
					flexDirection="row"
					gap="20.88px"
					height="140.12px"
					width="442px"
				>
					<Box width="111.37px">
						<Typography color="white" fontWeight={600} mb="16.71px">
							Company
						</Typography>
						<Stack spacing="8.35px">
							{companies.map((company) => {
								return (
									<Typography
										color="#F5F7FA"
										fontSize="9.74px"
									>
										{company}
									</Typography>
								);
							})}
						</Stack>
					</Box>
					<Box width="111.37px">
						<Typography color="white" fontWeight={600} mb="16.71px">
							Support
						</Typography>
						<Stack spacing="8.35px">
							{companies.map((company) => {
								return (
									<Typography
										color="#F5F7FA"
										fontSize="9.74px"
									>
										{company}
									</Typography>
								);
							})}
						</Stack>
					</Box>
					<Box>
						<Typography color="white" fontWeight={600} mb="16.71px">
							Stay up to date
						</Typography>
						<TextBox />
					</Box>
				</Box>
			</Stack>
		</Box>
	);
}
